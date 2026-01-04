"use client";

import Button from "@/components/ui/Button";
import Image from "next/image";

export default function Hero() {
    return (
        <section id="home" className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-brand-light/30">
            <div className="container mx-auto px-6 md:px-12">
                <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">

                    {/* Left: Text Content */}
                    <div className="w-full lg:w-1/2 space-y-8">
                        <div className="space-y-4">
                            <h2 className="text-sm font-semibold text-gray-500 uppercase tracking-wide">
                                Trusted Waterproofing Experts
                            </h2>
                            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-[1.1]">
                                Specialized, efficient, and thorough <span className="text-brand-primary">waterproofing services</span>
                            </h1>
                        </div>

                        <p className="text-lg text-gray-600 max-w-lg leading-relaxed">
                            We provide industry-leading waterproofing and heat protection solutions tailored for residential and commercial needs. Protecting your structure, saving you money.
                        </p>

                        <div className="flex flex-wrap gap-4 pt-4">
                            <Button href="tel:+917678281211" size="lg" className="rounded-md px-8 flex items-center gap-2">
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
                                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.05 12.05 0 0 0 .57 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.05 12.05 0 0 0 2.81.57A2 2 0 0 1 22 16.92z"></path>
                                </svg>
                                Call Us
                            </Button>
                            <Button href="#services" variant="outline" size="lg" className="rounded-md px-8 bg-white border-gray-300 text-gray-700 hover:bg-gray-50">
                                View all Services
                            </Button>
                        </div>
                    </div>

                    {/* Right: Image */}
                    <div className="w-full lg:w-1/2 relative">
                        <div className="relative h-[400px] lg:h-[600px] w-full rounded-2xl overflow-hidden shadow-2xl">
                            <Image
                                src="/image-11.png"
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
        </section>
    );
}
