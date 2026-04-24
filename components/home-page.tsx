import Link from "next/link";
import { EventsCarousel } from "@/components/events-carousel";
import { HomeBodyClass } from "@/components/home-body-class";
import { FaqAccordion, PageCta, SectionIntro } from "@/components/page-sections";
import { faqs } from "@/lib/site-data";

const pathCards = [
  {
    eyebrow: "Attend Events",
    title: "Attend Events",
    text: "Join workshops and gatherings",
    href: "/events",
    cta: "View Events",
  },
  {
    eyebrow: "Host an Event",
    title: "Host an Event",
    text: "Run your own workshop",
    href: "/host-public-event",
    cta: "Explore Options",
  },
  {
    eyebrow: "Book the Space",
    title: "Book the Space",
    text: "Private meetings & sessions",
    href: "/host-an-event",
    cta: "See Details",
  },
  {
    eyebrow: "Services",
    title: "Services",
    text: "Catering & styling",
    href: "/catering-services",
    cta: "Request Service",
  },
] as const;

const spaceHighlights = [
  {
    title: "Central Copenhagen",
    text: "Easy to reach for guests, founders, and small teams meeting in the city.",
    icon: "location",
  },
  {
    title: "4 to 15 Guests",
    text: "Best suited for intimate groups, depending on the format and room setup.",
    icon: "guests",
  },
  {
    title: "Thoughtful Facilities",
    text: "Private room access, Wi-Fi, screen, tables, chairs, and practical hosting support.",
    icon: "facilities",
  },
  {
    title: "Calm Atmosphere",
    text: "A warm, intentional setting designed for focus, comfort, and meaningful connection.",
    icon: "atmosphere",
  },
] as const;

const serviceCards = [
  {
    eyebrow: "Services",
    title: "Catering with a warm, thoughtful rhythm",
    text: "From coffee and croissants to lunch, snacks, and custom options, we shape the food format around the timing and energy of the gathering.",
    button: "Explore catering",
    href: "/catering-services",
  },
  {
    eyebrow: "Services",
    title: "Event styling and decoration that supports the atmosphere",
    text: "Simple, intentional visual support that helps meetings, workshops, and private events feel welcoming, calm, and complete.",
    button: "Explore styling",
    href: "/event-decoration",
  },
] as const;

function CoreActionIcon({ type }: { type: (typeof pathCards)[number]["title"] }) {
  if (type === "Attend Events") {
    return (
      <svg className="core-action-icon" viewBox="0 0 24 24" aria-hidden="true">
        <rect x="3" y="5" width="18" height="16" rx="3" />
        <path d="M8 3v4" />
        <path d="M16 3v4" />
        <path d="M3 10h18" />
        <path d="M8 14h3" />
        <path d="M13 14h3" />
      </svg>
    );
  }

  if (type === "Host an Event") {
    return (
      <svg className="core-action-icon" viewBox="0 0 24 24" aria-hidden="true">
        <path d="M12 3v18" />
        <path d="M3 12h18" />
        <circle cx="12" cy="12" r="8" />
      </svg>
    );
  }

  if (type === "Book the Space") {
    return (
      <svg className="core-action-icon" viewBox="0 0 24 24" aria-hidden="true">
        <path d="M4 19h16" />
        <path d="M6 19V8l6-4 6 4v11" />
        <path d="M10 19v-5h4v5" />
      </svg>
    );
  }

  return (
    <svg className="core-action-icon" viewBox="0 0 24 24" aria-hidden="true">
      <path d="M6 7h12" />
      <path d="M6 12h8" />
      <path d="M6 17h10" />
      <circle cx="18" cy="12" r="3" />
    </svg>
  );
}

