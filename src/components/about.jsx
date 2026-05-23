import aboutImg from "../assets/ChatGPT Image May 21, 2026, 03_42_02 PM.png"
import cvFile from "../assets/cv/Chamod Thejan CV (1).pdf";


export function About() {
    const stats = [
        { number: "15 +", label: "Completed Projects" },
        { number: "2 +", label: "Years of Experience" },
        { number: "15 +", label: "UI Designs Created" },
    ]

    return (
        <section id="about" className="section about">
            <div className="container">
                <div className="about-content">
                    <div className="about-image">
                        <div className="decorative-line"></div>

                        <img src={aboutImg} alt="About Chamod" />

                    </div>

                    <div className="about-text animate-on-scroll">
                        <h2 className="section-title" style={{ textAlign: "left", marginBottom: "2rem" }}>
                            About <span className="text-orange">Me</span>
                        </h2>

                        <p className="description-text" style={{ marginBottom: "3rem" }}>
                            I am a passionate Front End Developer and UI/UX Engineer with strong experience in frontend development and UI/UX design, creating responsive and user-friendly web applications. I am also learning and building backend applications using Spring Boot  and I am eager to expand my full stack skills while contributing to real-world projects.
                        </p>

                        <div className="stats-grid">
                            {stats.map((stat, index) => (
                                <div key={index} className="stat-item">
                                    <span className="stat-number">{stat.number}</span>
                                    <span className="stat-label">{stat.label}</span>
                                </div>
                            ))}
                        </div>

                        <div style={{ display: "flex", gap: "2rem", marginTop: "2rem" }}>
                            <button className="btn btn-primary">Hire Me</button>
                            <a href={cvFile} target="_blank" rel="noopener noreferrer" className="download-cv">
                                View CV ↓
                            </a>


                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
