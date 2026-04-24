import Image from "next/image";
import Link from "next/link";

const publicPackages = [
  {
    title: "Single Session",
    details: "Up to 2 hours",
    price: "700 DKK ex VAT",
    text: "Perfect for facilitators, teachers, or hosts who need a calm and well-prepared space for a one-time workshop or event.",
    includes: [
      "Private use of the space",
      "Flexible setup with chairs, mats, or open floor",
      "Wi-Fi, tea, water, and light on-site support",
    ],
  },
  {
    title: "Evening Series",
    details: "1 hour per session, minimum 4 weeks",
    price: "1250 DKK ex VAT / 4 sessions or 2000 DKK ex VAT / 8 sessions",
    text: "Designed for recurring weekly formats such as yoga, meditation, coaching circles, courses, and regular community gatherings.",
    includes: [
      "Reserved weekly time slot",
      "Consistent setup tailored to your format",
      "Tea, water, and optional storage by agreement",
    ],
  },
  {
    title: "Weekend Event",
    details: "Up to 4 hours",
    price: "1200 DKK ex VAT",
    text: "Ideal for masterclasses, creative workshops, personal development sessions, small screenings, and curated social events.",
    includes: [
      "Private use of the space",
      "Flexible setup for circle, mats, or tables",
      "Tea, water, calm atmosphere, and on-site support",
    ],
  },
] as const;

const privatePackages = [
  {
    title: "Morning Session",
    details: "08:30 to 12:30",
    price: "2000 DKK ex VAT",
    text: "Suitable for focused meetings, workshops, and small group sessions for up to 12 guests.",
    includes: [
      "Private use of the space",
      "Screen, Wi-Fi, tables and chairs",
      "Coffee, tea, water, and hosting support",
    ],
    optional: "Croissant and juice: 90 DKK per person",
  },
  {
    title: "Afternoon Session",
    details: "13:00 to 17:00",
    price: "2000 DKK ex VAT",
    text: "A flexible format for presentations, workshops, and team meetings with a simple, well-organized setup.",
    includes: [
      "Private use of the space",
      "Screen, Wi-Fi, tables and chairs",
      "Coffee, tea, water, and on-site support",
    ],
    optional: "Fruit and snacks: 90 DKK per person",
  },
  {
    title: "Full Day Session",
    details: "09:00 to 17:00",
    price: "3700 DKK ex VAT",
    text: "For sessions that need time, continuity, and a calm environment throughout the day.",
    includes: [
      "Private use of the space",
      "Screen, Wi-Fi, tables and chairs",
      "Coffee, tea, water, and on-site support",
    ],
    optional: "Lunch and snacks: 320 DKK per person",
  },
] as const;

const publicFaqs = [
  {
    question: "Who can apply to host at RORUM?",
    answer:
      "Facilitators, teachers, artists, coaches, and community organizers with a thoughtful format for a small public group are all welcome to apply.",
  },
  {
    question: "Does my idea need to be fully developed already?",
    answer:
      "No. A clear direction is enough. Share your format, audience, and any questions around setup or support and we can help shape the next step.",
  },
  {
    question: "Is the space suited for large events?",
    answer:
      "RORUM works best for intimate groups. Depending on the format, the space is best suited for around 4 to 15 guests.",
  },
] as const;

const privateFaqs = [
  {
    question: "What is included in a private booking?",
    answer:
      "Each booking includes private use of the space, Wi-Fi, screen access, tables and chairs, coffee, tea, water, and on-site support before and during the session.",
  },
  {
    question: "Who is the space best suited for?",
    answer:
      "Private bookings are ideal for founders, small teams, intimate workshops, client sessions, planning days, and curated gatherings for up to 12 guests.",
  },
  {
    question: "What is the cancellation policy?",
    answer:
      "Cancellation is free up to 5 working days before the session. There is a 50 percent charge if cancelled within 24 hours, and 100 percent if cancelled less than 24 hours before.",
  },
] as const;

function MailIcon() {
  return (
    <svg className="lucide-icon" viewBox="0 0 24 24" aria-hidden="true">
      <rect width="20" height="16" x="2" y="4" rx="2" />
      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
    </svg>
  );
}

