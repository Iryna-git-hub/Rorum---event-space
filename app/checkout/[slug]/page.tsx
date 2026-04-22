import Link from "next/link";
import { notFound } from "next/navigation";
import { events, getEventBySlug } from "@/lib/events-data";

export function generateStaticParams() {
  return events.map((event) => ({ slug: event.slug }));
}

export default async function CheckoutPage({
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
    <main className="page-shell checkout-page">
      <section className="checkout-section">
        <div className="container checkout-layout">
          <div className="checkout-summary">
            <span className="eyebrow plain-eyebrow">Checkout</span>
            <h1>Complete your ticket purchase</h1>
            <article className="checkout-event-card">
              <div
                className="checkout-event-image"
                style={{
                  backgroundImage: `url("${event.image}")`,
                  backgroundPosition: event.imagePosition ?? "center",
                }}
              />
              <div>
                <h2>{event.title}</h2>
                <p>{event.date} · {event.time}</p>
                <p>{event.location}</p>
                <strong>{event.price}</strong>
              </div>
            </article>
          </div>

          <form className="checkout-form">
            <label>
              <span>Name</span>
              <input type="text" placeholder="Your name" />
            </label>
            <label>
              <span>Email</span>
              <input type="email" placeholder="name@email.com" />
            </label>
            <label>
              <span>Card number</span>
              <input type="text" placeholder="4242 4242 4242 4242" />
            </label>
            <div className="checkout-form-row">
              <label>
                <span>Expiry</span>
                <input type="text" placeholder="MM / YY" />
              </label>
              <label>
                <span>CVC</span>
                <input type="text" placeholder="123" />
              </label>
            </div>
            <button className="solid-button" type="submit">
              Pay {event.price}
            </button>
            <Link className="text-link" href={`/events/${event.slug}`}>
              Back to event details
            </Link>
          </form>
        </div>
      </section>
    </main>
  );
}
