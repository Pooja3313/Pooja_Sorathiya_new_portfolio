import { Navbar } from "../components/portfolio/Navbar";
import { Footer } from "../components/portfolio/Footer";
import { Hero } from "../components/portfolio/Hero";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background text-foreground antialiased overflow-x-hidden">
      <Navbar />
      <main>
        <Hero />
      </main>
      <Footer />
    </div>
  );
}
