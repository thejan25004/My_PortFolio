"use client"

import { useState, useEffect } from "react"

export function Navigation() {
    const [isOpen, setIsOpen] = useState(false)
    const [scrolled, setScrolled] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50)
        }

        window.addEventListener("scroll", handleScroll)
        return () => window.removeEventListener("scroll", handleScroll)
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
                <div className="logo">CHAMOD DE SILVA</div>

                <ul className="nav-menu">
                    {navItems.map((item, index) => (
                        <li key={item.name}>
                            <a href={item.href} className={`nav-link ${index === 1 ? "active" : ""}`}>
                                {item.name}
                            </a>
                        </li>
                    ))}
                </ul>

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

                <button className="mobile-menu-btn" onClick={() => setIsOpen(!isOpen)}>
                    {isOpen ? "✕" : "☰"}
                </button>
            </div>
        </nav>
    )
}
