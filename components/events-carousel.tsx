"use client";

import { useRef } from "react";
import Link from "next/link";
import { events } from "@/lib/events-data";

export { events };

function getEventDateValue(date: string) {
  const [day, rest] = date.split(" ");
  const month = rest?.replace(",", "");
  return new Date(`${month} ${day}, 2026`).getTime();
}

function startOfDay(date: Date) {
  return new Date(date.getFullYear(), date.getMonth(), date.getDate()).getTime();
}

function getDayDistance(date: string) {
  const today = startOfDay(new Date());
  const eventDate = startOfDay(new Date(getEventDateValue(date)));
  return Math.round((eventDate - today) / 86400000);
}

function getEventBadge(date: string) {
  const distance = getDayDistance(date);

  if (distance === 0) return "Сегодня";
  if (distance === 1) return "Завтра";
  if (distance > 1 && distance <= 10) return "Скоро";

  return null;
}

function CalendarIcon() {
  return (
    <svg className="lucide-icon" viewBox="0 0 24 24" aria-hidden="true">
      <path d="M8 2v4" />
      <path d="M16 2v4" />
      <rect width="18" height="18" x="3" y="4" rx="2" />
      <path d="M3 10h18" />
    </svg>
  );
}

function ClockIcon() {
  return (
    <svg className="lucide-icon" viewBox="0 0 24 24" aria-hidden="true">
      <circle cx="12" cy="12" r="10" />
      <path d="M12 6v6l4 2" />
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

function TicketIcon() {
  return (
    <svg className="lucide-icon" viewBox="0 0 24 24" aria-hidden="true">
      <path d="M2 9a3 3 0 0 1 0 6v2a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-2a3 3 0 0 1 0-6V7a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2Z" />
      <path d="M13 5v2" />
      <path d="M13 17v2" />
      <path d="M13 11v2" />
    </svg>
  );
}

function UsersIcon() {
  return (
    <svg className="lucide-icon" viewBox="0 0 24 24" aria-hidden="true">
      <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
    </svg>
  );
}

export function EventsCarousel() {
  const trackRef = useRef<HTMLDivElement>(null);

  const scrollByCard = (direction: "left" | "right") => {
    const track = trackRef.current;
    if (!track) return;

    const amount = Math.min(430, track.clientWidth * 0.9) * (direction === "right" ? 1 : -1);
    track.scrollBy({ left: amount, behavior: "smooth" });
  };

  return (
    <>
      <div className="section-head-row">
        <div className="section-intro compact-intro">
          <span className="eyebrow plain-eyebrow">Events</span>
          <h2>Explore upcoming space events</h2>
          <p>Browse workshops and creative gatherings starting soon.</p>
        </div>

        <div className="section-head-actions">
          <Link className="outline-button" href="/events">
            View all events
          </Link>
          <div className="slider-controls" aria-label="Carousel controls">
            <button
              type="button"
              className="slider-button"
              aria-label="Previous events"
              onClick={() => scrollByCard("left")}
            >
              ←
            </button>
            <button
              type="button"
              className="slider-button"
              aria-label="Next events"
              onClick={() => scrollByCard("right")}
            >
              →
            </button>
          </div>
        </div>
      </div>

      <div
        ref={trackRef}
        className="event-slider"
        role="region"
        aria-label="Featured community events"
      >
        {events.map((event, index) => (
          <article key={event.title} className="event-slide">
            <div
              className={`event-slide-media event-slide-media-${index + 1}`}
              style={{
                backgroundImage: `linear-gradient(180deg, rgba(32, 34, 29, 0), rgba(32, 34, 29, 0.28)), url("${event.image}")`,
                backgroundPosition: event.imagePosition ?? "center",
              }}
            >
              <span className="event-category">{event.category}</span>
              {getEventBadge(event.date) ? (
                <span className="event-date-badge">{getEventBadge(event.date)}</span>
              ) : null}
            </div>
            <div className="event-slide-body">
              <h3>{event.title}</h3>
              <div className="event-meta">
                <span className="event-meta-item">
                  <CalendarIcon />
                  {event.date}
                </span>
                <span className="event-meta-item">
                  <ClockIcon />
                  {event.time}
                </span>
                <span className="event-meta-item">
                  <MapPinIcon />
                  {event.location}
                </span>
                <span className={`event-meta-item availability ${event.spotsLeft === 0 ? "sold-out" : ""}`}>
                  <UsersIcon />
                  {event.spotsLeft > 0 ? `${event.spotsLeft} spots left` : "Sold out"}
                </span>
                <span className="event-meta-item event-price">
                  <TicketIcon />
                  {event.price}
                </span>
              </div>
              <div className="event-actions">
                {event.spotsLeft > 0 ? (
                  <Link className="solid-button small-button" href={`/checkout/${event.slug}`}>
                    Get ticket
                  </Link>
                ) : (
                  <span className="solid-button small-button unavailable-button" aria-disabled="true">
                    Get ticket
                  </span>
                )}
                <Link className="outline-button small-button secondary-button" href={`/events/${event.slug}`}>
                  View details
                </Link>
              </div>
            </div>
          </article>
        ))}
      </div>
    </>
  );
}
