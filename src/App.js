"use client"
import './App.css'
import { useEffect } from "react"
import {Navigation} from "./components/navigation";
import {Hero} from "./components/hero";
import {About} from "./components/about";
import {Skills} from "./components/skills";
import {Projects} from "./components/projects";
import {Contact} from "./components/contact";


export default function App() {
    useEffect(() => {
        // Scroll animation observer
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add("animated")
                    }
                })
            },
            { threshold: 0.1 },
        )

        const animateElements = document.querySelectorAll(".animate-on-scroll")
        animateElements.forEach((el) => observer.observe(el))

        return () => observer.disconnect()
    }, [])

    return (
        <div className="min-h-screen">
            {/*<Navigation />*/}
            {/*<Hero />*/}
            {/*<About />*/}
            {/*<Skills />*/}
            {/*<Projects />*/}
            {/*<Contact />*/}
            <Navigation />
            <Hero />
            <About />
            <Skills />
            <Projects />
            <Contact />
        </div>
    )
}
