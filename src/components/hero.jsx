"use client"
import homePage from "../assets/mymy.png"



import cvFile from "../assets/cv/Chamod Thejan (2).pdf";

export function Hero() {
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
                <a href="https://github.com/thejan25004" className="social-icon" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                    <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A8.203 8.203 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
                    </svg>
                </a>
                <a href="https://www.linkedin.com/in/chamod-thejan-582483319/" className="social-icon" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                    <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                    </svg>
                </a>
                <a href="https://www.youtube.com/@chamodthejan4692" className="social-icon" target="_blank" rel="noopener noreferrer" aria-label="YouTube">
                    <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                    </svg>
                </a>
                <a href="https://x.com/ChamodThejan" className="social-icon" target="_blank" rel="noopener noreferrer" aria-label="X">
                    <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                    </svg>
                </a>
            </div>

            {/* Chat button */}
            <button
                className="chat-button"
                onClick={() => {
                    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
                }}
            >
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
                           Front End Developer & <br />
                            &emsp;UI / UX  Designer
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
                            I am a passionate FrontEnd Developer and UI/UX Engineer with strong experience in frontend development and UI/UX design, creating responsive and user-friendly web applications. I am also learning and building backend applications using Spring Boot , node JS.                        </p>
                        <a href={cvFile} download="Chamod Thejan (2).pdf" className="download-cv">
                            Download CV ↓
                        </a>

                    </div>
                </div>
            </div>
        </section>
    )
}
