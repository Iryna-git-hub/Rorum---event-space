"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";

const decorationImages = [
  "https://images.pexels.com/photos/14703711/pexels-photo-14703711.jpeg?auto=compress&cs=tinysrgb&w=900",
  "https://images.pexels.com/photos/8251772/pexels-photo-8251772.jpeg?auto=compress&cs=tinysrgb&w=900",
  "https://images.pexels.com/photos/169193/pexels-photo-169193.jpeg?auto=compress&cs=tinysrgb&w=900",
  "https://images.pexels.com/photos/587741/pexels-photo-587741.jpeg?auto=compress&cs=tinysrgb&w=900",
  "https://images.pexels.com/photos/2306282/pexels-photo-2306282.jpeg?auto=compress&cs=tinysrgb&w=900",
  "https://images.pexels.com/photos/169211/pexels-photo-169211.jpeg?auto=compress&cs=tinysrgb&w=900",
  "https://images.pexels.com/photos/3171815/pexels-photo-3171815.jpeg?auto=compress&cs=tinysrgb&w=900",
  "https://images.pexels.com/photos/541216/pexels-photo-541216.jpeg?auto=compress&cs=tinysrgb&w=900",
  "https://images.pexels.com/photos/260931/pexels-photo-260931.jpeg?auto=compress&cs=tinysrgb&w=900",
  "https://images.pexels.com/photos/1729797/pexels-photo-1729797.jpeg?auto=compress&cs=tinysrgb&w=900",
];

