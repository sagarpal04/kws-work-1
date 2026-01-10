import { ShieldCheck, Users, Target, Award } from "lucide-react";
import Image from "next/image";

export const metadata = {
    title: "About Us | KWS Waterproofing",
    description: "Learn about our 10+ years of experience in waterproofing and heat protection services in Delhi NCR.",
};

export default function AboutPage() {
    return (
        <div className="bg-white mt-20">
            {/* Hero Banner */}
            <div className="bg-brand-light py-20 lg:py-28 relative overflow-hidden">
                <div className="container mx-auto px-6 md:px-12 text-center relative z-10">
                    <span className="text-brand-primary font-bold tracking-wider uppercase text-sm mb-4 block">Our Story</span>
                    <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">About KWS</h1>
                    <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
                        Leading the industry with over a decade of expertise in delivering premium waterproofing and heat protection solutions.
                    </p>
                </div>
                {/* Decorative */}
                <div className="absolute top-0 right-0 w-64 h-64 bg-green-100 rounded-full blur-3xl opacity-50 -translate-y-1/2 translate-x-1/2"></div>
                <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-100 rounded-full blur-3xl opacity-50 translate-y-1/2 -translate-x-1/2"></div>
            </div>

            <div className="container mx-auto px-6 md:px-12 py-20">
                {/* Main Content Split */}
                <div className="flex flex-col lg:flex-row items-center gap-16 mb-24">
                    <div className="w-full lg:w-1/2">
                        <div className="relative h-[500px] w-full rounded-2xl overflow-hidden shadow-2xl">
                            <Image
                                src="/image-17.jpg"
                                alt="About KWS Team"
                                fill
                                className="object-cover"
                                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 480px, 500px"
                                quality={80}
                                loading="lazy"
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
                                { label: "Projects Completed", value: "500+" },
                                { label: "Years Experience", value: "10+" },
                                { label: "Expert Workers", value: "50+" },
                                { label: "Client Satisfaction", value: "100%" },
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
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
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
        </div>
    );
}
