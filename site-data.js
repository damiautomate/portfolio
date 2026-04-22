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
    ogImage: ""
  },

  // ---- THEME SETTINGS ----
  theme: {
    accentColor: "#00D4AA",
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
  }
};
