import About from "./components/About";
import Experience from "./components/Experience";
import Hero from "./components/Hero";
import Project from "./components/Project";
import Skills from "./components/Skills";
import Contact from "./components/contact";

export default function Home() {
  return (
    // <main className="items-center justify-center min-h-screen overflow-y-scroll">
    <main className="items-center justify-center min-h-screen">
      {/* Hero */}
      <section id="hero" className="snap-center">
        <Hero />
      </section>
      {/* About */}
      <section id="about" className="snap-center">
        <About />
      </section>
      {/* Experience */}
      <section id="experience" className="snap-center">
        <Experience />
      </section>
      {/* Skills */}
      <section id="skills">
        <Skills />
      </section>
      {/* Project */}
      <section id="project">
        <Project />
      </section>
      {/* Contact */}
      <section id="contact">
        <Contact />
      </section>
    </main>
  );
}
