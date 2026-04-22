"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";

const cateringImages = [
  "https://images.pexels.com/photos/20488500/pexels-photo-20488500.jpeg?auto=compress&cs=tinysrgb&w=900",
  "https://images.pexels.com/photos/20488508/pexels-photo-20488508.jpeg?auto=compress&cs=tinysrgb&w=900",
  "https://images.pexels.com/photos/5638732/pexels-photo-5638732.jpeg?auto=compress&cs=tinysrgb&w=900",
  "https://images.pexels.com/photos/6605214/pexels-photo-6605214.jpeg?auto=compress&cs=tinysrgb&w=900",
  "https://images.pexels.com/photos/5718071/pexels-photo-5718071.jpeg?auto=compress&cs=tinysrgb&w=900",
  "https://images.pexels.com/photos/6941010/pexels-photo-6941010.jpeg?auto=compress&cs=tinysrgb&w=900",
  "https://images.pexels.com/photos/5779787/pexels-photo-5779787.jpeg?auto=compress&cs=tinysrgb&w=900",
  "https://images.pexels.com/photos/6004715/pexels-photo-6004715.jpeg?auto=compress&cs=tinysrgb&w=900",
  "https://images.pexels.com/photos/4252145/pexels-photo-4252145.jpeg?auto=compress&cs=tinysrgb&w=900",
  "https://images.pexels.com/photos/5718070/pexels-photo-5718070.jpeg?auto=compress&cs=tinysrgb&w=900",
];

const cateringFaqs = [
  {
    question: "Can you create a menu with Ukrainian dishes?",
    answer:
      "Yes. We can shape menus inspired by Ukrainian home cooking, seasonal ingredients, and a calm Scandinavian presentation style.",
  },
  {
    question: "Do you offer buffet-style catering?",
    answer:
      "Yes. Buffet and sharing table formats work especially well for workshops, community events, intimate celebrations, and informal dinners.",
  },
  {
    question: "Can catering be combined with decoration?",
    answer:
      "Yes. Catering and decoration can be planned together so the food, table styling, flowers, and guest flow feel like one complete experience.",
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

export default function CateringServicesPage() {
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
          current === null ? current : (current - 1 + cateringImages.length) % cateringImages.length
        );
      }
      if (event.key === "ArrowRight") {
        setLightboxIndex((current) =>
          current === null ? current : (current + 1) % cateringImages.length
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
    <main className="page-shell catering-page">
      <section className="decoration-hero">
        <div className="container">
          <span className="eyebrow plain-eyebrow">Catering services</span>
          <h1>Catering with a Ukrainian Soul</h1>
          <p>
            We create warm, generous catering experiences inspired by Ukrainian
            food culture and styled with Scandinavian calm. Think sharing tables,
            seasonal dishes, thoughtful presentation, and food your guests will remember.
          </p>
        </div>
      </section>

      <section className="decoration-gallery-section">
        <div className="container">
          <div className="decoration-gallery-head">
            <div>
              <span className="eyebrow plain-eyebrow">Menu inspiration</span>
              <h2>Buffets, tables and Ukrainian-inspired dishes</h2>
            </div>
            <div className="slider-controls">
              <button className="slider-button" type="button" disabled={!canScrollPrev} onClick={() => scrollGallery("prev")} aria-label="Previous catering image">←</button>
              <button className="slider-button" type="button" disabled={!canScrollNext} onClick={() => scrollGallery("next")} aria-label="Next catering image">→</button>
            </div>
          </div>

          <div className="decoration-gallery" ref={galleryRef} onScroll={updateGalleryState}>
            {cateringImages.map((image, index) => (
              <button
                type="button"
                className="decoration-gallery-card"
                key={image}
                onClick={() => setLightboxIndex(index)}
                style={{ backgroundImage: `url("${image}")` }}
                aria-label={`Catering inspiration ${index + 1}`}
              />
            ))}
          </div>

          <div className="gallery-dots" aria-label="Gallery position">
            {cateringImages.map((image, index) => (
              <span key={image} className={`gallery-dot ${index === activeSlide ? "active-dot" : ""}`} />
            ))}
          </div>
        </div>
      </section>

      {lightboxIndex !== null ? (
        <div className="gallery-lightbox" role="dialog" aria-modal="true" aria-label="Catering image preview">
          <button className="lightbox-backdrop" type="button" onClick={() => setLightboxIndex(null)} aria-label="Close image preview" />
          <div className="lightbox-panel">
            <button className="lightbox-close" type="button" onClick={() => setLightboxIndex(null)} aria-label="Close image preview">×</button>
            <button
              className="lightbox-arrow lightbox-arrow-left"
              type="button"
              onClick={() => setLightboxIndex((lightboxIndex - 1 + cateringImages.length) % cateringImages.length)}
              aria-label="Previous image"
            >
              ←
            </button>
            <img src={cateringImages[lightboxIndex]} alt={`Catering inspiration ${lightboxIndex + 1}`} />
            <button
              className="lightbox-arrow lightbox-arrow-right"
              type="button"
              onClick={() => setLightboxIndex((lightboxIndex + 1) % cateringImages.length)}
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
            <span className="eyebrow plain-eyebrow">Catering request</span>
            <h2>Start Planning</h2>
            <p>
              Tell us a bit about your event, your guests, and the feeling you
              want around the table. We will get back to you to discuss menu
              ideas, serving format, dietary needs and next steps. We will help
              shape a catering concept that fits your space and your vision.
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
                <option>Buffet or reception</option>
                <option>Workshop catering</option>
                <option>Corporate event</option>
              </select>
            </label>
            <label><span>Event Location</span><input type="text" /></label>
            <div className="form-two-columns">
              <label><span>Event Date</span><input type="date" /></label>
              <label><span>Event Time</span><input type="time" /></label>
            </div>
            <label><span>Guest count and food details</span><textarea rows={5} /></label>
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
            <h2>Common questions about catering</h2>
          </div>
          <div className="faq-accordion">
            {cateringFaqs.map((item) => (
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
              We can help you choose the right catering format, serving rhythm,
              and menu direction for your event.
            </p>
          </div>
          <Link className="solid-button" href="/contact">Contact us</Link>
        </div>
      </section>
    </main>
  );
}
