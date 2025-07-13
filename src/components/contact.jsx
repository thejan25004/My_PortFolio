// "use client"
//
// import { useState } from "react"
//
// export function Contact() {
//     const [formData, setFormData] = useState({
//         name: "",
//         email: "",
//         phone: "",
//         subject: "",
//         message: "",
//     })
//
//     const handleSubmit = (e) => {
//         e.preventDefault()
//         console.log("Form submitted:", formData)
//     }
//
//     const handleChange = (e) => {
//         setFormData({
//             ...formData,
//             [e.target.name]: e.target.value,
//         })
//     }
//
//     return (
//         <section id="contact" className="section contact">
//             <div className="container">
//                 <h2 className="section-title">
//                     My <span className="text-orange">Contact</span>
//                 </h2>
//
//                 <div className="contact-content">
//                     <div className="contact-info animate-on-scroll">
//                         <div className="contact-item">
//                             <div className="contact-label">Contact Me</div>
//                             <div className="contact-value">+94 76 937 85 24</div>
//                         </div>
//
//                         <div className="contact-item">
//                             <div className="contact-label">Gmail</div>
//                             <div className="contact-value">thejathejanchamod9@gmail.com</div>
//                         </div>
//
//                         <div className="contact-item">
//                             <div className="contact-label">Location</div>
//                             <div className="contact-value">
//                                 No 174 c 21, Cityterrance Batapola Road<br />
//                                 Thalqasgoda, Ambalangoda
//                             </div>
//                         </div>
//
//                         <div style={{ marginTop: "3rem" }}>
//                             <div style={{ color: "#ffffff", fontSize: "1.2rem", fontWeight: "600", marginBottom: "1rem" }}>
//                                 FIND ME ON
//                             </div>
//                             <div className="social-links-contact">
//                                 {/* Sample icons - replace or keep as needed */}
//                                 <a href="#" className="social-link">
//                                     <svg width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
//                                         <path d="M12.017 0C5.396 0 .029 5.367.029 11.987..." />
//                                     </svg>
//                                 </a>
//                                 <a href="#" className="social-link">
//                                     <svg width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
//                                         <path d="M24 4.557c-.883.392-1.832.656-2.828..." />
//                                     </svg>
//                                 </a>
//                                 <a href="#" className="social-link">
//                                     <svg width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
//                                         <path d="M20.447 20.452h-3.554v-5.569c0-1.328..." />
//                                     </svg>
//                                 </a>
//                             </div>
//                         </div>
//                     </div>
//
//                     <form onSubmit={handleSubmit} className="contact-form animate-on-scroll">
//                         <div className="form-row">
//                             <input
//                                 name="name"
//                                 placeholder="Enter Your Name :"
//                                 value={formData.name}
//                                 onChange={handleChange}
//                                 className="form-input"
//                                 required
//                             />
//                             <input
//                                 name="email"
//                                 type="email"
//                                 placeholder="Enter Your Email Address :"
//                                 value={formData.email}
//                                 onChange={handleChange}
//                                 className="form-input"
//                                 required
//                             />
//                         </div>
//
//                         <div className="form-row">
//                             <input
//                                 name="phone"
//                                 placeholder="Enter Your Contact Number :"
//                                 value={formData.phone}
//                                 onChange={handleChange}
//                                 className="form-input"
//                             />
//                             <input
//                                 name="subject"
//                                 placeholder="Subject :"
//                                 value={formData.subject}
//                                 onChange={handleChange}
//                                 className="form-input"
//                                 required
//                             />
//                         </div>
//
//                         <textarea
//                             name="message"
//                             placeholder="Enter Your Message :"
//                             value={formData.message}
//                             onChange={handleChange}
//                             className="form-textarea"
//                             required
//                         />
//
//                         <button type="submit" className="submit-btn">Send Message</button>
//                     </form>
//                 </div>
//
//                 <div className="footer">
//                     <p>No 174 c 21, Cityterrance Batapola Road, Thalqasgoda, Ambalangoda</p>
//                 </div>
//             </div>
//         </section>
//     )
// }
//
//
//

"use client"

import { useState } from "react"

export function Contact() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
    })

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        console.log("Form submitted:", formData)
    }

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        })
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
                        </div>

                        <div className="contact-item">
                            <div className="contact-label">Gmail</div>
                            <div className="contact-value">thejathejanchamod9@gmail.com</div>
                        </div>

                        <div className="contact-item">
                            <div className="contact-label">LocaLocation</div>
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
                                <a href="#" className="social-link">
                                    <svg width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.024-.105-.949-.199-2.403.041-3.439.219-.937 1.219-5.160 1.219-5.160s-.312-.623-.312-1.543c0-1.444.83-2.523 1.869-2.523.881 0 1.307.662 1.307 1.456 0 .887-.565 2.212-.854 3.442-.243 1.026.514 1.862 1.524 1.862 1.83 0 3.24-1.93 3.24-4.715 0-2.467-1.772-4.192-4.305-4.192-2.932 0-4.658 2.198-4.658 4.472 0 .887.341 1.837.766 2.354.084.099.096.186.071.288-.077.315-.245.994-.278 1.133-.043.183-.145.222-.334.134-1.249-.581-2.03-2.407-2.03-3.874 0-3.154 2.292-6.052 6.608-6.052 3.469 0 6.165 2.473 6.165 5.776 0 3.447-2.173 6.22-5.19 6.22-1.013 0-1.969-.527-2.292-1.155l-.623 2.378c-.226.869-.835 1.958-1.244 2.621.937.29 1.931.446 2.962.446 6.624 0 11.99-5.367 11.99-11.987C24.007 5.367 18.641.001 12.017.001z" />
                                    </svg>
                                </a>
                                <a href="#" className="social-link">
                                    <svg width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                                    </svg>
                                </a>
                                <a href="#" className="social-link">
                                    <svg width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.024-.105-.949-.199-2.403.041-3.439.219-.937 1.219-5.160 1.219-5.160s-.312-.623-.312-1.543c0-1.444.83-2.523 1.869-2.523.881 0 1.307.662 1.307 1.456 0 .887-.565 2.212-.854 3.442-.243 1.026.514 1.862 1.524 1.862 1.83 0 3.24-1.93 3.24-4.715 0-2.467-1.772-4.192-4.305-4.192-2.932 0-4.658 2.198-4.658 4.472 0 .887.341 1.837.766 2.354.084.099.096.186.071.288-.077.315-.245.994-.278 1.133-.043.183-.145.222-.334.134-1.249-.581-2.03-2.407-2.03-3.874 0-3.154 2.292-6.052 6.608-6.052 3.469 0 6.165 2.473 6.165 5.776 0 3.447-2.173 6.22-5.19 6.22-1.013 0-1.969-.527-2.292-1.155l-.623 2.378c-.226.869-.835 1.958-1.244 2.621.937.29 1.931.446 2.962.446 6.624 0 11.99-5.367 11.99-11.987C24.007 5.367 18.641.001 12.017.001z" />
                                    </svg>
                                </a>
                                <a href="#" className="social-link">
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

                        <button type="submit" className="submit-bn" >Submit</button>
                    </form>
                </div>

                <div className="footer">
                    <p>No 174 c 21, Cityterrance BatapolaRoad Thalqasgoda Ambalangoda</p>
                </div>
            </div>
        </section>
    )
}
