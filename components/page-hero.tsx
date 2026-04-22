import Image from "next/image";
import Link from "next/link";

type HeroProps = {
  eyebrow: string;
  title: string;
  intro: string;
  primaryCta?: { label: string; href: string };
  secondaryCta?: { label: string; href: string };
  image?: string;
  imageCaption?: string;
};

export function PageHero({
  eyebrow,
  title,
  intro,
  primaryCta,
  secondaryCta,
  image = "/contact-hero.png",
  imageCaption = "Small groups, aesthetic atmosphere, and room for new ideas.",
}: HeroProps) {
  return (
    <section className="hero-block">
      <div className="container hero-grid">
        <div className="hero-copy">
          <span className="eyebrow">{eyebrow}</span>
          <h1>{title}</h1>
          <p>{intro}</p>

          {(primaryCta || secondaryCta) ? (
            <div className="hero-actions">
              {primaryCta ? (
                <Link className="solid-button" href={primaryCta.href}>
                  {primaryCta.label}
                </Link>
              ) : null}
              {secondaryCta ? (
                <Link className="outline-button" href={secondaryCta.href}>
                  {secondaryCta.label}
                </Link>
              ) : null}
            </div>
          ) : null}
        </div>

        <div className="hero-visual" aria-hidden="true">
          <div className="visual-card">
            <Image
              src={image}
              alt=""
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="visual-image"
            />
            <div className="visual-overlay" />
            <div className="visual-caption">
              <span className="eyebrow inverse">RORUM</span>
              <p>{imageCaption}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
