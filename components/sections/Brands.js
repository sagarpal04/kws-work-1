// "use client";

// import { motion } from "framer-motion";

// const brands = [
//     "Dr. Fixit",
//     "Zydex",
//     "STP Limited",
//     "Sika",
//     "Fosroc",
//     "X-Chem",
//     "Star",
//     "MYK Arment",
// ];

// export default function Brands() {
//     return (
//         <section className="py-20 bg-white border-t border-slate-100 overflow-hidden">
//             <div className="container mx-auto px-6">
//                 {/* Heading */}
//                 <h2 className="text-center text-sm md:text-base font-semibold text-[#8A8A8A] uppercase tracking-[0.3em] mb-12">
//                     Leading Brands We Use
//                 </h2>

//                 {/* Marquee */}
//                 <div className="relative">
//                     {/* Fade edges */}
//                     <div className="absolute left-0 top-0 h-full w-24 bg-gradient-to-r from-white to-transparent z-10" />
//                     <div className="absolute right-0 top-0 h-full w-24 bg-gradient-to-l from-white to-transparent z-10" />

//                     <motion.div
//                         className="flex gap-14 md:gap-20 items-center"
//                         animate={{ x: ["0%", "-50%"] }}
//                         transition={{
//                             duration: 35,
//                             ease: "linear",
//                             repeat: Infinity,
//                         }}
//                     >
//                         {[...brands, ...brands].map((brand, i) => (
//                             <span
//                                 key={i}
//                                 className="
//                   text-xl md:text-2xl font-semibold
//                   text-[#8A8A8A]
//                   hover:text-green-600
//                   transition-colors
//                   whitespace-nowrap
//                   select-none
//                 "
//                             >
//                                 {brand}
//                             </span>
//                         ))}
//                     </motion.div>
//                 </div>
//             </div>
//         </section>
//     );
// }
"use client"; import React from 'react';

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
        <div className="w-full py-20 bg-white overflow-hidden">
            {/* Heading */}
            <div className="text-center mb-16">
                <p className="text-xs text-gray-400 uppercase tracking-widest mb-3 font-semibold">
                    AS FEATURED IN
                </p>
                <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
                    Leading Brands We Use
                </h2>
            </div>

            {/* Marquee Container */}
            <div className="relative">
                {/* Left Fade */}
                <div className="absolute left-0 top-0 bottom-0 w-8 md:w-32 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />

                {/* Right Fade */}
                <div className="absolute right-0 top-0 bottom-0 w-8 md:w-32 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />

                {/* Scrolling Content */}
                <div className="flex whitespace-nowrap">
                    <div className="inline-flex gap-12 animate-scroll items-center">
                        {[...logoFiles, ...logoFiles, ...logoFiles].map((logo, i) => (
                            <div
                                key={i}
                                className="inline-flex items-center justify-center w-40 h-24 flex-shrink-0"
                            >
                                <img
                                    src={`/logos/${logo}`}
                                    alt="Brand Logo"
                                    onError={(e) => {
                                        e.target.style.display = 'none';
                                        console.log('Failed to load:', logo);
                                    }}
                                    className="max-h-16 max-w-full w-auto h-auto object-contain opacity-70 hover:opacity-100 transition-opacity duration-300"
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