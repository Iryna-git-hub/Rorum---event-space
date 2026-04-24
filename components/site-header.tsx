import Link from "next/link";
import Image from "next/image";
import { languageOptions, mobileNav, primaryNav } from "@/lib/site-data";

function ChevronDownIcon() {
  return (
    <svg className="nav-dropdown-icon" viewBox="0 0 24 24" aria-hidden="true">
      <path d="m6 9 6 6 6-6" />
    </svg>
  );
}

export function SiteHeader() {
  return (
    <header className="topbar">
      <div className="container topbar-inner">
        <Link className="brand" href="/" aria-label="RORUM home">
          <Image
            src="/rorum-logo.png"
            alt="RORUM logo"
            width={162}
            height={36}
            priority
            unoptimized
          />
        </Link>

        <nav className="desktop-nav" aria-label="Primary">
          {primaryNav.map((item) => (
            "children" in item ? (
              <div key={item.href} className="nav-dropdown">
                <Link href={item.href} className="nav-trigger">
                  {item.label}
                  <ChevronDownIcon />
                </Link>
                <div className="dropdown-menu">
                  {item.children.map((child) => (
                    <Link key={child.href} href={child.href} className="dropdown-link">
                      {child.label}
                    </Link>
                  ))}
                </div>
              </div>
            ) : (
              <Link key={item.href} href={item.href}>
                {item.label}
              </Link>
            )
          ))}
        </nav>

        <div className="header-actions">
          <div className="language-switcher" aria-label="Language">
            {languageOptions.map((language) => (
              <Link key={language.label} className="language-link" href={language.href}>
                {language.label}
              </Link>
            ))}
          </div>
          <Link className="outline-button" href="/contact">
            Let&apos;s talk
          </Link>
        </div>
      </div>

      <div className="mobile-nav-wrap">
        <nav className="container mobile-nav" aria-label="Mobile primary">
          {mobileNav.map((item) => (
            <Link key={item.href} href={item.href}>
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
