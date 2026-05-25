import { Section } from "./Section";
import { useReveal } from "@/lib/animations";
import profile from "@/data/profile.json";
import { MapPin, Mail, Phone } from "lucide-react";

export function About() {
  const { ref } = useReveal<HTMLDivElement>();
  return (
    <Section id="about" eyebrow="About" title="A developer who turns ideas into code." subtitle="Hello! I'm Pooja Sorathiya — here's a bit more about my journey.">
      <div ref={ref} className="reveal grid lg:grid-cols-5 gap-8 lg:gap-12 items-start">
        <div className="lg:col-span-3 space-y-5 text-base md:text-lg text-muted-foreground leading-relaxed">
          {profile.about.map((p, i) => (
            <p key={i}>{p}</p>
          ))}
        </div>

        <aside className="lg:col-span-2 glass rounded-2xl p-6 md:p-8 space-y-5">
          <h3 className="font-display text-xl font-semibold">Quick facts</h3>
          <ul className="space-y-4 text-sm">
            <li className="flex items-start gap-3">
              <MapPin size={18} className="text-brand mt-0.5 shrink-0" />
              <div>
                <div className="text-muted-foreground">Location</div>
                <div className="text-foreground">{profile.location}</div>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <Mail size={18} className="text-brand mt-0.5 shrink-0" />
              <div>
                <div className="text-muted-foreground">Email</div>
                <a href={`mailto:${profile.email}`} className="text-foreground hover:text-brand break-all">
                  {profile.email}
                </a>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <Phone size={18} className="text-brand mt-0.5 shrink-0" />
              <div>
                <div className="text-muted-foreground">Phone</div>
                <a href={`tel:${profile.phone.replace(/\s/g, "")}`} className="text-foreground hover:text-brand">
                  {profile.phone}
                </a>
              </div>
            </li>
          </ul>
          <div className="pt-4 border-t border-border grid grid-cols-2 gap-3">
            {profile.stats.slice(0, 4).map((s) => (
              <div key={s.label} className="rounded-xl bg-surface/60 px-3 py-3">
                <div className="font-display text-lg font-semibold text-gradient">{s.value}</div>
                <div className="text-[11px] text-muted-foreground leading-tight mt-0.5">
                  {s.label}
                </div>
              </div>
            ))}
          </div>
        </aside>
      </div>
    </Section>
  );
}
