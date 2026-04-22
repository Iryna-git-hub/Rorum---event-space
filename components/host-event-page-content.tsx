import Link from "next/link";

const hostFaqs = [
  {
    question: "Who can apply to host an event?",
    answer:
      "Workshop leaders, educators, artists, community organizers, creative professionals, and people with a clear idea for a thoughtful gathering are welcome to apply.",
  },
  {
    question: "Can RORUM help shape my event concept?",
    answer:
      "Yes. We can help clarify the format, guest flow, timing, capacity, communication, and practical needs before the event goes live.",
  },
  {
    question: "Do I need a finished plan before applying?",
    answer:
      "No. A strong direction is enough. Share what you want to create, who it is for, and what kind of support you may need.",
  },
];

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

export function HostEventPageContent({ label }: { label: string }) {
  return (
    <main className="page-shell host-event-page">
      <section className="host-event-hero">
        <div className="container host-event-layout">
          <div className="host-event-copy">
            <span className="eyebrow plain-eyebrow">{label}</span>
            <h1>Host your event at RORUM</h1>
            <p>
              Have a workshop, class or idea to share? Bring it to life in our
              inspiring space with support, exposure and a community eager to
              join your events.
            </p>
            <div className="host-event-callout">
              <h2>Host your event and create unforgettable experiences.</h2>
              <p>Apply here.</p>
            </div>
            <div className="decoration-contact-list">
              <span><MailIcon /> hello@rorum.com</span>
              <span><PhoneIcon /> +45 40 40 40 40</span>
              <span><MapPinIcon /> Copenhagen, Denmark 1429</span>
            </div>
          </div>

          <form className="host-application-form">
            <div className="form-two-columns">
              <label><span>First name</span><input type="text" /></label>
              <label><span>Last name</span><input type="text" /></label>
            </div>
            <label><span>Email</span><input type="email" /></label>
            <label><span>Phone number</span><input type="tel" /></label>
            <label>
              <span>Event category</span>
              <select defaultValue="">
                <option value="" disabled>Select event category</option>
                <option>Workshop</option>
                <option>Class</option>
                <option>Community event</option>
                <option>Creative gathering</option>
                <option>Wellness session</option>
              </select>
            </label>
            <fieldset>
              <legend>What do you do?</legend>
              <label><input type="checkbox" /> Workshop leader</label>
              <label><input type="checkbox" /> Educator</label>
              <label><input type="checkbox" /> Artist</label>
              <label><input type="checkbox" /> Community organizer</label>
              <label><input type="checkbox" /> Creative professional</label>
              <label><input type="checkbox" /> Other</label>
            </fieldset>
            <label><span>Message</span><textarea rows={5} /></label>
            <label className="checkbox-row">
              <input type="checkbox" />
              <span>I agree to the terms and conditions.</span>
            </label>
            <button className="solid-button" type="submit">Send</button>
          </form>
        </div>
      </section>

      <section className="host-faq-section">
        <div className="container host-faq-layout">
          <div>
            <span className="eyebrow plain-eyebrow">Have a question?</span>
            <h2>Find answers about hosting and attending.</h2>
            <Link className="solid-button" href="/contact">Contact us</Link>
          </div>
          <div className="faq-accordion">
            {hostFaqs.map((item) => (
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
