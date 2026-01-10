"use client";

import { useRef, useEffect, useState } from "react";
import { motion, useMotionValue, useAnimationFrame } from "framer-motion";
import Image from "next/image";

const projects = [
    { src: "/image-1.jpg" },
    { src: "/image-2.jpg" },
    { src: "/image-3.jpg" },
    { src: "/image-4.jpg" },
    { src: "/image-5.jpg" },
    { src: "/image-6.jpg" },
    { src: "/100.jpg" },
    { src: "/101.jpg" },
    { src: "/102.jpg" },
    { src: "/103.jpg" },
    { src: "/104.jpg" },
    { src: "/105.jpg" },
    { src: "/106.jpg" },
    { src: "/107.jpg" },
    { src: "/108.jpg" },
    { src: "/109.jpg" },
    { src: "/110.jpg" },
    { src: "/111.jpg" },
    { src: "/112.jpg" },
    { src: "/113.jpg" },
    { src: "/114.jpg" },
    { src: "/115.jpg" },
    { src: "/116.jpg" },
    { src: "/117.jpg" },
    { src: "/118.jpg" },
];
// final 
export default function ImageShowcase() {
    const containerRef = useRef(null);
    const [contentWidth, setContentWidth] = useState(0);
    const [isHovered, setIsHovered] = useState(false);
    const [isDragging, setIsDragging] = useState(false);

    const x = useMotionValue(0);

    useEffect(() => {
        if (containerRef.current) {
            // Calculate width of one set of items (total scroll width / 2)
            // We use a timeout to ensure rendering is complete
            const calculateWidth = () => {
                const totalWidth = containerRef.current.scrollWidth;
                setContentWidth(totalWidth / 2);
            };

            calculateWidth();
            window.addEventListener('resize', calculateWidth);
            return () => window.removeEventListener('resize', calculateWidth);
        }
    }, []);

    useAnimationFrame((t, delta) => {
        if (!isHovered && !isDragging && contentWidth > 0) {
            // Adjust speed here (pixels per frame)
            const moveBy = -1 * (delta / 16);
            let newX = x.get() + moveBy;

            // Loop logic
            if (newX <= -contentWidth) {
                newX = 0;
            } else if (newX > 0) {
                newX = -contentWidth;
            }

            x.set(newX);
        }
    });

    return (
        <section className="py-12 md:py-20 bg-[#f8fafc] overflow-hidden">
            {/* Header */}
            <div className="container mx-auto px-4 mb-8 md:mb-12 max-w-2xl md:ml-20">
                <h2 className="text-3xl md:text-4xl font-semibold text-slate-800">
                    Selected <span className="text-green-600">Works</span>
                </h2>
                <p className="mt-2 md:mt-3 text-slate-600 text-base md:text-base">
                    A showcase of our waterproofing & insulation excellence.
                </p>
            </div>

            {/* Draggable Slider */}
            <div className="relative w-full overflow-hidden">
                {/* Fade edges */}
                <div className="absolute left-0 top-0 h-full w-8 md:w-16 bg-gradient-to-r from-[#f8fafc] to-transparent z-10 pointer-events-none" />
                <div className="absolute right-0 top-0 h-full w-8 md:w-16 bg-gradient-to-l from-[#f8fafc] to-transparent z-10 pointer-events-none" />

                <motion.div
                    ref={containerRef}
                    className="flex gap-4 md:gap-6 px-4 md:px-6 cursor-grab active:cursor-grabbing w-max"
                    style={{ x }}
                    drag="x"
                    dragMomentum={false}
                    onDragStart={() => setIsDragging(true)}
                    onDragEnd={() => setIsDragging(false)}
                    onHoverStart={() => setIsHovered(true)}
                    onHoverEnd={() => setIsHovered(false)}
                    whileTap={{ cursor: "grabbing" }}
                >
                    {[...projects, ...projects].map((project, i) => (
                        <div
                            key={i}
                            className="
                                relative flex-shrink-0
                                w-[80vw] h-[220px]
                                md:w-[420px] md:h-[280px]
                                rounded-xl md:rounded-xl overflow-hidden
                                bg-white border border-slate-200
                                shadow-sm hover:shadow-md
                                transition-shadow duration-300
                                select-none pointer-events-none md:pointer-events-auto
                            "
                        >
                            <Image
                                src={project.src}
                                alt={`Project ${(i % projects.length) + 1}`}
                                fill
                                className="object-cover pointer-events-none"
                                sizes="(max-width: 640px) 384px, (max-width: 1024px) 420px, 420px"
                                quality={75}
                                loading="lazy"
                            />

                            {/* Index badge */}
                            <div className="absolute bottom-3 right-3 bg-white/95 px-2.5 py-1.5 rounded-md text-xs md:text-[11px] text-slate-500 font-medium shadow-sm z-10">
                                {` ${(i % projects.length) + 1}`}
                            </div>
                        </div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}