function PhoneIcon() {
  return (
    <svg className="lucide-icon" viewBox="0 0 24 24" aria-hidden="true">
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.8 19.8 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.12 4.2 2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.12.9.33 1.77.62 2.61a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.47-1.19a2 2 0 0 1 2.11-.45c.84.29 1.71.5 2.61.62A2 2 0 0 1 22 16.92" />
    </svg>
  );
}

function MapPinIcon() {
  return (
    <svg className="lucide-icon" viewBox="0 0 24 24" aria-hidden="true">
      <path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  );
}

type Variant = "public" | "private";

export function HostEventPageContent({ variant }: { variant: Variant }) {
  const isPublic = variant === "public";
  const eyebrow = isPublic ? "Host an event" : "Private bookings";
  const title = isPublic
    ? "Host your workshop, class, or community event at RORUM"
    : "Book RORUM for meetings and private events";
  const intro = isPublic
    ? "RORUM is best suited for small, intentional groups and public formats that benefit from a calm atmosphere, a thoughtful setup, and a space that feels personal rather than generic."
    : "RORUM is a small, curated space in central Copenhagen designed for meetings, workshops, and private events for up to 12 guests with support before and during the session.";
  const calloutTitle = isPublic
    ? "Create a public format people can discover, join, and return to."
    : "Choose a private session format that fits your team, client, or gathering.";
  const calloutText = isPublic
    ? "Apply to host your format and we will help shape the right package, timing, and setup."
    : "Morning, afternoon, and full-day bookings are available, with optional catering and thoughtful hosting support.";
  const packages = isPublic ? publicPackages : privatePackages;
  const faqs = isPublic ? publicFaqs : privateFaqs;
  const processSteps = isPublic
    ? [
        { title: "Choose a package", text: "Pick the format that matches your idea and audience." },
        { title: "Send your application", text: "Share the concept, timing, and support you need." },
        { title: "Confirm the setup", text: "We align on details, availability, and the final flow." },
      ]
    : [
        { title: "Choose a session", text: "Select the booking format that fits your meeting or event." },
        { title: "Send your request", text: "Share the date, guest count, and anything you want to add." },
        { title: "Confirm the booking", text: "We align on timing, setup, and practical details together." },
      ];

  return (
    <main className="page-shell host-event-page">
      <section className="host-event-hero">
        <div className="container host-event-layout">
          <div className="host-event-copy">
            <span className="eyebrow plain-eyebrow">{eyebrow}</span>
            <h1>{title}</h1>
            <p>{intro}</p>
            <div className="host-event-callout">
              <h2>{calloutTitle}</h2>
              <p>{calloutText}</p>
            </div>
            <div className="decoration-contact-list">
              <span><MailIcon /> hello@rorum.dk</span>
              <span><PhoneIcon /> +45 40 40 40 40</span>
              <span><MapPinIcon /> Central Copenhagen</span>
            </div>
          </div>
          <div className="host-space-visual" aria-hidden="true">
            <Image
              src="/space-photo.jpg"
              alt=""
              fill
              sizes="(max-width: 900px) 100vw, 42vw"
              className="host-space-image"
            />
          </div>
        </div>
      </section>

      <section className="detail-section">
        <div className="container">
          <div className="section-intro">
            <span className="eyebrow plain-eyebrow">How it works</span>
            <h2>{isPublic ? "A simple path from idea to confirmed event" : "A simple path from request to confirmed booking"}</h2>
            <p>
              {isPublic
                ? "The hosting flow is designed to help facilitators move forward without overcomplicating the first step."
                : "The booking flow is designed to make private sessions feel clear, practical, and easy to organize."}
            </p>
          </div>
          <div className="process-line" aria-label="Progress steps">
            {processSteps.map((step, index) => (
              <article key={step.title} className="process-step">
                <div className="process-step-head">
                  <span className="process-index">0{index + 1}</span>
                  {index < processSteps.length - 1 ? <span className="process-arrow" aria-hidden="true">→</span> : null}
                </div>
                <h3>{step.title}</h3>
                <p>{step.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="detail-section">
        <div className="container">
          <div className="section-intro">
            <span className="eyebrow plain-eyebrow">{isPublic ? "Packages" : "Session formats"}</span>
            <h2>{isPublic ? "Choose the hosting format that fits your idea" : "Choose the booking format that fits your day"}</h2>
            <p>
              {isPublic
                ? "RORUM is designed for facilitators and hosts who want a thoughtful environment rather than a generic rental. Each package supports intimate, intentional group experiences."
                : "Private bookings include a practical setup, drinks, and on-site support so your team or guests can focus on the session itself."}
            </p>
          </div>
          <div className="home-package-grid">
            {packages.map((item, index) => (
              <article key={item.title} className="info-card package-card">
                <div className="info-card-body">
                  {index === 0 ? <span className="package-badge">Popular</span> : null}
                  <h3>{item.title}</h3>
                  <strong>{item.details}</strong>
                  <p>{item.text}</p>
                  <ul className="package-list">
                    {item.includes.map((line) => (
                      <li key={line}>{line}</li>
                    ))}
                  </ul>
                  {"optional" in item ? <p className="package-optional">Optional: {item.optional}</p> : null}
                </div>
                <span className="package-price">{item.price}</span>
                <a className="text-link" href="#request-form">
                  {isPublic ? "Choose this package" : "Choose this session"}
                </a>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="detail-section">
        <div className="container host-application-layout">
          <div>
            <div className="section-intro">
              <span className="eyebrow plain-eyebrow">{isPublic ? "Apply" : "Request a booking"}</span>
              <h2>{isPublic ? "Once the package feels right, send your application" : "Once the format feels right, send your booking request"}</h2>
              <p>
                {isPublic
                  ? "Tell us about your idea, the audience, and the kind of support that would help most. A clear direction is enough to start."
                  : "Tell us about your preferred timing, guest count, and any support you would like to add. We will help shape the best session format."}
              </p>
            </div>
            <div className="request-note">
              <strong>{isPublic ? "What to prepare" : "Helpful to include"}</strong>
              <p>
                {isPublic
                  ? "Your format, ideal audience, preferred timing, and whether you want a one-time event or a recurring slot."
                  : "Your preferred date, guest count, session type, and whether you want catering or styling support."}
              </p>
            </div>
          </div>

          <form id="request-form" className="host-application-form">
            <div className="host-form-grid host-form-grid-personal">
              <label><span>First name</span><input type="text" /></label>
              <label><span>Last name</span><input type="text" /></label>
              <label><span>Email</span><input type="email" /></label>
              <label><span>Phone number</span><input type="tel" /></label>
            </div>
            <div className="host-form-grid host-form-grid-planning">
              <label>
                <span>{isPublic ? "What would you like to host?" : "What would you like to book?"}</span>
                <select defaultValue="">
                  <option value="" disabled>Select an option</option>
                  {(isPublic
                    ? ["Workshop", "Class", "Wellness session", "Community gathering", "Creative event"]
                    : ["Meeting", "Private workshop", "Founder session", "Presentation", "Private gathering"]
                  ).map((option) => (
                    <option key={option}>{option}</option>
                  ))}
                </select>
              </label>
              <fieldset>
              <legend>{isPublic ? "What support would help most?" : "What do you need for the session?"}</legend>
              {(isPublic
                ? ["Help shaping the format", "A recurring slot", "Promotion support", "Setup support", "Hospitality add-ons", "Not sure yet"]
                : ["Morning session", "Afternoon session", "Full day session", "Catering add-on", "Styling support", "Not sure yet"]
              ).map((option) => (
                <label key={option}><input type="checkbox" /> {option}</label>
              ))}
              </fieldset>
            </div>
            <label><span>Message</span><textarea rows={5} /></label>
            <div className="host-form-actions">
              <label className="checkbox-row">
                <input type="checkbox" />
                <span>I agree to be contacted about this request.</span>
              </label>
              <button className="solid-button" type="submit">{isPublic ? "Apply to host" : "Request booking"}</button>
            </div>
          </form>
        </div>
      </section>

      <section className="host-faq-section">
        <div className="container host-faq-layout">
          <div>
            <span className="eyebrow plain-eyebrow">Have a question?</span>
            <h2>{isPublic ? "Answers about hosting at RORUM" : "Answers about private bookings at RORUM"}</h2>
            <Link className="solid-button" href="/contact">Contact us</Link>
          </div>
          <div className="faq-accordion">
            {faqs.map((item) => (
              <details key={item.question} className="faq-item">
                <summary className="faq-summary">
                  <h3>{item.question}</h3>
                  <span className="faq-icon" aria-hidden="true">+</span>
                </summary>
                <div className="faq-answer">
                  <p>{item.answer}</p>
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
