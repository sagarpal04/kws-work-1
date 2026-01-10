"use client";

import { useState, useEffect } from "react";
import { Menu, X, Phone } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const navLinks = [
    { name: "Home", href: "#home" },
    { name: "About Us", href: "#about" },
    { name: "Services", href: "#services" },
    { name: "Contact", href: "#contact" },
    { name: "Features", href: "#features" },
];

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 10);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const handleNavClick = (e, href) => {
        setIsOpen(false);

        if (href.startsWith("http")) return;

        e.preventDefault();
        const element = document.querySelector(href);
        if (element) {
            const headerOffset = 100;
            const elementPosition = element.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

            window.scrollTo({
                top: offsetPosition,
                behavior: "smooth"
            });
        }
    };

    return (
        <>
            <nav
                className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? "bg-white shadow-md py-2 md:py-4" : "bg-white/90 backdrop-blur-md py-3 md:py-6"
                    }`}
            >
                <div className="container mx-auto px-4 md:px-12 flex justify-between items-center">
                    {/* Logo */}
                    <Link
                        href="/"
                        className={`flex items-center gap-2 md:gap-3 z-50 cursor-pointer transition-opacity duration-300 ${isOpen ? "opacity-0 pointer-events-none" : "opacity-100"
                            }`}
                    >
                        <Image
                            src="/logo.png"
                            alt="Kumar Waterproofing Solution"
                            width={80}
                            height={80}
                            className="h-12 md:h-20 w-auto object-contain"
                            sizes="(max-width: 768px) 48px, 80px"
                            quality={90}
                            priority
                        />
                        <div>
                            <span className="text-lg md:text-xl font-bold text-gray-900 block leading-none">KWS</span>
                            <span className="text-[9px] md:text-[10px] text-gray-500 tracking-wider uppercase">Waterproofing</span>
                        </div>
                    </Link>

                    {/* Desktop Nav */}
                    <div className="hidden md:flex items-center gap-8">
                        {navLinks.map((link) => (
                            <a
                                key={link.name}
                                href={link.href}
                                onClick={(e) => handleNavClick(e, link.href)}
                                className="text-sm font-medium text-gray-600 hover:text-green-600 transition-colors cursor-pointer"
                            >
                                {link.name}
                            </a>
                        ))}
                    </div>

                    {/* CTA Button */}
                    <div className="hidden md:block">
                        <a
                            href="https://wa.me/917678281211"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 px-6 py-3 bg-green-600 hover:bg-green-700 text-white font-semibold rounded-lg transition-all duration-300 transform hover:-translate-y-0.5 shadow-lg hover:shadow-xl"
                        >
                            <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.305-5.235c0-5.443 4.429-9.876 9.878-9.876 2.639 0 5.122 1.026 6.988 2.894a9.825 9.825 0 012.893 6.991c-.003 5.444-4.432 9.876-9.883 9.876m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                            </svg>
                            WhatsApp Us
                        </a>
                    </div>

                    {/* Mobile Toggle */}
                    <button
                        className="md:hidden z-50 text-gray-700"
                        onClick={() => setIsOpen(!isOpen)}
                        aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
                        aria-expanded={isOpen}
                    >
                        {isOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>

                    {/* Mobile Menu */}
                    {isOpen && (
                        <div className="absolute top-0 left-0 w-full h-screen bg-white flex flex-col items-center justify-center gap-8 md:hidden z-40">
                            {navLinks.map((link) => (
                                <a
                                    key={link.name}
                                    href={link.href}
                                    onClick={(e) => handleNavClick(e, link.href)}
                                    className="text-xl font-medium text-gray-800 hover:text-green-600 transition-colors"
                                >
                                    {link.name}
                                </a>
                            ))}
                            {/* WhatsApp button removed from inside menu as it's now a FAB */}
                        </div>
                    )}
                </div>

            </nav>

            {/* Mobile Phone Floating Button - Left side */}
            <a
                href="tel:+917678281211"
                className="fixed bottom-6 left-6 z-[100] md:hidden flex items-center justify-center w-14 h-14 bg-blue-600 rounded-full shadow-lg hover:bg-blue-700 transition-all duration-300"
                aria-label="Call us"
            >
                <Phone className="w-6 h-6 text-white" />
            </a>

            {/* Mobile WhatsApp Floating Button - Outside nav for proper positioning */}
            <a
                href="https://wa.me/919211303081"
                target="_blank"
                rel="noopener noreferrer"
                className="fixed bottom-6 right-6 z-[100] md:hidden flex items-center justify-center w-14 h-14 bg-green-500 rounded-full shadow-lg hover:bg-green-600 transition-all duration-300 "
                aria-label="Contact us on WhatsApp"
            >
                <svg viewBox="0 0 24 24" fill="white" className="w-8 h-8" aria-hidden="true">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.305-5.235c0-5.443 4.429-9.876 9.878-9.876 2.639 0 5.122 1.026 6.988 2.894a9.825 9.825 0 012.893 6.991c-.003 5.444-4.432 9.876-9.883 9.876m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
            </a>
        </>
    );
}