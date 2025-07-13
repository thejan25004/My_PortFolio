import React, { useState, useEffect } from 'react';
import freshBite from "../assets/Screenshot 2025-07-13 at 7.35.12 PM.png";
import ramboGym from "../assets/460791754-f7a261d9-4ec0-4f9d-8603-db6408ab3122.png";
import hybridHub from "../assets/433119029-3103938b-e057-46fe-a308-fac459433728.png";
import mobileBank from "../assets/title img.png";
import ai from "../assets/460792874-ae33b35b-f722-444a-ab7e-1b46febfe9f6.png";
import futureStore from "../assets/406632562-b9d1776f-6fa4-40b9-8408-9ceb22efc029.png";

export function Projects() {
    const [activeFilter, setActiveFilter] = useState('all');
    const [visibleProjects, setVisibleProjects] = useState([]);

    const projects = [
        {
            id: 1,
            title: "FRESHBITE RESTURANTS",
            description: "Modern car rental platform with real-time availability, GPS tracking, and seamless booking experience.",
            image: freshBite,
            category: "web",
            technologies: ["React", "Node.js", "MongoDB", "Socket.io"],
            featured: false,
            color: "from-blue-500 to-purple-600"
        },
        {
            id: 2,
            title: "RAMBO GYM ",
            description: "Gaming community platform connecting players worldwide with advanced matchmaking and real-time chat.",
            image: ramboGym,
            category: "web",
            technologies: ["Vue.js", "Firebase", "WebRTC", "Three.js"],
            featured: true,
            color: "from-green-500 to-teal-600"
        },
        {
            id: 3,
            title: "HYBRID HUB",
            description: "Enterprise solution for inventory management with AI-powered analytics and predictive insights.",
            image: hybridHub,
            category: "enterprise",
            technologies: ["Angular", "Spring Boot", "PostgreSQL", "Docker"],
            featured: false,
            color: "from-orange-500 to-red-600"
        },
        {
            id: 4,
            title: "Mobile Banking App",
            description: "Secure banking application with biometric authentication and real-time transaction monitoring.",
            image: mobileBank,
            category: "mobile",
            technologies: ["React Native", "Node.js", "MongoDB", "Stripe"],
            featured: false,
            color: "from-purple-500 to-pink-600"
        },
        {
            id: 5,
            title: "LOGICAL LOOP AI",
            description: "Next-generation shopping experience with AR product visualization and AI recommendations.",
            image: ai,
            category: "web",
            technologies: ["Next.js", "Shopify", "GraphQL", "Tailwind"],
            featured: true,
            color: "from-indigo-500 to-blue-600"
        },
        {
            id: 6,
            title: "FUTURE STORE",
            description: "Comprehensive patient management system with real-time health monitoring and analytics.",
            image: futureStore,
            category: "enterprise",
            technologies: ["React", "Express", "MySQL", "Chart.js"],
            featured: false,
            color: "from-teal-500 to-green-600"
        }
    ];

    const categories = [
        { id: 'all', name: 'All Projects', icon: '🎯' },
        { id: 'web', name: 'Web Apps', icon: '🌐' },
        { id: 'mobile', name: 'Mobile', icon: '📱' },
        { id: 'enterprise', name: 'Enterprise', icon: '🏢' }
    ];

    useEffect(() => {
        const filteredProjects = activeFilter === 'all'
            ? projects
            : projects.filter(project => project.category === activeFilter);

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
                    {categories.map((category) => (
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
                                    <div className="image-overlay">
                                        <div className="overlay-content">
                                            <button className="view-btn">
                                                <span>👁️</span>
                                                View Live
                                            </button>
                                            <button className="code-btn">
                                                <span>💻</span>
                                                Source Code
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
                                        <button className="learn-more-btn">
                                            <span>Learn More</span>
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
