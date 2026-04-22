import { ContactForm } from "@/components/contact-form";
import { CardGrid, FaqAccordion, PageCta, SectionIntro } from "@/components/page-sections";
import { PageHero } from "@/components/page-hero";
import { pageContent } from "@/lib/page-content";
import { faqs } from "@/lib/site-data";

export function RoutePage({ slug }: { slug: keyof typeof pageContent }) {
  const page = pageContent[slug];

  return (
    <main className="page-shell">
      <PageHero
        eyebrow={page.eyebrow}
        title={page.title}
        intro={page.intro}
        primaryCta={page.primaryCta}
        secondaryCta={page.secondaryCta}
      />

      {slug === "contact" ? (
        <section className="detail-section">
          <div className="container contact-layout">
            <div>
              <SectionIntro
                eyebrow="Start here"
                title={page.overviewTitle}
                text={page.overviewText}
              />
              <CardGrid cards={page.cards} />
            </div>
            <div className="form-panel">
              <ContactForm />
            </div>
          </div>
        </section>
      ) : (
        <section className="detail-section">
          <div className="container">
            <SectionIntro
              eyebrow={page.eyebrow}
              title={page.overviewTitle}
              text={page.overviewText}
            />
            <CardGrid cards={page.cards} />
          </div>
        </section>
      )}

      <section className="faq-section">
        <div className="container">
          <SectionIntro
            eyebrow="FAQ"
            title="Questions people usually ask before they decide."
            text="These answers are here to make the next step feel simpler, especially if you are still deciding which route fits best."
          />
          <FaqAccordion items={faqs} />
        </div>
      </section>

      <PageCta
        title={page.ctaTitle}
        text={page.ctaText}
        action={page.ctaAction}
      />
    </main>
  );
}
