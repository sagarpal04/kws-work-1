"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const projects = [
    { src: "/image-1.jpg" },
    { src: "/image-2.jpg" },
    { src: "/image-3.jpg" },
    { src: "/image-4.jpg" },
    { src: "/image-5.jpg" },
    { src: "/image-6.jpg" },
];

export default function ImageShowcase() {
    return (
        <section className="py-24 bg-[#f8fafc] overflow-hidden">
            {/* Header */}
            <div className="container mx-auto px-6 mb-14 max-w-2xl md:ml-20">
                <h2 className="text-4xl md:text-5xl font-semibold text-slate-800">
                    Selected <span className="text-green-600">Works</span>
                </h2>
                <p className="mt-3 text-slate-600 text-sm md:text-base">
                    A showcase of our waterproofing & insulation excellence.
                </p>
            </div>

            {/* Marquee */}
            <div className="relative w-full overflow-hidden">
                {/* Fade edges */}
                <div className="absolute left-0 top-0 h-full w-24 bg-gradient-to-r from-[#f8fafc] to-transparent z-10" />
                <div className="absolute right-0 top-0 h-full w-24 bg-gradient-to-l from-[#f8fafc] to-transparent z-10" />

                <motion.div
                    className="flex gap-8 px-6"
                    animate={{ x: ["0%", "-50%"] }}
                    transition={{
                        repeat: Infinity,
                        ease: "linear",
                        duration: 40, // slower = premium feel
                    }}
                >
                    {[...projects, ...projects].map((project, i) => (
                        <div
                            key={i}
                            className="
                relative flex-shrink-0
                w-[85vw] h-[220px]
                md:w-[520px] md:h-[320px]
                rounded-xl overflow-hidden
                bg-white border border-slate-200
                shadow-md hover:shadow-lg
                transition-shadow duration-300
              "
                        >
                            <Image
                                src={project.src}
                                alt={`Project ${(i % projects.length) + 1}`}
                                fill
                                className="object-cover"
                            />

                            {/* Index badge */}
                            <div className="absolute bottom-3 right-3 bg-white/95 px-2.5 py-1 rounded-md text-[11px] text-slate-500 font-medium shadow-sm">
                                {`0${(i % projects.length) + 1}`}
                            </div>
                        </div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
