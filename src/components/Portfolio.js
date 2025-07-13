// components/Portfolio.js
import React, { useState } from 'react';
import { Mail, Phone, MapPin, Github, Linkedin, Twitter, Instagram, ExternalLink } from 'lucide-react';

const Portfolio = () => {
    const [activeProject, setActiveProject] = useState(0);
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
        subject: ''
    });

    const skills = [
        { name: 'React', icon: '⚛️' },
        { name: 'GitHub', icon: '🐱' },
        { name: 'Node.js', icon: '🟢' },
        { name: 'Java', icon: '☕' },
        { name: 'TypeScript', icon: 'TS' },
        { name: 'JavaScript', icon: 'JS' },
        { name: 'CSS', icon: 'CSS' },
        { name: 'HTML', icon: 'HTML' }
    ];

    const projects = [
        {
            title: 'Rental Car',
            description: 'A comprehensive car rental platform with booking system, payment integration, and user management.',
            image: '/api/placeholder/300/200',
            tech: ['React', 'Node.js', 'MongoDB'],
            link: '#'
        },
        {
            title: 'E-Commerce',
            description: 'Full-stack e-commerce solution with shopping cart, payment processing, and admin dashboard.',
            image: '/api/placeholder/300/200',
            tech: ['React', 'Express', 'MySQL'],
            link: '#'
        },
        {
            title: 'COATS Business',
            description: 'Business management system for textile industry with inventory tracking and reporting.',
            image: '/api/placeholder/300/200',
            tech: ['Java', 'Spring', 'PostgreSQL'],
            link: '#'
        },
        {
            title: 'CRM Dashboard',
            description: 'Customer relationship management dashboard with analytics and reporting features.',
            image: '/api/placeholder/300/200',
            tech: ['React', 'TypeScript', 'Chart.js'],
            link: '#'
        }
    ];

    const handleInputChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form submitted:', formData);
        // Handle form submission
    };

    return (
        <div className="bg-black text-white min-h-screen">
            {/* Navigation */}
            <nav className="fixed top-0 w-full bg-black/90 backdrop-blur-sm z-50 px-8 py-4 animate-fadeIn">
                <div className="flex justify-between items-center max-w-6xl mx-auto">
                    <div className="text-xl font-bold">CHAMOD.LK</div>
                    <div className="hidden md:flex space-x-8">
                        <a href="#home" className="hover:text-orange-500 transition-colors duration-300">Home</a>
                        <a href="#about" className="hover:text-orange-500 transition-colors duration-300">About</a>
                        <a href="#skills" className="hover:text-orange-500 transition-colors duration-300">Skills</a>
                        <a href="#projects" className="hover:text-orange-500 transition-colors duration-300">Projects</a>
                        <a href="#contact" className="hover:text-orange-500 transition-colors duration-300">Contact</a>
                    </div>
                </div>
            </nav>

            {/* Hero Section */}
            <section id="home" className="min-h-screen flex items-center px-8 pt-20">
                <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
                    <div className="animate-slideInLeft">
                        <h1 className="text-5xl font-bold mb-4">
                            Hi,<br />
                            I'm <span className="text-orange-500">CHAMOD</span>
                        </h1>
                        <p className="text-xl mb-2">User Interface Designer &</p>
                        <p className="text-xl mb-8">Front - End Developer</p>
                        <button className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded-full transition-colors duration-300 animate-bounce">
                            HIRE ME
                        </button>
                        <div className="mt-8">
                            <p className="text-sm text-gray-400">Based in Sri Lanka</p>
                            <p className="text-sm text-gray-400">I'm developer and</p>
                            <p className="text-sm text-gray-400">UI/UX Designer</p>
                        </div>
                    </div>
                    <div className="relative animate-slideInRight">
                        <div className="w-80 h-80 bg-gray-800 rounded-full mx-auto relative overflow-hidden">
                            <div className="absolute inset-0 bg-gradient-to-br from-orange-500/20 to-transparent"></div>
                            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-8xl">
                                👨‍💻
                            </div>
                        </div>
                        <div className="absolute top-4 right-4 bg-orange-500 text-white px-4 py-2 rounded-full text-sm animate-pulse">
                            Available for Work
                        </div>
                        <div className="absolute bottom-4 left-4 bg-blue-500 text-white px-4 py-2 rounded-full text-sm">
                            Live Chat 💬
                        </div>
                    </div>
                </div>
            </section>

            {/* About Section */}
            <section id="about" className="py-20 px-8">
                <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
                    <div className="relative animate-slideInLeft">
                        <div className="w-80 h-80 bg-gray-800 rounded-lg mx-auto relative overflow-hidden">
                            <div className="absolute inset-0 bg-gradient-to-br from-orange-500/20 to-transparent"></div>
                            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-8xl">
                                🧑‍💼
                            </div>
                        </div>
                    </div>
                    <div className="animate-slideInRight">
                        <h2 className="text-4xl font-bold mb-8">
                            About <span className="text-orange-500">Me</span>
                        </h2>
                        <p className="text-gray-300 mb-8 leading-relaxed">
                            I'm Chamod Silva, a passionate and results-driven Full Stack Developer
                            with expertise in modern web technologies. With hands-on experience in building scalable web applications, REST/API
                            APIs, and modern UI/UX frameworks, I specialize in creating robust, clean,
                            and maintainable code solutions.
                        </p>
                        <div className="grid grid-cols-3 gap-8 mb-8">
                            <div className="text-center animate-fadeInUp">
                                <div className="text-3xl font-bold text-orange-500">100+</div>
                                <p className="text-sm text-gray-400">Projects Completed</p>
                            </div>
                            <div className="text-center animate-fadeInUp" style={{ animationDelay: '0.2s' }}>
                                <div className="text-3xl font-bold text-orange-500">2500+</div>
                                <p className="text-sm text-gray-400">Hours of Coding</p>
                            </div>
                            <div className="text-center animate-fadeInUp" style={{ animationDelay: '0.4s' }}>
                                <div className="text-3xl font-bold text-orange-500">15+</div>
                                <p className="text-sm text-gray-400">Happy Clients</p>
                            </div>
                        </div>
                        <div className="flex gap-4">
                            <button className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-full transition-colors duration-300">
                                Hire Me
                            </button>
                            <button className="border border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white px-6 py-3 rounded-full transition-colors duration-300">
                                Download CV
                            </button>
                        </div>
                    </div>
                </div>
            </section>

            {/* Skills Section */}
            <section id="skills" className="py-20 px-8">
                <div className="max-w-6xl mx-auto">
                    <h2 className="text-4xl font-bold text-center mb-4">
                        My <span className="text-orange-500">Skills</span>
                    </h2>
                    <p className="text-center text-gray-300 mb-12 max-w-3xl mx-auto">
                        I'm Chamod Silva, a passionate and results-driven Full Stack Developer with a strong foundation in both front-end and back-end technologies. With
                        hands-on experience in building scalable web applications.
                    </p>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                        {skills.map((skill, index) => (
                            <div key={index} className="bg-gray-900 hover:bg-gray-800 p-6 rounded-lg text-center transition-colors duration-300 cursor-pointer animate-fadeInUp" style={{ animationDelay: `${index * 0.1}s` }}>
                                <div className="text-4xl mb-4">{skill.icon}</div>
                                <h3 className="text-white font-semibold">{skill.name}</h3>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Projects Section */}
            <section id="projects" className="py-20 px-8">
                <div className="max-w-6xl mx-auto">
                    <h2 className="text-4xl font-bold text-center mb-4">
                        My <span className="text-orange-500">Projects</span>
                    </h2>
                    <p className="text-center text-gray-300 mb-12 max-w-3xl mx-auto">
                        I'm Chamod Silva, a passionate and results-driven Full Stack Developer with a strong foundation in both front-end and back-end technologies. With
                        hands-on experience in building scalable web applications.
                    </p>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {projects.map((project, index) => (
                            <div key={index} className="bg-gray-900 rounded-lg overflow-hidden hover:transform hover:scale-105 transition-transform duration-300 animate-fadeInUp" style={{ animationDelay: `${index * 0.2}s` }}>
                                <div className="h-48 bg-gradient-to-br from-orange-500/20 to-blue-500/20 flex items-center justify-center">
                                    <div className="text-6xl">💻</div>
                                </div>
                                <div className="p-6">
                                    <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                                    <p className="text-gray-300 text-sm mb-4">{project.description}</p>
                                    <div className="flex flex-wrap gap-2 mb-4">
                                        {project.tech.map((tech, techIndex) => (
                                            <span key={techIndex} className="bg-orange-500/20 text-orange-500 px-3 py-1 rounded-full text-xs">
                        {tech}
                      </span>
                                        ))}
                                    </div>
                                    <a href={project.link} className="inline-flex items-center text-orange-500 hover:text-orange-400 transition-colors duration-300">
                                        View Project <ExternalLink size={16} className="ml-1" />
                                    </a>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Contact Section */}
            <section id="contact" className="py-20 px-8">
                <div className="max-w-6xl mx-auto">
                    <h2 className="text-4xl font-bold text-center mb-12">
                        My <span className="text-orange-500">Contact</span>
                    </h2>
                    <div className="grid md:grid-cols-2 gap-12">
                        <div className="animate-slideInLeft">
                            <div className="space-y-6">
                                <div className="flex items-center space-x-4">
                                    <Phone className="text-orange-500" size={24} />
                                    <div>
                                        <p className="text-gray-400">Call Me</p>
                                        <p>+94 70 XXX XXXX</p>
                                    </div>
                                </div>
                                <div className="flex items-center space-x-4">
                                    <Mail className="text-orange-500" size={24} />
                                    <div>
                                        <p className="text-gray-400">Email</p>
                                        <p>chamodsilva@gmail.com</p>
                                    </div>
                                </div>
                                <div className="flex items-center space-x-4">
                                    <MapPin className="text-orange-500" size={24} />
                                    <div>
                                        <p className="text-gray-400">Address</p>
                                        <p>No 12, Colombo Road<br />Kalutara, Sri Lanka</p>
                                    </div>
                                </div>
                            </div>
                            <div className="mt-8">
                                <p className="text-gray-400 mb-4">Follow Me</p>
                                <div className="flex space-x-4">
                                    <a href="#" className="bg-orange-500 hover:bg-orange-600 p-3 rounded-full transition-colors duration-300">
                                        <Github size={20} />
                                    </a>
                                    <a href="#" className="bg-orange-500 hover:bg-orange-600 p-3 rounded-full transition-colors duration-300">
                                        <Linkedin size={20} />
                                    </a>
                                    <a href="#" className="bg-orange-500 hover:bg-orange-600 p-3 rounded-full transition-colors duration-300">
                                        <Twitter size={20} />
                                    </a>
                                    <a href="#" className="bg-orange-500 hover:bg-orange-600 p-3 rounded-full transition-colors duration-300">
                                        <Instagram size={20} />
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="animate-slideInRight">
                            <div className="space-y-4">
                                <div className="grid md:grid-cols-2 gap-4">
                                    <input
                                        type="text"
                                        name="name"
                                        placeholder="Your First Name"
                                        value={formData.name}
                                        onChange={handleInputChange}
                                        className="bg-gray-900 border border-gray-700 rounded-lg px-4 py-3 focus:outline-none focus:border-orange-500 transition-colors duration-300"
                                    />
                                    <input
                                        type="email"
                                        name="email"
                                        placeholder="Your Email Address"
                                        value={formData.email}
                                        onChange={handleInputChange}
                                        className="bg-gray-900 border border-gray-700 rounded-lg px-4 py-3 focus:outline-none focus:border-orange-500 transition-colors duration-300"
                                    />
                                </div>
                                <div className="grid md:grid-cols-2 gap-4">
                                    <input
                                        type="text"
                                        placeholder="Your Phone Number"
                                        className="bg-gray-900 border border-gray-700 rounded-lg px-4 py-3 focus:outline-none focus:border-orange-500 transition-colors duration-300"
                                    />
                                    <input
                                        type="text"
                                        name="subject"
                                        placeholder="Subject"
                                        value={formData.subject}
                                        onChange={handleInputChange}
                                        className="bg-gray-900 border border-gray-700 rounded-lg px-4 py-3 focus:outline-none focus:border-orange-500 transition-colors duration-300"
                                    />
                                </div>
                                <textarea
                                    name="message"
                                    placeholder="Your Message"
                                    value={formData.message}
                                    onChange={handleInputChange}
                                    rows="5"
                                    className="w-full bg-gray-900 border border-gray-700 rounded-lg px-4 py-3 focus:outline-none focus:border-orange-500 transition-colors duration-300"
                                ></textarea>
                                <button
                                    onClick={handleSubmit}
                                    className="w-full bg-orange-500 hover:bg-orange-600 text-white py-3 rounded-lg transition-colors duration-300"
                                >
                                    Send Message
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer className="bg-gray-900 py-8 px-8">
                <div className="max-w-6xl mx-auto text-center">
                    <p className="text-gray-400">© 2024 Chamod Silva. All Rights Reserved.</p>
                </div>
            </footer>
        </div>
    );
};

export default Portfolio;