"use client";
import React from 'react';
import Image from 'next/image';

// All logo files from your logos folder
const logoFiles = [
    "1000059774.jpg",
    "1000059778.png",
    "1000059783.jpg",
    "1000059786.jpg",
    "1000059789.jpg",
    "1000059877.jpg",
    "1000059885.jpg",
    "1000059886.jpg",
    "1000059887.jpg",
    "1000059888.jpg"
];

export default function Brands() {
    return (
        <div className="w-full py-12 md:py-16 bg-white overflow-hidden">
            {/* Heading */}
            <div className="text-center mb-8 md:mb-12 px-4">
                <p className="text-xs md:text-xs text-gray-400 uppercase tracking-widest mb-2 md:mb-3 font-semibold">
                    AS FEATURED IN
                </p>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                    Leading Brands We Use
                </h2>
            </div>

            {/* Marquee Container */}
            <div className="relative">
                {/* Left Fade */}
                <div className="absolute left-0 top-0 bottom-0 w-12 md:w-32 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />

                {/* Right Fade */}
                <div className="absolute right-0 top-0 bottom-0 w-12 md:w-32 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />

                {/* Scrolling Content */}
                <div className="flex whitespace-nowrap">
                    <div className="inline-flex gap-6 md:gap-12 animate-scroll items-center py-2">
                        {[...logoFiles, ...logoFiles, ...logoFiles].map((logo, i) => (
                            <div
                                key={i}
                                className="inline-flex items-center justify-center w-32 h-20 md:w-40 md:h-24 flex-shrink-0 relative bg-white rounded-lg border border-gray-100 shadow-sm hover:shadow-md transition-shadow duration-300 p-3"
                            >
                                <Image
                                    src={`/logos/${logo}`}
                                    alt="Brand Logo"
                                    fill
                                    className="object-contain opacity-70 hover:opacity-100 transition-opacity duration-300 p-2"
                                    sizes="(max-width: 768px) 128px, 160px"
                                    onError={() => {
                                        console.log('Failed to load:', logo);
                                    }}
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            <style jsx>{`
                @keyframes scroll {
                    from {
                        transform: translateX(0);
                    }
                    to {
                        transform: translateX(calc(-100% / 3));
                    }
                }

                .animate-scroll {
                    animation: scroll 40s linear infinite;
                }

                .animate-scroll:hover {
                    animation-play-state: paused;
                }
            `}</style>
        </div>
    );
}