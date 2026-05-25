import { ArrowDown, Download, Github, Linkedin, Mail, Sparkles } from "lucide-react";
import profile from "@/data/profile.json";
import { anim } from "@/lib/animations";

const iconMap = { github: Github, linkedin: Linkedin, mail: Mail } as const;

export function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center pt-32 pb-20 container-px overflow-hidden"
    >
      {/* Background grid + glow */}
      <div className="absolute inset-0 grid-bg pointer-events-none" />
      <div className="absolute -top-40 -left-40 h-[480px] w-[480px] rounded-full bg-brand/20 blur-3xl pointer-events-none" />
      <div className="absolute -bottom-32 -right-32 h-[420px] w-[420px] rounded-full bg-[oklch(0.55_0.20_280)]/20 blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto w-full">
        <div className={`inline-flex items-center gap-2 glass rounded-full px-4 py-1.5 text-xs text-muted-foreground ${anim.fadeInDown}`}>
          <Sparkles size={14} className="text-brand" />
          Available for new opportunities
        </div>

        <h1
          className={`mt-6 font-display text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-semibold tracking-tight leading-[1.02] ${anim.fadeInUp}`}
          style={{ animationDelay: "120ms" }}
        >
          Hi, I'm <span className="text-gradient">{profile.name}</span>
          <span className="inline-block w-[3px] h-[0.85em] bg-brand ml-2 align-[-0.1em] animate-blink" />
        </h1>

        <p
          className={`mt-6 text-lg md:text-2xl text-muted-foreground font-light max-w-3xl ${anim.fadeInUp}`}
          style={{ animationDelay: "240ms" }}
        >
          {profile.role} <span className="text-foreground">·</span> {profile.tagline}
        </p>

        <p
          className={`mt-6 text-sm md:text-base text-muted-foreground max-w-2xl leading-relaxed ${anim.fadeInUp}`}
          style={{ animationDelay: "320ms" }}
        >
          {profile.summary}
        </p>

        <div
          className={`mt-10 flex flex-wrap items-center gap-3 ${anim.fadeInUp}`}
          style={{ animationDelay: "420ms" }}
        >
          <a
            href={profile.resume}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-brand text-brand-foreground font-medium hover:opacity-90 transition-all hover:-translate-y-0.5 shadow-[0_15px_40px_-10px_var(--brand-glow)]"
          >
            <Download size={16} />
            Download Resume
          </a>
          <a
            href="#contact"
            onClick={(e) => {
              e.preventDefault();
              document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
            }}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full glass text-foreground font-medium hover:border-brand/50 transition-all"
          >
            Get In Touch
          </a>
          <div className="flex items-center gap-2 ml-1">
            {profile.socials.map((s) => {
              const Icon = iconMap[s.icon as keyof typeof iconMap] ?? Mail;
              return (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={s.label}
                  className="h-11 w-11 grid place-items-center rounded-full glass text-muted-foreground hover:text-brand hover:-translate-y-0.5 transition-all"
                >
                  <Icon size={18} />
                </a>
              );
            })}
          </div>
        </div>

        {/* Stats row */}
        <div
          className={`mt-16 grid grid-cols-2 md:grid-cols-4 gap-px rounded-2xl glass overflow-hidden ${anim.fadeInUp}`}
          style={{ animationDelay: "560ms" }}
        >
          {profile.stats.map((s) => (
            <div key={s.label} className="px-6 py-6 bg-surface/40 backdrop-blur">
              <div className="font-display text-2xl md:text-3xl font-semibold text-gradient">
                {s.value}
              </div>
              <div className="text-xs md:text-sm text-muted-foreground mt-1">{s.label}</div>
            </div>
          ))}
        </div>

        {/* Scroll indicator */}
        <div className="hidden md:flex absolute bottom-4 right-0 flex-col items-center gap-2 text-xs text-muted-foreground">
          <span className="rotate-90 origin-center tracking-widest">SCROLL</span>
          <ArrowDown size={14} className="animate-float" />
        </div>
      </div>
    </section>
  );
}
