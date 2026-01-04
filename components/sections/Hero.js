"use client";

import Button from "@/components/ui/Button";
import Image from "next/image";

export default function Hero() {
    return (
        <section id="home" className="relative pt-24 pb-16 md:pt-32 md:pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-brand-light/30">
            <div className="container mx-auto px-6 md:px-12">
                <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">

                    {/* Left: Text Content */}
                    <div className="w-full lg:w-1/2 space-y-8">
                        <div className="space-y-4">
                            <h2 className="text-sm font-semibold text-gray-500 uppercase tracking-wide">
                                Trusted Waterproofing Experts
                            </h2>
                            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-[1.1]">
                                Professional & Reliable <span className="text-brand-primary">Waterproofing Services</span>
                            </h1>
                        </div>

                        <p className="text-lg text-gray-600 max-w-lg leading-relaxed">
                            We provide industry-leading waterproofing and heat protection solutions tailored for residential and commercial needs. Protecting your structure, saving you money.
                        </p>

                        <div className="flex flex-col gap-3">
                            <div className="flex items-center gap-3">
                                <div className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center shrink-0">
                                    <svg className="w-4 h-4 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" />
                                    </svg>
                                </div>
                                <span className="text-gray-700 font-semibold">No Leakage Guarantee</span>
                            </div>
                            <div className="flex items-center gap-3">
                                <div className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center shrink-0">
                                    <svg className="w-4 h-4 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" />
                                    </svg>
                                </div>
                                <span className="text-gray-700 font-semibold">Expert Team With 10+ Years Experience</span>
                            </div>
                            <div className="flex items-center gap-3">
                                <div className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center shrink-0">
                                    <svg className="w-4 h-4 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" />
                                    </svg>
                                </div>
                                <span className="text-gray-700 font-semibold">Affordable & Long-Lasting Solutions</span>
                            </div>
                            <div className="flex items-center gap-3">
                                <div className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center shrink-0">
                                    <svg className="w-4 h-4 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" />
                                    </svg>
                                </div>
                                <span className="text-gray-700 font-semibold">Free Site Visit</span>
                            </div>
                            <div className="flex items-center gap-3">
                                <div className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center shrink-0">
                                    <svg className="w-4 h-4 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" />
                                    </svg>
                                </div>
                                <span className="text-gray-700 font-semibold">Free Consultation</span>
                            </div>
                        </div>

                        <div className="pt-2">
                            <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-3">Specialized In:</p>
                            <div className="flex flex-wrap gap-2">
                                {[
                                    "Terrace Waterproofing",
                                    "Basement Waterproofing",
                                    "Bathroom / Tank Waterproofing",
                                    "Residential / Commercial / Industrial"
                                ].map((service, i) => (
                                    <span key={i} className="px-3 py-1.5 bg-white border border-gray-200 rounded-lg text-sm font-medium text-gray-600 shadow-sm">
                                        {service}
                                    </span>
                                ))}
                            </div>
                        </div>

                        <div className="flex flex-col sm:flex-row gap-4 pt-4 w-full">
                            <Button href="tel:+917678281211" size="lg" className="rounded-md px-8 flex items-center justify-center gap-2 font-bold w-full sm:w-auto">
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
                                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.05 12.05 0 0 0 .57 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.05 12.05 0 0 0 2.81.57A2 2 0 0 1 22 16.92z"></path>
                                </svg>
                                Call Us
                            </Button>
                            <Button href="#services" variant="outline" size="lg" className="rounded-md px-8 bg-white border-gray-300 text-gray-700 hover:bg-gray-50 flex items-center justify-center w-full sm:w-auto">
                                View all Services
                            </Button>
                        </div>
                    </div>

                    {/* Right: Image */}
                    <div className="w-full lg:w-1/2 relative">
                        <div className="relative h-[300px] md:h-[600px] w-full rounded-2xl overflow-hidden shadow-2xl">
                            <Image
                                src="/image-18.jpg"
                                alt="Waterproofing Team"
                                fill
                                className="object-cover"
                                priority
                            />

                        </div>
                        {/* Decorative Float Element */}
                        <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-brand-primary/10 rounded-full blur-3xl -z-10" />
                        <div className="absolute top-10 -right-10 w-40 h-40 bg-blue-500/10 rounded-full blur-3xl -z-10" />
                    </div>

                </div>
            </div>
        </section >
    );
}
