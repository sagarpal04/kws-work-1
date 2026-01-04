"use client";

import { Target, Award } from "lucide-react";
import Image from "next/image";

export default function About() {
    return (
        <section id="about" className="py-24 bg-white scroll-mt-20">
            <div className="container mx-auto px-6 md:px-12">
                <div className="flex flex-col lg:flex-row items-center gap-16 mb-16">
                    <div className="w-full lg:w-1/2">
                        <div className="relative h-[500px] w-full rounded-2xl overflow-hidden shadow-2xl">
                            <Image
                                src="/image-17.jpg"
                                alt="About KWS Team"
                                fill
                                className="object-cover"
                            />

                        </div>
                    </div>
                    <div className="w-full lg:w-1/2">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Building Trust Through Quality</h2>
                        <div className="space-y-6 text-gray-600 text-lg leading-relaxed">
                            <p>
                                KWS (Kumar Waterproofing Solution) has established itself as a benchmark for quality and reliability in the waterproofing industry.
                                We understand that every structure is unique, which is why we offer customized solutions that address the specific challenges of your property.
                            </p>
                            <p>
                                Our team comprises certified experts who use state-of-the-art technology and high-grade materials to ensure that your home or business is protected against water damage, leakage, and thermal stress.
                            </p>
                        </div>

                        <div className="grid grid-cols-2 gap-6 mt-10">
                            {[
                                { label: "Projects Completed", value: "100+" },
                                { label: "Years Experience", value: "10+" },
                                { label: "Expert Workers", value: "20+" },
                                { label: "Client Satisfaction", value: "99%" },
                            ].map((stat, i) => (
                                <div key={i} className="border-l-4 border-brand-primary pl-4">
                                    <div className="text-3xl font-bold text-gray-900">{stat.value}</div>
                                    <div className="text-sm text-gray-500 font-medium">{stat.label}</div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Mission & Vision Cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="bg-slate-50 p-10 rounded-3xl border border-slate-100">
                        <div className="w-14 h-14 bg-green-100 text-brand-primary rounded-xl flex items-center justify-center mb-6">
                            <Target size={32} />
                        </div>
                        <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Mission</h3>
                        <p className="text-gray-600 leading-relaxed">
                            To provide top-tier waterproofing and thermal insulation services that enhance the longevity and safety of structures, ensuring peace of mind for our clients through scientific and proven methods.
                        </p>
                    </div>
                    <div className="bg-slate-50 p-10 rounded-3xl border border-slate-100">
                        <div className="w-14 h-14 bg-green-100 text-brand-primary rounded-xl flex items-center justify-center mb-6">
                            <Award size={32} />
                        </div>
                        <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Vision</h3>
                        <p className="text-gray-600 leading-relaxed">
                            To be the most trusted and preferred partner for waterproofing solutions across India, known for innovation, quality, integrity and our unwavering commitment to customer satisfaction.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}
