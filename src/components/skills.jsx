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
        {
            name: "PYTHON",
            icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
        },
        {
            name: "SQL",
            icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original-wordmark.svg",
        },
        {
            name: "BOOTSTRAP",
            icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg",
        },
        {
            name: "TAILWIND CSS",
            icon: "https://icon.icepanel.io/Technology/svg/Tailwind-CSS.svg",
        },
        {
            name: "SPRING BOOT",
            icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg",
        },
        {
            name: "MYSQL",
            icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
        },
        {
            name: "FIGMA",
            icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg",
        },
        {
            name: "ADOBE XD",
            icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/xd/xd-plain.svg",
        },
        {
            name: "PHOTOSHOP",
            icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/photoshop/photoshop-plain.svg",
        },
        {
            name: "MOCKUPS",
            icon: "https://cdn-icons-png.flaticon.com/512/1829/1829591.png", // mockup icon
        },
    ];


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
