import profile from "@/data/profile.json";
import { Github, Linkedin, Mail, ArrowUp } from "lucide-react";

const iconMap = { github: Github, linkedin: Linkedin, mail: Mail } as const;

export function Footer() {
  return (
    <footer className="container-px py-10 border-t border-border">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-5">
        <div className="text-sm text-muted-foreground text-center md:text-left">
          © {new Date().getFullYear()} {profile.name}. Crafted with React & Tailwind CSS.
        </div>

        <div className="flex items-center gap-2">
          {profile.socials.map((s) => {
            const Icon = iconMap[s.icon as keyof typeof iconMap] ?? Mail;
            return (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noreferrer"
                aria-label={s.label}
                className="h-9 w-9 grid place-items-center rounded-full glass text-muted-foreground hover:text-brand transition-colors"
              >
                <Icon size={15} />
              </a>
            );
          })}
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            aria-label="Back to top"
            className="ml-2 h-9 w-9 grid place-items-center rounded-full bg-brand text-brand-foreground hover:-translate-y-0.5 transition-transform"
          >
            <ArrowUp size={15} />
          </button>
        </div>
      </div>
    </footer>
  );
}
