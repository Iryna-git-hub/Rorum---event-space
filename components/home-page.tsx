import Link from "next/link";
import { EventsCarousel } from "@/components/events-carousel";
import { HomeBodyClass } from "@/components/home-body-class";
import { FaqAccordion, PageCta, SectionIntro } from "@/components/page-sections";
import { faqs } from "@/lib/site-data";

const serviceCards = [
  {
    eyebrow: "Designed for",
    title: "Event styling and space decoration",
    text: "Every detail matters. We design and decorate spaces that delight the senses, leaving your guests inspired and immersed in your event story.",
    button: "Get my proposal",
    href: "/event-decoration",
  },
  {
    eyebrow: "Prepared",
    title: "Catering with a Ukrainian soul",
    text: "A curated catering experience blending Scandinavian simplicity with the richness of Ukrainian cuisine. Fresh ingredients, elegant presentation and menus tailored to your event.",
    button: "Request a menu",
    href: "/catering-services",
  },
];

export function HomePage() {
  return (
    <main className="page-shell">
      <HomeBodyClass />
      <section className="home-hero">
        <div className="container">
          <div className="home-hero-panel">
            <div className="home-hero-content">
            <h1>Host Your Event in Our Creative Space in Copenhagen</h1>
            <p>
              Turn your passion into meaningful experiences
            </p>
            <p>
              RORUM is a creative event space and community for people who want to
              share, create, and grow.
            </p>
            <p>
              Host your own workshops, bring your ideas to life, and connect with
              like-minded people. Whether it&apos;s art, craft, wellness, food, or
              something completely unique — your passion deserves a space.
            </p>
            <p>Your hobby can become something bigger.</p>
            <div className="hero-actions">
              <Link className="solid-button light-button" href="/host-an-event">
                Host an event
              </Link>
              <Link className="outline-button light-outline" href="/events">
                Explore upcoming events
              </Link>
            </div>
            <div className="hero-pathways" aria-label="Popular ways to start with RORUM">
              <article className="hero-pathway">
                <h2>Host private / public event</h2>
                <p>
                  Bring your idea to RORUM as an intimate private gathering or a
                  public format people can discover and join.
                </p>
                <div className="hero-pathway-actions">
                  <Link className="outline-button light-outline small-button" href="/host-an-event">
                    Host private event
                  </Link>
                  <Link className="outline-button light-outline small-button" href="/host-public-event">
                    Host public event
                  </Link>
                </div>
              </article>

              <article className="hero-pathway">
                <h2>Attend events</h2>
                <p>
                  Discover workshops, gatherings, and experiences happening at
                  RORUM.
                </p>
                <div className="hero-pathway-actions">
                  <Link className="outline-button light-outline small-button" href="/events">
                    Explore events
                  </Link>
                </div>
              </article>

              <article className="hero-pathway">
                <h2>Book event decoration and catering</h2>
                <p>
                  Make your event unforgettable with beautiful decoration and
                  delicious catering your guests will love.
                </p>
                <div className="hero-pathway-actions">
                  <Link className="outline-button light-outline small-button" href="/event-decoration">
                    Request event decoration
                  </Link>
                  <Link className="outline-button light-outline small-button" href="/catering-services">
                    Request catering
                  </Link>
                </div>
              </article>
            </div>
            </div>
          </div>
        </div>
      </section>

      <section className="slider-section">
        <div className="container">
          <EventsCarousel />
        </div>
      </section>

      <section className="services-highlight">
        <div className="container">
          <div className="section-intro">
            <span className="eyebrow plain-eyebrow">Services</span>
            <h2>Book Event Services that elevate every detail</h2>
            <p>
              From concept to experience, we design, style and serve
              unforgettable moments.
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
              title="Have a question?"
              text="Here the homepage now follows the wireframe more closely with a title block on the left and a proper accordion on the right."
            />
            <Link className="outline-button" href="/contact">
              Contact us
            </Link>
          </div>
          <FaqAccordion items={faqs} />
        </div>
      </section>

      <PageCta
        title="Start with one conversation, then shape the right path together."
        text="Whether you want to attend, host, collaborate, or build a recurring concept, the fastest next step is a short conversation with the team."
        action={{ label: "Talk to RORUM", href: "/contact" }}
      />
    </main>
  );
}
