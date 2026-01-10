import { Droplets, Umbrella, Layers, Box, Zap, Sun, CheckCircle, ArrowRight } from "lucide-react";
import Link from "next/link";

export const metadata = {
    title: "Our Services | KWS Waterproofing",
    description: "Expert waterproofing solutions including chemical, membrane, traditional, and heat insulation services.",
};

const services = [
    {
        icon: Droplets,
        title: "Chemical Waterproofing",
        desc: "Advanced chemical solutions for complete moisture protection. We use high-grade polymers and acrylics to create an impermeable barrier.",
        features: ["Polymer modified coating", "Acrylic based coating", "Crystalline waterproofing", "Nano-coating technology"]
    },
    {
        icon: Umbrella,
        title: "Membrane Waterproofing",
        desc: "Durable membrane layers for high-traffic and critical areas. Ideal for terraces, basements, and podiums requiring robust protection.",
        features: ["APP & SBS membrane", "EPDM & PVC membrane", "HDPE & TPO membrane", "Bituminous sheets"]
    },
    {
        icon: Layers,
        title: "Traditional Treatments",
        desc: "Time-tested waterproofing methods for long-lasting results. Perfect for restoring older structures and conventional construction.",
        features: ["Brick bat coba", "Mud phuska", "Kota stone waterproofing", "Lime terracing"]
    },
    {
        icon: Box,
        title: "PU & Epoxy Systems",
        desc: "High-performance coatings for industrial and commercial needs. specialized for areas exposed to chemicals or heavy wear.",
        features: ["PU injection grouting", "PU coatings", "Industrial protective coatings", "Epoxy flooring"]
    },
    {
        icon: Zap,
        title: "Insulation Systems",
        desc: "Thermal insulation solutions to reduce energy costs. Keep your building cooler in summer and warmer in winter.",
        features: ["PUF & XPS insulation", "EPS insulation", "Lightweight foam concrete", "Thermal barrier coatings"]
    },
    {
        icon: Sun,
        title: "Heat & Energy Solutions",
        desc: "Innovative technologies to keep your building cool. Advanced reflective coatings that significantly reduce heat absorption.",
        features: ["Heat reflective coatings", "Cool roof technology", "Thermostatic tiles", "Energy-efficient glazing"]
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
