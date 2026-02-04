"use client";
import { Star, User, MessageCircle } from "lucide-react";
import Image from "next/image";

const googleReviews = [
    {
        name: "Manoj Kumar",
        initial: "M",
        color: "bg-orange-600",
        time: "2 weeks ago",
        stars: 5,
        content: "Very satisfied with the service from Kumar Waterproofing Solution. They inspected the site properly, suggested the right waterproofing treatment and completed the work on time. Pricing is reasonable, team is skilled and their finishing is excellent. Best waterproofing service in Delhi, Noida and NCR!",
        response: "Thank you sir 🙏"
    },
    {
        name: "lakshay pc",
        initial: "L",
        color: "bg-blue-600",
        time: "a month ago",
        stars: 5,
        content: "Excellent service by Kumar Waterproofing Solution. They did terrace waterproofing in East Delhi very professionally. Leakage problem solved completely. On-time work and good quality material. Highly recommended for waterproofing services in Delhi..so if want to do waterproofing so contact with them",
        response: "Thank you sir 🙏"
    },
    {
        name: "Sarthak",
        initial: "S",
        color: "bg-purple-600",
        time: "10 months ago",
        stars: 5,
        content: "I live in Rajouri Garden. And we have connected raman ji by searching best water proofing contractor and we got him on top… and literally he is one of the finest contractor. He has done the work of terrace with very cleanliness along with keeping in mind the deadline given by me.",
        response: null
    }
];

function ReviewCard({ review }) {
    return (
        <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 h-full flex flex-col">
            {/* Header */}
            <div className="flex items-center gap-4 mb-4">
                <div className={`w-10 h-10 rounded-full ${review.color} flex items-center justify-center text-white font-medium text-lg`}>
                    {review.initial}
                </div>
                <div>
                    <h4 className="font-bold text-gray-900 leading-tight">{review.name}</h4>
                    <p className="text-xs text-gray-500">{review.time}</p>
                </div>
                <div className="ml-auto flex items-center bg-gray-50 px-2 py-1 rounded">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/c/c1/Google_%22G%22_logo.svg" alt="Google" className="w-4 h-4 mr-1.5" />
                    <div className="flex text-yellow-500">
                        {[...Array(5)].map((_, i) => (
                            <Star key={i} size={12} fill="currentColor" className="text-yellow-400" />
                        ))}
                    </div>
                </div>
            </div>

            {/* Content */}
            <div className="flex-grow">
                <div className="flex gap-0.5 mb-2">
                    {[...Array(review.stars)].map((_, i) => (
                        <Star key={i} size={16} fill="currentColor" className="text-yellow-400" />
                    ))}
                </div>
                <p className="text-gray-700 text-sm leading-relaxed mb-4">
                    {review.content}
                </p>
            </div>


        </div>
    );
}

export default function GoogleReviews() {
    return (
        <section className="py-16 md:py-24 bg-white relative overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-[0.03] pointer-events-none"
                style={{ backgroundImage: 'radial-gradient(#000 1px, transparent 1px)', backgroundSize: '24px 24px' }}
            />

            <div className="container mx-auto px-4 md:px-6 relative z-10">
                <div className="text-center mb-12 md:mb-16">
                    <span className="inline-block py-1 px-3 rounded-full bg-blue-50 text-blue-600 font-bold text-xs md:text-sm tracking-wide mb-4">
                        GOOGLE REVIEWS
                    </span>
                    <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6 tracking-tight">
                        Trusted by <span className="text-blue-600">Homeowners</span>
                    </h2>

                    <div className="inline-flex items-center gap-3 bg-white shadow-lg shadow-gray-200/50 rounded-full px-5 py-2 border border-gray-100">
                        <span className="text-2xl font-bold text-gray-900">4.9</span>
                        <div className="flex flex-col items-start leading-none">
                            <div className="flex gap-0.5 mb-1">
                                {[...Array(5)].map((_, i) => (
                                    <Star key={i} size={14} fill="currentColor" className={`${i < 4 || i === 4 ? "text-yellow-400" : "text-gray-300"} text-yellow-400`} />
                                ))}
                            </div>
                            <span className="text-[10px] text-gray-500 uppercase tracking-wide font-semibold">Based on 47 reviews</span>
                        </div>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 max-w-6xl mx-auto">
                    {googleReviews.map((review, i) => (
                        <ReviewCard key={i} review={review} />
                    ))}
                </div>

                <div className="mt-12 text-center">
                    <a
                        href="https://maps.app.goo.gl/x3ufvUaMYzhapAe3A"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center gap-2 bg-white border border-gray-200 hover:border-blue-300 text-gray-700 hover:text-blue-600 px-6 py-3 rounded-lg font-semibold transition-all shadow-sm hover:shadow"
                    >
                        Read all reviews on Google
                        <img src="https://upload.wikimedia.org/wikipedia/commons/c/c1/Google_%22G%22_logo.svg" alt="Google" className="w-5 h-5" />
                    </a>
                </div>
            </div>
        </section>
    );
}
