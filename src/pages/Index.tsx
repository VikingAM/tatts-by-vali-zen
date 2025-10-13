import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import AboutSection from "@/components/AboutSection";
import StylesSection from "@/components/StylesSection";
import GallerySection from "@/components/GallerySection";
import TestimonialsSection from "@/sections/TestimonialsSection";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />
      <main>
        <Hero />
        <AboutSection />
        <StylesSection />
        <GallerySection />
        <TestimonialsSection />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
