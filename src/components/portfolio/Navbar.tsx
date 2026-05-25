import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import nav from "@/data/navigation.json";
import profile from "@/data/profile.json";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 16);

      // Detect active section
      const sections = document.querySelectorAll("section[id]");
      let current = "home";

      for (const section of sections) {
        const htmlSection = section as HTMLElement;
        const sectionTop = htmlSection.offsetTop;
        const sectionHeight = htmlSection.clientHeight;
        if (window.scrollY >= sectionTop - 100) {
          current = htmlSection.id;
        }
      }
      setActiveSection(current);
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setOpen(false);
    }
  };

  return (
    <header
      className={cn(
        "fixed top-0 inset-x-0 z-50 transition-all duration-300",
        scrolled ? "py-3" : "py-5",
      )}
    >
      <div
        className={cn(
          "container-px max-w-7xl mx-auto flex items-center justify-between transition-all",
          scrolled && "rounded-2xl",
        )}
      >
        <div
          className={cn(
            "flex items-center justify-between w-full px-4 md:px-6 py-3 transition-all duration-300",
            scrolled ? "glass rounded-2xl" : "",
          )}
        >
        <button
          onClick={() => scrollToSection("home")}
          className="flex items-center gap-2 hover:opacity-80 transition-opacity"
          aria-label="Home"
        >
          <img
            src="/favicon.svg"
            alt="PS Logo"
            className="w-12 h-12"
          />
        </button>

          <nav className="hidden md:flex items-center gap-1">
            {nav.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={cn(
                  "relative px-3 py-2 text-sm transition-colors",
                  activeSection === item.id
                    ? "text-foreground"
                    : "text-muted-foreground hover:text-foreground",
                )}
              >
                {item.label}
                {activeSection === item.id && (
                  <span className="absolute inset-x-3 -bottom-0.5 h-px bg-brand" />
                )}
              </button>
            ))}
          </nav>

          <div className="hidden md:flex items-center gap-2">
            <a
              href={profile.resume}
              target="_blank"
              rel="noreferrer"
              className="text-sm px-4 py-2 rounded-full bg-brand text-brand-foreground font-medium hover:opacity-90 transition-opacity"
            >
              Resume
            </a>
          </div>

          <button
            className="md:hidden p-2 -mr-2 text-foreground"
            onClick={() => setOpen((v) => !v)}
            aria-label="Toggle menu"
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={cn(
          "md:hidden overflow-hidden transition-all duration-300 container-px max-w-7xl mx-auto",
          open ? "max-h-[480px] mt-2" : "max-h-0",
        )}
      >
        <div className="glass rounded-2xl p-4 flex flex-col">
          {nav.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className={cn(
                "text-left px-3 py-3 rounded-lg text-sm transition-colors",
                activeSection === item.id
                  ? "bg-accent text-foreground"
                  : "text-muted-foreground hover:text-foreground",
              )}
            >
              {item.label}
            </button>
          ))}
          <a
            href={profile.resume}
            target="_blank"
            rel="noreferrer"
            className="mt-2 text-center px-4 py-3 rounded-full bg-brand text-brand-foreground font-medium"
          >
            Download Resume
          </a>
        </div>
      </div>
    </header>
  );
}
