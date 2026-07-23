# Portfolio — build notes

Everything changed in this pass, why, and what you need to do next.

---

## Do this first (in order)

### 1. Deploy these files
Upload/commit the whole folder. Nothing here needs a build step.

### 2. Run `backfill.html` — this is what fixes the blank Services page
Open `https://damimarketautomate.pro/backfill.html`, sign in with your admin
account, press **Scan documents**, read the preview, then **Back up & repair**.

It downloads a JSON backup before writing anything, and only fills in keys that
are missing or empty. Existing content is never overwritten.

> **Do not run `migrate.html`.** It replaces both Firestore documents wholesale
> with `site-data.js` and would wipe your Tawk.to chat IDs, blog posts and any
> project cards edited since launch. It now warns you and forces a backup, but
> `backfill.html` is the tool you actually want.

### 3. Set two keys in the admin panel
Both are empty right now, and both matter:

| Where | Field | Why |
|---|---|---|
| Conversion Tools → Integrations | Web3Forms access key | Without it the contact form emails nobody. Submissions only land in Firestore. Free key at web3forms.com |
| Site Settings → Analytics | GA4 measurement ID | You currently have zero traffic data on a site meant to win clients |

### 4. Then hit **Publish to Live**

---

## What changed

### The blank Services page — root cause fixed

The page was never broken. It renders `servicesPage.tiers`, `guarantee`, `faq`
and `cta` — and your published Firestore document has none of those keys.

The document was seeded before those sections existed in the code. Admin loaded
it as-is, so those editors rendered blank, saved blank, and every publish since
re-saved a document without them.

Two fixes:

- **`backfill.html`** (new) — repairs the stored documents, non-destructively.
- **`admin.html` now backfills on load** — the actual root cause. When a new
  section ships in `site-data.js`, admin now merges it into the loaded document
  and tells you what it restored. Populated arrays are left alone so deleted
  items can't come back. This class of bug can't recur.

### Projects page render bugs

The page renders **twice** on every load: once from cache/`site-data.js`, then
again when Firestore responds. Three things broke on that second pass:

- **Duplicate filter chips** (visible in your screenshot — two "All" buttons,
  both active). `insertAdjacentHTML('afterbegin')` appended a second full set.
  Now rebuilds properly and preserves the results node.
- **Stacking event listeners** — modal close, backdrop click and the global
  Escape handler were re-bound each render. Now bound once.
- **Stat counters** — the observer is disconnected and re-attached per render,
  with a guard that fills in final values if you'd already scrolled past.
  Without it the numbers would have frozen at "0+".

Verified with a render test that loads the real page, renders twice, and asserts
6 chips instead of 12.

### SEO and social previews

Every page shipped `<title>Loading...</title>` with an empty description, and
injected the real values via JavaScript after Firestore responded. **Social
crawlers don't run JavaScript** — so every link you shared of your own site
previewed as "Loading..." with no image.

All 7 public pages now carry static: title, description, canonical, robots,
author, theme-color, full Open Graph set, Twitter card, favicon and manifest.
The existing JS still overrides them at runtime for dynamic pages.

`blog-post.html` and `case-study.html` are `noindex, follow` — they're
query-driven shells (`?id=`) with no content of their own. Once you have stable
case study URLs worth ranking, that's worth revisiting.

### New files

| File | Purpose |
|---|---|
| `og-image.png` | 1200×630 social card, built from your own type and palette |
| `favicon.svg` | The D + accent dot from your nav wordmark |
| `robots.txt` | Allows the site, blocks admin tooling, points at the sitemap |
| `sitemap.xml` | Six static pages. Add case studies by hand once URLs stabilise |
| `site.webmanifest` | Install metadata and theme colours |
| `404.html` | On-brand, theme-aware, routes people somewhere useful |
| `privacy.html` | Written against your actual stack. **You legally need this** — you run a cookie consent banner and GA4 |
| `backfill.html` | The repair tool described above |

### Lead magnet — was live and broken

`leadMagnet.enabled` is `true` but `resourceUrl` is empty. The widget was
collecting names and emails for a checklist that doesn't exist — the worst
possible first impression.

It now stays hidden until a file URL is set, and the admin panel shows an
amber notice explaining why. Add the PDF URL and it switches itself on.

### Services page — was a price list, not a sales page

Added a "What I do" section above the pricing grid, rendering the same
`services.items` the homepage uses. One place to edit, and the two pages can't
drift apart. The pricing grid now has an intro heading, and hides itself if
there are no tiers.

### Consistency and safety

- **Reviews** link added to services + contact nav (desktop and mobile) — every
  other page had it.
- **Theme toggle** on services + contact was a static 🌙 in a circle; now the
  same pill switch as everywhere else.
- **Privacy link** added to all 7 footers, with styling.
- **Backup button** in the admin topbar — exports the working draft as
  timestamped JSON. Firestore keeps one copy and Publish overwrites it, so there
  was previously no way back from a bad edit.
- **`migrate.html`** now auto-downloads a backup, aborts if the backup fails,
  requires explicit confirmation, and points you at `backfill.html`.
- **Lazy loading** (`loading="lazy"` + `decoding="async"`) on below-the-fold
  images. Deliberately skipped on the about photo and case study hero — lazy
  loading those would delay your largest contentful paint.

---

## Verification

`node --check` passes on every inline and standalone script. A jsdom render test
covers the double-render behaviour, the services page sections, and the lead
magnet guard — 15 assertions, all passing. The test was confirmed to fail
against the original buggy code (12 chips, 2 active — exactly matching your
screenshot) before the fix was applied.

---

## Still open

- **Project images** — 11 of 12 cards have no screenshot.
- **Case studies** — every `caseStudyId` is empty, so all 12 "View Case Study"
  links point to `#`. Meanwhile the NJS Royale case study is written, real, and
  linked from nowhere. Highest-leverage single fix on the site.
- **Content credibility** — the 12 projects and 4 testimonials read as
  placeholder next to NJS Royale, which reads as real. Worth cutting to 4–6 true
  projects.
- **Image hosting** — `i.ibb.co` is a free host with no permanence guarantee,
  and admin has no upload flow. Cloudinary or Firebase Storage would fix both.
- **Shared nav** — still hardcoded in 7 files. It has already drifted once.
- **OG image per page** — currently one card for the whole site. Per-page cards
  would be better, but need a build step.
