import Link from "next/link";
import { cn } from "@/lib/utils";

export default function Button({ children, variant = "primary", className, href, ...props }) {
    const variants = {
        primary: "bg-brand-primary text-white hover:bg-blue-700 shadow-lg hover:shadow-xl",
        secondary: "bg-brand-accent text-brand-dark hover:bg-amber-600 hover:text-white shadow-md",
        outline: "border-2 border-brand-primary text-brand-primary hover:bg-brand-primary hover:text-white",
        ghost: "text-brand-dark hover:bg-gray-100",
    };

    const styles = cn(
        "px-6 py-3 rounded-full font-semibold transition-all duration-300 transform active:scale-95 flex items-center justify-center gap-2",
        variants[variant],
        className
    );

    if (href) {
        const isExternal = href.startsWith("http") || href.startsWith("tel:") || href.startsWith("mailto:");
        if (isExternal) {
            return (
                <a href={href} className={styles} {...props}>
                    {children}
                </a>
            );
        }
        return (
            <Link href={href} className={styles} {...props}>
                {children}
            </Link>
        );
    }

    return (
        <button
            className={styles}
            {...props}
        >
            {children}
        </button>
    );
}
