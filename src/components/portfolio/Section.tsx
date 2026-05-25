import { useReveal } from "@/lib/animations";
import { cn } from "@/lib/utils";

interface SectionProps {
  id: string;
  eyebrow?: string;
  title: string;
  subtitle?: string;
  children: React.ReactNode;
  className?: string;
}

export function Section({ id, eyebrow, title, subtitle, children, className }: SectionProps) {
  const { ref } = useReveal<HTMLDivElement>();
  return (
    <section id={id} className={cn("relative py-24 md:py-32 container-px", className)}>
      <div ref={ref} className="reveal max-w-3xl mb-14 md:mb-20">
        {eyebrow ? (
          <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.18em] text-brand mb-4">
            <span className="h-px w-8 bg-brand" />
            {eyebrow}
          </div>
        ) : null}
        <h2 className="font-display text-3xl md:text-5xl font-semibold tracking-tight">
          {title}
        </h2>
        {subtitle ? (
          <p className="mt-4 text-base md:text-lg text-muted-foreground max-w-2xl">{subtitle}</p>
        ) : null}
      </div>
      {children}
    </section>
  );
}
