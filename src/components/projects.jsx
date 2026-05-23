import React, { useState, useEffect } from 'react';
import freshBite from "../assets/Screenshot 2025-07-13 at 7.35.12 PM.png";
import ramboGym from "../assets/460791754-f7a261d9-4ec0-4f9d-8603-db6408ab3122.png";
import hybridHub from "../assets/433119029-3103938b-e057-46fe-a308-fac459433728.png";
import mobileBank from "../assets/travel.jpg";
import ai from "../assets/460792874-ae33b35b-f722-444a-ab7e-1b46febfe9f6.png";
import futureStore from "../assets/406632562-b9d1776f-6fa4-40b9-8408-9ceb22efc029.png";
import SDP from "../assets/Screenshot 2025-09-06 at 7.33.41 PM.png"
import library from "../assets/library.png"
import nodeBack from "../assets/nodeBack.png"
import seoul from "../assets/433119029-3103938b-e057-46fe-a308-fac459433728.png"
import reactLesson from "../assets/reactLesson.jpeg"
import parking from "../assets/parking.png"
import chat from "../assets/chat.png"
import orm from "../assets/orm.png"
import a1 from "../assets/a1.jpg"
import pos from "../assets/pos.jpg"
import cal from "../assets/cal.png"
import nightRider from "../assets/_TrpwgDQDjh.jpeg"
import a2 from "../assets/a2.jpg"
import a3 from "../assets/a3.jpg"
import a4 from "../assets/a4.jpg"
import layered from "../assets/1_outAFjNGSLzi98PEER_b8g.png"
import assignment from "../assets/a5.jpg"
import blueFieldDesign from "../assets/BlueField.png"
import donelyDesign from "../assets/donelyOpenClaa.png"
import freshBiteDesign from "../assets/FreshBiteResturant.png"

