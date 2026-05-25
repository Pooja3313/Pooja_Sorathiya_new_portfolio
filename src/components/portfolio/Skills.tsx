import { Section } from "./Section";
import { useReveal } from "@/lib/animations";
import skills from "@/data/skills.json";
import { Layout, Server, Database, Wrench, Sparkles, type LucideIcon } from "lucide-react";

const ICONS: Record<string, LucideIcon> = {
  layout: Layout,
  server: Server,
  database: Database,
  wrench: Wrench,
};

export function Skills() {
  return (
    <Section
      id="skills"
      eyebrow="Skills"
      title="The toolkit I build with."
      subtitle="Technologies and tools I use to bring ideas to life — from interface to infrastructure."
    >
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {skills.categories.map((cat, i) => {
          const Icon = ICONS[cat.icon] ?? Layout;
          return <SkillCard key={cat.title} title={cat.title} items={cat.items} Icon={Icon} index={i} />;
        })}
      </div>

      <div className="mt-10">
        <div className="flex items-center gap-2 text-xs uppercase tracking-[0.18em] text-muted-foreground mb-4">
          <Sparkles size={14} className="text-brand" /> Core strengths
        </div>
        <div className="flex flex-wrap gap-2">
          {skills.strengths.map((s) => (
            <span
              key={s}
              className="px-4 py-2 rounded-full glass text-sm text-foreground/90 hover:border-brand/50 hover:text-brand transition-colors"
            >
              {s}
            </span>
          ))}
        </div>
      </div>
    </Section>
  );
}

function SkillCard({
  title,
  items,
  Icon,
  index,
}: {
  title: string;
  items: string[];
  Icon: LucideIcon;
  index: number;
}) {
  const { ref } = useReveal<HTMLDivElement>();
  return (
    <div
      ref={ref}
      className="reveal hover-lift glass rounded-2xl p-6 group"
      style={{ transitionDelay: `${index * 80}ms` }}
    >
      <div className="h-11 w-11 rounded-xl bg-brand/10 text-brand grid place-items-center mb-4 group-hover:bg-brand group-hover:text-brand-foreground transition-colors">
        <Icon size={20} />
      </div>
      <h3 className="font-display text-lg font-semibold mb-3">{title}</h3>
      <ul className="space-y-1.5">
        {items.map((item) => (
          <li key={item} className="text-sm text-muted-foreground flex items-center gap-2">
            <span className="h-1 w-1 rounded-full bg-brand/60" />
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}
