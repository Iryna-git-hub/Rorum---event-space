export const primaryNav = [
  { label: "Events", href: "/events" },
  { label: "Host an Event", href: "/host-public-event" },
  { label: "Book the Space", href: "/host-an-event" },
  {
    label: "Services",
    href: "/catering-services",
    children: [
      { label: "Catering", href: "/catering-services" },
      { label: "Event Decoration", href: "/event-decoration" },
    ],
  },
  {
    label: "Collaboration",
    href: "/become-a-member",
    children: [
      { label: "Membership", href: "/become-a-member" },
      { label: "Volunteer With Us", href: "/work-or-volunteer-with-us" },
      { label: "Work With Us", href: "/work-or-volunteer-with-us" },
    ],
  },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
] as const;

export const mobileNav = [
  { label: "Events", href: "/events" },
  { label: "Host an Event", href: "/host-public-event" },
  { label: "Book the Space", href: "/host-an-event" },
  { label: "Catering", href: "/catering-services" },
  { label: "Event Decoration", href: "/event-decoration" },
  { label: "Membership", href: "/become-a-member" },
  { label: "Volunteer With Us", href: "/work-or-volunteer-with-us" },
  { label: "Work With Us", href: "/work-or-volunteer-with-us" },
  { label: "About", href: "/about" },
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
    question: "What kinds of events fit RORUM best?",
    answer:
      "RORUM works best for intimate, well-considered formats such as workshops, wellness sessions, founder circles, creative gatherings, small business meetings, and curated community events.",
  },
  {
    question: "Can I host a public event and sell tickets?",
    answer:
      "Yes. If your workshop, class, or community format is a good fit for the space, you can apply to host it at RORUM and invite guests into the calendar.",
  },
  {
    question: "Can I book the space privately for a meeting or small gathering?",
    answer:
      "Yes. Private bookings are available for meetings, workshops, presentations, and intimate events for up to 12 guests, with optional catering add-ons.",
  },
  {
    question: "What is included in a private booking?",
    answer:
      "Private sessions include exclusive use of the space, Wi-Fi, screen access, tables and chairs, coffee, tea, water, and thoughtful on-site support before and during the session.",
  },
  {
    question: "Is membership paid?",
    answer:
      "Membership is currently free. RORUM partners with WECODA to offer community, networking, educational support, and access to a strong entrepreneurial environment.",
  },
] as const;
