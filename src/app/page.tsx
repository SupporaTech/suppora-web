import Hero from "@/components/home/Hero";
import About from "@/components/home/About";
import Services from "@/components/home/Services";
import Advantages from "@/components/home/Advatanges";
import Testimonials from "@/components/home/Testimonials";
import Contact from "@/components/home/Contact";

export default function Home() {

  return (
      <main>
          <Hero />
          <About />
          <Services />
          <Advantages />
          <Testimonials />
          <Contact />
      </main>
  );
}