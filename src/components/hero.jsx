"use client"
import homePage from "../assets/ChatGPT Image Jul 12, 2025, 12_40_30 PM.png"



import { useEffect, useState } from "react"
import cvFile from "../assets/cv/Chamod Thejan CV.pdf";

export function Hero() {
    const [scrollY, setScrollY] = useState(0)

    useEffect(() => {
        const handleScroll = () => setScrollY(window.scrollY)
        window.addEventListener("scroll", handleScroll)
        return () => window.removeEventListener("scroll", handleScroll)
    }, [])

    return (
        <section id="home" className="hero hero-bg">
            {/* Decorative circles */}
            <div className="decorative-circles">
                <div className="circle-1"></div>
                <div className="circle-2"></div>
                <div className="circle-3"></div>
            </div>

            {/* Social sidebar */}
            <div className="social-sidebar">
                <a href="#" className="social-icon">
                    <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.024-.105-.949-.199-2.403.041-3.439.219-.937 1.219-5.160 1.219-5.160s-.312-.623-.312-1.543c0-1.444.83-2.523 1.869-2.523.881 0 1.307.662 1.307 1.456 0 .887-.565 2.212-.854 3.442-.243 1.026.514 1.862 1.524 1.862 1.83 0 3.24-1.93 3.24-4.715 0-2.467-1.772-4.192-4.305-4.192-2.932 0-4.658 2.198-4.658 4.472 0 .887.341 1.837.766 2.354.084.099.096.186.071.288-.077.315-.245.994-.278 1.133-.043.183-.145.222-.334.134-1.249-.581-2.03-2.407-2.03-3.874 0-3.154 2.292-6.052 6.608-6.052 3.469 0 6.165 2.473 6.165 5.776 0 3.447-2.173 6.22-5.19 6.22-1.013 0-1.969-.527-2.292-1.155l-.623 2.378c-.226.869-.835 1.958-1.244 2.621.937.29 1.931.446 2.962.446 6.624 0 11.99-5.367 11.99-11.987C24.007 5.367 18.641.001 12.017.001z" />
                    </svg>
                </a>
                <a href="https://www.linkedin.com/in/chamod-thejan-582483319/" className="social-icon">
                    <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                    </svg>
                </a>
                <a href="https://www.youtube.com/@chamodthejan4692" className="social-icon">
                    <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                    </svg>
                </a>
                <a href="https://x.com/ChamodThejan" className="social-icon">
                    <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                    </svg>
                </a>
            </div>

            {/* Chat button */}
            <button className="chat-button">
                <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20 2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h4l4 4 4-4h4c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2z" />
                </svg>
                Let's Chat
            </button>

            <div className="container">
                <div className="hero-content">
                    <div className="hero-left">
                        <h1>
                            Hi,
                            <br />
                            I'm <span className="text-orange">CHAMOD</span>
                        </h1>
                        <p className="subtitle">
                           Full Stack Developer & <br />
                            &emsp;User Interface Designer
                        </p>

                        <button className="btn btn-primary">Hire Me</button>
                    </div>

                    <div className="hero-center">
                        <div className="hero-image">
                            {/*<img src="../assets/ChatGPT%20Image%20Jul%2012,%202025,%2012_40_30%20PM.png" alt="Chamod Silva" />*/}
                            <img src={homePage} alt="Chamod Silva" />
                        </div>
                    </div>

                    <div className="hero-right">
                        <div className="expert-badge">Expert On</div>
                        <div className="location-text">
                            Based In Sri Lanka
                            <br />
                            i'm developer and
                            <br />
                            UI / UX designer
                        </div>
                        <p className="description-text">
                            I'm Chamod Thejan, a passionate Full Stack Developer and UI Designer with a keen eye for detail and a drive to craft seamless, responsive, and user-friendly web experiences.end technologies.
                        </p>
                        <a href={cvFile} download="Chamod_Thejan_CV.pdf" className="download-cv">
                            Download CV ↓
                        </a>

                    </div>
                </div>
            </div>
        </section>
    )
}
