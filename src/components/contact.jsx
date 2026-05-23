import { useState } from "react"
import emailjs from "emailjs-com"

export function Contact() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
    })

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        emailjs
            .send(
                "service_f5hgwhd",
                "template_lk7wx5z",
                formData,
                "SAEyIZwCT9yv8H0l6"
            )
            .then(
                () => {
                    alert("✅ Message sent successfully!")
                    setFormData({ name: "", email: "", phone: "", subject: "", message: "" })
                },
                (error) => {
                    alert("❌ Failed to send message. Try again.")
                    console.error(error)
                }
            )
    }

    return (
        <section id="contact" className="section contact">
            <div className="container">
                <h2 className="section-title">
                    My <span className="text-orange">Contact</span>
                </h2>

                <div className="contact-content">
                    <div className="contact-info animate-on-scroll">
                        <div className="contact-item">
                            <div className="contact-label">Contact Me</div>
                            <div className="contact-value">+94 76 937 85 24</div>
                            <div className="contact-value">+94 75 087 30 42</div>
                        </div>

                        <div className="contact-item">
                            <div className="contact-label">Gmail</div>
                            <div className="contact-value">thejanchamod9@gmail.com</div>
                        </div>

                        <div className="contact-item">
                            <div className="contact-label">Location</div>
                            <div className="contact-value">
                                No 174 c 21, Cityterrance BatapolaRoad
                                <br />
                                Thalqasgoda Ambalangoda
                            </div>
                        </div>

                        <div style={{ marginTop: "3rem" }}>
                            <div style={{ color: "#ffffff", fontSize: "1.2rem", fontWeight: "600", marginBottom: "1rem" }}>
                                FIND ME ON
                            </div>
                            <div className="social-links-contact">
                                <a href="https://github.com/thejan25004" className="social-link" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                                    <svg width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A8.203 8.203 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
                                    </svg>
                                </a>
                                <a href="https://x.com/ChamodThejan" className="social-link" target="_blank" rel="noopener noreferrer" aria-label="X (Twitter)">
                                    <svg width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                                    </svg>
                                </a>
                                <a href="https://www.youtube.com/@chamodthejan4692" className="social-link" target="_blank" rel="noopener noreferrer" aria-label="YouTube">
                                    <svg width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                                    </svg>
                                </a>
                                <a href="https://www.linkedin.com/in/chamod-thejan-582483319/" className="social-link" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                                    <svg width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                                    </svg>
                                </a>
                            </div>
                        </div>
                    </div>

                    <form onSubmit={handleSubmit} className="contact-form animate-on-scroll">
                        <div className="form-row">
                            <input
                                name="name"
                                placeholder="Enter Your Name :"
                                value={formData.name}
                                onChange={handleChange}
                                className="form-input"
                                required
                            />
                            <input
                                name="email"
                                type="email"
                                placeholder="Enter Your Email Address :"
                                value={formData.email}
                                onChange={handleChange}
                                className="form-input"
                                required
                            />
                        </div>

                        <div className="form-row">
                            <input
                                name="phone"
                                placeholder="Enter Your Contact Number :"
                                value={formData.phone}
                                onChange={handleChange}
                                className="form-input"
                            />
                            <input
                                name="subject"
                                placeholder="Subject :"
                                value={formData.subject}
                                onChange={handleChange}
                                className="form-input"
                                required
                            />
                        </div>

                        <textarea
                            name="message"
                            placeholder="Enter Your Message :"
                            value={formData.message}
                            onChange={handleChange}
                            className="form-textarea"
                            required
                        />

                        <button type="submit" className="submit-bn">Submit</button>
                    </form>
                </div>

                <div className="footer">
                    <p>No 174 c 21, Cityterrance BatapolaRoad Thalgasgoda Ambalangoda</p>
                </div>
            </div>
        </section>
    )
}
