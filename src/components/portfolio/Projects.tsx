import { Section } from "./Section";
import { useReveal } from "@/lib/animations";
import projects from "@/data/projects.json";
import { ArrowUpRight, Github } from "lucide-react";

export function Projects() {
  return (
    <Section
      id="projects"
      eyebrow="Projects"
      title="Featured work."
      subtitle="A showcase of recent projects demonstrating my skills in MERN stack development."
    >
      <div className="grid md:grid-cols-2 gap-6">
        {projects.map((p, i) => (
          <ProjectCard key={p.title} project={p} index={i} />
        ))}
      </div>
    </Section>
  );
}

function ProjectCard({
  project,
  index,
}: {
  project: (typeof import("@/data/projects.json"))[number];
  index: number;
}) {
  const { ref } = useReveal<HTMLDivElement>();
  return (
    <article
      ref={ref}
      className="reveal hover-lift glass rounded-2xl overflow-hidden group flex flex-col"
      style={{ transitionDelay: `${index * 80}ms` }}
    >
      <div className="relative aspect-16/10 overflow-hidden bg-surface-elevated">
        <img
          src={project.image}
          alt={project.title}
          loading="lazy"
          className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-linear-to-t from-background via-background/30 to-transparent opacity-80" />
        <div className="absolute top-4 right-4 flex gap-2">
          {project.links.code && (
            <a
              href={project.links.code}
              target="_blank"
              rel="noreferrer"
              aria-label="View code"
              className="h-9 w-9 grid place-items-center rounded-full glass text-foreground hover:text-brand hover:scale-110 transition-all"
            >
              <Github size={15} />
            </a>
          )}
          {project.links.live && (
            <a
              href={project.links.live}
              target="_blank"
              rel="noreferrer"
              aria-label="View live"
              className="h-9 w-9 grid place-items-center rounded-full bg-brand text-brand-foreground hover:scale-110 transition-transform"
            >
              <ArrowUpRight size={16} />
            </a>
          )}
        </div>
      </div>

      <div className="p-6 flex flex-col flex-1">
        <h3 className="font-display text-xl font-semibold group-hover:text-brand transition-colors">
          {project.title}
        </h3>
        <p className="mt-3 text-sm text-muted-foreground leading-relaxed flex-1">
          {project.description}
        </p>

        {/* Services */}
        {"services" in project && project.services && (
          <div className="mt-4 pt-4 border-t border-border">
            <p className="text-xs font-semibold text-foreground/70 mb-2">Services:</p>
            <div className="flex flex-wrap gap-1.5">
              {project.services.map((service) => (
                <span
                  key={service}
                  className="text-[10px] px-2 py-0.5 rounded bg-brand/10 text-brand/80"
                >
                  {service}
                </span>
              ))}
            </div>
          </div>
        )}

       
        <div className="mt-5 flex flex-wrap gap-1.5">
          {project.tech.map((t) => (
            <span
              key={t}
              className="text-[11px] px-2.5 py-1 rounded-md bg-surface-elevated/60 text-foreground/80 border border-border"
            >
              {t}
            </span>
          ))}
        </div>
        <div className="mt-5 flex gap-3 text-sm">
          {project.links.code && (
            <a
              href={project.links.code}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 text-muted-foreground hover:text-brand transition-colors"
            >
              <Github size={14} /> Code
            </a>
          )}
          {project.links.live && (
            <a
              href={project.links.live}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 text-brand hover:opacity-80 transition-opacity"
            >
              Live demo <ArrowUpRight size={14} />
            </a>
          )}
        </div>
      </div>
    </article>
  );
}
