import { About }            from "@/components/About";
import { Contact }          from "@/components/Contact";
import { Experience }       from "@/components/Experience";
import { FeaturedCarousel } from "@/components/FeaturedCarousel";
import { Footer }           from "@/components/Footer";
import { Freelance }        from "@/components/Freelance";
import { Hero }             from "@/components/Hero";
import { Projects }         from "@/components/Projects";
import { Skills }           from "@/components/Skills";

export default function Home() {
  return (
    <main>
      <Hero />
      <FeaturedCarousel />
      <About />
      <Experience />
      <Skills />
      <Projects />
      <Freelance />
      <Contact />
      <Footer />
    </main>
  );
}
