import { Navbar } from "../components/portfolio/Navbar";
import { Footer } from "../components/portfolio/Footer";
import { Resume } from "../components/portfolio/Resume";

export default function ResumePage() {
  return (
    <div className="min-h-screen bg-background text-foreground antialiased overflow-x-hidden">
      <Navbar />
      <main className="pt-20">
        <Resume />
      </main>
      <Footer />
    </div>
  );
}
