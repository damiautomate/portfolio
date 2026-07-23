/* ============================================================
   SHARED FORMS & CONVERSION HELPER
   Used by all public pages (home, contact, services, blog, etc.)
   Handles:
   - Contact form submissions (Web3Forms + Firestore log)
   - Newsletter signups (Web3Forms + Firestore log)
   - Lead magnet captures (Web3Forms + Firestore log + resource URL redirect)
   - Tawk.to live chat loader
   ============================================================ */

(function() {

    const WEB3FORMS_URL = 'https://api.web3forms.com/submit';

    /**
     * Submit to Web3Forms (emails you the submission).
     * Returns true on success, false on error.
     */
    async function submitToWeb3Forms(accessKey, payload) {
        if (!accessKey) return false;
        try {
            const formData = new FormData();
            formData.append('access_key', accessKey);
            Object.entries(payload).forEach(([k, v]) => formData.append(k, v || ''));
            const res = await fetch(WEB3FORMS_URL, { method: 'POST', body: formData });
            const json = await res.json();
            return json.success === true;
        } catch (e) {
            console.warn('Web3Forms submission failed:', e);
            return false;
        }
    }

    /**
     * Log submission to Firestore (stored privately for admin viewing).
     * Uses the same Firebase instance the page already loaded.
     * Returns true on success.
     */
    async function logToFirestore(collection, docFields) {
        try {
            if (typeof firebase === 'undefined' || !firebase.apps.length) return false;
            const db = firebase.firestore();
            await db.collection('admin').doc(collection).collection('items').add({
                ...docFields,
                submittedAt: new Date().toISOString(),
                userAgent: navigator.userAgent.substring(0, 200),
                referrer: document.referrer.substring(0, 200)
            });
            return true;
        } catch (e) {
            console.warn('Firestore log failed (continuing):', e);
            return false;
        }
    }

    /**
     * Track a GA4 conversion event if gtag is available.
     */
    function trackConversion(eventName, params) {
        try {
            if (typeof window.gtag === 'function') {
                window.gtag('event', eventName, params || {});
            }
        } catch(e) {}
    }

    /**
     * Submit a contact form.
     * @param {Object} formData - {name, email, projectType, message}
     * @param {Object} siteData - the SITE_DATA object
     */
    window.__submitContactForm = async function(formData, siteData) {
        const accessKey = siteData?.integrations?.web3formsAccessKey;

        // Fire both in parallel
        const [emailSent, logged] = await Promise.all([
            submitToWeb3Forms(accessKey, {
                subject: `New contact form: ${formData.projectType || 'Inquiry'} from ${formData.name}`,
                from_name: formData.name,
                email: formData.email,
                project_type: formData.projectType,
                message: formData.message,
                _source: 'contact-page'
            }),
            logToFirestore('contactSubmissions', formData)
        ]);

        trackConversion('contact_form_submit', { project_type: formData.projectType });
        // Success if EITHER succeeded (so people aren't blocked by one service being down)
        return emailSent || logged;
    };

    /**
     * Subscribe to newsletter.
     * @param {string} email
     * @param {Object} siteData
     */
    window.__submitNewsletter = async function(email, siteData) {
        const accessKey = siteData?.integrations?.web3formsAccessKey;
        const [emailSent, logged] = await Promise.all([
            submitToWeb3Forms(accessKey, {
                subject: 'New newsletter subscriber',
                email: email,
                _source: 'newsletter'
            }),
            logToFirestore('newsletterSubscribers', { email })
        ]);
        trackConversion('newsletter_signup', {});
        return emailSent || logged;
    };

    /**
     * Capture lead magnet.
     * @param {Object} formData - {name, email}
     * @param {Object} siteData
     */
    window.__submitLeadMagnet = async function(formData, siteData) {
        const accessKey = siteData?.integrations?.web3formsAccessKey;
        const resource = siteData?.leadMagnet?.resourceUrl;
        const resourceName = siteData?.leadMagnet?.resourceName || 'Resource';

        const [emailSent, logged] = await Promise.all([
            submitToWeb3Forms(accessKey, {
                subject: `New lead magnet download: ${resourceName} (${formData.email})`,
                from_name: formData.name,
                email: formData.email,
                resource: resourceName,
                _source: 'lead-magnet'
            }),
            logToFirestore('leads', { ...formData, resource: resourceName })
        ]);
        trackConversion('lead_magnet_download', { resource: resourceName });

        // Return both success AND the resource URL so the widget can optionally
        // auto-download or link to the resource
        return { success: emailSent || logged, resourceUrl: resource };
    };

    /**
     * Load Tawk.to live chat widget.
     * Only loads if propertyId is configured.
     */
    window.__loadTawkTo = function(siteData) {
        const propertyId = siteData?.integrations?.tawktoPropertyId;
        const widgetId = siteData?.integrations?.tawktoWidgetId || '1default';
        if (!propertyId) return;
        // Don't load twice
        if (window.__tawktoLoaded) return;
        window.__tawktoLoaded = true;

        window.Tawk_API = window.Tawk_API || {};
        window.Tawk_LoadStart = new Date();
        const s1 = document.createElement('script');
        s1.async = true;
        s1.src = `https://embed.tawk.to/${propertyId}/${widgetId}`;
        s1.charset = 'UTF-8';
        s1.setAttribute('crossorigin', '*');
        document.body.appendChild(s1);
    };

    /**
     * Render a newsletter signup form into a container.
     * @param {HTMLElement} container
     * @param {Object} siteData
     */
    window.__renderNewsletterWidget = function(container, siteData) {
        if (!container) return;
        const n = siteData?.newsletter;
        if (!n || !n.enabled) { container.style.display = 'none'; return; }

        container.innerHTML = `
            <div class="newsletter-widget">
                <div class="newsletter-text">
                    <div class="newsletter-title">${esc(n.title || 'Get the newsletter')}</div>
                    <div class="newsletter-subtitle">${esc(n.subtitle || '')}</div>
                </div>
                <form class="newsletter-form" data-newsletter-form>
                    <input type="email" required placeholder="${esc(n.placeholder || 'your@email.com')}" class="newsletter-input" data-newsletter-email>
                    <button type="submit" class="newsletter-btn">${esc(n.buttonText || 'Subscribe')}</button>
                </form>
                <div class="newsletter-status" data-newsletter-status></div>
            </div>`;

        const form = container.querySelector('[data-newsletter-form]');
        const status = container.querySelector('[data-newsletter-status]');
        const input = container.querySelector('[data-newsletter-email]');
        const btn = container.querySelector('.newsletter-btn');

        form.addEventListener('submit', async (e) => {
            e.preventDefault();
            const email = input.value.trim();
            if (!email || !email.includes('@')) { status.textContent = 'Please enter a valid email.'; status.className = 'newsletter-status error'; return; }
            btn.disabled = true;
            const original = btn.textContent;
            btn.textContent = 'Subscribing...';
            status.textContent = '';
            const ok = await window.__submitNewsletter(email, siteData);
            btn.disabled = false;
            btn.textContent = original;
            if (ok) {
                status.textContent = n.successMessage || 'Subscribed!';
                status.className = 'newsletter-status success';
                input.value = '';
            } else {
                status.textContent = 'Something went wrong. Try again or email me directly.';
                status.className = 'newsletter-status error';
            }
        });
    };

    /**
     * Render a lead magnet widget into a container.
     * @param {HTMLElement} container
     * @param {Object} siteData
     */
    window.__renderLeadMagnetWidget = function(container, siteData) {
        if (!container) return;
        const lm = siteData?.leadMagnet;
        if (!lm || !lm.enabled) { container.style.display = 'none'; return; }

        // A lead magnet with no file behind it is worse than no lead magnet:
        // the visitor hands over an email for a download that never arrives,
        // and the first impression of the whole site is a broken promise.
        // Stay hidden until resourceUrl is set in the admin panel.
        if (!lm.resourceUrl || !String(lm.resourceUrl).trim()) {
            container.style.display = 'none';
            const section = container.closest('section');
            if (section) section.style.display = 'none';
            console.warn(
                '[lead magnet] Hidden — no resourceUrl set. ' +
                'Add the file URL in Admin → Conversion Tools → Lead Magnet to switch it on.'
            );
            return;
        }
        container.style.display = '';

        const bullets = (lm.bulletPoints || []).map(b => `<li>${esc(b)}</li>`).join('');

        container.innerHTML = `
            <div class="lead-magnet-widget">
                <div class="lead-magnet-left">
                    <div class="lead-magnet-badge">Free Download</div>
                    <h3 class="lead-magnet-title">${esc(lm.title || '')}</h3>
                    <p class="lead-magnet-subtitle">${esc(lm.subtitle || '')}</p>
                    ${bullets ? `<ul class="lead-magnet-bullets">${bullets}</ul>` : ''}
                </div>
                <form class="lead-magnet-form" data-leadmagnet-form>
                    <p class="lead-magnet-description">${esc(lm.description || '')}</p>
                    <input type="text" required placeholder="Your name" class="lead-magnet-input" data-leadmagnet-name>
                    <input type="email" required placeholder="Your email" class="lead-magnet-input" data-leadmagnet-email>
                    <button type="submit" class="lead-magnet-btn">${esc(lm.buttonText || 'Get it free')}</button>
                    <div class="lead-magnet-status" data-leadmagnet-status></div>
                    <div class="lead-magnet-fineprint">No spam. Unsubscribe any time.</div>
                </form>
            </div>`;

        const form = container.querySelector('[data-leadmagnet-form]');
        const nameInput = container.querySelector('[data-leadmagnet-name]');
        const emailInput = container.querySelector('[data-leadmagnet-email]');
        const status = container.querySelector('[data-leadmagnet-status]');
        const btn = container.querySelector('.lead-magnet-btn');

        form.addEventListener('submit', async (e) => {
            e.preventDefault();
            const name = nameInput.value.trim();
            const email = emailInput.value.trim();
            if (!name || !email.includes('@')) { status.textContent = 'Please fill both fields.'; status.className = 'lead-magnet-status error'; return; }
            btn.disabled = true;
            const original = btn.textContent;
            btn.textContent = 'Sending...';
            status.textContent = '';
            const result = await window.__submitLeadMagnet({ name, email }, siteData);
            btn.disabled = false;
            btn.textContent = original;
            if (result.success) {
                // If a resource URL is set, auto-open it in a new tab for instant gratification
                if (result.resourceUrl) {
                    try { window.open(result.resourceUrl, '_blank'); } catch(e) {}
                }
                status.innerHTML = esc(lm.successMessage || 'Check your email!') +
                    (result.resourceUrl ? ` <a href="${esc(result.resourceUrl)}" target="_blank" style="color:var(--accent);">Click here</a> if the download didn't open.` : '');
                status.className = 'lead-magnet-status success';
                nameInput.value = ''; emailInput.value = '';
            } else {
                status.textContent = 'Something went wrong. Try again or email me directly.';
                status.className = 'lead-magnet-status error';
            }
        });
    };

    function esc(s) {
        if (s == null) return '';
        return String(s).replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
    }

})();
