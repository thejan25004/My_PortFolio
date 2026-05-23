import { useEffect, useState } from "react"

import brandMark from "../assets/headshotmaster_image_1752300326757.png"

const NAV_LINKS = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skill" },
  { href: "#projects", label: "Project" },
] 

const pillStyle = {
  marginTop: "10px",
  padding: "6px 12px 6px 14px",

  // transparent glass effect
  background: "rgba(20,20,25,0.35)",

  border: "1px solid rgba(255,255,255,0.15)",

  boxShadow:
    "0 8px 32px rgba(0,0,0,0.45)",

  // stronger blur
  backdropFilter: "blur(30px) saturate(180%)",
  WebkitBackdropFilter: "blur(30px) saturate(180%)",
};

const mobileMenuStyle = {
  background:
    "linear-gradient(135deg, rgba(24,24,28,0.92) 0%, rgba(10,10,12,0.88) 100%)",
  border: "1px solid rgba(255,255,255,0.1)",
  boxShadow: "0 12px 48px rgba(0,0,0,0.55), 0 2px 8px rgba(0,0,0,0.3)",
  backdropFilter: "blur(28px) saturate(180%)",
  WebkitBackdropFilter: "blur(28px) saturate(180%)",
}

const ctaStyle = {
  background: "linear-gradient(180deg, rgba(255,107,53,0.95) 0%, rgba(230,85,35,0.92) 100%)",
  border: "1px solid rgba(255,255,255,0.18)",
  boxShadow:
    "inset 0 1px 1px rgba(255,255,255,0.28), inset 0 -1px 1px rgba(0,0,0,0.2), 0 4px 20px -2px rgba(255,107,53,0.5), 0 2px 8px rgba(0,0,0,0.35)",
  backdropFilter: "blur(12px)",
}

const navLinkBaseStyle = {
  color: "rgba(255,255,255,0.62)",
  textDecoration: "none",
  WebkitTapHighlightColor: "transparent",
  outline: "none",
  boxShadow: "none",
}

const navLinkActiveStyle = {
  ...navLinkBaseStyle,
  color: "rgba(255,255,255,0.98)",
  background: "transparent",
}

const mobileLinkActiveStyle = {
  color: "rgba(255,255,255,0.98)",
  background: "rgba(255,255,255,0.08)",
}

export function Navigation() {
  const [open, setOpen] = useState(false)
  const [activeHref, setActiveHref] = useState("#home")

  useEffect(() => {
    const sectionIds = ["home", "about", "skills", "projects", "contact"]
    const sections = sectionIds
      .map((id) => document.getElementById(id))
      .filter(Boolean)

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)
        if (visible[0]?.target?.id) {
          setActiveHref(`#${visible[0].target.id}`)
        }
      },
      { rootMargin: "-40% 0px -45% 0px", threshold: [0, 0.25, 0.5, 0.75, 1] },
    )

    sections.forEach((section) => observer.observe(section))
    return () => observer.disconnect()
  }, [])

  const isActive = (href) => activeHref === href

  const handleNavClick = (href) => {
    setActiveHref(href)
    setOpen(false)
  }

  return (
    <div className="nav-glass-wrap">
      <div className="nav-glass-inner">
        <div className="nav-glass-pill" style={pillStyle}>
          <div
            className="nav-glass-shimmer"
            aria-hidden
          />

          <a href="#home" className="nav-glass-brand">
            <img src={brandMark} alt="Chamod De Silva" className="nav-glass-brand-img" />
            <div className="nav-glass-brand-text">
              <p className="nav-glass-brand-title">Chamod De Silva</p>
              <p className="nav-glass-brand-subtitle">Frontend Developer & UI/UX Designer</p>
            </div>
          </a>

          <nav className="nav-glass-links" aria-label="Main">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="nav-glass-link"
                style={isActive(link.href) ? navLinkActiveStyle : navLinkBaseStyle}
                onClick={() => handleNavClick(link.href)}
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="nav-glass-actions">
            <a
              href="#contact"
              className="nav-glass-contact"
              style={isActive("#contact") ? navLinkActiveStyle : navLinkBaseStyle}
              onClick={() => handleNavClick("#contact")}
            >
              Contact
            </a>

            <a
              href="#contact"
              className="nav-glass-cta"
              style={ctaStyle}
              onClick={() => handleNavClick("#contact")}
            >
              <div className="nav-glass-cta-shine" aria-hidden />
              <span className="nav-glass-cta-label">Hire Me</span>
              <svg width="13" height="13" viewBox="0 0 13 13" fill="none" aria-hidden>
                <path
                  d="M2.5 6.5h8M7 3.5l3 3-3 3"
                  stroke="white"
                  strokeWidth="1.4"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </a>
          </div>

          <button
            type="button"
            onClick={() => setOpen((o) => !o)}
            className="nav-glass-hamburger"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
          >
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden>
              {open ? (
                <>
                  <line x1="4" y1="4" x2="14" y2="14" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
                  <line x1="14" y1="4" x2="4" y2="14" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
                </>
              ) : (
                <>
                  <line x1="3" y1="5" x2="15" y2="5" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
                  <line x1="3" y1="9" x2="15" y2="9" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
                  <line x1="3" y1="13" x2="15" y2="13" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
                </>
              )}
            </svg>
          </button>
        </div>

        <div
          className={`nav-glass-mobile-menu ${open ? "nav-glass-mobile-menu--open" : ""}`}
          style={mobileMenuStyle}
        >
          <div className="nav-glass-mobile-menu-inner">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="nav-glass-mobile-link"
                style={isActive(link.href) ? mobileLinkActiveStyle : navLinkBaseStyle}
                onClick={() => handleNavClick(link.href)}
              >
                {link.label}
              </a>
            ))}

            <a
              href="#contact"
              className="nav-glass-mobile-link"
              style={isActive("#contact") ? mobileLinkActiveStyle : navLinkBaseStyle}
              onClick={() => handleNavClick("#contact")}
            >
              Contact
            </a>

            <div className="nav-glass-mobile-divider" />

            <a
              href="#contact"
              className="nav-glass-mobile-cta"
              onClick={() => handleNavClick("#contact")}
            >
              <div className="nav-glass-cta-shine" aria-hidden />
              <span className="nav-glass-cta-label">Hire Me</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
