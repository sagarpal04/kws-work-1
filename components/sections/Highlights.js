"use client";

import Button from "@/components/ui/Button";
import Image from "next/image";
import { CheckCircle2 } from "lucide-react";

const projects = [
    {
        title: "Terrace Waterproofing",
        location: "East Delhi",
        problem: "Severe leakage during monsoon",
        solution: "Brick bat coba with polymer coating",
        result: "100% leakage-free terrace",
        image: "/image-7.jpg" // Using existing image
    },
    {
        title: "Basement Waterproofing",
        location: "Ghaziabad",
        problem: "Seepage from retaining walls",
        solution: "PU injection grouting",
        result: "Permanent seepage control",
        image: "/image-8.jpg" // Using existing image
    }
];

export default function Highlights() {
    return (
        <section id="projects" className="py-12 md:py-24 bg-brand-light/20 scroll-mt-20">
            <div className="container mx-auto px-4 md:px-12">
                <div className="text-center mb-12">
                    <span className="text-xs md:text-sm font-semibold text-gray-500 uppercase tracking-wide">
                        Our Work
                    </span>
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-3 mb-4">
                        Project Highlights
                    </h2>
                    <p className="text-gray-600 max-w-2xl mx-auto">
                        See how we solve complex waterproofing challenges with our expert solutions.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
                    {projects.map((project, index) => (
                        <div key={index} className="bg-white rounded-2xl overflow-hidden shadow-lg border border-gray-100 hover:shadow-xl transition-shadow duration-300">
                            <div className="relative h-64 w-full">
                                <Image
                                    src={project.image}
                                    alt={`${project.title} - ${project.location}`}
                                    fill
                                    className="object-cover"
                                    sizes="(max-width: 768px) 100vw, 50vw"
                                />
                                <div className="absolute top-4 right-4 bg-brand-primary text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider shadow-sm">
                                    {project.location}
                                </div>
                            </div>
                            <div className="p-6 md:p-8">
                                <h3 className="text-2xl font-bold text-gray-900 mb-4">{project.title}</h3>

                                <div className="space-y-4">
                                    <div>
                                        <h4 className="text-sm font-semibold text-red-500 uppercase tracking-wide mb-1">Problem</h4>
                                        <p className="text-gray-600">{project.problem}</p>
                                    </div>
                                    <div>
                                        <h4 className="text-sm font-semibold text-blue-500 uppercase tracking-wide mb-1">Solution</h4>
                                        <p className="text-gray-600">{project.solution}</p>
                                    </div>
                                    <div className="bg-green-50 p-4 rounded-xl border border-green-100 flex items-start gap-3 mt-4">
                                        <CheckCircle2 className="text-green-600 shrink-0 mt-0.5" size={20} />
                                        <div>
                                            <h4 className="text-sm font-bold text-green-800 uppercase tracking-wide mb-0.5">Result</h4>
                                            <p className="text-green-700 font-medium">{project.result}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}