import ServicesPreview from "@/components/sections/ServicesPreview";
import Highlights from "@/components/sections/Highlights";
import ImageShowcase from "@/components/sections/ImageShowcase";
import Brands from "@/components/sections/Brands";
import GoogleReviews from "@/components/sections/GoogleReviews";
import Testimonials from "@/components/sections/Testimonials";
import FindUs from "@/components/sections/FindUs";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <ServicesPreview />
      <ImageShowcase />
      <Brands />
      <Highlights />
      <GoogleReviews />
      <Testimonials />
      <FindUs />
    </>
  );
}
