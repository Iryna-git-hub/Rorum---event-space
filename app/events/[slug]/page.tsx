import Link from "next/link";
import { notFound } from "next/navigation";
import { events, getEventBySlug } from "@/lib/events-data";

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

function UserPlusIcon() {
  return (
    <svg className="lucide-icon" viewBox="0 0 24 24" aria-hidden="true">
      <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <path d="M19 8v6" />
      <path d="M22 11h-6" />
    </svg>
  );
}

function LinkIcon() {
  return (
    <svg className="lucide-icon" viewBox="0 0 24 24" aria-hidden="true">
      <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" />
      <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" />
    </svg>
  );
}

function CalendarPlusIcon() {
  return (
    <svg className="lucide-icon" viewBox="0 0 24 24" aria-hidden="true">
      <path d="M8 2v4" />
      <path d="M16 2v4" />
      <path d="M21 13V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h8" />
      <path d="M3 10h18" />
      <path d="M16 19h6" />
      <path d="M19 16v6" />
    </svg>
  );
}

function getEventDateLabel(date: string) {
  const [day, rest] = date.split(" ");
  const month = rest?.replace(",", "");
  const eventDate = new Date(`${month} ${day}, 2026`);
  const today = new Date();
  const todayStart = new Date(today.getFullYear(), today.getMonth(), today.getDate()).getTime();
  const eventStart = new Date(eventDate.getFullYear(), eventDate.getMonth(), eventDate.getDate()).getTime();
  const dayDistance = Math.round((eventStart - todayStart) / 86400000);

  if (dayDistance === 0) return "Today";
  if (dayDistance === 1) return "Tomorrow";

  return date;
}

export function generateStaticParams() {
  return events.map((event) => ({ slug: event.slug }));
}

export default async function EventDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const event = getEventBySlug(slug);

  if (!event) {
    notFound();
  }

  return (
    <main className="page-shell event-detail-page">
      <section className="event-detail-hero">
        <div className="container">
          <div
            className="event-detail-image"
            style={{
              backgroundImage: `linear-gradient(180deg, rgba(32, 34, 29, 0.02), rgba(32, 34, 29, 0.32)), url("${event.image}")`,
              backgroundPosition: event.imagePosition ?? "center",
            }}
          >
            <span className="event-category">{event.category}</span>
          </div>

          <div className="event-detail-heading">
            <div>
              <span className="eyebrow plain-eyebrow">Event details</span>
              <h1>{event.title}</h1>
              <p>{event.text}</p>
            </div>

            <div className="event-detail-cta">
              <div className="event-detail-price">
                <TicketIcon />
                {event.price}
              </div>
              {event.spotsLeft > 0 ? (
                <Link className="solid-button" href={`/checkout/${event.slug}`}>
                  Get ticket
                </Link>
              ) : (
                <span className="solid-button unavailable-button" aria-disabled="true">
                  Get ticket
                </span>
              )}
            </div>
          </div>

          <div className="event-detail-layout">
            <div className="event-detail-content">
              <div className="event-detail-hook">
                <strong>Why join?</strong>
                <p>
                  A warm, small-format RORUM experience for meeting people, learning
                  something tactile, and leaving with a little more energy than you arrived with.
                </p>
              </div>

              <div className="event-program">
                <h2>Short program</h2>
                <ul>
                  <li>Arrival, welcome tea, and settling into the space.</li>
                  <li>Guided introduction and first practical exercise.</li>
                  <li>Main workshop flow with time for questions and conversation.</li>
                  <li>Closing reflection and a small moment to connect with others.</li>
                </ul>
              </div>

              <div className="event-share-actions" aria-label="Share event">
                <Link className="text-link event-action-link" href="/contact">
                  <UserPlusIcon />
                  Invite a friend
                </Link>
                <button className="text-link event-action-link" type="button">
                  <LinkIcon />
                  Copy link
                </button>
                <button className="text-link event-action-link" type="button">
                  <CalendarPlusIcon />
                  Add to calendar
                </button>
              </div>

              <Link className="text-link back-events-link" href="/events">
                Back to events
              </Link>
            </div>

            <aside className="event-detail-sidebar" aria-label="Event information">
              <div className="event-detail-facts">
                <span className="event-meta-item">
                  <CalendarIcon />
                  {getEventDateLabel(event.date)}
                </span>
                <span className="event-meta-item">
                  <ClockIcon />
                  {event.time}
                </span>
                <span className="event-meta-item">
                  <MapPinIcon />
                  RORUM, Norrebro, Copenhagen
                </span>
                <span className={`event-meta-item availability ${event.spotsLeft === 0 ? "sold-out" : ""}`}>
                  <UsersIcon />
                  {event.spotsLeft > 0 ? `${event.spotsLeft} spots left` : "Sold out"}
                </span>
              </div>

              <div className="event-detail-sidebar-action">
                <span>{event.price}</span>
                {event.spotsLeft > 0 ? (
                  <Link className="solid-button" href={`/checkout/${event.slug}`}>
                    Get ticket
                  </Link>
                ) : (
                  <span className="solid-button unavailable-button" aria-disabled="true">
                    Get ticket
                  </span>
                )}
              </div>
            </aside>
          </div>
        </div>
      </section>
    </main>
  );
}