const decorationFaqs = [
  {
    question: "How early should we book event decoration?",
    answer:
      "For larger celebrations, we recommend starting at least four to six weeks ahead. Smaller setups can often be shaped faster depending on the concept and availability.",
  },
  {
    question: "Can you decorate an external venue?",
    answer:
      "Yes. We can support selected venues in Copenhagen and nearby areas when the logistics, access, and setup time work for the concept.",
  },
  {
    question: "Do you help with styling concepts?",
    answer:
      "Yes. We can help define the visual direction, colors, table styling, floral mood, guest flow, and details that make the space feel intentional.",
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

export default function EventDecorationPage() {
  const galleryRef = useRef<HTMLDivElement>(null);
  const [activeSlide, setActiveSlide] = useState(0);
  const [canScrollPrev, setCanScrollPrev] = useState(false);
  const [canScrollNext, setCanScrollNext] = useState(true);
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  useEffect(() => {
    if (lightboxIndex === null) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setLightboxIndex(null);
      if (event.key === "ArrowLeft") {
        setLightboxIndex((current) =>
          current === null ? current : (current - 1 + decorationImages.length) % decorationImages.length
        );
      }
      if (event.key === "ArrowRight") {
        setLightboxIndex((current) =>
          current === null ? current : (current + 1) % decorationImages.length
        );
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [lightboxIndex]);

  const updateGalleryState = () => {
    const gallery = galleryRef.current;
    if (!gallery) return;

    const maxScroll = gallery.scrollWidth - gallery.clientWidth;
    const cardWidth = gallery.firstElementChild?.clientWidth ?? gallery.clientWidth;
    setCanScrollPrev(gallery.scrollLeft > 4);
    setCanScrollNext(gallery.scrollLeft < maxScroll - 4);
    setActiveSlide(Math.round(gallery.scrollLeft / (cardWidth + 16)));
  };

  const scrollGallery = (direction: "prev" | "next") => {
    const gallery = galleryRef.current;
    if (!gallery) return;

    const cardWidth = gallery.firstElementChild?.clientWidth ?? 260;
    gallery.scrollBy({
      left: direction === "next" ? cardWidth + 16 : -(cardWidth + 16),
      behavior: "smooth",
    });
    window.setTimeout(updateGalleryState, 350);
  };

  return (
    <main className="page-shell decoration-page">
      <section className="decoration-hero">
        <div className="container">
          <span className="eyebrow plain-eyebrow">Event decoration</span>
          <h1>Event Styling and Space Decoration</h1>
          <p>
            We shape thoughtful, elegant event environments with Scandinavian
            calm, beautiful table styling, floral moments, atmospheric details,
            and a clear visual concept for your celebration.
          </p>
        </div>
      </section>

      <section className="decoration-gallery-section">
        <div className="container">
          <div className="decoration-gallery-head">
            <div>
              <span className="eyebrow plain-eyebrow">Inspiration</span>
              <h2>Decoration ideas for your event</h2>
            </div>
            <div className="slider-controls">
              <button className="slider-button" type="button" disabled={!canScrollPrev} onClick={() => scrollGallery("prev")} aria-label="Previous decoration image">←</button>
              <button className="slider-button" type="button" disabled={!canScrollNext} onClick={() => scrollGallery("next")} aria-label="Next decoration image">→</button>
            </div>
          </div>

          <div className="decoration-gallery" ref={galleryRef} onScroll={updateGalleryState}>
            {decorationImages.map((image, index) => (
              <button
                type="button"
                className="decoration-gallery-card"
                key={image}
                onClick={() => setLightboxIndex(index)}
                style={{ backgroundImage: `url("${image}")` }}
                aria-label={`Event decoration inspiration ${index + 1}`}
              />
            ))}
          </div>

          <div className="gallery-dots" aria-label="Gallery position">
            {decorationImages.map((image, index) => (
              <span key={image} className={`gallery-dot ${index === activeSlide ? "active-dot" : ""}`} />
            ))}
          </div>
        </div>
      </section>

      {lightboxIndex !== null ? (
        <div className="gallery-lightbox" role="dialog" aria-modal="true" aria-label="Decoration image preview">
          <button className="lightbox-backdrop" type="button" onClick={() => setLightboxIndex(null)} aria-label="Close image preview" />
          <div className="lightbox-panel">
            <button className="lightbox-close" type="button" onClick={() => setLightboxIndex(null)} aria-label="Close image preview">×</button>
            <button
              className="lightbox-arrow lightbox-arrow-left"
              type="button"
              onClick={() => setLightboxIndex((lightboxIndex - 1 + decorationImages.length) % decorationImages.length)}
              aria-label="Previous image"
            >
              ←
            </button>
            <img src={decorationImages[lightboxIndex]} alt={`Event decoration inspiration ${lightboxIndex + 1}`} />
            <button
              className="lightbox-arrow lightbox-arrow-right"
              type="button"
              onClick={() => setLightboxIndex((lightboxIndex + 1) % decorationImages.length)}
              aria-label="Next image"
            >
              →
            </button>
          </div>
        </div>
      ) : null}

      <section className="decoration-planning-section">
        <div className="container decoration-planning-layout">
          <div className="decoration-planning-copy">
            <span className="eyebrow plain-eyebrow">Booking request</span>
            <h2>Start Planning</h2>
            <p>
              Tell us a bit about your event and we will get back to you to
              discuss ideas, possibilities and next steps. We will guide you
              through the process and help shape a decoration concept that fits
              your space and your vision. Fill in the details, and we will
              contact you to start planning your event.
            </p>
            <div className="decoration-contact-list">
              <span><MailIcon /> hello@rorum.com</span>
              <span><PhoneIcon /> +45 40 40 40 40</span>
              <span><MapPinIcon /> Copenhagen, Denmark 1429</span>
            </div>
          </div>

          <form className="decoration-booking-form">
            <div className="form-two-columns">
              <label><span>First Name</span><input type="text" /></label>
              <label><span>Last Name</span><input type="text" /></label>
            </div>
            <label><span>Email</span><input type="email" /></label>
            <label><span>Phone number</span><input type="tel" /></label>
            <label>
              <span>Event Type</span>
              <select defaultValue="">
                <option value="" disabled>Select event type</option>
                <option>Private dinner</option>
                <option>Corporate event</option>
                <option>Wedding or celebration</option>
                <option>Workshop or community gathering</option>
              </select>
            </label>
            <label><span>Event Location</span><input type="text" /></label>
            <div className="form-two-columns">
              <label><span>Event Date</span><input type="date" /></label>
              <label><span>Event Time</span><input type="time" /></label>
            </div>
            <label><span>Details</span><textarea rows={5} /></label>
            <label className="checkbox-row">
              <input type="checkbox" />
              <span>I consent to processing data.</span>
            </label>
            <button className="solid-button" type="submit">Send</button>
          </form>
        </div>
      </section>

      <section className="decoration-faq-section">
        <div className="container">
          <div className="section-intro">
            <span className="eyebrow plain-eyebrow">Frequently Asked Questions</span>
            <h2>Common questions about event decoration</h2>
          </div>
          <div className="faq-accordion">
            {decorationFaqs.map((item) => (
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

      <section className="events-host-section">
        <div className="container host-public-panel">
          <div>
            <h2>If you have questions</h2>
            <p>
              We can help you understand what is possible, what level of
              decoration fits your event, and how to begin.
            </p>
          </div>
          <Link className="solid-button" href="/contact">Contact us</Link>
        </div>
      </section>
    </main>
  );
}
