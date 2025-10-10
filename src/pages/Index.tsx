import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import EmotionalIntro from "@/components/EmotionalIntro";
import Styles from "@/components/Styles";
import MyApproach from "@/components/MyApproach";
import About from "@/components/About";
import Gallery from "@/components/Gallery";
import Process from "@/components/Process";
import Testimonials from "@/components/Testimonials";
import Work from "@/components/Work";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />
      <main>
        <Hero />
        <EmotionalIntro />
        <Styles />
        <MyApproach />
        <About />
        <Gallery />
        <Process />
        <Testimonials />
        <Work />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
