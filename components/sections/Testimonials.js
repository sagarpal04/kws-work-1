"use client";

import { motion } from "framer-motion";
import Button from "@/components/ui/Button";
import { ArrowRight } from "lucide-react";
import Image from "next/image";

// Placeholder images for the masonry layout
const testimonials = [
    {
        name: "Shiv Nadar University",
        location: "Dadri",
        content: "Provided large-scale chemical waterproofing and membrane systems for institutional buildings.",
    },
    {
        name: "Subway",
        content: "Executed polymer modified and acrylic waterproofing solutions for commercial kitchen areas.",
    },
    {
        name: "Chaayos",
        content: "Delivered reliable waterproofing and heat-resistant coatings for café outlets.",
    },
    {
        name: "R S Maitri Health Care Hospital",
        location: "Ghaziabad",
        content: "Implemented crystalline waterproofing and PU systems ensuring moisture-free healthcare spaces.",
    },
    {
        name: "Negi’s – The School of Silambam Stick",
        location: "Indirapuram",
        content: "Applied traditional waterproofing treatments for durable training infrastructure.",
    },
    {
        name: "Udupi Café",
        location: "Indirapuram",
        content: "Provided effective waterproofing and insulation solutions for food service areas.",
    },
    {
        name: "Eros Mall",
        location: "Indirapuram",
        content: "Handled large-scale membrane waterproofing for high-traffic commercial spaces.",
    },
    {
        name: "Carbon Gym",
        location: "Indirapuram",
        content: "Delivered moisture control and PU coating solutions for fitness environments.",
    },
    {
        name: "S.B Fabtex Pvt. Ltd.",
        location: "Vaishali, Ghaziabad",
        content: "Installed industrial-grade PU, epoxy, and protective coating systems.",
    },
    {
        name: "SKN",
        location: "Gurgaon",
        content: "Executed professional waterproofing and insulation systems for commercial projects.",
    },
    {
        name: "Charms India",
        location: "Raj Nagar Extension",
        content: "Provided complete waterproofing and heat reflective coating solutions.",
    },
    {
        name: "Nirman India Constructions Pvt. Ltd.",
        location: "Delhi",
        content: "Supported construction projects with membrane, traditional, and chemical waterproofing systems.",
    },
    {
        name: "Bird Engineering Private Limited",
        location: "Manesar",
        content: "Delivered advanced PU, epoxy, and industrial insulation solutions for engineering facilities.",
    },
];


// Split into columns for the effect
const col1 = [testimonials[0], testimonials[3], testimonials[1]];
const col2 = [testimonials[2], testimonials[4], testimonials[5]];
const col3 = [testimonials[1], testimonials[0], testimonials[3]];
const col4 = [testimonials[5], testimonials[2], testimonials[4]];

import { Building2 } from "lucide-react";

function TestimonialCard({ item }) {
    return (
        <div className="bg-white p-4 rounded-xl shadow-lg border border-gray-100 w-full mb-6 break-inside-avoid">
            <div className="flex items-center gap-3 mb-3">
                <div className="relative w-10 h-10 rounded-full overflow-hidden bg-gray-100 flex items-center justify-center text-gray-400">
                    <Building2 size={20} />
                </div>
                <div>
                    <h4 className="font-bold text-sm text-gray-900">{item.name}</h4>
                    {item.location && <p className="text-xs text-gray-500">{item.location}</p>}
                </div>
            </div>
            <p className="text-sm text-gray-600 leading-relaxed">"{item.content}"</p>
        </div>
    );
}

function MarqueeColumn({ items, duration, reverse = false }) {
    return (
        <motion.div
            className="flex flex-col"
            initial={{ y: reverse ? "-50%" : "0%" }}
            animate={{ y: reverse ? "0%" : "-50%" }}
            transition={{
                repeat: Infinity,
                ease: "linear",
                duration: duration,
            }}
        >
            {[...items, ...items, ...items, ...items].map((item, i) => (
                <TestimonialCard key={i} item={item} />
            ))}
        </motion.div>
    );
}

export default function Testimonials() {
    return (
        <section className="py-24 bg-brand-light overflow-hidden relative">
            <div className="container mx-auto px-6 md:px-12 relative z-10">

                {/* Visual Background Columns (Absolute) */}
                <div className="absolute inset-0 z-0 flex justify-between gap-4 md:gap-8 px-4 opacity-40 pointer-events-none md:opacity-100 md:pointer-events-auto mask-linear-fade">
                    {/* Only show animations on larger screens to avoid clutter on mobile */}
                    <div className="hidden md:flex flex-col w-1/4 h-[150vh] -mt-20">
                        <MarqueeColumn items={col1} duration={20} />
                    </div>
                    <div className="hidden md:flex flex-col w-1/4 h-[150vh] -mt-20">
                        <MarqueeColumn items={col2} duration={25} reverse />
                    </div>
                    {/* Center space is left empty for text on desktop */}
                    <div className="w-full md:w-1/2" />

                    <div className="hidden md:flex flex-col w-1/4 h-[150vh] -mt-20">
                        <MarqueeColumn items={col3} duration={22} />
                    </div>
                    <div className="hidden md:flex flex-col w-1/4 h-[150vh] -mt-20">
                        <MarqueeColumn items={col4} duration={28} reverse />
                    </div>
                </div>

                {/* Central Content */}
                <div className="relative z-20 max-w-3xl mx-auto text-center pt-10 md:pt-20">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                        className="bg-white/80 backdrop-blur-xl p-8 md:p-12 rounded-3xl shadow-2xl border border-white/50"
                    >
                        <span className="inline-block py-1 px-3 rounded-full bg-gray-100 text-gray-600 font-medium text-sm mb-6 border border-gray-200">
                            Testimonials
                        </span>
                        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 tracking-tight">
                            Notable Clients
                        </h2>
                        <p className="text-gray-600 mb-8 max-w-lg mx-auto">
                            Professionals trust KWS solutions to protect their most valuable assets. We deliver excellence in every project.
                        </p>
                    </motion.div>
                </div>
            </div>

            {/* Fade Overlay for Edges */}
            <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-brand-light to-transparent z-10 pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-brand-light to-transparent z-10 pointer-events-none" />
        </section>
    );
}
