"use client";
import { useState } from "react";

export default function ContactSection() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        message: ""
    });
    const [status, setStatus] = useState("");
    const [loading, setLoading] = useState(false);

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async () => {
        if (!formData.name || !formData.email || !formData.message) {
            setStatus("error");
            return;
        }

        setLoading(true);
        setStatus("");

        try {
            const response = await fetch("/api/contact", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    ...formData,
                    source: "contact_page"
                }),
            });

            const result = await response.json();

            if (result.success) {
                setStatus("success");
                setFormData({ name: "", email: "", phone: "", message: "" });
            } else {
                setStatus("error");
            }
        } catch (error) {
            setStatus("error");
            console.error("Form submission error:", error);
        } finally {
            setLoading(false);
        }
    };

    return (
        <section className="bg-gradient-to-b from-gray-50 to-white py-24 lg:py-32">
            <div className="max-w-7xl mx-auto px-8 lg:px-24">

                {/* Section Header */}
                <div className="text-center mb-16">
                    <p className="text-green-600 font-bold text-sm uppercase tracking-widest mb-4">
                        Contact Info
                    </p>
                    <h2 className="text-4xl lg:text-5xl font-extrabold text-gray-900 mb-6 tracking-tight">
                        Keep In Touch
                    </h2>
                    <p className="text-gray-500 text-lg max-w-2xl mx-auto leading-relaxed">
                        We prioritize responding to your inquiries promptly to ensure you receive the assistance you need in a timely manner.
                    </p>
                </div>

                {/* Main Content Grid */}
                <div className="grid lg:grid-cols-2 gap-16 lg:gap-20 items-start">

                    {/* Left Side - Contact Info */}
                    <div className="space-y-6">

                        {/* Call Us */}
                        <div className="flex items-start gap-6 p-8 bg-white rounded-3xl shadow-sm border border-gray-100 hover:shadow-xl transition-all duration-300 group">
                            <div className="flex-shrink-0 w-14 h-14 bg-green-50 rounded-2xl flex items-center justify-center group-hover:bg-green-500 transition-colors duration-300">
                                <svg className="w-7 h-7 text-green-600 group-hover:text-white transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                </svg>
                            </div>
                            <div>
                                <h3 className="font-bold text-gray-900 text-xl mb-2">Call Us</h3>
                                <a href="tel:+917678281211" className="text-gray-600 text-lg hover:text-green-600 transition-colors font-medium">
                                    +91 76782 81211
                                </a>
                            </div>
                        </div>

                        {/* Email Now */}
                        <div className="flex items-start gap-6 p-8 bg-white rounded-3xl shadow-sm border border-gray-100 hover:shadow-xl transition-all duration-300 group">
                            <div className="flex-shrink-0 w-14 h-14 bg-green-50 rounded-2xl flex items-center justify-center group-hover:bg-green-500 transition-colors duration-300">
                                <svg className="w-7 h-7 text-green-600 group-hover:text-white transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                </svg>
                            </div>
                            <div>
                                <h3 className="font-bold text-gray-900 text-xl mb-2">Email Now</h3>
                                <a href="mailto:kumarwaterproofingsolution@gmail.com" className="text-gray-600 text-lg hover:text-green-600 transition-colors break-all font-medium">
                                    kumarwaterproofingsolution@gmail.com jhsvadgcvgv
                                </a>
                            </div>
                        </div>

                        {/* Head Office */}
                        {/* <div className="flex items-start gap-6 p-8 bg-white rounded-3xl shadow-sm border border-gray-100 hover:shadow-xl transition-all duration-300 group">
                            <div className="flex-shrink-0 w-14 h-14 bg-green-50 rounded-2xl flex items-center justify-center group-hover:bg-green-500 transition-colors duration-300">
                                <svg className="w-7 h-7 text-green-600 group-hover:text-white transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                </svg>
                            </div>
                            <div>
                                <h3 className="font-bold text-gray-900 text-xl mb-3">Head Office</h3>
                                <p className="text-gray-600 leading-relaxed text-base">
                                    Vanda2na Enclave, Shital Vihar,<br />
                                    Khora Colony, Sector 62,<br />
                                    Ghaziabad, Noida,<br />
                                    Uttar Pradesh 201020
                                </p>
                            </div>
                        </div> */}

                        {/* Branch Office */}
                        {/* <div className="flex items-start gap-6 p-8 bg-white rounded-3xl shadow-sm border border-gray-100 hover:shadow-xl transition-all duration-300 group">
                            <div className="flex-shrink-0 w-14 h-14 bg-green-50 rounded-2xl flex items-center justify-center group-hover:bg-green-500 transition-colors duration-300">
                                <svg className="w-7 h-7 text-green-600 group-hover:text-white transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                                </svg>
                            </div>
                            <div>
                                <h3 className="font-bold text-gray-900 text-xl mb-3">Branch Office</h3>
                                <p className="text-gray-600 leading-relaxed text-base">
                                    H.No – S–319, School Block,<br />
                                    Block S1, Shakarpur,<br />
                                    Delhi – 110092
                                </p>
                            </div>
                        </div> */}

                    </div>

                    {/* Right Side - Contact Form */}
                    <div className="bg-white p-10 lg:p-12 rounded-3xl shadow-xl border border-gray-100 relative overflow-hidden">

                        {/* Decorative Background Blob */}
                        <div className="absolute top-0 right-0 -mt-10 -mr-10 w-40 h-40 bg-green-50 rounded-full blur-3xl opacity-50 pointer-events-none"></div>

                        <h3 className="text-3xl font-bold text-gray-900 mb-8 relative z-10">Send us a message</h3>

                        <div className="space-y-6 relative z-10">
                            {/* Name */}
                            <div>
                                <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2 ml-1">
                                    Name
                                </label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    placeholder="Your Full Name"
                                    className="w-full px-5 py-4 bg-gray-50 border border-gray-200 rounded-xl focus:bg-white focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all outline-none text-gray-700 placeholder-gray-400"
                                />
                            </div>

                            {/* Email */}
                            <div>
                                <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2 ml-1">
                                    Email
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    placeholder="your@email.com"
                                    className="w-full px-5 py-4 bg-gray-50 border border-gray-200 rounded-xl focus:bg-white focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all outline-none text-gray-700 placeholder-gray-400"
                                />
                            </div>

                            {/* Phone */}
                            <div>
                                <label htmlFor="phone" className="block text-sm font-semibold text-gray-700 mb-2 ml-1">
                                    Phone <span className="text-gray-400 font-normal">(Optional)</span>
                                </label>
                                <input
                                    type="tel"
                                    id="phone"
                                    name="phone"
                                    value={formData.phone}
                                    onChange={handleChange}
                                    placeholder="+91 98765 43210"
                                    className="w-full px-5 py-4 bg-gray-50 border border-gray-200 rounded-xl focus:bg-white focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all outline-none text-gray-700 placeholder-gray-400"
                                />
                            </div>

                            {/* Message */}
                            <div>
                                <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2 ml-1">
                                    Message
                                </label>
                                <textarea
                                    id="message"
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    placeholder="How can we help you today?"
                                    rows={5}
                                    className="w-full px-5 py-4 bg-gray-50 border border-gray-200 rounded-xl focus:bg-white focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all outline-none text-gray-700 placeholder-gray-400 resize-none"
                                />
                            </div>

                            {/* Status Messages */}
                            {status === "success" && (
                                <div className="p-4 bg-green-50 border border-green-200 rounded-xl text-green-700 text-sm font-medium flex items-center gap-2 animate-fade-in">
                                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                                    Message sent successfully! We'll get back to you soon.
                                </div>
                            )}
                            {status === "error" && (
                                <div className="p-4 bg-red-50 border border-red-200 rounded-xl text-red-700 text-sm font-medium flex items-center gap-2 animate-fade-in">
                                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                                    Please fill in all required fields correctly.
                                </div>
                            )}

                            {/* Submit Button */}
                            <button
                                onClick={handleSubmit}
                                disabled={loading}
                                className="w-full bg-green-600 hover:bg-green-700 text-white font-bold py-5 rounded-xl transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed shadow-lg hover:shadow-green-500/30 transform hover:-translate-y-0.5"
                            >
                                {loading ? (
                                    <span className="flex items-center justify-center gap-2">
                                        <svg className="animate-spin h-5 w-5 text-white" viewBox="0 0 24 24">
                                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                        </svg>
                                        Sending...
                                    </span>
                                ) : (
                                    "Send Message"
                                )}
                            </button>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}