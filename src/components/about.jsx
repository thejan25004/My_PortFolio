import aboutImg from "../assets/Curly-Haired Professional in Black Suit.png"
import cvFile from "../assets/cv/CTSE.pdf";


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
                        I’m a passionate Computing Professional with a completed Higher National Diploma (HND) in Software Engineering from IJSE and hands-on experience in web and software application development. I enjoy building user-friendly, responsive, and functional digital solutions while continuously exploring new technologies.

My expertise includes frontend development, UI/UX design, database management, API integration, and software development. I’m passionate about solving problems, improving user experiences, and collaborating with teams to turn ideas into practical solutions..
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
