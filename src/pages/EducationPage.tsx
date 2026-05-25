import { Navbar } from "../components/portfolio/Navbar";
import { Footer } from "../components/portfolio/Footer";
import { Education } from "../components/portfolio/Education";

export default function EducationPage() {
  return (
    <div className="min-h-screen bg-background text-foreground antialiased overflow-x-hidden">
      <Navbar />
      <main className="pt-20">
        <Education />
      </main>
      <Footer />
    </div>
  );
}
