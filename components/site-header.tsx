"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { languageOptions, mobileNav, primaryNav } from "@/lib/site-data";

function ChevronDownIcon() {
  return (
    <svg className="nav-dropdown-icon" viewBox="0 0 24 24" aria-hidden="true">
      <path d="m6 9 6 6 6-6" />
    </svg>
  );
}

function isLinkActive(pathname: string, href: string) {
  if (href === "/") return pathname === "/";
  return pathname === href || pathname.startsWith(`${href}/`);
}

export function SiteHeader() {
  const pathname = usePathname();

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
              <div
                key={item.label}
                className={`nav-dropdown ${item.children.some((child) => isLinkActive(pathname, child.href)) ? "active-nav-item" : ""}`}
              >
                <Link href={item.href} className="nav-trigger">
                  {item.label}
                  <ChevronDownIcon />
                </Link>
                <div className="dropdown-menu">
                  {item.children.map((child, childIndex) => (
                    <Link
                      key={`${child.href}-${child.label}-${childIndex}`}
                      href={child.href}
                      className={`dropdown-link ${isLinkActive(pathname, child.href) ? "active-nav-link" : ""}`}
                    >
                      {child.label}
                    </Link>
                  ))}
                </div>
              </div>
            ) : (
              <Link
                key={item.href}
                href={item.href}
                className={isLinkActive(pathname, item.href) ? "active-nav-link" : ""}
              >
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
          {mobileNav.map((item, index) => (
            <Link
              key={`${item.href}-${item.label}-${index}`}
              href={item.href}
              className={isLinkActive(pathname, item.href) ? "active-nav-link" : ""}
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
