import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from "@vercel/analytics/next";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata = {
  title: "KWS | Best Waterproofing Services in Delhi NCR",
  description: "Trusted waterproofing experts in Delhi NCR. We offer terrace, basement, chemical, and membrane waterproofing services. Get a free inspection today!",
  keywords: ["waterproofing services Delhi NCR", "waterproofing contractors", "terrace waterproofing", "basement waterproofing", "heat insulation solutions"],
  openGraph: {
    title: "KWS",
    description: "Expert waterproofing and heat protection solutions for residential and commercial projects.",
    type: "website",
    locale: "en_IN",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.variable} antialiased min-h-screen flex flex-col`}>
        <Navbar />
        <main className="flex-grow">{children}</main>
        <Footer />
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
