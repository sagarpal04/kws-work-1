import { Building2 } from "lucide-react";

export const metadata = {
    title: "Our Clients | KWS Waterproofing",
    description: "See why top organizations and homeowners trust KWS for their waterproofing needs.",
};

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

export default function ClientsPage() {
    return (
        <div className="bg-white pt-24 pb-20">
            {/* Header */}
            <div className="container mx-auto px-6 md:px-12 text-center mb-16">
                <span className="text-brand-primary font-bold tracking-wider uppercase text-sm mb-4 block">Trusted By</span>
                <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Our Valued Clients</h1>
                <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
                    We are proud to have served a diverse range of clients, from major institutions to individual homeowners.
                </p>
            </div>

            {/* Grid */}
            <div className="container mx-auto px-6 md:px-12">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {testimonials.map((item, index) => (
                        <div key={index} className="bg-slate-50 p-6 md:p-8 rounded-2xl border border-slate-100 hover:shadow-lg transition-all duration-300">
                            <div className="flex items-center gap-3 md:gap-4 mb-4">
                                <div className="relative w-10 h-10 md:w-12 md:h-12 rounded-full overflow-hidden bg-white shadow-sm flex items-center justify-center text-green-600 shrink-0">
                                    <Building2 size={20} />
                                </div>
                                <div className="min-w-0">
                                    <p className="font-bold text-gray-900 text-base md:text-lg truncate">{item.name}</p>
                                    {item.location && <p className="text-xs md:text-sm text-gray-500 font-medium">{item.location}</p>}
                                </div>
                            </div>
                            <p className="text-gray-600 leading-relaxed text-sm md:text-base">"{item.content}"</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
