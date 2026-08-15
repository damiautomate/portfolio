/* ============================================================
   SITE DATA — ALL EDITABLE CONTENT LIVES HERE
   This file powers your entire website. The admin panel edits this.
   Eventually this will be replaced by Firebase Firestore.
   ============================================================ */

const SITE_DATA = {

  // ---- SITE META ----
  meta: {
    title: "Damilare Babalola — Marketing Automation Expert",
    description: "I help businesses build systems that work for them. CRM setup, customer journey design, business process automation, and AI-powered workflows.",
    faviconUrl: "",
    ogImage: "",
    ga4MeasurementId: "",         // e.g. "G-XXXXXXXXXX" — paste from GA4 dashboard
    cookieBannerEnabled: true     // show cookie consent banner before loading GA4
  },

  // ---- THEME SETTINGS ----
  theme: {
    accentColor: "#0066FE",
    defaultTheme: "dark" // "dark" or "light"
  },

  // ---- NAVIGATION ----
  nav: {
    logo: "Damilare",
    bookingUrl: "https://cal.com/dami-digital-market",
    bookingText: "Book a Call"
  },

  // ---- HERO SECTION ----
  hero: {
    badge: "Available for new projects",
    heading: "I build systems that make your business",
    headingHighlight: "work for you",
    description: "Marketing Automation Expert helping businesses build CRM systems, design customer journeys, and automate processes — so you can focus on growth, not grunt work.",
    primaryCta: { text: "Book a Free Call", url: "https://cal.com/dami-digital-market", external: true },
    secondaryCta: { text: "View My Work", url: "#projects", external: false },
    stats: [
      { number: 50, suffix: "+", label: "Projects Delivered" },
      { number: 30, suffix: "+", label: "Happy Clients" },
      { number: 3, suffix: "+", label: "Years Experience" }
    ]
  },

  // ---- ABOUT SECTION ----
  about: {
    sectionLabel: "About Me",
    photoUrl: "https://i.ibb.co/8gXVzv8f/IMG-1402-1.jpg",
    photoAlt: "Damilare Babalola",
    imageDeco: "glow",  // "glow" | "shape" | "dots" | "mix" | "framed" | "none" — background decoration style
    title: "I'm Damilare Babalola",
    paragraphs: [
      'A Marketing Automation Expert passionate about helping businesses work smarter, not harder. I don\'t just set up tools — I design <strong>complete systems</strong> that connect your sales, marketing, and operations into one seamless machine.',
      'From building full CRM setups in <strong>GoHighLevel</strong> and the <strong>Zoho ecosystem</strong>, to mapping out customer journeys that convert and automating repetitive tasks with <strong>n8n</strong>, <strong>Zapier</strong>, and AI — every system I build is designed to free you up so you can focus on growth.'
    ],
    tagline: 'Every business deserves systems that work as hard as they do. <strong>Let\'s build yours.</strong>',
    tools: ["GoHighLevel", "Zoho CRM", "Zoho One", "Zoho Analytics", "Zoho SalesIQ", "Zoho Projects", "Zoho Invoice", "n8n", "Zapier", "AI Automation"]
  },

  // ---- SERVICES SECTION ----
  services: {
    sectionLabel: "What I Do",
    title: "Services That Drive Results",
    subtitle: "End-to-end systems that automate your business, nurture your leads, and scale your operations.",
    items: [
      { icon: "⚙️", title: "CRM Setup & Management", description: "Full CRM implementation in GoHighLevel, Zoho, or your platform of choice. Pipelines, automations, dashboards — everything configured to match your sales process." },
      { icon: "🗺️", title: "Customer Journey Design", description: "Map every touchpoint from first click to loyal customer. I design journeys that nurture leads, reduce churn, and turn one-time buyers into repeat clients." },
      { icon: "🔄", title: "Business Process Automation", description: "Identify bottlenecks in your operations and replace manual work with automated workflows. From invoicing to follow-ups, I build systems that run themselves." },
      { icon: "🤖", title: "AI-Powered Automations", description: "Leverage the latest AI tools — n8n, Zapier, and custom integrations — to create intelligent automations that learn, adapt, and save you hours every week." }
    ]
  },

  // ---- PROJECTS SECTION (HOMEPAGE) ----
  projects: {
    sectionLabel: "Selected Work",
    title: "Projects That Speak Results",
    subtitle: "A look at some of the systems and automations I've built for real businesses.",
    viewAllUrl: "projects.html",
    viewAllText: "View All Projects",
    items: [
      {
        tag: "CRM",
        image: "https://i.ibb.co/99JXVGD9/n13ca7nsj9rmt0cwv6xrv3g7gg.png",
        title: "GoHighLevel CRM for E-commerce Brand",
        description: "Built a complete CRM system with automated lead nurturing, pipeline management, and reporting dashboards — resulting in 40% faster lead response time.",
        caseStudyUrl: "#"
      },
      {
        tag: "Automation",
        image: "",
        title: "End-to-End Sales Automation with Zoho",
        description: "Designed and implemented an automated sales workflow using Zoho CRM, SalesIQ, and Analytics — cutting manual follow-ups by 70% and boosting conversions.",
        caseStudyUrl: "#"
      },
      {
        tag: "AI Workflow",
        image: "",
        title: "AI-Powered Lead Scoring with n8n",
        description: "Created an intelligent lead scoring system using n8n and AI APIs that automatically qualifies and routes leads — saving the sales team 15+ hours per week.",
        caseStudyUrl: "#"
      },
      {
        tag: "Journey",
        image: "",
        title: "Customer Journey Redesign for SaaS Startup",
        description: "Mapped and rebuilt the complete customer journey from trial to paid conversion, implementing automated onboarding sequences that increased retention by 35%.",
        caseStudyUrl: "#"
      },
      {
        tag: "Process",
        image: "",
        title: "Business Process Overhaul for Consulting Firm",
        description: "Redesigned the entire client intake, project management, and invoicing process using Zoho One — eliminating 20+ hours of weekly admin work.",
        caseStudyUrl: "#"
      }
    ]
  },

  // ---- TESTIMONIALS SECTION ----
  testimonials: {
    sectionLabel: "Client Reviews",
    title: "What Clients Say",
    subtitle: "Real feedback from businesses I've helped build systems for.",
    items: [
      {
        stars: 5,
        quote: "Damilare completely transformed how we handle leads. Our CRM went from a mess of spreadsheets to a fully automated system. We're closing deals 3x faster now.",
        name: "John Adeyemi",
        role: "CEO, TechVentures Ltd",
        initials: "JA"
      },
      {
        stars: 5,
        quote: "The customer journey he designed for us was a game-changer. Our onboarding flow now runs on autopilot and our retention rate jumped significantly within the first quarter.",
        name: "Sarah Okonkwo",
        role: "Founder, GrowthPath Agency",
        initials: "SO"
      },
      {
        stars: 5,
        quote: "Working with Damilare on our Zoho setup was seamless. He understood our process better than we did and built something that actually works for our team every day.",
        name: "Michael Karim",
        role: "Operations Director, ScaleUp Inc",
        initials: "MK"
      },
      {
        stars: 5,
        quote: "I had no idea how much time we were wasting until Damilare automated our entire client intake and invoicing process. Our team now focuses on delivering, not admin work.",
        name: "Amina Lawal",
        role: "Managing Partner, BrightEdge Consulting",
        initials: "AL"
      }
    ]
  },

  // ---- CTA SECTION ----
  cta: {
    sectionLabel: "Let's Work Together",
    title: "Ready to automate your business?",
    subtitle: "Book a free strategy call and let's talk about building the systems your business needs to scale.",
    primaryCta: { text: "Book a Free Call", url: "https://cal.com/dami-digital-market", external: true },
    secondaryCta: { text: "View My Work", url: "#projects", external: false }
  },

  // ---- FOOTER ----
  footer: {
    name: "Damilare Babalola",
    year: 2026,
    socials: [
      { platform: "Twitter", url: "https://x.com/Dami_Market", icon: "twitter" },
      { platform: "LinkedIn", url: "https://www.linkedin.com/in/damidigitalmarket", icon: "linkedin" },
      { platform: "Instagram", url: "https://www.instagram.com/damidigital_market/", icon: "instagram" },
      { platform: "Facebook", url: "https://www.facebook.com/itz.oluwadamilare.9277", icon: "facebook" },
      { platform: "TikTok", url: "https://tiktok.com/@damidigitalmarket", icon: "tiktok" },
      { platform: "Upwork", url: "https://www.upwork.com/freelancers/~01b8622274bfad81b9?viewMode=1", icon: "upwork" }
    ]
  },

  // ---- PROJECTS PAGE (separate from homepage projects) ----
  projectsPage: {
    meta: {
      title: "Projects — Damilare Babalola",
      description: "Explore my portfolio of CRM setups, marketing automations, customer journey designs, and AI-powered workflows built for real businesses."
    },
    header: {
      title: "My Projects",
      subtitle: "A collection of CRM setups, automation workflows, customer journeys, and business process designs I've built for real businesses."
    },
    stats: [
      { number: 50, suffix: "+", label: "Projects Delivered" },
      { number: 30, suffix: "+", label: "Happy Clients" },
      { number: 6, suffix: "", label: "Industries Served" },
      { number: 5, suffix: "", label: "Platforms Mastered" }
    ],
    process: {
      label: "How I Work",
      steps: [
        { icon: "🔍", title: "Discovery", description: "Understand your business & goals" },
        { icon: "📐", title: "Strategy", description: "Design the system blueprint" },
        { icon: "⚙️", title: "Build", description: "Implement & configure everything" },
        { icon: "🚀", title: "Launch", description: "Go live & optimize" }
      ]
    },
    filters: [
      { id: "all", label: "All" },
      { id: "crm", label: "CRM" },
      { id: "automation", label: "Automation" },
      { id: "journey", label: "Customer Journey" },
      { id: "process", label: "Business Process" },
      { id: "ai", label: "AI Workflow" }
    ],
    items: [
      { category: "crm", tag: "CRM", image: "https://i.ibb.co/99JXVGD9/n13ca7nsj9rmt0cwv6xrv3g7gg.png", industry: "E-commerce", title: "GoHighLevel CRM for E-commerce Brand", tools: ["GoHighLevel", "Pipelines", "Automations"], description: "Built a complete CRM system with automated lead nurturing, pipeline management, and reporting dashboards.", metric: "40% faster lead response", caseStudyId: "" },
      { category: "automation", tag: "Automation", image: "", industry: "SaaS", title: "End-to-End Sales Automation with Zoho", tools: ["Zoho CRM", "Zoho SalesIQ", "Zoho Analytics"], description: "Designed and implemented an automated sales workflow — cutting manual follow-ups by 70% and boosting conversions.", metric: "70% less manual follow-ups", caseStudyId: "" },
      { category: "ai", tag: "AI Workflow", image: "", industry: "Real Estate", title: "AI-Powered Lead Scoring with n8n", tools: ["n8n", "AI APIs", "GoHighLevel"], description: "Created an intelligent lead scoring system that automatically qualifies and routes leads to the right sales rep.", metric: "15+ hours saved weekly", caseStudyId: "" },
      { category: "journey", tag: "Journey", image: "", industry: "SaaS Startup", title: "Customer Journey Redesign for SaaS Startup", tools: ["Zoho CRM", "Email Sequences", "Analytics"], description: "Mapped and rebuilt the complete customer journey from trial signup to paid conversion with automated onboarding.", metric: "35% higher retention", caseStudyId: "" },
      { category: "process", tag: "Process", image: "", industry: "Consulting", title: "Business Process Overhaul for Consulting Firm", tools: ["Zoho One", "Zoho Invoice", "Zoho Projects"], description: "Redesigned the entire client intake, project management, and invoicing process — eliminating weekly admin burden.", metric: "20+ hours saved weekly", caseStudyId: "" },
      { category: "crm", tag: "CRM", image: "", industry: "Healthcare", title: "Zoho CRM Setup for Healthcare Provider", tools: ["Zoho CRM", "Zoho SalesIQ", "Zapier"], description: "Implemented a patient management CRM with automated appointment reminders, follow-up sequences, and intake forms.", metric: "60% fewer no-shows", caseStudyId: "" },
      { category: "automation", tag: "Automation", image: "", industry: "E-commerce", title: "Order-to-Delivery Automation Pipeline", tools: ["Zapier", "GoHighLevel", "Webhooks"], description: "Built an automated pipeline connecting order placement, payment confirmation, fulfillment, and delivery notifications.", metric: "90% faster order processing", caseStudyId: "" },
      { category: "journey", tag: "Journey", image: "", industry: "Education", title: "Student Enrollment Journey for Online Academy", tools: ["GoHighLevel", "Email Sequences", "SMS"], description: "Designed a multi-touch enrollment journey with automated nurture sequences, webinar reminders, and payment follow-ups.", metric: "2.5x enrollment rate", caseStudyId: "" },
      { category: "ai", tag: "AI Workflow", image: "", industry: "Marketing Agency", title: "AI Content & Social Media Workflow", tools: ["n8n", "OpenAI", "Zapier"], description: "Built an AI-powered content pipeline that generates, schedules, and publishes social media posts with human review checkpoints.", metric: "10+ hours saved weekly", caseStudyId: "" },
      { category: "process", tag: "Process", image: "", industry: "Logistics", title: "Operations Dashboard & Workflow for Logistics Co", tools: ["Zoho One", "Zoho Analytics", "Zoho Projects"], description: "Built a centralized operations dashboard connecting dispatch, tracking, invoicing, and client communication workflows.", metric: "50% fewer delivery errors", caseStudyId: "" },
      { category: "crm", tag: "CRM", image: "", industry: "Real Estate", title: "GoHighLevel CRM for Property Management", tools: ["GoHighLevel", "Calendars", "SMS"], description: "Set up a full CRM with tenant communication, maintenance request tracking, lease renewal automations, and lead capture.", metric: "3x faster tenant onboarding", caseStudyId: "" },
      { category: "automation", tag: "Automation", image: "", industry: "Finance", title: "Client Onboarding Automation for Fintech", tools: ["Zapier", "Zoho CRM", "n8n"], description: "Automated the entire client onboarding flow — from KYC document collection to account setup and welcome sequences.", metric: "80% faster onboarding", caseStudyId: "" }
    ],
    cta: {
      sectionLabel: "Have a project in mind?",
      title: "Let's build something that works",
      subtitle: "Book a free strategy call and let's talk about the systems your business needs to scale.",
      buttonText: "Book a Free Call",
      buttonUrl: "https://cal.com/dami-digital-market"
    }
  },

  // ---- CASE STUDIES (each one keyed by URL-safe ID) ----
  // URL format: case-study.html?id=njs-royale
  caseStudies: {
    "njs-royale": {
      meta: {
        title: "Zoho CRM & Bookings for NJS Royale — Damilare Babalola",
        description: "Case study: End-to-end venue booking automation for NJS Royale Event Centre using Zoho CRM & Bookings."
      },
      hero: {
        tag: "CRM",
        title: "Zoho CRM & Bookings Implementation",
        client: "NJS Royale Event Centre",
        subtitle: "End-to-end venue booking automation — from tour scheduling to event completion. A fully automated CRM ecosystem managing the entire customer journey for a premium event venue in Nigeria.",
        metric: { number: "100%", label: "Process Automated" },
        heroImage: "",
        heroCaption: "Live Kanban board — Tour Scheduled, Tour Completed, Interested in Booking, Payment Pending, Booking Confirmed, Event Completed, Closed, Lost"
      },
      quickFacts: {
        client: "NJS Royale Event Centre",
        industry: "Events & Venue Rental",
        timeline: "December 2025",
        role: "Zoho CRM Consultant & Implementer",
        tools: ["Zoho CRM", "Zoho Bookings", "Workflow Automation"]
      },
      challenge: {
        label: "Act 1",
        title: "The Challenge",
        paragraphs: [
          "NJS Royale Event Centre was growing fast, but their booking operations weren't keeping up. The team managed everything manually — tour scheduling relied on phone calls and back-and-forth messages, customer information lived in scattered spreadsheets, and payment tracking was done by hand. There was no single system to tell staff which prospects had toured the venue, who was interested in booking, what payments were outstanding, or when events were confirmed.",
          "This lack of structure created real problems. Follow-ups were missed, leading to lost revenue from interested clients who never heard back. Payment timelines were unclear, with no automated reminders to ensure deposits were collected on schedule. Staff spent hours each week on repetitive administrative tasks that could have been automated. And with no pipeline visibility, management couldn't accurately forecast revenue or identify bottlenecks in the booking process."
        ],
        bullets: [
          "No centralized system to track customers from tour interest through event completion",
          "Manual scheduling led to missed follow-ups and lost booking opportunities",
          "Payment tracking was error-prone with no automated reminders or status updates",
          "Staff lacked visibility into where each customer was in the booking process",
          "No automated customer communications — every email was sent manually"
        ],
        callout: "The venue needed a comprehensive system that would not only organize their data but actively drive the booking process forward — capturing leads automatically, guiding them through clear stages, managing flexible payment plans, and keeping customers informed at every step."
      },
      solution: {
        label: "Act 2",
        title: "The Solution",
        intro: "A structured, phased methodology was used to design and implement the complete system, ensuring every component was built on a solid foundation before adding complexity. The project was delivered across five key phases:",
        phases: [
          { number: "01", title: "Discovery & Scoping", description: "Mapped the client's full booking lifecycle from initial tour request to event completion. Identified the three venue halls (Grande Royale, Signature, Ivycrest), defined payment rules including the 14-day pre-event deadline, and established business hours for tour availability.", image: "", imageCaption: "" },
          { number: "02", title: "Booking Portal", description: "Set up Zoho Bookings with a branded, customer-facing tour scheduling page featuring 30-minute time slots, automatic availability management, shareable booking links with QR codes, and seamless integration to push every booking directly into the CRM as a new lead.", image: "", imageCaption: "Zoho Bookings tour scheduling portal — self-service booking with automatic CRM integration" },
          { number: "03", title: "CRM Architecture & Pipeline Design", description: "Built a custom Event Booking pipeline with 8 distinct stages tracking the full journey. Created 30+ custom fields for comprehensive deal tracking, implemented field dependencies between payment plan types and stages, and designed conditional layout rules to show relevant fields at each stage.", image: "", imageCaption: "8-stage Event Booking pipeline: Tour Scheduled → Tour Completed → Interested in Booking → Payment Pending → Booking Confirmed → Event Completed → Closed → Lost" },
          { number: "04", title: "Automation & Workflow Engine", description: "Developed 9+ workflow automation rules handling lead-to-deal conversion, automatic payment stage updates, deposit tracking with tag assignments, payment due date calculations, reminder triggers, and fully-paid confirmation flows — eliminating virtually all manual status management.", image: "", imageCaption: "Workflow rules engine — automating every stage transition and payment status update" },
          { number: "05", title: "Email Communications & Testing", description: "Designed and configured 30+ email templates covering every customer touchpoint: tour follow-ups, event interest confirmations, payment pending notices, deposit receipts, overdue reminders, booking confirmations, and event completion thank-yous. Every flow was rigorously tested end-to-end.", image: "", imageCaption: "Email template library and payment confirmation preview — professional communications at every milestone" }
        ]
      },
      results: {
        label: "Act 3",
        title: "Results & Impact",
        metrics: [
          { number: 9, suffix: "+", label: "Workflow Automations" },
          { number: 30, suffix: "+", label: "Email Templates" },
          { number: 8, suffix: "", label: "Pipeline Stages" },
          { number: 100, suffix: "%", label: "Process Automated" }
        ],
        paragraphs: [
          "With this system in place, NJS Royale Event Centre now operates with a fully structured and automated workflow for managing event bookings. Every prospective customer is captured automatically the moment they schedule a tour. Staff always know exactly where each client is in the booking process, and payments are tracked down to the last deposit with automatic reminders preventing missed deadlines.",
          "The system eliminated manual data entry for tour bookings, removed the risk of lost follow-ups, and gave management clear pipeline visibility for revenue forecasting. Customer experience improved significantly — clients now receive professional, timely communications at every milestone, from tour confirmation through event completion.",
          "The flexible payment plan system accommodates one-time payments, two-deposit, and three-deposit arrangements, all tracked automatically with stage-specific reminders and confirmation emails."
        ]
      },
      testimonial: {
        quote: "What Damilare built for us exceeded every expectation. We went from juggling spreadsheets and phone notes to having a system that practically runs itself. Every tour booking flows straight into our CRM, payments are tracked automatically, and our clients get professional emails at every step without us lifting a finger. The level of detail in the automation — the payment reminders, the deposit tracking, the stage-by-stage pipeline — it's exactly what we needed. We've already recommended him to other event companies in our network.",
        name: "Olaoluwa M. Oreniwa",
        role: "CEO, NJS Royale Event Centre",
        initials: "OO"
      },
      tools: ["Zoho CRM", "Zoho Bookings", "Workflow Automation", "Custom Pipelines", "Email Templates", "Field Dependencies", "Layout Rules", "QR Code Booking Links"],
      nav: {
        prevId: "",
        nextId: ""
      },
      cta: {
        sectionLabel: "Need a similar system?",
        title: "Let's automate your booking operations",
        subtitle: "Book a free strategy call and let's discuss building the CRM and automation system your venue or business needs.",
        buttonText: "Book a Free Call",
        buttonUrl: "https://cal.com/dami-digital-market"
      }
    }
  },

  // ---- BLOG ----
  blog: {
    meta: {
      title: "Blog — Damilare Babalola",
      description: "Thoughts on marketing automation, CRM strategy, AI workflows, and building systems that scale."
    },
    header: {
      title: "The Blog",
      subtitle: "Thoughts, tutorials, and case studies on marketing automation, CRM strategy, and building systems that work."
    },
    categories: [
      { id: "all", label: "All" },
      { id: "automation", label: "Automation" },
      { id: "crm", label: "CRM Strategy" },
      { id: "ai", label: "AI Tools" },
      { id: "business", label: "Business" },
      { id: "tutorials", label: "Tutorials" }
    ],
    // Show the "Latest from the Blog" section on homepage?
    showOnHomepage: true,
    homepageSectionLabel: "Latest Writing",
    homepageTitle: "From the Blog",
    homepageSubtitle: "Sharing what I learn about marketing automation, CRM, and scaling businesses.",
    homepageViewAllText: "Read All Posts",
    // Posts keyed by URL-safe ID. Fields:
    // - published: bool (false = draft, only visible in admin)
    // - featured: bool (show at top of blog listing)
    // - title, excerpt, featuredImage, category, tags[], readTimeMinutes
    // - content: HTML (Quill output)
    // - publishedDate (ISO date string)
    posts: {
      "welcome-post": {
        title: "Welcome to the Blog",
        excerpt: "A quick introduction to what you'll find here — tutorials, strategy breakdowns, and lessons from real automation projects.",
        featuredImage: "",
        category: "business",
        tags: ["introduction"],
        readTimeMinutes: 2,
        publishedDate: "2026-04-20",
        published: true,
        featured: true,
        content: "<h2>Welcome!</h2><p>This is the first post on my new blog. I'll be sharing everything I learn about building <strong>marketing automation systems</strong>, <strong>CRM strategy</strong>, and <strong>AI-powered workflows</strong> for real businesses.</p><p>Expect tutorials, strategy breakdowns, honest lessons from client projects, and my take on the tools I use every day — Zoho, GoHighLevel, n8n, Make.com, and more.</p><p>If there's something specific you'd like me to cover, feel free to reach out via any of my social links at the bottom of the page. Thanks for reading!</p>"
      }
    }
  },

  // ---- INTEGRATIONS (3rd-party service keys) ----
  integrations: {
    web3formsAccessKey: "",  // Get free at web3forms.com — handles form submissions
    tawktoPropertyId: "",    // Leave empty to disable Tawk.to (replaced by the custom chat)
    tawktoWidgetId: "1default",  // usually stays as 1default
    // WhatsApp — full international format, digits only, no + or spaces.
    // e.g. Nigeria 0803 123 4567 becomes "2348031234567"
    whatsappNumber: "",
    whatsappHours: "Usually replies within a few hours (WAT)"
  },

  // ---- WORK WITH ME / BOOKING PAGE ----
  // Two equal tracks: book a call, or start a text conversation. Some clients
  // want to talk; plenty would rather type first. Forcing everyone onto a
  // calendar loses the second group entirely.
  bookingPage: {
    enabled: true,
    meta: {
      title: "Work With Me — Damilare Babalola",
      description: "Book a free 30-minute call, or send a message first. Either way you get a straight answer on whether automation actually fixes your problem."
    },
    header: {
      badge: "Available for new projects",
      title: "Let's figure out what you actually need",
      subtitle: "Two ways to start — book a call if you'd rather talk it through, or send a message if you'd rather type. Both reach me directly."
    },

    // Track 1 — the call
    call: {
      enabled: true,
      label: "Book a call",
      title: "30 minutes, free, no pitch",
      description: "We look at how your business currently runs, find where the work is leaking, and decide together whether automation is the right fix. You leave with a diagnosis whether or not you hire me.",
      duration: "30 minutes",
      cost: "Free",
      buttonText: "Pick a time",
      agenda: [
        "Where your time actually goes right now — the manual work you'd stop doing tomorrow if you could",
        "Your current stack, and whether the tools you already pay for can do more",
        "The single biggest bottleneck, and whether automation genuinely fixes it",
        "Rough scope and a price range, if it's a fit"
      ],
      prepare: [
        "A list of the tools you currently use",
        "The one process that wastes the most time",
        "Roughly how many people touch that process"
      ],
      afterwards: "Within 48 hours you get a written proposal — scope, timeline and a fixed price. No obligation, and no follow-up sequence if you pass."
    },

    // Track 2 — text first
    message: {
      enabled: true,
      label: "Message first",
      title: "Rather type than talk?",
      description: "Ask anything — pricing, whether I've done something like your project before, or whether your idea is even possible. I answer properly, not with a sales script.",
      whatsappButtonText: "Message on WhatsApp",
      whatsappPrefill: "Hi Damilare — I found you through your site and I'd like to ask about",
      chatButtonText: "Chat here on the site",
      formButtonText: "Send a detailed brief",
      note: "If you'd rather write a longer brief, the contact form gives you room to explain properly."
    },

    // Qualifier shown before the calendar. Short on purpose — every extra
    // field costs conversions, these four are the ones that decide fit.
    qualifier: {
      enabled: true,
      title: "Two quick things first",
      subtitle: "So I can come to the call already useful instead of asking basics.",
      bottleneckLabel: "What's the biggest thing eating your time right now?",
      bottleneckPlaceholder: "e.g. chasing leads manually, re-typing orders between systems, onboarding taking days",
      toolsLabel: "What tools are you using today?",
      toolsPlaceholder: "e.g. Zoho, spreadsheets, WhatsApp, nothing yet",
      timelineLabel: "When are you looking to start?",
      timelineOptions: ["As soon as possible", "Within a month", "This quarter", "Just exploring"],
      budgetLabel: "Do you have a budget in mind?",
      budgetOptions: ["Not sure yet", "Under $1,000", "$1,000 – $3,000", "$3,000 – $10,000", "$10,000+"],
      skipText: "Skip and go straight to the calendar"
    },

    // Fit filter. Saying who this isn't for reads as confidence and costs
    // far less time than a call that was never going to close.
    fit: {
      enabled: true,
      title: "Is this a fit?",
      goodTitle: "Good fit if",
      goodItems: [
        "You're running a real business and the manual work is now the bottleneck",
        "You want a system designed around how you actually operate, not a template",
        "You'd rather fix the process than buy another tool",
        "You want one person accountable for the whole build"
      ],
      badTitle: "Probably not if",
      badItems: [
        "You need a single Zapier connection fixed — that's an hour's work, not a project",
        "You're looking for ad management, SEO or content marketing",
        "You want the cheapest possible option rather than the right one",
        "You need someone to manage the system day to day forever"
      ]
    },

    // Pricing framing. Deliberately no tier prices — scope first, quote after.
    pricing: {
      enabled: true,
      title: "How pricing works",
      description: "I don't publish fixed packages, because no two businesses run the same way and a template price usually means a template solution. We scope the work on the call, then you get one fixed price in writing before anything starts. No hourly billing, no surprises.",
      steps: [
        { title: "Scope it together", detail: "On the call we agree exactly what gets built and what success looks like." },
        { title: "Fixed quote in writing", detail: "One price for the whole build, sent within 48 hours. It doesn't move unless you change the scope." },
        { title: "Build and launch", detail: "Milestones you can see, so you always know where things stand." },
        { title: "Ongoing, if you want it", detail: "Most clients keep me on monthly afterwards to extend the system and handle changes. Optional, never assumed." }
      ],
      // Turn on to anchor expectations without publishing a rate card.
      showMinimum: false,
      minimumText: "Most engagements start from $1,000."
    },

    faq: {
      enabled: true,
      title: "Before you book",
      items: [
        { question: "Is the call really free?", answer: "Yes, and there's no pitch at the end. If automation isn't the right fix for your problem I'll tell you that on the call and point you somewhere better." },
        { question: "What if I don't know what I need yet?", answer: "That's the normal case. Bring the problem, not the solution — working out what to build is the job." },
        { question: "How soon can you start?", answer: "It depends on current capacity. I'll tell you honestly on the call rather than promising a date I can't hold." },
        { question: "Do you work with businesses outside Nigeria?", answer: "Yes. Most of my work is remote with clients in other timezones — I'll find a slot that works for yours." },
        { question: "What happens to my information?", answer: "It's used to prepare for the call and nothing else. No list, no sequence. See the privacy policy for details." }
      ]
    }
  },

  // ---- SERVICES & PRICING PAGE ----
  servicesPage: {
    meta: {
      title: "Services & Pricing — Damilare Babalola",
      description: "Transparent pricing for CRM setup, automation workflows, and business process design. Get a system that fits your business."
    },
    header: {
      title: "Services & Pricing",
      subtitle: "Transparent packages for real businesses. No hidden fees, no runaround — just clear deliverables and outcomes."
    },
    // Pricing tiers
    tiers: [
      {
        name: "Starter",
        bestFor: "Solo founders & small teams ready to stop drowning in manual work",
        price: "$350",
        priceNote: "starting at",
        billingCycle: "one-time",
        description: "A focused CRM setup to replace spreadsheets and sticky notes.",
        features: [
          "Zoho CRM or GoHighLevel setup",
          "Up to 3 custom pipelines",
          "5+ essential automations",
          "Email template library",
          "1 hour onboarding call",
          "14 days post-launch support"
        ],
        ctaText: "Get Started",
        ctaUrl: "https://cal.com/dami-digital-market?package=starter",
        highlighted: false
      },
      {
        name: "Growth",
        bestFor: "Growing businesses that need systems to scale past the founder",
        price: "$850",
        priceNote: "starting at",
        billingCycle: "one-time",
        description: "Full CRM ecosystem with customer journeys, automation workflows, and reporting.",
        features: [
          "Everything in Starter, plus:",
          "Custom customer journey design",
          "10+ automation workflows",
          "Reporting dashboards",
          "Integration with up to 5 tools",
          "Team training (2 hours)",
          "30 days post-launch support"
        ],
        ctaText: "Book Growth Package",
        ctaUrl: "https://cal.com/dami-digital-market?package=growth",
        highlighted: true
      },
      {
        name: "Scale",
        bestFor: "Established businesses ready for AI-powered operations",
        price: "$1,800",
        priceNote: "starting at",
        billingCycle: "one-time",
        description: "End-to-end business operating system with AI workflows and deep integrations.",
        features: [
          "Everything in Growth, plus:",
          "AI-powered workflows (n8n + APIs)",
          "Advanced integrations & custom APIs",
          "Multi-department pipelines",
          "Monthly optimization reviews",
          "Priority support",
          "60 days post-launch support"
        ],
        ctaText: "Book Scale Package",
        ctaUrl: "https://cal.com/dami-digital-market?package=scale",
        highlighted: false
      },
      {
        name: "Custom",
        bestFor: "Unique projects that don't fit the packages above",
        price: "Custom Quote",
        priceNote: "",
        billingCycle: "",
        description: "Have something specific in mind? Let's scope it together.",
        features: [
          "Tailored to your exact needs",
          "Ongoing retainer options available",
          "White-label / agency partnerships",
          "Complex multi-system builds",
          "Enterprise requirements"
        ],
        ctaText: "Request a Quote",
        ctaUrl: "contact.html",
        highlighted: false
      }
    ],
    guarantee: {
      enabled: true,
      title: "30-day satisfaction guarantee",
      description: "If I don't deliver what we agreed on within the scope, you get a full refund. No questions, no drama. I only take on projects I know I can nail."
    },
    cta: {
      sectionLabel: "Not sure which fits?",
      title: "Let's talk it through",
      subtitle: "A 30-minute strategy call costs nothing and usually clarifies exactly what you need.",
      buttonText: "Book a Free Strategy Call",
      buttonUrl: "https://cal.com/dami-digital-market"
    }
  },

  // ---- FAQ (reusable — shown on services page, optional on homepage) ----
  faq: {
    sectionLabel: "Common Questions",
    title: "Frequently Asked Questions",
    subtitle: "Quick answers to what clients ask most often.",
    showOnHomepage: false,
    // Items
    items: [
      {
        question: "How long does a typical CRM setup take?",
        answer: "Most Starter projects are done in 1–2 weeks. Growth projects typically run 3–4 weeks. Scale projects range from 4–8 weeks depending on complexity. I give you a specific timeline before we start so there are no surprises."
      },
      {
        question: "Do you work with clients outside Nigeria?",
        answer: "Absolutely. I work with clients globally — most project delivery happens async via Loom recordings, Slack/WhatsApp, and scheduled calls in your timezone. I've delivered projects in 10+ countries."
      },
      {
        question: "What tools do you specialize in?",
        answer: "Primary: Zoho ecosystem (CRM, Bookings, SalesIQ, One), GoHighLevel, n8n, Make.com, Zapier. I also work with Airtable, Notion, ClickUp, Salesforce, and most modern SaaS tools via their APIs."
      },
      {
        question: "Can you take over an existing CRM that's a mess?",
        answer: "Yes, and I love this kind of project. I'll audit what you have, document what's broken, then clean it up or rebuild it properly depending on what makes more sense."
      },
      {
        question: "Do you offer ongoing support?",
        answer: "Every package includes post-launch support (14–60 days depending on tier). After that, I offer monthly retainer plans for ongoing optimization, new automation builds, and team training."
      },
      {
        question: "What if I'm not sure what I need yet?",
        answer: "Book a free strategy call. We'll walk through your business, identify what's eating your time, and I'll recommend the best-fit package — or tell you honestly if you don't need me yet."
      }
    ]
  },

  // ---- LEAD MAGNET (downloadable resource in exchange for email) ----
  leadMagnet: {
    enabled: true,
    title: "Free: The Zoho CRM Setup Checklist",
    subtitle: "The 47-point checklist I use for every client engagement — copy it, adapt it, run your own implementation.",
    description: "Enter your email and I'll send you the checklist PDF plus occasional tips on building systems that scale.",
    bulletPoints: [
      "Complete field & module setup guide",
      "Automation rule templates",
      "Email & workflow triggers blueprint",
      "Common pitfalls to avoid"
    ],
    resourceUrl: "",  // Upload your PDF to Firebase Storage, Google Drive (public), or Dropbox and paste URL
    resourceName: "zoho-crm-setup-checklist.pdf",
    emailSubjectLine: "Here's your Zoho CRM Setup Checklist",
    successMessage: "Check your email! The checklist is on its way to you.",
    buttonText: "Get the Free Checklist",
    // Where to show the widget
    showOnHomepage: true,
    homepagePosition: "above-cta"  // "above-cta" or "below-hero"
  },

  // ---- CONTACT PAGE ----
  contactPage: {
    meta: {
      title: "Contact — Damilare Babalola",
      description: "Get in touch about a project, quote, or just to say hi. I respond within 24 hours."
    },
    header: {
      title: "Let's talk",
      subtitle: "Whether you're ready to start, just exploring, or have a weird question — I read every message and respond within 24 hours."
    },
    // Contact methods besides the form
    contactMethods: [
      { icon: "📧", label: "Email", value: "damidigitalmarket@gmail.com", link: "mailto:damidigitalmarket@gmail.com" },
      { icon: "📅", label: "Book a call", value: "Free 30-min strategy call", link: "https://cal.com/dami-digital-market" },
      { icon: "💬", label: "LinkedIn", value: "Fastest for quick questions", link: "https://www.linkedin.com/in/damidigitalmarket" }
    ],
    form: {
      title: "Send a message",
      subtitle: "Fill this out and I'll get back to you within 24 hours.",
      // Project types for dropdown
      projectTypes: [
        "CRM Setup",
        "Automation Project",
        "Customer Journey Design",
        "AI Workflow",
        "Ongoing Support / Retainer",
        "Just a question",
        "Other"
      ],
      submitText: "Send Message",
      successMessage: "Thanks! I've got your message and will reply within 24 hours."
    }
  },

  // ---- NEWSLETTER ----
  newsletter: {
    enabled: true,
    title: "Get the newsletter",
    subtitle: "Occasional tips on building better business systems. No fluff, no spam. Unsubscribe any time.",
    placeholder: "your@email.com",
    buttonText: "Subscribe",
    successMessage: "You're in! Look for the first email soon.",
    // Where to show
    showInFooter: true,
    showOnBlog: true
  }
};
