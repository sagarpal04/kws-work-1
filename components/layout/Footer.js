"use client";
import Link from "next/link";

export default function Footer() {
    return (
        <footer className="bg-[#141817] text-white">

            {/* Soft divider */}
            <div className="h-px bg-gradient-to-r from-transparent via-green-500/40 to-transparent" />

            {/* Main Footer */}
            <div className="mx-auto max-w-6xl px-4 md:px-6 py-12 md:py-16">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-14">

                    {/* Brand */}
                    <div>
                        <Link href="/" className="flex items-center gap-3 md:gap-4 mb-4 md:mb-5 hover:opacity-80 transition-opacity">
                            <div className="relative w-12 h-12 md:w-14 md:h-14 rounded-lg overflow-hidden bg-white/5 flex items-center justify-center">
                                <img
                                    src="/logo.png"
                                    alt="KWS Waterproofing Logo"
                                    className="w-full h-full object-contain"
                                    onError={(e) => {
                                        e.currentTarget.style.display = 'none';
                                        e.currentTarget.parentElement.innerHTML = '<div class="w-12 h-12 md:w-14 md:h-14 bg-green-500 rounded-lg flex items-center justify-center font-bold text-black text-xl md:text-2xl">K</div>';
                                    }}
                                />
                            </div>
                            <div>
                                <p className="font-bold text-lg md:text-xl leading-none">KWS</p>
                                <span className="text-xs md:text-sm text-gray-400 tracking-wide">
                                    Waterproofing
                                </span>
                            </div>
                        </Link>

                        <p className="text-sm text-gray-400 leading-relaxed max-w-sm">
                            Stay updated with our latest waterproofing tips, service updates,
                            and helpful articles on maintaining a leak-free home.
                        </p>
                    </div>

                    {/* Company */}
                    <div>
                        <h3 className="text-xs md:text-sm font-semibold uppercase tracking-wider text-gray-300 mb-4 md:mb-6">
                            Company
                        </h3>
                        <ul className="space-y-3 md:space-y-4 text-sm text-gray-400">
                            <li>
                                <Link href="/about" className="hover:text-green-500 transition-colors duration-200">
                                    About Us
                                </Link>
                            </li>
                            <li>
                                <Link href="/services" className="hover:text-green-500 transition-colors duration-200">
                                    Services
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Contact */}
                    <div>
                        <h3 className="text-xs md:text-sm font-semibold uppercase tracking-wider text-gray-300 mb-4 md:mb-6">
                            Contact Us
                        </h3>
                        <ul className="space-y-3 md:space-y-4 text-sm text-gray-400">
                            <li className="flex items-start gap-3">
                                <span className="mt-1">📍</span>
                                <a href="https://maps.app.goo.gl/x3ufvUaMYzhapAe3A" target="_blank" rel="noopener noreferrer" className="hover:text-green-500 transition-colors">
                                    Vandana Enclave, Shital Vihar, Khora Colony, Sector 62, Ghaziabad, Noida, Uttar Pradesh 201020
                                </a>
                            </li>
                            <li className="flex items-center gap-3">
                                <span>📞</span>
                                <a href="tel:07678281211" className="hover:text-green-500 transition-colors">
                                    076782 81211
                                </a>
                            </li>
                        </ul>
                    </div>

                </div>
            </div>

            {/* Bottom */}
            <div className="border-t border-white/5 py-5 md:py-6 px-4 text-center text-xs md:text-sm text-gray-400">
                © 2025 KWS Waterproofing. All Rights Reserved
            </div>
        </footer>
    );
}