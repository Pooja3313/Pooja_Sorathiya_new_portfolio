import { Section } from "./Section";
import { useReveal } from "@/lib/animations";
import experience from "@/data/experience.json";
import { Briefcase, MapPin, ExternalLink, Github } from "lucide-react";

export function Experience() {
  return (
    <Section
      id="experience"
      eyebrow="Experience"
      title="A timeline of building things."
      subtitle="My professional journey across MERN stack and React.js development."
    >
      <div className="relative">
        {/* Vertical timeline line */}
        <div className="absolute left-4 md:left-1/2 top-2 bottom-2 w-px bg-linear-to-b from-brand/0 via-brand/40 to-brand/0 md:-translate-x-px" />

        <div className="space-y-10 md:space-y-16">
          {experience.map((exp, i) => (
            <TimelineItem key={`${exp.company}-${i}`} exp={exp} index={i} />
          ))}
        </div>
      </div>
    </Section>
  );
}

function TimelineItem({
  exp,
  index,
}: {
  exp: (typeof import("@/data/experience.json"))[number];
  index: number;
}) {
  const { ref } = useReveal<HTMLDivElement>();
  const left = index % 2 === 0;
  return (
    <div
      ref={ref}
      className={`reveal relative md:grid md:grid-cols-2 md:gap-12 items-start ${
        left ? "" : "md:[&>*:first-child]:order-2"
      }`}
    >
      {/* Dot */}
      <span className="absolute left-4 md:left-1/2 top-6 h-3 w-3 -translate-x-1/2 rounded-full bg-brand shadow-[0_0_0_4px_var(--background),0_0_20px_var(--brand-glow)]" />

      {/* Content card */}
      <div
        className={`pl-12 md:pl-0 ${left ? "md:pr-12 md:text-right" : "md:pl-12"}`}
      >
        <div className="hover-lift glass rounded-2xl p-6 md:p-7 inline-block w-full text-left">
          <div className="flex items-center gap-2 flex-wrap mb-3">
            <span className="text-xs px-2.5 py-1 rounded-full bg-brand/10 text-brand font-medium">
              {exp.type}
            </span>
            <span className="text-xs text-muted-foreground">{exp.period}</span>
          </div>
          <h3 className="font-display text-xl font-semibold leading-tight">{exp.role}</h3>
          <div className="mt-1 flex items-center gap-2 text-sm text-foreground/80">
            <Briefcase size={14} className="text-brand" />
            {exp.company}
          </div>
          <div className="mt-1 flex items-center gap-2 text-xs text-muted-foreground">
            <MapPin size={12} /> {exp.location}
          </div>
          <p className="mt-4 text-sm text-muted-foreground">{exp.summary}</p>

          <ul className="mt-4 space-y-1.5">
            {exp.responsibilities.map((r) => (
              <li key={r} className="text-sm text-muted-foreground flex gap-2">
                <span className="text-brand shrink-0">▹</span>
                <span>{r}</span>
              </li>
            ))}
          </ul>

          <div className="mt-5 flex flex-wrap gap-1.5">
            {exp.tech.map((t) => (
              <span
                key={t}
                className="text-[11px] px-2.5 py-1 rounded-md bg-surface-elevated text-foreground/80 border border-border"
              >
                {t}
              </span>
            ))}
          </div>

          {exp.projects && exp.projects.length > 0 && (
            <div className="mt-6 space-y-4 pt-5 border-t border-border">
              <h4 className="text-sm font-semibold text-foreground">Featured Projects:</h4>
              {exp.projects.map((project) => (
                <div key={project.name} className="bg-surface-elevated/50 rounded-lg p-4">
                  <div className="flex items-start justify-between gap-3 mb-2">
                    <h5 className="font-medium text-sm text-foreground">{project.name}</h5>
                    <div className="flex gap-2">
                      {project.links?.live && (
                        <a
                          href={project.links.live}
                          target="_blank"
                          rel="noreferrer"
                          className="text-brand hover:text-brand/80 transition-colors"
                          title="Live Website"
                        >
                          <ExternalLink size={14} />
                        </a>
                      )}
                      {project.links?.github && (
                        <a
                          href={project.links.github}
                          target="_blank"
                          rel="noreferrer"
                          className="text-brand hover:text-brand/80 transition-colors"
                          title="GitHub Repository"
                        >
                          <Github size={14} />
                        </a>
                      )}
                    </div>
                  </div>
                  <p className="text-xs text-muted-foreground mb-2">{project.description}</p>
                  <div className="flex flex-wrap gap-1">
                    {project.tech?.map((t) => (
                      <span key={t} className="text-[10px] px-1.5 py-0.5 rounded bg-brand/10 text-brand/80">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
      <div className="hidden md:block" />
    </div>
  );
}
