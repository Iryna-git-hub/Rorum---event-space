export const primaryNav = [
  { label: "Events", href: "/events" },
  {
    label: "Collaboration",
    href: "/collaboration",
    children: [
      { label: "Host Private Event", href: "/host-an-event" },
      { label: "Host Public Event", href: "/host-public-event" },
      { label: "Work or volunteer with us", href: "/work-or-volunteer-with-us" },
      { label: "Become a member", href: "/become-a-member" },
    ],
  },
  {
    label: "Services",
    href: "/services",
    children: [
      { label: "Event decoration", href: "/event-decoration" },
      { label: "Catering services", href: "/catering-services" },
    ],
  },
  { label: "Our mission", href: "/our-mission" },
  { label: "Contact", href: "/contact" },
] as const;

export const mobileNav = [
  { label: "Events", href: "/events" },
  { label: "Collaboration", href: "/collaboration" },
  { label: "Host Private Event", href: "/host-an-event" },
  { label: "Host Public Event", href: "/host-public-event" },
  { label: "Work or volunteer with us", href: "/work-or-volunteer-with-us" },
  { label: "Become a member", href: "/become-a-member" },
  { label: "Services", href: "/services" },
  { label: "Event decoration", href: "/event-decoration" },
  { label: "Catering services", href: "/catering-services" },
  { label: "Our mission", href: "/our-mission" },
  { label: "Contact", href: "/contact" },
] as const;

export const languageOptions = [
  { label: "EN", href: "/" },
  { label: "DK", href: "/" },
  { label: "UA", href: "/" },
] as const;

export const socialLinks = [
  { label: "Facebook", href: "https://www.facebook.com/rorum2025/", icon: "facebook" },
  { label: "Instagram", href: "https://www.instagram.com/", icon: "instagram" },
  { label: "LinkedIn", href: "https://www.linkedin.com/", icon: "linkedin" },
  { label: "YouTube", href: "https://www.youtube.com/", icon: "youtube" },
] as const;

export const faqs = [
  {
    question: "How far in advance should we plan?",
    answer:
      "For branded or tailored events, we recommend starting the conversation at least two to four weeks ahead so we can shape the format, team, and setup together.",
  },
  {
    question: "Can RORUM support both public and private events?",
    answer:
      "Yes. We host intimate public gatherings, private rentals, recurring host formats, and collaborative concepts with facilitators, artists, and community builders.",
  },
  {
    question: "Do you only operate in your own space?",
    answer:
      "No. RORUM can host in-house, support external venues, or bring decoration and catering into selected off-site experiences when the format fits.",
  },
] as const;