const PROJECTS = [
        {
            id: 1,
            title: "Super Dot Printers",
            description: " Super Dot Printers is a web application that allows customers to easily place and track bulk printing orders for large companies. The platform streamlines the process of ordering printed materials such as bills, covers, tea bag covers, stickers, books, calendars, and other files. The backend was built with Spring Boot.",
            image: SDP,
            category: "enterprise",
            technologies: ["Spring Boot", "React", "MySQL", "Docker"],
            featured: true,
            color: "from-blue-600 to-indigo-700",
            liveUrl: "https://youtu.be/AMgq_DlBJbE?si=u9PF6gHxDKJsxTDN",
            sourceCode: "https://github.com/thejan25004/Super-Dot-Printers"
        },
        {
            id: 2,
            title: "FRESHBITE RESTURANTS",
            description: "Developed a fully responsive restaurant website frontend using HTML, CSS, Bootstrap, and JavaScript, featuring modern UI components for menu display, reservations, and customer engagement. Focused on clean design, mobile responsiveness, and enhanced user experience.",
            image: freshBite,
            category: "web",
            technologies: ["React", "Node.js", "MongoDB", "Socket.io"],
            featured: false,
            color: "from-blue-500 to-purple-600",
            liveUrl: "https://youtu.be/Tc3tkv090Cg?si=t3DpaDRt2BroMmYl",
            sourceCode: "https://github.com/thejan25004/Fresh_Bite"
        },
        {
            id: 3,
            title: "RAMBO GYM",
            description: "Rambo Gym  is a responsive, single-page gym web interface built using HTML, CSS, and JavaScript. The project includes multiple views such as home, trainer profiles, meal plans, workout schedules, and user account pages, featuring intuitive navigation and clean design for an engaging user experience.",
            image: ramboGym,
            category: "web",
            technologies: ["Vue.js", "Firebase", "WebRTC", "Three.js"],
            featured: true,
            color: "from-green-500 to-teal-600",
            liveUrl: "https://youtu.be/QJhxlJxhFP8?si=QvOxu812m0Gn-0l6",
            sourceCode: "https://github.com/thejan25004/Rambo-Gym"
        },
        {
            id: 4,
            title: "HYBRID HUB",
            description: "HYBRIDHUB is a Car Service Management System built with Spring Boot to simplify and automate car service center operations. It includes features like service booking, customer and technician management, secure login, payment handling, and real-time dashboards through a user-friendly web interface.",
            image: hybridHub,
            category: "enterprise",
            technologies: ["Angular", "Spring Boot", "PostgreSQL", "Docker"],
            featured: false,
            color: "from-orange-500 to-red-600",
            liveUrl: "https://youtu.be/YzddxlsjSGE?si=CW7KgUVTFyp6bMwD",
            sourceCode: "https://github.com/thejan25004/HybridHub"
        },
        {
            id: 5,
            title: "Mobile Application Of Travel Planner ",
            description: "A modern, user-friendly travel planning application that allows users to create personalized itineraries, add destinations, set schedules, and organize activities. Built with a responsive and visually appealing interface, the project demonstrates frontend development skills, UI/UX design, and interactive web application features.",
            image: mobileBank,
            category: "mobile",
            technologies: ["React Native", "Node.js", "MongoDB", "Stripe"],
            featured: false,
            color: "from-purple-500 to-pink-600",
            liveUrl: "https://youtu.be/dWhyCb51Cm0?si=uFMD_kZ_um2Wyu75",
            sourceCode: "https://github.com/thejan25004/Simple-Travel-Planner"
        },
        {
            id: 6,
            title: "LOGICAL LOOP AI",
            description: "AI-powered shopping experience with AR visualization and recommendations.",
            image: ai,
            category: "web",
            technologies: ["Next.js", "Shopify", "GraphQL", "Tailwind"],
            featured: true,
            color: "from-indigo-500 to-blue-600",
            liveUrl: "/pages/logicalLoopAI.html",
            sourceCode: "https://github.com/thejan25004/LogicLoop-AI"
        },
        {
            id: 7,
            title: "FUTURE STORE Mobile Center",
            description: "FutureStore is a Java Servlet–based e-commerce web application with a clean and responsive frontend. The project is developed using Java Servlets for backend logic, along with HTML, CSS, and JavaScript for the user interface, enabling smooth product browsing and user interaction.",
            image: futureStore,
            category: "enterprise",
            technologies: ["React", "Express", "MySQL", "Chart.js"],
            featured: false,
            color: "from-teal-500 to-green-600",
            liveUrl: "https://youtu.be/HApSf4TzHKM?si=oVJV5H3HwjzznuGQ",
            sourceCode: "https://github.com/thejan25004/FutureStore"
        },
        {
            id: 8,
            title: "Library Club FrontEnd",
            description: "Library management frontend for book lending and reader tracking.The application allows users to browse, manage, and interact with library resources, including searching for books, managing accounts, and viewing lending history. ",
            image: library,
            category: "web",
            technologies: ["React", "TypeScript", "Tailwind"],
            featured: false,
            color: "from-pink-500 to-rose-600",
            liveUrl: "https://your-live-project-url.com",
            sourceCode: "https://github.com/thejan25004/Library-Club-FrontEnd"
        },
        {
            id: 9,
            title: "Backend Node",
            description: "The backend handles API requests, user authentication, and database interactions using MongoDB, ensuring data integrity and security. The project emphasizes responsive design, modular component architecture, and a smooth user experience, demonstrating skills in both frontend and backend development.",
            image: nodeBack,
            category: "backend",
            technologies: ["Node.js", "Express", "MongoDB"],
            featured: false,
            color: "from-yellow-500 to-orange-600",
            liveUrl: "https://your-live-project-url.com",
            sourceCode: "https://github.com/thejan25004/Backend-Node"
        },
        {
            id: 10,
            title: "React Lessons",
            description: "Practice repository for React concepts and examples.",
            image: reactLesson,
            category: "learning",
            technologies: ["React", "JavaScript"],
            featured: false,
            color: "from-gray-500 to-slate-600",
            liveUrl: "https://your-live-project-url.com",
            sourceCode: "https://github.com/thejan25004/ReactLessons"
        },
        {
            id: 11,
            title: "Smart Parking Management System",
            description: "A microservices-based application built with Spring Boot and a web frontend. Enables users to register, find and book parking spaces, manage payments, and view history, providing a scalable and user-friendly solution for parking management.",
            image: parking,
            category: "enterprise",
            technologies: ["Java", "Spring Boot", "MySQL"],
            featured: false,
            color: "from-cyan-500 to-teal-600",
            liveUrl: "https://your-live-project-url.com",
            sourceCode: "https://github.com/thejan25004/Smart-Parking-Management-System"
        },
        {
            id: 12,
            title: "Chat Application",
            description: "Real-time chat app with WebSocket and authentication.",
            image: chat,
            category: "web",
            technologies: ["React", "Socket.io", "Node.js"],
            featured: false,
            color: "from-lime-500 to-emerald-600",
            liveUrl: "https://your-live-project-url.com",
            sourceCode: "https://github.com/thejan25004/ChatApplication"
        },
        {
            id: 13,
            title: "ORM Coursework",
            description: "Coursework on ORM concepts and Hibernate mapping.",
            image: orm,
            category: "learning",
            technologies: ["Java", "Hibernate", "MySQL"],
            featured: false,
            color: "from-red-500 to-rose-600",
            liveUrl: "https://your-live-project-url.com",
            sourceCode: "https://github.com/thejan25004/ORM-CourseWork"
        },
        {
            id: 14,
            title: "IT Assignment 08",
            description: "JavaScript DOM and events practice assignment.",
            image: a1,
            category: "learning",
            technologies: ["JavaScript", "HTML", "CSS"],
            featured: false,
            color: "from-sky-500 to-indigo-600",
            liveUrl: "https://your-live-project-url.com",
            sourceCode: "https://github.com/thejan25004/IT-Assignment-08"
        },
        {
            id: 15,
            title: "POS System",
            description: "Point of Sale system with Bootstrap UI.",
            image: pos,
            category: "web",
            technologies: ["Bootstrap", "JavaScript"],
            featured: false,
            color: "from-amber-500 to-orange-600",
            liveUrl: "https://your-live-project-url.com",
            sourceCode: "https://github.com/thejan25004/Pos-System"
        },
        {
            id: 16,
            title: "IT Assignment 10",
            description: "JS-based calculator assignment.",
            image: cal,
            category: "learning",
            technologies: ["JavaScript", "HTML", "CSS"],
            featured: false,
            color: "from-green-500 to-teal-700",
            liveUrl: "https://your-live-project-url.com",
            sourceCode: "https://github.com/thejan25004/IT-Assignment-10"
        },
        {
            id: 17,
            title: "IT Assignment 09",
            description: "Knight Rider effect animation using JS.",
            image: nightRider,
            category: "learning",
            technologies: ["JavaScript", "CSS"],
            featured: false,
            color: "from-fuchsia-500 to-purple-600",
            liveUrl: "https://your-live-project-url.com",
            sourceCode: "https://github.com/thejan25004/IT-Assignment-09"
        },
        {
            id: 18,
            title: "POS System Bootstrap",
            description: "POS app styled fully with Bootstrap.",
            image: pos,
            category: "web",
            technologies: ["Bootstrap", "JS"],
            featured: false,
            color: "from-indigo-500 to-purple-700",
            liveUrl: "https://your-live-project-url.com",
            sourceCode: "https://github.com/thejan25004/Pos_system_Boostrap"
        },
        {
            id: 19,
            title: "IT Assignment 04",
            description: "Basic Internet Technology coursework.",
            image: a2,
            category: "learning",
            technologies: ["HTML", "CSS"],
            featured: false,
            color: "from-orange-500 to-yellow-600",
            liveUrl: "https://your-live-project-url.com",
            sourceCode: "https://github.com/thejan25004/Super-Dot-Printers"
        },
        {
            id: 20,
            title: "ORM Assignment 02",
            description: "Second ORM assignment with Hibernate relations.",
            image: a3 ,
            category: "learning",
            technologies: ["Java", "Hibernate"],
            featured: false,
            color: "from-emerald-500 to-green-700",
            liveUrl: "https://your-live-project-url.com",
            sourceCode: "https://github.com/thejan25004/ORM-Assignment-02"
        },
        {
            id: 21,
            title: "Assignment 03",
            description: "IJSE class assignment project.",
            image: a4,
            category: "learning",
            technologies: ["Java"],
            featured: false,
            color: "from-violet-500 to-indigo-700",
            liveUrl: "https://your-live-project-url.com",
            sourceCode: "https://github.com/thejan25004/Assignment-03"
        },
        {
            id: 22,
            title: "ORM Assignment",
            description: "Another ORM coursework repo.",
            image: assignment,
            category: "learning",
            technologies: ["Java", "Hibernate"],
            featured: false,
            color: "from-pink-500 to-fuchsia-700",
            liveUrl: "https://your-live-project-url.com",
            sourceCode: "https://github.com/thejan25004/ORM-Assignment"
        },
        {
            id: 23,
            title: "Seoul Car Rental",
            description: "Car rental system for vehicle reservations and management.",
            image: seoul,
            category: "enterprise",
            technologies: ["JavaFX", "MySQL"],
            featured: false,
            color: "from-slate-500 to-gray-700",
            liveUrl: "https://your-live-project-url.com",
            sourceCode: "https://github.com/thejan25004/Seuol_car_Rental"
        },
        {
            id: 24,
            title: "Layered Architecture Project",
            description: "Java project following layered architecture principles.",
            image: layered,
            category: "learning",
            technologies: ["Java"],
            featured: false,
            color: "from-blue-500 to-cyan-700",
            liveUrl: "https://your-live-project-url.com",
            sourceCode: "https://github.com/thejan25004/Layered-Architecture-Project"
        },
        {
            id: 25,
            title: "FreshBite Restaurant Design",
            description: "Figma UI/UX design for a modern restaurant platform , Developed a fully responsive restaurant website frontend using HTML, CSS, Bootstrap, and JavaScript, featuring modern UI components for menu display, reservations, and customer engagement. Focused on clean design, mobile responsiveness, and enhanced user experience.",
            image: freshBiteDesign,
            category: "design",
            technologies: ["Figma", "UI/UX", "Wireframes", "Prototyping"],
            featured: true,
            color: "from-amber-500 to-orange-600",
            liveUrl: "/pages/freshBite.html",
            sourceCode: "https://www.figma.com",
            isDesign: true,
        },
        {
            id: 26,
            title: "BlueField Tea Factory POS System Design",
            description: "Point-of-sale interface design for tea factory retail — dashboard, inventory, billing screens, and staff workflows.",
            image: blueFieldDesign,
            category: "design",
            technologies: ["Figma", "UI/UX", "POS Design", "Design System"],
            featured: true,
            color: "from-emerald-500 to-teal-600",
            liveUrl: "",
            sourceCode: "https://www.figma.com",
            isDesign: true,
        },
        {
            id: 27,
            title: "Donely — OpenClaw Web Design",
            description: "Landing page and web app UI design for Donely OpenClaw — clean layout, onboarding flow, and component library.",
            image: donelyDesign,
            category: "design",
            technologies: ["Figma", "UI/UX", "Web Design", "Responsive"],
            featured: false,
            color: "from-violet-500 to-indigo-600",
            liveUrl: "",
            sourceCode: "https://www.figma.com",
            isDesign: true,
        },
];

