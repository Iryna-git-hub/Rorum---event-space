import Link from "next/link";
import Image from "next/image";
import type { ReactNode } from "react";
import { mobileNav, primaryNav, socialLinks } from "@/lib/site-data";

type IconName = "facebook" | "instagram" | "linkedin" | "youtube" | "location" | "email" | "phone";

function FooterIcon({ name }: { name: IconName }) {
  const iconPaths: Record<IconName, ReactNode> = {
    facebook: (
      <path d="M13.5 8.12h-2.18V16H8.05V8.12H6.4V5.38h1.65V3.7C8.05 1.42 9.05 0 11.58 0h2.18v2.74H12.4c-1.02 0-1.08.4-1.08 1.1v1.54h2.46l-.28 2.74Z" />
    ),
    instagram: (
      <>
        <path d="M8 4.08A3.92 3.92 0 1 0 8 11.92 3.92 3.92 0 0 0 8 4.08Zm0 6.46A2.54 2.54 0 1 1 8 5.46a2.54 2.54 0 0 1 0 5.08Z" />
        <path d="M12.08 4.22a.92.92 0 1 0 0-1.84.92.92 0 0 0 0 1.84Z" />
        <path d="M11.06 16H4.94A4.95 4.95 0 0 1 0 11.06V4.94A4.95 4.95 0 0 1 4.94 0h6.12A4.95 4.95 0 0 1 16 4.94v6.12A4.95 4.95 0 0 1 11.06 16ZM4.94 1.54a3.4 3.4 0 0 0-3.4 3.4v6.12a3.4 3.4 0 0 0 3.4 3.4h6.12a3.4 3.4 0 0 0 3.4-3.4V4.94a3.4 3.4 0 0 0-3.4-3.4H4.94Z" />
      </>
    ),
    linkedin: (
      <path d="M3.64 16H.3V5.32h3.34V16ZM1.96 3.86A1.94 1.94 0 1 1 1.97 0a1.94 1.94 0 0 1-.01 3.86ZM16 16h-3.33v-5.2c0-1.24-.02-2.84-1.73-2.84-1.73 0-2 1.35-2 2.75V16H5.62V5.32h3.18v1.46h.05a3.5 3.5 0 0 1 3.14-1.73c3.36 0 3.98 2.21 3.98 5.08V16H16Z" />
    ),
    youtube: (
      <path d="M15.66 4.2a2 2 0 0 0-1.4-1.42C13.02 2.45 8 2.45 8 2.45s-5.02 0-6.26.33A2 2 0 0 0 .34 4.2 20.8 20.8 0 0 0 0 8a20.8 20.8 0 0 0 .34 3.8 2 2 0 0 0 1.4 1.42c1.24.33 6.26.33 6.26.33s5.02 0 6.26-.33a2 2 0 0 0 1.4-1.42A20.8 20.8 0 0 0 16 8a20.8 20.8 0 0 0-.34-3.8ZM6.4 10.34V5.66L10.56 8 6.4 10.34Z" />
    ),
    location: (
      <path d="M8 0a5.45 5.45 0 0 0-5.45 5.45c0 4.08 4.8 9.87 5 10.12a.58.58 0 0 0 .9 0c.2-.25 5-6.04 5-10.12A5.45 5.45 0 0 0 8 0Zm0 7.7a2.25 2.25 0 1 1 0-4.5 2.25 2.25 0 0 1 0 4.5Z" />
    ),
    email: (
      <path d="M1.45 2.55h13.1c.8 0 1.45.65 1.45 1.45v8c0 .8-.65 1.45-1.45 1.45H1.45C.65 13.45 0 12.8 0 12V4c0-.8.65-1.45 1.45-1.45Zm.42 1.45L8 8.28 14.13 4H1.87Zm12.68 8V5.58L8.4 9.86a.7.7 0 0 1-.8 0L1.45 5.58V12h13.1Z" />
    ),
    phone: (
      <path d="M11.95 15.45c-1.7 0-4.36-1.1-7.16-3.9C1.23 8 .39 4.78.67 3.45c.1-.5.42-.94.88-1.2L3.76.98c.65-.38 1.48-.18 1.9.44l1.2 1.76c.38.56.3 1.32-.19 1.8l-.93.92c.36.67.88 1.38 1.6 2.1.72.72 1.43 1.24 2.1 1.6l.92-.93a1.45 1.45 0 0 1 1.8-.19l1.76 1.2c.62.42.82 1.25.44 1.9l-1.27 2.21c-.26.46-.7.78-1.2.88-.02 0-.2.03-.52.03Z" />
    ),
  };

  return (
    <svg aria-hidden="true" focusable="false" viewBox="0 0 16 16">
      {iconPaths[name]}
    </svg>
  );
}

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="container footer-main">
        <div className="footer-column intro-column">
          <Link className="brand" href="/" aria-label="RORUM home">
            <Image src="/rorum-logo.png" alt="RORUM logo" width={162} height={40} unoptimized />
          </Link>

          <div className="contact-meta">
            <div className="contact-meta-item">
              <FooterIcon name="location" />
              <div>
                <strong>Location</strong>
                <p>Norrebro, Copenhagen, Denmark</p>
              </div>
            </div>
            <div className="contact-meta-item">
              <FooterIcon name="phone" />
              <div>
                <strong>Phone</strong>
                <p>+45 40 40 40 40</p>
              </div>
            </div>
            <div className="contact-meta-item">
              <FooterIcon name="email" />
              <div>
                <strong>Email</strong>
                <p>hello@rorum.dk</p>
              </div>
            </div>
          </div>

          <div className="social-row" aria-label="Social links">
            {socialLinks.map((link) => (
              <a key={link.label} href={link.href} target="_blank" rel="noreferrer" aria-label={link.label}>
                <FooterIcon name={link.icon} />
              </a>
            ))}
          </div>
        </div>

        <div className="footer-column links-column">
          <div>
            {primaryNav.map((item) => (
              <Link key={item.href} href={item.href} className="footer-link">
                {item.label}
              </Link>
            ))}
          </div>
          <div>
            {mobileNav.slice(2, 8).map((item) => (
              <Link key={item.href} href={item.href} className="footer-link">
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      </div>

      <div className="container footer-credits">
        <div className="policy-links">
          <Link href="/">Privacy policy</Link>
          <Link href="/">Terms and conditions</Link>
        </div>
        <p>© 2026 RORUM. All rights reserved. Website developed by irynadev.</p>
      </div>
    </footer>
  );
}
