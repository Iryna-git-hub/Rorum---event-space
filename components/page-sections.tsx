import Link from "next/link";

type SectionIntroProps = {
  eyebrow: string;
  title: string;
  text: string;
};

type Card = {
  title: string;
  text: string;
  href?: string;
  cta?: string;
};

type Faq = {
  question: string;
  answer: string;
};

export function SectionIntro({ eyebrow, title, text }: SectionIntroProps) {
  return (
    <div className="section-intro">
      <span className="eyebrow">{eyebrow}</span>
      <h2>{title}</h2>
      <p>{text}</p>
    </div>
  );
}

export function CardGrid({ cards }: { cards: readonly Card[] }) {
  return (
    <div className="card-grid">
      {cards.map((card) => (
        <article key={card.title} className="info-card">
          <div className="info-card-body">
            <h3>{card.title}</h3>
            <p>{card.text}</p>
          </div>
          {card.href && card.cta ? (
            <Link className="text-link" href={card.href}>
              {card.cta}
            </Link>
          ) : null}
        </article>
      ))}
    </div>
  );
}

export function FaqAccordion({ items }: { items: readonly Faq[] }) {
  return (
    <div className="faq-accordion">
      {items.map((item) => (
        <details key={item.question} className="faq-item" open={item === items[0]}>
          <summary className="faq-summary">
            <h3>{item.question}</h3>
            <span className="faq-icon" aria-hidden="true">
              +
            </span>
          </summary>
          <div className="faq-answer">
            <p>{item.answer}</p>
          </div>
        </details>
      ))}
    </div>
  );
}

export function PageCta({
  title,
  text,
  action,
}: {
  title: string;
  text: string;
  action: { label: string; href: string };
}) {
  return (
    <section className="page-cta">
      <div className="container cta-panel">
        <div>
          <h2>{title}</h2>
          <p>{text}</p>
        </div>
        <Link className="solid-button" href={action.href}>
          {action.label}
        </Link>
      </div>
    </section>
  );
}
