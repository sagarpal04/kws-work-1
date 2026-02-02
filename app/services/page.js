import { Droplets, Umbrella, Layers, Box, Zap, Sun, CheckCircle, ArrowRight, Building2 } from "lucide-react";
import Link from "next/link";

export const metadata = {
    title: "Our Services | KWS Waterproofing",
    description: "Expert waterproofing solutions including chemical, membrane, traditional, and heat insulation services.",
};

const services = [
    {
        icon: Umbrella,
        title: "Terrace & Roof Waterproofing",
        desc: "Comprehensive protection for your roof against harsh weather and leakage.",
        features: ["Brick bat coba waterproofing", "PU coating & elastomeric coating", "APP membrane waterproofing", "Heat & leakage protection"]
    },
    {
        icon: Droplets,
        title: "Bathroom & Toilet Waterproofing",
        desc: " specialized solutions to prevent internal seepage and leakage in wet areas.",
        features: ["Internal waterproofing before tiling", "Leakage repair without tile breaking (chemical injection)"]
    },
    {
        icon: Layers,
        title: "Basement Waterproofing",
        desc: "Advanced techniques to stop underground water seepage and protect foundations.",
        features: ["Negative & positive side waterproofing", "Pressure grouting solutions"]
    },
    {
        icon: Box,
        title: "Water Tank Waterproofing",
        desc: "Safe and durable waterproofing for drinking and storage water tanks.",
        features: ["Overhead & underground tanks", "Food-grade coating solutions"]
    },
    {
        icon: Building2,
        title: "Industrial & Commercial Waterproofing",
        desc: "Heavy-duty waterproofing for large-scale structures and factories.",
        features: ["Factory sheds, podiums & parking areas", "Expansion joint & structural waterproofing"]
    },
    {
        icon: Zap,
        title: "Custom Solutions",
        desc: "Tailored waterproofing strategies designed for specific site conditions.",
        features: ["Site-specific assessment", "Custom material selection", "Expert consultation"]
    }
];

export default function ServicesPage() {
    return (
        <div className="bg-white mt-20">
            {/* Hero Banner */}
            <div className="bg-brand-light py-20 lg:py-28 relative overflow-hidden">
                <div className="container mx-auto px-6 md:px-12 text-center relative z-10">
                    <span className="text-brand-primary font-bold tracking-wider uppercase text-sm mb-4 block">What We Do</span>
                    <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">Our Services</h1>
                    <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
                        Comprehensive waterproofing and heat protection solutions tailored to your specific needs.
                    </p>
                </div>
                {/* Decorative */}
                <div className="absolute top-0 right-0 w-64 h-64 bg-green-100 rounded-full blur-3xl opacity-50 -translate-y-1/2 translate-x-1/2"></div>
                <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-100 rounded-full blur-3xl opacity-50 translate-y-1/2 -translate-x-1/2"></div>
            </div>

            <div className="container mx-auto px-6 md:px-12 py-20">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {services.map((service, index) => (
                        <div key={index} className="bg-slate-50 p-8 rounded-3xl border border-slate-100 hover:shadow-xl hover:bg-white transition-all duration-300 group">
                            <div className="w-14 h-14 bg-green-100 text-brand-primary rounded-xl flex items-center justify-center mb-6 group-hover:bg-brand-primary group-hover:text-white transition-colors">
                                <service.icon size={28} />
                            </div>

                            <h3 className="text-2xl font-bold text-gray-900 mb-4">{service.title}</h3>
                            <p className="text-gray-600 mb-6 leading-relaxed bg-transparent">{service.desc}</p>

                            <div className="space-y-3 pt-6 border-t border-slate-200">
                                {service.features.map((feature, i) => (
                                    <div key={i} className="flex items-start gap-3">
                                        <CheckCircle className="shrink-0 text-green-500 mt-1" size={18} />
                                        <span className="text-gray-700">{feature}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>

                {/* CTA Section */}
                <div className="mt-24 bg-brand-primary rounded-3xl p-10 md:p-16 text-center text-white relative overflow-hidden">
                    <div className="relative z-10">
                        <h2 className="text-3xl md:text-4xl font-bold mb-6">Need a Custom Solution?</h2>
                        <p className="text-green-50 text-lg max-w-2xl mx-auto mb-10 leading-relaxed">
                            Every building is unique. Contact us for a free inspection and we'll design a waterproofing system that matches your exact requirements.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Link
                                href="/#contact"
                                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-brand-primary font-bold rounded-xl hover:bg-green-50 transition-colors"
                            >
                                Get a Quote
                            </Link>
                            <a
                                href="tel:+917678281211"
                                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-green-700 text-white font-bold rounded-xl hover:bg-green-800 transition-colors border border-green-600"
                            >
                                Call Now
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
