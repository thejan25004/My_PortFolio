"use client"

import { useState, useEffect } from "react"

export function Navigation() {
    const [isOpen, setIsOpen] = useState(false)
    const [scrolled, setScrolled] = useState(false)
    const [isMobile, setIsMobile] = useState(false)
    const [activeLink, setActiveLink] = useState("")

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 50)
        const handleResize = () => setIsMobile(window.innerWidth <= 768)

        handleScroll()
        handleResize()

        window.addEventListener("scroll", handleScroll)
        window.addEventListener("resize", handleResize)

        return () => {
            window.removeEventListener("scroll", handleScroll)
            window.removeEventListener("resize", handleResize)
        }
    }, [])

    const navItems = [
        { name: "Home", href: "#home" },
        { name: "About", href: "#about" },
        { name: "Skill", href: "#skills" },
        { name: "Project", href: "#projects" },
        { name: "Contact", href: "#contact" },
    ]

    return (
        <nav className={`navbar ${scrolled ? "scrolled" : ""}`}>
            <div className="nav-container">
                {/* Logo */}
                <div className="logo">{isMobile ? "CHAMOD" : "CHAMOD DE SILVA"}</div>

                {/* Desktop Menu */}
                <ul className="nav-menu desktop-only">
                    {navItems.map(item => (
                        <li key={item.name}>
                            <a
                                href={item.href}
                                className={`nav-link ${activeLink === item.name ? "active" : ""}`}
                                onClick={() => setActiveLink(item.name)}
                            >
                                {item.name}
                            </a>
                        </li>
                    ))}
                </ul>

                {/* Search Icon */}
                <div className="search-icon">
                    <svg width="20" height="20" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                        />
                    </svg>
                </div>

                {/* Mobile Menu Button */}
                <button className="mobile-menu-btn" onClick={() => setIsOpen(!isOpen)}>
                    {isOpen ? "✕" : "☰"}
                </button>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <ul className="nav-menu mobile-only">
                    {navItems.map(item => (
                        <li key={item.name}>
                            <a
                                href={item.href}
                                className={`nav-link ${activeLink === item.name ? "active" : ""}`}
                                onClick={() => {
                                    setActiveLink(item.name)
                                    setIsOpen(false)
                                }}
                            >
                                {item.name}
                            </a>
                        </li>
                    ))}
                </ul>
            )}
        </nav>
    )
}
