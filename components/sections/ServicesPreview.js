"use client";

import Button from "@/components/ui/Button";
import { Droplets, Umbrella, Layers, Box, Zap, Sun, CheckCircle } from "lucide-react";

const services = [
    {
        icon: Droplets,
        title: "Chemical Waterproofing",
        desc: "Advanced chemical solutions for complete moisture protection.",
        features: ["Polymer modified coating", "Acrylic based coating", "Crystalline waterproofing"]
    },
    {
        icon: Umbrella,
        title: "Membrane Waterproofing",
        desc: "Durable membrane layers for high-traffic and critical areas.",
        features: ["APP & SBS membrane", "EPDM & PVC membrane", "HDPE & TPO membrane"]
    },
    {
        icon: Layers,
        title: "Traditional Treatments",
        desc: "Time-tested waterproofing methods for long-lasting results.",
        features: ["Brick bat coba", "Mud phuska", "Kota stone waterproofing"]
    },
    {
        icon: Box,
        title: "PU & Epoxy Systems",
        desc: "High-performance coatings for industrial and commercial needs.",
        features: ["PU injection grouting", "PU coatings", "Industrial protective coatings"]
    },
    {
        icon: Zap,
        title: "Insulation Systems",
        desc: "Thermal insulation solutions to reduce energy costs.",
        features: ["PUF & XPS insulation", "EPS insulation", "Lightweight foam concrete"]
    },
    {
        icon: Sun,
        title: "Heat & Energy Solutions",
        desc: "Innovative technologies to keep your building cool.",
        features: ["Heat reflective coatings", "Cool roof technology", "Thermostatic tiles"]
    }
];

export default function ServicesPreview() {
    return (
        <section id="services" className="py-24 bg-slate-50 scroll-mt-20">
            <div className="container mx-auto px-6 md:px-12">
                <div className="text-center mb-16">
                    <span className="text-brand-primary font-bold tracking-wider uppercase text-sm mb-4 block">What We Do</span>
                    <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-4 lh-tight">
                        We Always Provide The Best Service
                    </h2>
                    <p className="text-gray-500 text-lg max-w-2xl mx-auto leading-relaxed">
                        While we specialize in custom waterproofing plans to suit your needs, most clients schedule regular protective maintenance.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {services.map((service, index) => (
                        <div key={index} className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group">
                            <div className="w-14 h-14 bg-green-50 text-brand-primary rounded-xl flex items-center justify-center mb-6 group-hover:bg-brand-primary group-hover:text-white transition-colors">
                                <service.icon size={28} />
                            </div>

                            <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
                            <p className="text-gray-500 mb-6 leading-relaxed">{service.desc}</p>

                            <div className="space-y-3 mb-8 border-t border-gray-50 pt-6">
                                {service.features.map((feature, i) => (
                                    <div key={i} className="flex items-start gap-3">
                                        <CheckCircle className="shrink-0 text-green-500 mt-1" size={16} />
                                        <span className="text-sm text-gray-600">{feature}</span>
                                    </div>
                                ))}
                            </div>

                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
