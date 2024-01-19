import About from "./components/About";
import Experience from "./components/Experience";
import Hero from "./components/Hero";
import Project from "./components/Project";
import Skills from "./components/Skills";
import Contact from "./components/contact";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      {/* Hero */}
      <section id="hero" className="snap-center">
        <Hero />
      </section>
      {/* About */}
      <section id="about" className="snap-center">
        <About />
      </section>
      {/* Experience */}
      <section id="experience">
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
