"use client";

import Button from "@/components/ui/Button";
import Image from "next/image";

export default function Highlights() {
    return (
        <section id="features" className="py-12 md:py-24 bg-brand-light/20 scroll-mt-20">
            <div className="container mx-auto px-4 md:px-12">
                <div className="flex flex-col lg:flex-row items-center gap-10 md:gap-16">

                    {/* Left: Text Content */}
                    <div className="w-full lg:w-1/2 order-2 lg:order-1">
                        <div className="mb-6 md:mb-8">
                            <span className="text-xs md:text-sm font-semibold text-gray-500 uppercase tracking-wide">
                                Affordable solutions
                            </span>
                            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-3 md:mt-2 mb-4 md:mb-6 leading-tight">
                                High-Quality and Friendly Services at Fair Prices
                            </h2>
                            <p className="text-base md:text-lg text-gray-600 leading-relaxed mb-6 md:mb-8">
                                We provide comprehensive waterproofing services tailored to your needs.
                                From residential leakage repair to large-scale commercial coatings,
                                we ensure quality delivery at every step.
                            </p>
                            <Button href="tel:+917678281211" className="rounded-md px-6 md:px-8 w-full sm:w-auto">
                                Free Consultation
                            </Button>
                        </div>
                    </div>

                    {/* Right: Layered Images */}
                    <div className="w-full lg:w-1/2 order-1 lg:order-2">
                        <div className="relative h-[350px] md:h-[500px] w-full">
                            {/* Main Image */}
                            <div className="absolute top-0 right-0 w-4/5 h-4/5 rounded-xl md:rounded-2xl overflow-hidden shadow-2xl z-10">
                                <Image
                                    src="/image-7.jpg"
                                    alt="Workers"
                                    fill
                                    className="object-cover"
                                    sizes="(max-width: 640px) 280px, (max-width: 1024px) 320px, 400px"
                                    quality={80}
                                    loading="lazy"
                                />
                            </div>
                            {/* Overlap Image */}
                            <div className="absolute bottom-0 left-0 w-3/5 h-3/5 rounded-xl md:rounded-2xl overflow-hidden shadow-2xl border-4 border-white z-20">
                                <Image
                                    src="/image-8.jpg"
                                    alt="Workers Details"
                                    fill
                                    className="object-cover"
                                    sizes="(max-width: 640px) 225px, (max-width: 1024px) 240px, 300px"
                                    quality={80}
                                    loading="lazy"
                                />
                            </div>
                            {/* Decorative */}
                            <div className="absolute top-10 right-10 w-20 h-20 bg-brand-primary/20 rounded-full blur-2xl z-0"></div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}