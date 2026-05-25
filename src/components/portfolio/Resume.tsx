import { useState } from "react";
import { Section } from "./Section";
import { useReveal } from "@/lib/animations";
import profile from "@/data/profile.json";
import { Download, ExternalLink, FileText, Loader2 } from "lucide-react";

export function Resume() {
  const { ref } = useReveal<HTMLDivElement>();
  const [loaded, setLoaded] = useState(false);

  return (
    <Section
      id="resume"
      eyebrow="Resume"
      title="My resume, at a glance."
      subtitle="Preview the full resume below or download a copy for offline reading."
    >
      <div
        ref={ref}
        className="reveal glass rounded-2xl overflow-hidden border border-border"
      >
        {/* Toolbar */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 px-5 py-4 border-b border-border bg-surface/40">
          <div className="flex items-center gap-3">
            <div className="h-10 w-10 rounded-xl bg-brand/10 text-brand grid place-items-center">
              <FileText size={18} />
            </div>
            <div>
              <div className="font-display text-base font-semibold">
                {profile.name} — Resume
              </div>
              <div className="text-xs text-muted-foreground">PDF · Updated recently</div>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <a
              href={profile.resume}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-sm font-medium hover:border-brand/50 transition-all"
            >
              <ExternalLink size={14} />
              Open in new tab
            </a>
            <a
              href={profile.resume}
              download
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand text-brand-foreground text-sm font-medium hover:opacity-90 transition-all hover:-translate-y-0.5 shadow-[0_15px_40px_-10px_var(--brand-glow)]"
            >
              <Download size={14} />
              Download
            </a>
          </div>
        </div>

        {/* Preview */}
        <div className="relative bg-[oklch(0.18_0_0)]">
          {!loaded && (
            <div className="absolute inset-0 grid place-items-center text-muted-foreground gap-3">
              <Loader2 className="animate-spin" size={22} />
              <span className="text-sm">Loading preview…</span>
            </div>
          )}
          <iframe
            src={`${profile.resume}#view=FitH&toolbar=1`}
            title={`${profile.name} Resume`}
            onLoad={() => setLoaded(true)}
            className="w-full h-[80vh] min-h-[600px] bg-white"
          />
        </div>
      </div>
    </Section>
  );
}
