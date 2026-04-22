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
    eyebrow: "Community-led events",
    title: "Create beautiful, intimate experiences that bring people together.",
    intro:
      "RORUM is a Copenhagen-based creative event space and support team for workshops, dinners, wellness gatherings, collaborations, and recurring community formats.",
    primaryCta: { label: "Explore events", href: "/events" },
    secondaryCta: { label: "Contact us", href: "/contact" },
    overviewTitle: "What you can build with RORUM",
    overviewText:
      "The home frame in Figma points to a story-led landing page, so this route acts as the front door to the rest of the site and directs visitors into the right service or relationship path.",
    cards: [
      {
        title: "Attend upcoming events",
        text: "Discover gatherings that focus on connection, creativity, aesthetics, and meaningful human contact.",
        href: "/events",
        cta: "View events",
      },
      {
        title: "Host your own format",
        text: "Bring your workshop, dinner, wellness format, class, or small gathering to life with support from the RORUM team.",
        href: "/host-an-event",
        cta: "Host an event",
      },
      {
        title: "Join the host community",
        text: "Membership is designed for people who want to test ideas, run recurring events, and grow within a supportive creative network.",
        href: "/become-a-member",
        cta: "Become a member",
      },
    ],
    ctaTitle: "Start with one conversation, then shape the right path together.",
    ctaText:
      "Whether you want to attend, host, collaborate, or build a recurring concept, the fastest next step is a short conversation with the team.",
    ctaAction: { label: "Talk to RORUM", href: "/contact" },
  },
  events: {
    slug: "/events",
    eyebrow: "Events",
    title: "Explore upcoming RORUM events and find the atmosphere that fits you.",
    intro:
      "From intimate workshops to community evenings and curated experiences, RORUM events are designed to create live contact between people in a thoughtful setting.",
    primaryCta: { label: "Contact us", href: "/contact" },
    secondaryCta: { label: "Host an event", href: "/host-an-event" },
    overviewTitle: "A calm way to discover what is coming next",
    overviewText:
      "The Figma events frame centers on a browsable list of experiences with filters and clear event cards. This page translates that into a route people can scan quickly.",
    cards: [
      { title: "Wellness and movement", text: "Breathwork, gentle practices, circles, and restorative formats for smaller groups." },
      { title: "Creative workshops", text: "Hands-on sessions, learning experiences, and idea-led gatherings built around curiosity." },
      { title: "Community evenings", text: "Events that encourage conversation, new connections, and repeated attendance over time." },
    ],
    ctaTitle: "Want help finding the right event or planning your own?",
    ctaText: "If you are not sure whether to attend, collaborate, or host, we can point you in the right direction quickly.",
    ctaAction: { label: "Ask the team", href: "/contact" },
  },
  collaboration: {
    slug: "/collaboration",
    eyebrow: "Collaboration",
    title: "Partner with RORUM on experiences that feel human, intentional, and alive.",
    intro:
      "We collaborate with facilitators, brands, artists, and community builders who want events to feel warm, well-shaped, and rooted in real connection.",
    primaryCta: { label: "Start a collaboration", href: "/contact" },
    secondaryCta: { label: "See services", href: "/services" },
    overviewTitle: "Different kinds of partnerships, one shared standard",
    overviewText:
      "The collaboration frame suggests a visual overview of partnership models plus a FAQ. This page gives that route a clear decision-making structure.",
    cards: [
      { title: "Co-created events", text: "We shape the format together, from concept and atmosphere to delivery details." },
      { title: "Creative production", text: "For projects that need styling, setup support, guest flow, or audience-facing polish." },
      { title: "Community activations", text: "For ideas that aim to build repeated engagement rather than one-off attendance." },
      { title: "Brand-friendly intimacy", text: "For teams that want something more personal than a standard corporate event format." },
    ],
    ctaTitle: "If you already have an idea, we can help give it the right shape.",
    ctaText: "A short brief is enough to begin. We can refine the scope, audience, and production level together.",
    ctaAction: { label: "Send your idea", href: "/contact" },
  },
  "host-an-event": {
    slug: "/host-an-event",
    eyebrow: "Host",
    title: "Bring your own event format to RORUM and test it in a supportive environment.",
    intro:
      "RORUM is designed for people who want to host workshops, dinners, circles, classes, and curated gatherings with small groups and a strong atmosphere.",
    primaryCta: { label: "Apply to host", href: "/contact" },
    secondaryCta: { label: "Become a member", href: "/become-a-member" },
    overviewTitle: "A place to try, repeat, and grow",
    overviewText:
      "Hosting at RORUM is not only about renting a room. It is about getting a thoughtful setting, practical support, and a community context around the idea.",
    cards: [
      { title: "Test a new concept", text: "Try a pilot workshop or event series before committing to a long-term program." },
      { title: "Build repeat attendance", text: "Use regular dates and a recognizable atmosphere to grow your own audience over time." },
      { title: "Get support where needed", text: "From planning and promotion to practical setup, we can help shape the delivery level." },
    ],
    ctaTitle: "One workshop can become a recurring format.",
    ctaText: "Many ideas start small. If yours has potential, we can help you build it into something consistent.",
    ctaAction: { label: "Talk about your format", href: "/contact" },
  },
  "host-public-event": {
    slug: "/host-public-event",
    eyebrow: "Public events",
    title: "Host a public event at RORUM and invite the community into your idea.",
    intro:
      "Public events are for hosts who want to open a workshop, talk, circle, tasting, or creative gathering to a wider audience in Copenhagen.",
    primaryCta: { label: "Apply to host", href: "/contact" },
    secondaryCta: { label: "See events", href: "/events" },
    overviewTitle: "A format people can discover, join, and return to",
    overviewText:
      "RORUM can support public hosts with a warm setting, clear event structure, presentation, and practical planning so the experience feels ready for guests.",
    cards: [
      { title: "Open to the community", text: "Create a public event that people can find, book, and attend as part of the RORUM calendar." },
      { title: "Shape the guest journey", text: "Clarify audience, timing, capacity, ticketing, atmosphere, and the rhythm of the experience." },
      { title: "Build a recurring concept", text: "Turn one successful public event into a repeatable format with stronger community recognition." },
    ],
    ctaTitle: "If your idea is ready for guests, we can help shape the public format.",
    ctaText: "Tell us what you want to host, who it is for, and how you want people to feel when they leave.",
    ctaAction: { label: "Plan a public event", href: "/contact" },
  },
  "work-or-volunteer-with-us": {
    slug: "/work-or-volunteer-with-us",
    eyebrow: "Work with us",
    title: "Support events, contribute your energy, and become part of the experience behind the scenes.",
    intro:
      "RORUM welcomes people who want to help create warm, memorable gatherings through event support, guest care, setup, logistics, and collaborative teamwork.",
    primaryCta: { label: "Get in touch", href: "/contact" },
    secondaryCta: { label: "See events", href: "/events" },
    overviewTitle: "A practical way to join the ecosystem",
    overviewText:
      "This route is shaped for people who want to contribute, gain experience, or take part in the social and operational side of creating events.",
    cards: [
      { title: "Volunteer at selected events", text: "Help with setup, welcoming guests, transitions, and creating a calm event flow." },
      { title: "Grow event experience", text: "Develop practical skills while working inside thoughtful, community-oriented formats." },
      { title: "Meet aligned people", text: "Join a wider network of hosts, collaborators, creatives, and organizers in Copenhagen." },
    ],
    ctaTitle: "If the atmosphere matters to you, you will probably fit here.",
    ctaText: "We are especially interested in people who care about detail, presence, and how guests actually feel in a space.",
    ctaAction: { label: "Introduce yourself", href: "/contact" },
  },
  "become-a-member": {
    slug: "/become-a-member",
    eyebrow: "Membership",
    title: "Become part of the RORUM community and grow your own event direction.",
    intro:
      "The host membership is for facilitators, artists, wellness practitioners, and creative people who want to hold events regularly in a supportive environment.",
    primaryCta: { label: "Ask about membership", href: "/contact" },
    secondaryCta: { label: "Host an event", href: "/host-an-event" },
    overviewTitle: "Membership plans built for momentum",
    overviewText:
      "Your notes point to three levels: Host, Creator, and Resident. This route introduces the idea and helps people choose the right level to start from.",
    cards: [
      { title: "Host · 1 month", text: "A lightweight way to test a series, run up to six events, and get initial visibility and support." },
      { title: "Creator · 3 months", text: "For people building repeat attendance and shaping a more consistent audience and format." },
      { title: "Resident · 6 months", text: "For deeper commitment, recurring programming, and a stronger role inside the RORUM community." },
    ],
    ctaTitle: "Start with the level that matches your current energy and ambition.",
    ctaText: "You do not need a perfect plan. A good enough idea is enough to begin the conversation.",
    ctaAction: { label: "Find the right plan", href: "/contact" },
  },
  services: {
    slug: "/services",
    eyebrow: "Services",
    title: "Choose the kind of event support you need, from atmosphere to food to full concept shaping.",
    intro:
      "RORUM services are designed to keep experiences cohesive: visually intentional, guest-centered, and aligned with the feeling you want people to leave with.",
    primaryCta: { label: "Request a service", href: "/contact" },
    secondaryCta: { label: "See event decoration", href: "/event-decoration" },
    overviewTitle: "Built as a service hub",
    overviewText:
      "The services page works best as a parent route that guides visitors into detailed service pages rather than trying to explain everything in one place.",
    cards: [
      { title: "Event decoration", text: "Styling, mood, setup language, and detail work that shape how the event feels on arrival.", href: "/event-decoration", cta: "View decoration" },
      { title: "Catering services", text: "Food and drinks that support the rhythm of the event rather than feeling like an afterthought.", href: "/catering-services", cta: "View catering" },
      { title: "Collaborative production", text: "Support for hosts and partners who need help turning an idea into a guest-ready experience.", href: "/collaboration", cta: "See collaboration" },
    ],
    ctaTitle: "If you know the feeling you want, we can help build the format around it.",
    ctaText: "Tell us about the audience, the purpose, and the atmosphere, and we can suggest the right mix of services.",
    ctaAction: { label: "Plan a service mix", href: "/contact" },
  },
  "event-decoration": {
    slug: "/event-decoration",
    eyebrow: "Event decoration",
    title: "Shape the room, the mood, and the first impression before a word is even spoken.",
    intro:
      "Event decoration at RORUM is about atmosphere with intention: styling choices that support the story, energy, and intimacy of the gathering.",
    primaryCta: { label: "Discuss decoration", href: "/contact" },
    secondaryCta: { label: "See services", href: "/services" },
    overviewTitle: "More than visual styling",
    overviewText:
      "This route is ideal for explaining how setup, objects, color, scent, and rhythm work together to make an event feel finished and emotionally coherent.",
    cards: [
      { title: "Arrival experience", text: "The tone is set immediately through entry styling, signage, and the way guests meet the space." },
      { title: "Table and room styling", text: "Details that make gatherings feel curated rather than improvised or purely functional." },
      { title: "Brand-sensitive touches", text: "Decoration that supports a message or host identity without overpowering the event itself." },
    ],
    ctaTitle: "Atmosphere is part of the event, not a final extra.",
    ctaText: "If you want guests to remember how the event felt, decoration matters from the very first moment.",
    ctaAction: { label: "Create the mood", href: "/contact" },
  },
  "catering-services": {
    slug: "/catering-services",
    eyebrow: "Catering",
    title: "Offer food and drinks that support the tone, pacing, and intimacy of the gathering.",
    intro:
      "Our catering approach focuses on thoughtful pairings, guest comfort, and formats that match the time, purpose, and social energy of the event.",
    primaryCta: { label: "Ask about catering", href: "/contact" },
    secondaryCta: { label: "Explore events", href: "/events" },
    overviewTitle: "Food that fits the format",
    overviewText:
      "Whether it is a seated dinner, a lighter social moment, or a wellness-oriented menu, this route helps explain how catering becomes part of the event design.",
    cards: [
      { title: "Light gathering menus", text: "Flexible options for workshops, circles, and low-pressure social events." },
      { title: "Curated dinner support", text: "For intimate evenings that need stronger hosting presence and a more deliberate dining rhythm." },
      { title: "Wellness-friendly choices", text: "Menus that feel clean, balanced, and aligned with restorative or body-focused experiences." },
    ],
    ctaTitle: "The right food makes the event feel easier and more complete.",
    ctaText: "We can recommend a format that fits the guest count, timing, and emotional tone of the gathering.",
    ctaAction: { label: "Plan the menu", href: "/contact" },
  },
  "our-mission": {
    slug: "/our-mission",
    eyebrow: "Our mission",
    title: "Create a space where people can meet with more depth, beauty, and possibility.",
    intro:
      "RORUM exists to support experiences that create live contact between people and give new ideas, relationships, and communities room to grow.",
    primaryCta: { label: "Meet the community", href: "/become-a-member" },
    secondaryCta: { label: "Contact us", href: "/contact" },
    overviewTitle: "Why the project exists",
    overviewText:
      "Your notes describe RORUM as more than an event space. This route is where that perspective should become explicit and emotionally clear.",
    cards: [
      { title: "Support new ideas", text: "We want experimental, human-centered concepts to have a place to begin and evolve." },
      { title: "Build community gently", text: "The goal is not scale at any cost, but real relationships, repeated encounters, and trust." },
      { title: "Hold space beautifully", text: "Aesthetic care is part of how we make people feel safe, welcome, and curious to return." },
    ],
    ctaTitle: "If this mission feels aligned, there are several ways to take part.",
    ctaText: "You can attend, host, collaborate, volunteer, or grow into a longer-term presence through membership.",
    ctaAction: { label: "Choose your path", href: "/services" },
  },
  contact: {
    slug: "/contact",
    eyebrow: "Contact",
    title: "Let&apos;s create meaningful events in Copenhagen together.",
    intro:
      "Reach out to RORUM for collaborations, private gatherings, community memberships, or custom event support in an intimate creative setting.",
    primaryCta: { label: "See services", href: "/services" },
    secondaryCta: { label: "See events", href: "/events" },
    overviewTitle: "The easiest way to start is to tell us what you have in mind.",
    overviewText:
      "You can use this page for venue questions, host applications, service requests, catering, collaboration, or community involvement.",
    cards: [
      { title: "Host or membership", text: "Tell us about your idea, format, preferred dates, and whether you want a one-off or recurring setup." },
      { title: "Services or production", text: "Share the event purpose, expected guests, and the kind of support you need from us." },
      { title: "General questions", text: "If you are unsure which route fits best, that is completely fine. We can help you sort it out." },
    ],
    ctaTitle: "Prefer to begin with a simple message?",
    ctaText: "We can usually point you to the right next step quickly once we understand the format you are considering.",
    ctaAction: { label: "Email hello@rorum.dk", href: "mailto:hello@rorum.dk" },
  },
} satisfies Record<string, PageConfig>;
