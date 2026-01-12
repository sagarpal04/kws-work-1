"use client";

import { Phone, Mail, MapPin, FileText, Building2 } from "lucide-react";
import { useState } from "react";

export default function FindUs() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        message: "",
    });

    const [status, setStatus] = useState("idle");

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus("loading");

        try {
            const res = await fetch("/api/contact", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    ...formData,
                    source: "find_us_section",
                }),
            });

            const data = await res.json();

            if (!res.ok) throw new Error(data.error);

            setStatus("success");
            setFormData({ name: "", email: "", phone: "", message: "" });
            setTimeout(() => setStatus("idle"), 3000);
        } catch (err) {
            console.error(err);
            alert("Failed to send message");
            setStatus("idle");
        }
    };

    return (
        <section id="contact" className="py-12 md:py-20 bg-gradient-to-br from-gray-50 via-white to-green-50 scroll-mt-20">
            <div className="container mx-auto px-4 md:px-12 max-w-7xl">
                <div className="flex flex-col lg:flex-row gap-8 md:gap-12">

                    {/* Left: Contact Info */}
                    <div className="w-full lg:w-1/2 space-y-5 md:space-y-8">
                        <div className="mb-4 md:mb-8">
                            <span className="inline-block text-xs md:text-sm font-bold text-green-600 uppercase tracking-wider mb-2 md:mb-3 bg-green-50 px-3 md:px-4 py-1 md:py-1.5 rounded-full">
                                Contact Info
                            </span>
                            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-3 md:mt-4 mb-2 md:mb-4 leading-tight">
                                Keep In Touch
                            </h2>
                            <p className="text-gray-600 text-base md:text-base leading-relaxed">
                                We prioritize responding to your inquiries promptly to ensure you receive the assistance you need in a timely manner.
                            </p>
                        </div>

                        <div className="space-y-3 md:space-y-4">
                            {/* Phone */}
                            <a href="tel:+917678281211" className="block bg-white p-4 md:p-5 rounded-xl md:rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-green-200 group">
                                <div className="flex items-center gap-3 md:gap-4">
                                    <div className="w-11 h-11 md:w-12 md:h-12 bg-gradient-to-br from-green-500 to-green-600 rounded-lg md:rounded-xl flex items-center justify-center text-white shrink-0 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                                        <Phone size={20} className="md:w-5 md:h-5" />
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-gray-900 text-sm md:text-base mb-0.5 md:mb-1">Call Us</h3>
                                        <p className="text-gray-900 font-bold text-base md:text-lg">+91 76782 81211</p>
                                    </div>
                                </div>
                            </a>

                            {/* Email */}
                            <a href="mailto:kumarwaterproofingsolution@gmail.com" className="block bg-white p-4 md:p-5 rounded-xl md:rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-green-200 group">
                                <div className="flex items-center gap-3 md:gap-4">
                                    <div className="w-11 h-11 md:w-12 md:h-12 bg-gradient-to-br from-green-500 to-green-600 rounded-lg md:rounded-xl flex items-center justify-center text-white shrink-0 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                                        <Mail size={20} className="md:w-5 md:h-5" />
                                    </div>
                                    <div className="overflow-hidden">
                                        <h3 className="font-bold text-gray-900 text-sm md:text-base mb-0.5 md:mb-1">Email Now</h3>
                                        <p className="text-gray-900 font-bold text-sm md:text-sm break-words">
                                            kumarwaterproofingsolution@gmail.com
                                        </p>
                                    </div>
                                </div>
                            </a>

                            {/* GST */}
                            <div className="bg-white p-4 md:p-5 rounded-xl md:rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-green-200 group">
                                <div className="flex items-center gap-3 md:gap-4">
                                    <div className="w-11 h-11 md:w-12 md:h-12 bg-gradient-to-br from-green-500 to-green-600 rounded-lg md:rounded-xl flex items-center justify-center text-white shrink-0 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                                        <FileText size={20} className="md:w-5 md:h-5" />
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-gray-900 text-sm md:text-base mb-0.5 md:mb-1">GST Registration</h3>
                                        <p className="text-gray-900 font-bold font-mono tracking-wide text-sm md:text-sm">
                                            09MHQPK7164L1Z7
                                        </p>
                                    </div>
                                </div>
                            </div>

                            {/* Head Office */}
                            <div className="bg-white p-4 md:p-5 rounded-xl md:rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-green-200 group">
                                <div className="flex items-start gap-3 md:gap-4">
                                    <div className="w-11 h-11 md:w-12 md:h-12 bg-gradient-to-br from-green-500 to-green-600 rounded-lg md:rounded-xl flex items-center justify-center text-white shrink-0 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                                        <MapPin size={20} className="md:w-5 md:h-5" />
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-gray-900 text-sm md:text-base mb-1 md:mb-1">Head Office</h3>
                                        <p className="text-gray-900 font-semibold leading-relaxed text-sm md:text-sm">
                                            Vandana Enclave, Shital Vihar, Khora Colony, Sector 62, Ghaziabad, Noida, Uttar Pradesh 201020
                                        </p>
                                    </div>
                                </div>
                            </div>

                            {/* Branch Office */}
                            <div className="bg-white p-4 md:p-5 rounded-xl md:rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-green-200 group">
                                <div className="flex items-start gap-3 md:gap-4">
                                    <div className="w-11 h-11 md:w-12 md:h-12 bg-gradient-to-br from-green-500 to-green-600 rounded-lg md:rounded-xl flex items-center justify-center text-white shrink-0 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                                        <Building2 size={20} className="md:w-5 md:h-5" />
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-gray-900 text-sm md:text-base mb-1 md:mb-1">Branch Office</h3>
                                        <p className="text-gray-900 font-semibold leading-relaxed text-sm md:text-sm">
                                            H.No – S–319, School Block, Block S1, Shakarpur, Delhi – 110092
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right: Form */}
                    <div className="w-full lg:w-1/2 lg:sticky lg:top-24 h-fit">
                        <div className="bg-white p-6 md:p-8 rounded-2xl md:rounded-3xl shadow-2xl border border-gray-100">
                            <div className="mb-6 md:mb-8">
                                <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-1.5 md:mb-2">Send us a message</h3>
                                <p className="text-gray-500 text-sm md:text-base">We'll get back to you as soon as possible</p>
                            </div>

                            <form onSubmit={handleSubmit} className="space-y-5 md:space-y-5">
                                <div>
                                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                                        Name <span className="text-red-500">*</span>
                                    </label>
                                    <input
                                        required
                                        name="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        type="text"
                                        placeholder="Your full name"
                                        className="w-full px-4 py-3.5 md:px-5 md:py-4 rounded-xl border-2 border-gray-200 bg-gray-50 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent focus:bg-white transition-all text-gray-900 placeholder-gray-400 text-[15px] md:text-base"
                                    />
                                </div>

                                <div>
                                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                                        Email <span className="text-red-500">*</span>
                                    </label>
                                    <input
                                        required
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        type="email"
                                        placeholder="your.email@example.com"
                                        className="w-full px-4 py-3.5 md:px-5 md:py-4 rounded-xl border-2 border-gray-200 bg-gray-50 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent focus:bg-white transition-all text-gray-900 placeholder-gray-400 text-[15px] md:text-base"
                                    />
                                </div>

                                <div>
                                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                                        Phone <span className="text-gray-400 font-normal">(Optional)</span>
                                    </label>
                                    <input
                                        name="phone"
                                        value={formData.phone}
                                        onChange={handleChange}
                                        type="tel"
                                        className="w-full px-4 py-3.5 md:px-5 md:py-4 rounded-xl border-2 border-gray-200 bg-gray-50 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent focus:bg-white transition-all text-gray-900 placeholder-gray-400 text-[15px] md:text-base"
                                    />
                                </div>

                                <div>
                                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                                        Message <span className="text-red-500">*</span>
                                    </label>
                                    <textarea
                                        required
                                        name="message"
                                        value={formData.message}
                                        onChange={handleChange}
                                        rows={4}
                                        placeholder="Tell us about your waterproofing needs..."
                                        className="w-full px-4 py-3.5 md:px-5 md:py-4 rounded-xl border-2 border-gray-200 bg-gray-50 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent focus:bg-white transition-all resize-none text-gray-900 placeholder-gray-400 text-[15px] md:text-base"
                                    />
                                </div>

                                <button
                                    type="submit"
                                    disabled={status === "loading"}
                                    className={`w-full py-3.5 md:py-4 px-6 rounded-xl font-bold text-base md:text-lg text-white shadow-xl transition-all duration-300 ${status === "loading"
                                        ? "opacity-75 cursor-not-allowed bg-green-500"
                                        : "bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 shadow-green-300 transform hover:-translate-y-1 hover:shadow-2xl"
                                        }`}
                                >
                                    {status === "loading" ? "Sending..." : "Send Message"}
                                </button>

                                {status === "success" && (
                                    <div className="text-center p-4 bg-green-50 rounded-xl border border-green-200">
                                        <p className="text-green-700 font-semibold text-sm">
                                            Thank you! We'll be in touch soon.
                                        </p>
                                    </div>
                                )}
                            </form>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}
