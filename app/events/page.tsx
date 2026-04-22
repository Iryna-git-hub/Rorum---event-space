"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { events } from "@/components/events-carousel";

type SortMode = "all" | "date" | "category";
type Timeframe = "all" | "today-tomorrow" | "next-10-days" | "next-month";

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

function ChevronDownIcon() {
  return (
    <svg className="filter-chevron" viewBox="0 0 24 24" aria-hidden="true">
      <path d="m6 9 6 6 6-6" />
    </svg>
  );
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

export default function EventsPage() {
  const [sortMode, setSortMode] = useState<SortMode>("all");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [selectedTimeframe, setSelectedTimeframe] = useState<Timeframe>("all");
  const [openDropdown, setOpenDropdown] = useState<"date" | "category" | null>(null);
  const dateFilterLabels: Record<Timeframe | "earliest", string> = {
    all: "All dates",
    earliest: "Earliest first",
    "today-tomorrow": "Today / tomorrow",
    "next-10-days": "Next 10 days",
    "next-month": "Next month",
  };

  const dateFilterLabel =
    sortMode === "date" && selectedTimeframe === "all"
      ? dateFilterLabels.earliest
      : dateFilterLabels[selectedTimeframe];

  const categories = useMemo(
    () => ["all", ...Array.from(new Set(events.map((event) => event.category))).sort()],
    []
  );

  const visibleEvents = useMemo(() => {
    let nextEvents = events.filter((event) => {
      const matchesCategory = selectedCategory === "all" || event.category === selectedCategory;
      const distance = getDayDistance(event.date);
      const matchesTimeframe =
        selectedTimeframe === "all" ||
        (selectedTimeframe === "today-tomorrow" && distance >= 0 && distance <= 1) ||
        (selectedTimeframe === "next-10-days" && distance >= 0 && distance <= 10) ||
        (selectedTimeframe === "next-month" && distance >= 0 && distance <= 31);

      return matchesCategory && matchesTimeframe;
    });

    if (sortMode === "date" || selectedTimeframe !== "all") {
      return [...nextEvents].sort((a, b) => getEventDateValue(a.date) - getEventDateValue(b.date));
    }

    if (sortMode === "category" || selectedCategory !== "all") {
      return [...nextEvents].sort((a, b) => {
        const byCategory = a.category.localeCompare(b.category);
        return byCategory || getEventDateValue(a.date) - getEventDateValue(b.date);
      });
    }

    return nextEvents;
  }, [selectedCategory, selectedTimeframe, sortMode]);

  return (
    <main className="page-shell events-page">
      <section className="events-page-hero">
        <div className="container">
          <span className="eyebrow plain-eyebrow">Schedule</span>
          <h1>Explore Upcoming Events</h1>
          <p>Browse what&apos;s happening at RORUM and find your next experience.</p>
        </div>
      </section>

      <section className="events-list-section">
        <div className="container">
          <div className="events-toolbar" aria-label="Event sorting">
            <button
              className={`filter-button ${sortMode === "all" && selectedTimeframe === "all" && selectedCategory === "all" ? "active-filter" : ""}`}
              type="button"
              onClick={() => {
                setSortMode("all");
                setSelectedCategory("all");
                setSelectedTimeframe("all");
              }}
            >
              Show all events
            </button>
            <details
              className="filter-dropdown"
              open={openDropdown === "date"}
              onMouseLeave={() => setOpenDropdown(null)}
              onBlur={(event) => {
                if (!event.currentTarget.contains(event.relatedTarget)) {
                  setOpenDropdown(null);
                }
              }}
            >
              <summary onClick={(event) => {
                event.preventDefault();
                setOpenDropdown(openDropdown === "date" ? null : "date");
              }}>
                <span>Date</span>
                <strong>{dateFilterLabel}</strong>
                <ChevronDownIcon />
              </summary>
              <div className="filter-dropdown-menu">
                <button
                  type="button"
                  onClick={() => {
                    setSelectedTimeframe("all");
                    setSortMode("date");
                    setOpenDropdown(null);
                  }}
                >
                  Earliest first
                </button>
                <button
                  type="button"
                  onClick={() => {
                    setSelectedTimeframe("today-tomorrow");
                    setSortMode("date");
                    setOpenDropdown(null);
                  }}
                >
                  Today / tomorrow
                </button>
                <button
                  type="button"
                  onClick={() => {
                    setSelectedTimeframe("next-10-days");
                    setSortMode("date");
                    setOpenDropdown(null);
                  }}
                >
                  Next 10 days
                </button>
                <button
                  type="button"
                  onClick={() => {
                    setSelectedTimeframe("next-month");
                    setSortMode("date");
                    setOpenDropdown(null);
                  }}
                >
                  Next month
                </button>
              </div>
            </details>
            <details
              className="filter-dropdown"
              open={openDropdown === "category"}
              onMouseLeave={() => setOpenDropdown(null)}
              onBlur={(event) => {
                if (!event.currentTarget.contains(event.relatedTarget)) {
                  setOpenDropdown(null);
                }
              }}
            >
              <summary onClick={(event) => {
                event.preventDefault();
                setOpenDropdown(openDropdown === "category" ? null : "category");
              }}>
                <span>Category</span>
                <strong>{selectedCategory === "all" ? "All categories" : selectedCategory}</strong>
                <ChevronDownIcon />
              </summary>
              <div className="filter-dropdown-menu">
                {categories.map((category) => (
                  <button
                    key={category}
                    type="button"
                    onClick={() => {
                      setSelectedCategory(category);
                      setSortMode("category");
                      setOpenDropdown(null);
                    }}
                  >
                    {category === "all" ? "All categories" : category}
                  </button>
                ))}
              </div>
            </details>
          </div>

          <div className="events-grid">
            {visibleEvents.map((event, index) => (
              <article key={event.title} className="event-slide event-tile">
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
        </div>
      </section>

      <section className="events-subscribe-section">
        <div className="container subscribe-panel">
          <div>
            <span className="eyebrow plain-eyebrow">Subscribe to updates</span>
            <h2>Get event announcement and workshop updates delivered to your inbox.</h2>
          </div>
          <form className="subscribe-form">
            <input type="email" placeholder="Your email" aria-label="Your email" />
            <button className="solid-button" type="submit">
              Subscribe
            </button>
            <p>We respect your inbox. Unsubscribe anytime from any email we send.</p>
          </form>
        </div>
      </section>

      <section className="events-host-section">
        <div className="container host-public-panel">
          <div>
            <h2>Ready to share your experience?</h2>
            <p>
              We are looking for teachers, artists and creators to host workshops
              and classes in our space.
            </p>
          </div>
          <Link className="solid-button" href="/host-public-event">
            Post public event
          </Link>
        </div>
      </section>
    </main>
  );
}
