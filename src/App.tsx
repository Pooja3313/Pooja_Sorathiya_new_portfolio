import { Navbar } from "./components/portfolio/Navbar";
import { Footer } from "./components/portfolio/Footer";
import { Hero } from "./components/portfolio/Hero";
import { About } from "./components/portfolio/About";
import { Skills } from "./components/portfolio/Skills";
import { Experience } from "./components/portfolio/Experience";
import { Projects } from "./components/portfolio/Projects";
import { Education } from "./components/portfolio/Education";
import { Resume } from "./components/portfolio/Resume";
import { Contact } from "./components/portfolio/Contact";

export default function App() {
  return (
    <div className="min-h-screen bg-background text-foreground antialiased overflow-x-hidden">
      <Navbar />
      <main>
        {/* Home Section */}
        <section id="home">
          <Hero />
        </section>

        {/* About Section */}
        <section id="about" className="py-20 md:py-32">
          <About />
        </section>

        {/* Skills Section */}
        <section id="skills" className="py-20 md:py-32">
          <Skills />
        </section>

        {/* Experience Section */}
        <section id="experience" className="py-20 md:py-32">
          <Experience />
        </section>

        {/* Projects Section */}
        <section id="projects" className="py-20 md:py-32">
          <Projects />
        </section>

        {/* Education Section */}
        <section id="education" className="py-20 md:py-32">
          <Education />
        </section>

        {/* Resume Section */}
        <section id="resume" className="py-20 md:py-32">
          <Resume />
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-20 md:py-32">
          <Contact />
        </section>
      </main>
      <Footer />
    </div>
  );
}
