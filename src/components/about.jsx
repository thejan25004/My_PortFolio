import aboutImg from "../assets/headshotmaster_image_1752300326757.png"
import cvFile from "../assets/cv/Chamod Thejan CV.pdf";


export function About() {
    const stats = [
        { number: "100 +", label: "Find Me In Social Meadia" },
        { number: "250 +", label: "Find Me In Social Meadia" },
        { number: "155 +", label: "Find Me In Social Meadia" },
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
                            I'm Chamod Thejan, a passionate Front-End Developer and UI Designer with a keen eye for detail and a drive to craft seamless, responsive, and user-friendly web experiences. I specialize in building modern web applications using React, Node.js, and the latest front-end technologies. With a strong focus on clean design and performance, I blend technical skills with creative design to deliver engaging digital solutions.

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
