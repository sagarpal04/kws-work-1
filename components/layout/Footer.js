"use client";
import Link from "next/link";

export default function Footer() {
    return (
        <footer className="bg-[#141817] text-white">

            {/* Soft divider */}
            <div className="h-px bg-gradient-to-r from-transparent via-green-500/40 to-transparent" />

            {/* Main Footer */}
            <div className="mx-auto max-w-6xl px-6 py-16">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-14 items-start">

                    {/* Brand */}
                    <div>
                        <div className="flex items-center gap-4 mb-5">
                            <div className="relative w-14 h-14 rounded-lg overflow-hidden bg-white/5 flex items-center justify-center">
                                <img
                                    src="/logo.png"
                                    alt="KWS Waterproofing Logo"
                                    className="w-full h-full object-contain"
                                    onError={(e) => {
                                        e.currentTarget.style.display = 'none';
                                        e.currentTarget.parentElement.innerHTML = '<div class="w-14 h-14 bg-green-500 rounded-lg flex items-center justify-center font-bold text-black text-2xl">K</div>';
                                    }}
                                />
                            </div>
                            <div>
                                <p className="font-bold text-xl leading-none">KWS</p>
                                <span className="text-sm text-gray-400 tracking-wide">
                                    Waterproofing
                                </span>
                            </div>
                        </div>

                        <p className="text-sm text-gray-400 leading-relaxed max-w-sm">
                            Stay updated with our latest waterproofing tips, service updates,
                            and helpful articles on maintaining a leak-free home.
                        </p>
                    </div>

                    {/* Company */}
                    <div>
                        <h3 className="text-sm font-semibold uppercase tracking-wider text-gray-300 mb-6">
                            Company
                        </h3>
                        <ul className="space-y-4 text-sm text-gray-400">
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
                            <li>
                                <Link href="/team" className="hover:text-green-500 transition-colors duration-200">
                                    Our Team
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Know More */}
                    <div>
                        <h3 className="text-sm font-semibold uppercase tracking-wider text-gray-300 mb-6">
                            Know More
                        </h3>
                        <ul className="space-y-4 text-sm text-gray-400">
                            <li>
                                <Link href="/support" className="hover:text-green-500 transition-colors duration-200">
                                    Support
                                </Link>
                            </li>
                            <li>
                                <Link href="/privacy" className="hover:text-green-500 transition-colors duration-200">
                                    Privacy Policy
                                </Link>
                            </li>
                            <li>
                                <Link href="/terms" className="hover:text-green-500 transition-colors duration-200">
                                    Terms & Conditions
                                </Link>
                            </li>
                        </ul>
                    </div>

                </div>
            </div>

            {/* Bottom */}
            <div className="border-t border-white/5 py-6 text-center text-sm text-gray-500">
                © 2025 KWS Waterproofing. All Rights Reserved
            </div>
        </footer>
    );
}