import { Droplets, Umbrella, Layers, Box, Zap, Building2, CheckCircle } from "lucide-react";

const services = [
    {
        icon: Umbrella,
        title: "Terrace & Roof Waterproofing",
        desc: "Comprehensive protection for your roof against harsh weather and leakage.",
        features: ["Brick bat coba waterproofing", "PU coating & elastomeric coating", "APP membrane waterproofing"]
    },
    {
        icon: Droplets,
        title: "Bathroom & Toilet Waterproofing",
        desc: " specialized solutions to prevent internal seepage and leakage in wet areas.",
        features: ["Internal waterproofing before tiling", "Leakage repair without tile breaking"]
    },
    {
        icon: Layers,
        title: "Basement Waterproofing",
        desc: "Advanced techniques to stop underground water seepage and protect foundations.",
        features: ["Negative & positive side waterproofing", "Pressure grouting solutions"]
    },
    {
        icon: Box,
        title: "Water Tank Waterproofing",
        desc: "Safe and durable waterproofing for drinking and storage water tanks.",
        features: ["Overhead & underground tanks", "Food-grade coating solutions"]
    },
    {
        icon: Building2,
        title: "Industrial & Commercial Waterproofing",
        desc: "Heavy-duty waterproofing for large-scale structures and factories.",
        features: ["Factory sheds, podiums & parking areas", "Expansion joint & structural waterproofing"]
    },
    {
        icon: Zap,
        title: "Custom Solutions",
        desc: "Tailored waterproofing strategies designed for specific site conditions.",
        features: ["Site-specific assessment", "Custom material selection"]
    }
];

export default function ServicesPreview() {
    return (
        <section id="services" className="py-12 md:py-24 bg-slate-50 scroll-mt-20">
            <div className="container mx-auto px-4 md:px-12">
                <div className="text-center mb-10 md:mb-16">
                    <span className="text-brand-primary font-bold tracking-wider uppercase text-xs md:text-sm mb-3 md:mb-4 block">What We Do</span>
                    <h2 className="text-3xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-3 md:mb-4 leading-tight px-4">
                        We Always Provide The Best Service
                    </h2>
                    <p className="text-gray-500 text-base md:text-lg max-w-2xl mx-auto leading-relaxed px-4">
                        While we specialize in custom waterproofing plans to suit your needs, most clients schedule regular protective maintenance.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-8">
                    {services.map((service, index) => (
                        <div key={index} className="bg-white p-5 md:p-8 rounded-xl md:rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group">
                            <div className="w-12 h-12 md:w-14 md:h-14 bg-green-50 text-brand-primary rounded-xl flex items-center justify-center mb-5 md:mb-6 group-hover:bg-brand-primary group-hover:text-white transition-colors">
                                <service.icon size={24} className="md:w-7 md:h-7" />
                            </div>

                            <h3 className="text-xl md:text-xl font-bold text-gray-900 mb-2 md:mb-3">{service.title}</h3>
                            <p className="text-gray-500 mb-4 md:mb-6 leading-relaxed text-base md:text-base">{service.desc}</p>

                            <div className="space-y-2.5 md:space-y-3 mb-6 md:mb-8 border-t border-gray-50 pt-4 md:pt-6">
                                {service.features.map((feature, i) => (
                                    <div key={i} className="flex items-start gap-2.5 md:gap-3">
                                        <CheckCircle className="shrink-0 text-green-500 mt-0.5" size={16} />
                                        <span className="text-sm md:text-sm text-gray-600 leading-snug">{feature}</span>
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