const CATEGORIES = [
        { id: 'all', name: 'All Projects', icon: '🎯' },
        { id: 'web', name: 'Web Apps', icon: '🌐' },
        { id: 'mobile', name: 'Mobile', icon: '📱' },
        { id: 'enterprise', name: 'Enterprise', icon: '🏢' },
        { id: 'design', name: 'Design', icon: '📱💻' }
];

export function Projects() {
    const [activeFilter, setActiveFilter] = useState('all');
    const [visibleProjects, setVisibleProjects] = useState([]);

    useEffect(() => {
        const filteredProjects = activeFilter === 'all'
            ? PROJECTS
            : PROJECTS.filter(project => project.category === activeFilter);

        setVisibleProjects(filteredProjects);
    }, [activeFilter]);

    return (
        <section id="projects" className="projects-section">
            <div className="projects-container">
                {/* Floating Background Elements */}
                <div className="floating-elements">
                    <div className="float-1"></div>
                    <div className="float-2"></div>
                    <div className="float-3"></div>
                    <div className="float-4"></div>
                </div>

                {/* Header */}
                <div className="projects-header">
                    <div className="section-badge">
                        <span className="badge-icon">✨</span>
                        <span>My Portfolio</span>
                    </div>
                    <h2 className="projects-title">
                        Featured <span className="title-gradient">Projects</span>
                    </h2>
                    <p className="projects-subtitle">
                        Explore my latest work showcasing cutting-edge technologies and innovative solutions
                    </p>
                </div>

                {/* Filter Tabs */}
                <div className="filter-tabs">
                    {CATEGORIES.map((category) => (
                        <button
                            key={category.id}
                            onClick={() => setActiveFilter(category.id)}
                            className={`filter-tab ${activeFilter === category.id ? 'active' : ''}`}
                        >
                            <span className="tab-icon">{category.icon}</span>
                            <span className="tab-text">{category.name}</span>
                            <div className="tab-indicator"></div>
                        </button>
                    ))}
                </div>

                {/* Projects Grid */}
                <div className="projects-grid">
                    {visibleProjects.map((project, index) => (
                        <div
                            key={project.id}
                            className={`project-card ${project.featured ? 'featured' : ''}`}
                            style={{ '--delay': `${index * 0.1}s` }}
                        >
                            <div className="card-inner">
                                {/* Project Image */}
                                <div className="project-image-container">
                                    <div className={`project-gradient bg-gradient-to-br ${project.color}`}></div>
                                    <img
                                        src={project.image}
                                        alt={project.title}
                                        className="project-image"
                                    />
                                    {/* Project Image Overlay Buttons */}
                                    <div className="image-overlay">
                                        <div className="overlay-content">
                                            <button
                                                className="view-btn"
                                                // onClick={() => {
                                                //     if (project.liveUrl && project.liveUrl !== "#") {
                                                //         window.open(project.liveUrl, "_blank")
                                                //     }
                                                // }}
                                                onClick={() => window.open(project.liveUrl, "_blank")}
                                            >
                                                <span>{project.isDesign ? "🎨" : "👁️"}</span>
                                                {project.isDesign ? "View Preview" : "View Live"}
                                            </button>
                                            <button
                                                className="code-btn"
                                                onClick={() => window.open(project.sourceCode, "_blank")}
                                            >
                                                <span>{project.isDesign ? "📐" : "💻"}</span>
                                                {project.isDesign ? "Figma File" : "Source Code"}
                                            </button>
                                        </div>
                                    </div>

                                    {project.featured && (
                                        <div className="featured-badge">
                                            <span>⭐</span>
                                            Featured
                                        </div>
                                    )}
                                </div>

                                {/* Project Content */}
                                <div className="project-content">
                                    <h3 className="project-title">{project.title}</h3>
                                    <p className="project-description">{project.description}</p>

                                    {/* Technologies */}
                                    <div className="tech-stack">
                                        {project.technologies.map((tech, i) => (
                                            <span key={i} className="tech-tag">
                                                {tech}
                                            </span>
                                        ))}
                                    </div>

                                    {/* Project Footer */}
                                    <div className="project-footer">
                                        <div className="project-stats">
                                            <div className="stat">
                                                <span className="stat-icon">👥</span>
                                                <span className="stat-value">2.5k</span>
                                            </div>
                                            <div className="stat">
                                                <span className="stat-icon">⭐</span>
                                                <span className="stat-value">4.9</span>
                                            </div>
                                        </div>
                                        <button
                                            className="learn-more-btn"
                                            // onClick={() => {
                                            //     const url = project.isDesign
                                            //         ? (project.liveUrl !== "#" ? project.liveUrl : project.sourceCode)
                                            //         : "https://github.com/thejan25004"
                                            //     window.open(url, "_blank")
                                            // }}
                                            onClick={() => window.open("https://github.com/thejan25004", "_blank")}                                        >
                                            <span>{project.isDesign ? "View Design" : "Learn More"}</span>
                                            <span className="arrow">→</span>
                                        </button>

                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Call to Action */}
                <div className="projects-cta">
                    <div className="cta-content">
                        <h3 className="cta-title">Have a Project in Mind?</h3>
                        <p className="cta-description">
                            Let's collaborate and bring your vision to life with cutting-edge technology
                        </p>
                        <button className="cta-button">
                            <span className="btn-text">Start a Project</span>
                            <span className="btn-icon">🚀</span>
                            <div className="btn-glow"></div>
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
}
