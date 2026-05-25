import { Section } from "./Section";
import { useReveal } from "@/lib/animations";
import education from "@/data/education.json";
import { GraduationCap, MapPin } from "lucide-react";

export function Education() {
  return (
    <Section
      id="education"
      eyebrow="Education"
      title="Academic foundation."
      subtitle="My academic journey in computer science and information technology."
    >
      <div className="grid md:grid-cols-3 gap-5">
        {education.map((e, i) => (
          <EduCard key={e.degree} edu={e} index={i} />
        ))}
      </div>
    </Section>
  );
}

function EduCard({
  edu,
  index,
}: {
  edu: (typeof import("@/data/education.json"))[number];
  index: number;
}) {
  const { ref } = useReveal<HTMLDivElement>();
  return (
    <div
      ref={ref}
      className="reveal hover-lift glass rounded-2xl p-6 flex flex-col"
      style={{ transitionDelay: `${index * 80}ms` }}
    >
      <div className="flex items-start justify-between mb-4">
        <div className="h-11 w-11 rounded-xl bg-brand/10 text-brand grid place-items-center">
          <GraduationCap size={20} />
        </div>
        <span className="font-display text-3xl font-semibold text-gradient leading-none">
          {edu.year}
        </span>
      </div>

      <h3 className="font-display text-lg font-semibold leading-snug">{edu.degree}</h3>
      <div className="mt-1 text-sm text-foreground/80">{edu.school}</div>
      <div className="mt-1 flex items-center gap-1.5 text-xs text-muted-foreground">
        <MapPin size={12} /> {edu.location} · {edu.period}
      </div>

      <div className="mt-4 flex items-center gap-2 flex-wrap">
        <span className="text-xs px-2.5 py-1 rounded-full bg-brand/10 text-brand font-medium">
          {edu.grade}
        </span>
        <span className="text-xs text-muted-foreground">{edu.score}</span>
      </div>

      <p className="mt-4 text-sm text-muted-foreground leading-relaxed">{edu.summary}</p>
    </div>
  );
}
