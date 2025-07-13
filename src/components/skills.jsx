export function Skills() {
    const skills = [
        {
            name: "REACT",
            icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
        },
        {
            name: "GITHUB",
            icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original-wordmark.svg",
        },
        {
            name: "MONGO DB",
            icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
        },
        {
            name: "JAVA",
            icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg",
        },
        {
            name: "TYPE SCRIPT",
            icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
        },
        {
            name: "JAVA SCRIPT",
            icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
        },
        {
            name: "CSS",
            icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
        },
        {
            name: "HTML",
            icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
        },
    ]

    return (
        <section id="skills" className="section skills">
            <div className="container">
                <h2 className="section-title">
                    My <span className="text-orange">Skills</span>
                </h2>
                <p className="section-description">
                    Explore my latest work showcasing cutting-edge technologies and innovative solutions.                </p>

                <div className="skills-grid">
                    {skills.map((skill, index) => (
                        <div key={index} className="skill-card animate-on-scroll" style={{ animationDelay: `${index * 0.1}s` }}>
                            <div className="skill-icon">
                                <img src={skill.icon || "/placeholder.svg"} alt={skill.name} />
                            </div>
                            <h3 className="skill-name">{skill.name}</h3>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
