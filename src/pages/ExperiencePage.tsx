import { Navbar } from "../components/portfolio/Navbar";
import { Footer } from "../components/portfolio/Footer";
import { Experience } from "../components/portfolio/Experience";

export default function ExperiencePage() {
  return (
    <div className="min-h-screen bg-background text-foreground antialiased overflow-x-hidden">
      <Navbar />
      <main className="pt-20">
        <Experience />
      </main>
      <Footer />
    </div>
  );
}