function SpaceHighlightIcon({ icon }: { icon: (typeof spaceHighlights)[number]["icon"] }) {
  if (icon === "location") {
    return (
      <svg className="space-highlight-icon" viewBox="0 0 24 24" aria-hidden="true">
        <path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0" />
        <circle cx="12" cy="10" r="3" />
      </svg>
    );
  }

  if (icon === "guests") {
    return (
      <svg className="space-highlight-icon" viewBox="0 0 24 24" aria-hidden="true">
        <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    );
  }

  if (icon === "facilities") {
    return (
      <svg className="space-highlight-icon" viewBox="0 0 24 24" aria-hidden="true">
        <rect x="3" y="4" width="18" height="16" rx="2" />
        <path d="M7 8h10" />
        <path d="M7 12h4" />
        <path d="M14 12h3" />
        <path d="M7 16h6" />
      </svg>
    );
  }

  return (
    <svg className="space-highlight-icon" viewBox="0 0 24 24" aria-hidden="true">
      <path d="M12 3c2.4 2.7 4 5.1 4 8a4 4 0 1 1-8 0c0-2.9 1.6-5.3 4-8Z" />
      <path d="M5 19c1.8-1.3 4.1-2 7-2s5.2.7 7 2" />
    </svg>
  );
}

export function HomePage() {
  return (
    <main className="page-shell">
      <HomeBodyClass />

      <section className="home-hero">
        <div className="container">
          <div className="home-hero-panel">
            <div className="home-hero-content">
              <span className="eyebrow inverse">Central Copenhagen</span>
              <h1>A space for meaningful gatherings in Copenhagen</h1>
              <p>Workshops, meetings, and curated events for small, intentional groups</p>
              <div className="hero-actions">
                <Link className="solid-button light-button" href="/host-public-event">
                  Host Your Event
                </Link>
                <Link className="outline-button light-outline" href="/events">
                  View Events
                </Link>
                <Link className="outline-button light-outline" href="/host-an-event">
                  Book the Space
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="detail-section">
        <div className="container">
          <SectionIntro
            eyebrow="4 core actions"
            title="Choose the path that fits your plan"
            text="Four clear actions help visitors move quickly toward the right next step."
          />
          <div className="home-path-grid">
            {pathCards.map((card) => (
              <article key={card.title} className="info-card home-path-card">
                <div className="info-card-body">
                  <div className="core-action-icon-wrap">
                    <CoreActionIcon type={card.title} />
                  </div>
                  <span className="eyebrow plain-eyebrow">{card.eyebrow}</span>
                  <h3>{card.title}</h3>
                  <p>{card.text}</p>
                </div>
                <Link className="text-link" href={card.href}>
                  {card.cta}
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="slider-section">
        <div className="container">
          <EventsCarousel />
        </div>
      </section>

      <section className="detail-section">
        <div className="container split-panel">
          <div>
            <SectionIntro
              eyebrow="About the space"
              title="A small, curated setting designed for calm, intentional experiences"
              text="RORUM works best for workshops, meetings, circles, wellness sessions, and creative gatherings that benefit from a warm atmosphere and small-group focus."
            />
          </div>
          <div className="space-highlight-list">
            {spaceHighlights.map((item) => (
              <article key={item.title} className="space-highlight-card">
                <div className="space-highlight-icon-wrap">
                  <SpaceHighlightIcon icon={item.icon} />
                </div>
                <div className="space-highlight-copy">
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="services-highlight">
        <div className="container">
          <div className="section-intro">
            <span className="eyebrow plain-eyebrow">Services</span>
            <h2>Add thoughtful support through catering and styling</h2>
            <p>
              Services can support gatherings at RORUM or selected off-site occasions, with a focus on atmosphere,
              hospitality, and practical ease.
            </p>
          </div>

          <div className="services-feature-grid">
            {serviceCards.map((service, index) => (
              <article key={service.title} className={`service-feature service-feature-${index + 1}`}>
                <div className="service-feature-panel">
                  <span className="eyebrow plain-eyebrow inverse-eyebrow">{service.eyebrow}</span>
                  <h3>{service.title}</h3>
                  <p>{service.text}</p>
                  <Link className="outline-button image-outline-button" href={service.href}>
                    {service.button}
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="faq-section">
        <div className="container faq-layout">
          <div>
            <SectionIntro
              eyebrow="FAQ"
              title="Common questions before people decide what to book, join, or host"
              text="These answers make the next step simpler if you are still deciding between a public event, private booking, membership, or support service."
            />
            <Link className="outline-button" href="/contact">
              Contact us
            </Link>
          </div>
          <FaqAccordion items={faqs} />
        </div>
      </section>

      <PageCta
        title="Tell us what you are planning and we will help shape the right route."
        text="Whether you want to join, host, book privately, or request support, the best next step is a short conversation."
        action={{ label: "Contact RORUM", href: "/contact" }}
      />
    </main>
  );
}
