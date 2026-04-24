export type PageConfig = {
  slug: string;
  eyebrow: string;
  title: string;
  intro: string;
  primaryCta: { label: string; href: string };
  secondaryCta?: { label: string; href: string };
  overviewTitle: string;
  overviewText: string;
  cards: Array<{
    title: string;
    text: string;
    href?: string;
    cta?: string;
  }>;
  ctaTitle: string;
  ctaText: string;
  ctaAction: { label: string; href: string };
};

export const pageContent = {
  home: {
    slug: "/",
    eyebrow: "Creative event space",
    title: "A creative event space in central Copenhagen.",
    intro:
      "RORUM brings together intimate public events, thoughtful private bookings, community membership, and tailored support for hosts, founders, and small groups.",
    primaryCta: { label: "Explore events", href: "/events" },
    secondaryCta: { label: "Book privately", href: "/host-an-event" },
    overviewTitle: "Choose the path that fits your plan",
    overviewText:
      "The site is designed around four clear journeys: attending events, hosting a public format, booking the space privately, and requesting supportive services.",
    cards: [
      {
        title: "Attend public events",
        text: "Discover workshops, talks, wellness sessions, and curated gatherings designed for connection and creative energy.",
        href: "/events",
        cta: "View events",
      },
      {
        title: "Host a public event",
        text: "Run your own workshop, class, or community gathering in a calm, intentional setting and welcome guests into your format.",
        href: "/host-public-event",
        cta: "Apply to host",
      },
      {
        title: "Book a private session",
        text: "Reserve the space for a meeting, founder session, small workshop, or intimate private event with practical support included.",
        href: "/host-an-event",
        cta: "View private bookings",
      },
    ],
    ctaTitle: "Tell us what you are planning and we will guide you to the right format.",
    ctaText:
      "Whether you are hosting, booking, attending, or exploring a partnership, the next step can start with a short conversation.",
    ctaAction: { label: "Contact RORUM", href: "/contact" },
  },
  events: {
    slug: "/events",
    eyebrow: "Events",
    title: "Explore upcoming RORUM events and find the format that fits you.",
    intro:
      "From workshops and wellness sessions to community gatherings and creative evenings, RORUM events are designed for smaller groups and thoughtful experiences.",
    primaryCta: { label: "Explore events", href: "/events" },
    secondaryCta: { label: "Host an event", href: "/host-public-event" },
    overviewTitle: "A clear way to browse what is happening next",
    overviewText:
      "The events route helps visitors scan by timing, category, and energy level so they can quickly find something they want to join.",
    cards: [
      { title: "Wellness and movement", text: "Yoga, breathwork, and body-based sessions in a calm, small-group setting." },
      { title: "Creative workshops", text: "Hands-on formats for learning, making, and sharing ideas in person." },
      { title: "Community gatherings", text: "Social and conversation-led events that invite repeat attendance and deeper connection." },
    ],
    ctaTitle: "Not sure whether to attend, host, or book privately?",
    ctaText: "We can help you choose the right route based on your idea, your timing, and the kind of experience you want.",
    ctaAction: { label: "Ask the team", href: "/contact" },
  },
  collaboration: {
    slug: "/collaboration",
    eyebrow: "Partnerships",
    title: "Shape collaborations that connect community, creativity, and meaningful support.",
    intro:
      "RORUM partners with aligned facilitators, founders, and community builders who want to create thoughtful experiences rather than generic event formats.",
    primaryCta: { label: "Start a conversation", href: "/contact" },
    secondaryCta: { label: "See services", href: "/services" },
    overviewTitle: "Partnerships with practical structure",
    overviewText:
      "Use this route for co-created concepts, curated brand activations, and community ideas that need the right environment to grow.",
    cards: [
      { title: "Co-created formats", text: "Develop an event or series together with support around flow, audience, and atmosphere." },
      { title: "Community programming", text: "Build repeated formats that strengthen belonging and keep people returning." },
      { title: "Supportive production", text: "Combine space, hospitality, styling, and practical help in one clear setup." },
    ],
    ctaTitle: "If you have an idea with social, creative, or business value, we would love to hear it.",
    ctaText: "A strong brief does not have to be long. A few lines about the audience and the format are enough to start.",
    ctaAction: { label: "Send your idea", href: "/contact" },
  },
  "host-an-event": {
    slug: "/host-an-event",
    eyebrow: "Private bookings",
    title: "Book RORUM for meetings, workshops, and private gatherings.",
    intro:
      "RORUM is a curated small-format space in central Copenhagen for founders, small teams, intimate workshops, and thoughtful private events for up to 12 guests.",
    primaryCta: { label: "Request a booking", href: "/contact" },
    secondaryCta: { label: "Explore services", href: "/services" },
    overviewTitle: "A calm setting for focused time together",
    overviewText:
      "Private sessions are designed for groups that want clarity, hosting support, and a well-prepared environment without the feel of a generic meeting room.",
    cards: [
      { title: "Morning session", text: "08:30 to 12:30 for focused meetings, workshops, and structured small-group sessions." },
      { title: "Afternoon session", text: "13:00 to 17:00 for presentations, planning sessions, workshops, and team conversations." },
      { title: "Full day session", text: "09:00 to 17:00 for longer formats that need continuity, rhythm, and shared time together." },
    ],
    ctaTitle: "Tell us what kind of session you are planning and we will help shape the right format.",
    ctaText: "We can also add catering, snacks, or a more customized setup depending on the purpose of your gathering.",
    ctaAction: { label: "Plan a private session", href: "/contact" },
  },
  "host-public-event": {
    slug: "/host-public-event",
    eyebrow: "Host at RORUM",
    title: "Host your workshop, class, or community event at RORUM.",
    intro:
      "Bring your public format to a warm, intentional space in central Copenhagen and create an experience people can discover, join, and return to.",
    primaryCta: { label: "Apply to host", href: "/contact" },
    secondaryCta: { label: "See public events", href: "/events" },
    overviewTitle: "Designed for thoughtful public formats",
    overviewText:
      "RORUM works best for facilitators, teachers, and hosts who care about atmosphere, group energy, and the quality of the experience as much as the topic itself.",
    cards: [
      { title: "Single session", text: "Run a one-time workshop or event in a calm, well-prepared setting." },
      { title: "Evening series", text: "Reserve a recurring weekly slot for a regular class, circle, or community-led format." },
      { title: "Weekend event", text: "Host a longer workshop, masterclass, creative session, or deeper gathering." },
    ],
    ctaTitle: "If you already have a format in mind, we can help shape it for the space.",
    ctaText: "Tell us what you want to host, who it is for, and how you want guests to feel when they arrive and leave.",
    ctaAction: { label: "Start your application", href: "/contact" },
  },
  "work-or-volunteer-with-us": {
    slug: "/work-or-volunteer-with-us",
    eyebrow: "Volunteer & opportunities",
    title: "Join RORUM as a volunteer or stay connected for future work opportunities.",
    intro:
      "At RORUM, a contribution often begins with a conversation, a shared idea, or a small moment of help that grows into something meaningful.",
    primaryCta: { label: "Apply to volunteer", href: "/contact" },
    secondaryCta: { label: "Send your CV", href: "/contact" },
    overviewTitle: "Two ways to step into the ecosystem",
    overviewText:
      "Some people join through volunteering at events and community moments. Others start by sending their CV and opening the door to future collaboration or a role.",
    cards: [
      {
        title: "Volunteer at RORUM",
        text: "Support events, welcome guests, and become part of an international creative community in the heart of Copenhagen.",
      },
      {
        title: "Work with us",
        text: "Send your CV and tell us about yourself. The right conversation can grow into a collaboration, a role, or a valuable connection.",
      },
      {
        title: "Grow through people",
        text: "RORUM values presence, detail, and real human connection, so the people who fit best are those who care about atmosphere as much as logistics.",
      },
    ],
    ctaTitle: "If you feel a spark reading this, it probably means you belong here.",
    ctaText: "Introduce yourself and let us know whether you want to volunteer, explore future work, or simply stay connected.",
    ctaAction: { label: "Introduce yourself", href: "/contact" },
  },
  "become-a-member": {
    slug: "/become-a-member",
    eyebrow: "Membership & community",
    title: "Join a community built around growth, support, and meaningful connection.",
    intro:
      "RORUM collaborates with WECODA to create an ecosystem where business, creativity, and community come together for women entrepreneurs and ambitious people who want real momentum.",
    primaryCta: {
      label: "Join the WECODA community",
      href: "https://docs.google.com/forms/d/e/1FAIpQLSeYRUem8RxNrDUDCvaCl2pMJ3fPWCkIJDNVlZ0G4574vrUDpA/viewform?usp=header",
    },
    secondaryCta: { label: "Contact RORUM", href: "/contact" },
    overviewTitle: "What you gain through WECODA",
    overviewText:
      "Membership is currently free and designed to support clarity, direction, stronger networks, and sustainable growth through a real support system.",
    cards: [
      { title: "Networking and collaboration", text: "Meaningful relationships, curated connections, and opportunities that can evolve into real partnerships." },
      { title: "Education and expert support", text: "Mentorship, practitioner-led learning, and access to financial and legal guidance around accounting, taxes, and business structure." },
      { title: "Visibility and ecosystem access", text: "Brand support, exhibitions, curated events, entrepreneurial energy, and access to the RORUM space in central Copenhagen." },
    ],
    ctaTitle: "Most importantly, membership offers clarity, direction, and support on your journey.",
    ctaText: "If that is what you need right now, WECODA and RORUM are ready to welcome you.",
    ctaAction: {
      label: "Join now",
      href: "https://docs.google.com/forms/d/e/1FAIpQLSeYRUem8RxNrDUDCvaCl2pMJ3fPWCkIJDNVlZ0G4574vrUDpA/viewform?usp=header",
    },
  },
  services: {
    slug: "/services",
    eyebrow: "Services",
    title: "Support your gathering with thoughtful catering and event styling.",
    intro:
      "RORUM offers supportive services for gatherings in the space and selected off-site occasions, with an emphasis on calm hospitality, aesthetic coherence, and guest comfort.",
    primaryCta: { label: "Request a quote", href: "/contact" },
    secondaryCta: { label: "Book privately", href: "/host-an-event" },
    overviewTitle: "Two service paths, one thoughtful standard",
    overviewText:
      "Services should feel integrated into the event rather than added at the last minute, so each route is designed around atmosphere, timing, and the needs of the group.",
    cards: [
      { title: "Catering", text: "Food and drinks that support the rhythm of a meeting, workshop, or private gathering.", href: "/catering-services", cta: "Explore catering" },
      { title: "Event styling", text: "Simple, intentional decoration and setup that make the space feel welcoming and complete.", href: "/event-decoration", cta: "Explore styling" },
      { title: "Add-ons for bookings", text: "Combine private bookings with coffee, snacks, lunch, or more customized food options to fit the format." },
    ],
    ctaTitle: "If you know how you want people to feel, we can help shape the practical layer around that.",
    ctaText: "Share the guest count, timing, and type of gathering and we can suggest the right mix of support.",
    ctaAction: { label: "Request support", href: "/contact" },
  },
  "event-decoration": {
    slug: "/event-decoration",
    eyebrow: "Event styling",
    title: "Shape the mood of your gathering with thoughtful, simple styling.",
    intro:
      "RORUM styling is designed for intimate events that benefit from a calm atmosphere, visual coherence, and small details that make guests feel cared for.",
    primaryCta: { label: "Request event styling", href: "/contact" },
    secondaryCta: { label: "See services", href: "/services" },
    overviewTitle: "Styling that supports the purpose of the gathering",
    overviewText:
      "The goal is not excess. It is to create an environment that feels intentional, warm, and aligned with the event format and the people in the room.",
    cards: [
      { title: "Private meetings", text: "A more polished, welcoming setup for founder meetings, presentations, and client sessions." },
      { title: "Workshops and community events", text: "Visual details that support group energy without distracting from the content." },
      { title: "Off-site occasions", text: "Selected support for gatherings outside RORUM when styling is an important part of the guest experience." },
    ],
    ctaTitle: "Thoughtful styling can make a small gathering feel memorable from the first minute.",
    ctaText: "Tell us about the purpose, the tone, and the people you are gathering and we will suggest the right direction.",
    ctaAction: { label: "Plan the atmosphere", href: "/contact" },
  },
  "catering-services": {
    slug: "/catering-services",
    eyebrow: "Catering",
    title: "Add food and drinks that feel warm, practical, and well matched to the format.",
    intro:
      "From coffee and croissants to lunch, snacks, and custom options, RORUM catering is designed to support the flow of a session without overpowering it.",
    primaryCta: { label: "Ask about catering", href: "/contact" },
    secondaryCta: { label: "Book privately", href: "/host-an-event" },
    overviewTitle: "Flexible food support for intimate gatherings",
    overviewText:
      "We help match the food format to the session length, guest profile, and atmosphere, whether you need something light and practical or more complete.",
    cards: [
      { title: "Morning add-ons", text: "Coffee, tea, water, croissants, juice, or light breakfast support for a strong start." },
      { title: "Afternoon support", text: "Fruit, snacks, and refreshment formats that keep longer sessions feeling easy and cared for." },
      { title: "Full-day options", text: "Lunch and snack packages for workshops, meetings, and more structured all-day gatherings." },
    ],
    ctaTitle: "Good catering makes the whole experience feel easier and more complete.",
    ctaText: "We can recommend the right food format based on timing, guest count, and the type of session you are planning.",
    ctaAction: { label: "Plan the food setup", href: "/contact" },
  },
  about: {
    slug: "/about",
    eyebrow: "About RORUM",
    title: "A small, intentional space where business, creativity, and community can meet.",
    intro:
      "RORUM is a curated event space in central Copenhagen designed for intimate gatherings, public workshops, private meetings, and warm community experiences.",
    primaryCta: { label: "Explore events", href: "/events" },
    secondaryCta: { label: "Join membership", href: "/become-a-member" },
    overviewTitle: "What RORUM stands for",
    overviewText:
      "The space is designed for people who want depth, clarity, and real connection rather than volume for its own sake, with a special focus on women-led growth, support, and community.",
    cards: [
      { title: "Creative and event space", text: "A setting for workshops, meetings, circles, and curated experiences that work best with smaller groups." },
      { title: "Community and support", text: "A place where people can connect, share ideas, and build something more sustainable together." },
      { title: "Thoughtful growth", text: "Through RORUM and WECODA, business support, mental well-being, and entrepreneurship can exist in the same ecosystem." },
    ],
    ctaTitle: "If this feels aligned, there are several ways to be part of it.",
    ctaText: "Attend an event, host your own format, book the space, join the membership community, or reach out with an idea.",
    ctaAction: { label: "Choose your path", href: "/" },
  },
  contact: {
    slug: "/contact",
    eyebrow: "Contact",
    title: "Tell us what you are planning and we will guide you to the right next step.",
    intro:
      "Use this page to ask about events, hosting, private bookings, membership, volunteering, catering, styling, or a custom idea you want to explore with RORUM.",
    primaryCta: { label: "Explore events", href: "/events" },
    secondaryCta: { label: "See private bookings", href: "/host-an-event" },
    overviewTitle: "A short message is enough to begin",
    overviewText:
      "You do not need a perfect brief. A few lines about what you want to create, book, or explore are enough for us to point you in the right direction.",
    cards: [
      { title: "Hosting and public events", text: "Share your workshop, class, or event idea and tell us who it is for." },
      { title: "Private bookings and services", text: "Let us know your preferred timing, guest count, and whether you need catering or styling." },
      { title: "Membership, volunteering, or general questions", text: "If you want to join the community or simply are not sure which route fits best, start here." },
    ],
    ctaTitle: "Prefer a direct email instead of the form?",
    ctaText: "You can always reach us with a simple message and we will help you choose the right route.",
    ctaAction: { label: "Email hello@rorum.dk", href: "mailto:hello@rorum.dk" },
  },
} satisfies Record<string, PageConfig>;
