import { Navbar } from "../components/portfolio/Navbar";
import { Footer } from "../components/portfolio/Footer";
import { Contact } from "../components/portfolio/Contact";

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-background text-foreground antialiased overflow-x-hidden">
      <Navbar />
      <main className="pt-20">
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
