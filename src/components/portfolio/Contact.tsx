import { useState } from "react";
import { Section } from "./Section";
import { useReveal } from "@/lib/animations";
import profile from "@/data/profile.json";
import { Mail, Phone, MapPin, Send, Github, Linkedin, Check } from "lucide-react";

const iconMap = { github: Github, linkedin: Linkedin, mail: Mail } as const;

export function Contact() {
  const { ref } = useReveal<HTMLDivElement>();
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Portfolio inquiry from ${form.name}`);
    const body = encodeURIComponent(`${form.message}\n\n— ${form.name} (${form.email})`);
    window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`;
    setSent(true);
    setTimeout(() => setSent(false), 3000);
  };

  return (
    <Section
      id="contact"
      eyebrow="Contact"
      title="Let's build something together."
      subtitle="Ready to work together? I'd love to hear about your project and discuss how I can help bring your ideas to life."
    >
      <div ref={ref} className="reveal grid lg:grid-cols-5 gap-6">
        {/* Info card */}
        <div className="lg:col-span-2 glass rounded-2xl p-7 flex flex-col">
          <h3 className="font-display text-2xl font-semibold">Let's connect</h3>
          <p className="mt-3 text-sm text-muted-foreground">
            Open to freelance projects, full-time roles, and collaborations.
          </p>

          <ul className="mt-7 space-y-5">
            <ContactItem icon={Mail} label="Email" value={profile.email} href={`mailto:${profile.email}`} />
            <ContactItem icon={Phone} label="Phone" value={profile.phone} href={`tel:${profile.phone.replace(/\s/g, "")}`} />
            <ContactItem icon={MapPin} label="Location" value={profile.location} />
          </ul>

          <div className="mt-auto pt-7">
            <div className="text-xs uppercase tracking-[0.18em] text-muted-foreground mb-3">
              Follow me
            </div>
            <div className="flex gap-2">
              {profile.socials.map((s) => {
                const Icon = iconMap[s.icon as keyof typeof iconMap] ?? Mail;
                return (
                  <a
                    key={s.label}
                    href={s.href}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={s.label}
                    className="h-11 w-11 grid place-items-center rounded-full bg-surface-elevated text-muted-foreground hover:text-brand hover:-translate-y-0.5 transition-all"
                  >
                    <Icon size={16} />
                  </a>
                );
              })}
            </div>
          </div>
        </div>

        {/* Form */}
        <form
          onSubmit={handleSubmit}
          className="lg:col-span-3 glass rounded-2xl p-7 space-y-5"
        >
          <Field
            label="Your name"
            id="name"
            value={form.name}
            onChange={(v) => setForm((f) => ({ ...f, name: v }))}
            required
          />
          <Field
            label="Your email"
            id="email"
            type="email"
            value={form.email}
            onChange={(v) => setForm((f) => ({ ...f, email: v }))}
            required
          />
          <div>
            <label htmlFor="message" className="block text-xs uppercase tracking-[0.16em] text-muted-foreground mb-2">
              Your message
            </label>
            <textarea
              id="message"
              required
              rows={5}
              value={form.message}
              onChange={(e) => setForm((f) => ({ ...f, message: e.target.value }))}
              className="w-full bg-surface/40 border border-border rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-brand focus:ring-2 focus:ring-brand/20 transition-all resize-none"
              placeholder="Tell me about your project..."
            />
          </div>

          <button
            type="submit"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-brand text-brand-foreground font-medium hover:opacity-90 transition-all hover:-translate-y-0.5 shadow-[0_15px_40px_-10px_var(--brand-glow)]"
          >
            {sent ? (
              <>
                <Check size={16} /> Opening your mail app
              </>
            ) : (
              <>
                <Send size={16} /> Send message
              </>
            )}
          </button>
        </form>
      </div>
    </Section>
  );
}

function ContactItem({
  icon: Icon,
  label,
  value,
  href,
}: {
  icon: typeof Mail;
  label: string;
  value: string;
  href?: string;
}) {
  const Inner = (
    <>
      <span className="h-10 w-10 rounded-xl bg-brand/10 text-brand grid place-items-center shrink-0">
        <Icon size={16} />
      </span>
      <span className="min-w-0">
        <span className="block text-xs uppercase tracking-[0.16em] text-muted-foreground">{label}</span>
        <span className="block text-sm text-foreground truncate">{value}</span>
      </span>
    </>
  );
  return (
    <li>
      {href ? (
        <a href={href} className="flex items-center gap-3 hover:text-brand transition-colors">
          {Inner}
        </a>
      ) : (
        <div className="flex items-center gap-3">{Inner}</div>
      )}
    </li>
  );
}

function Field({
  label,
  id,
  value,
  onChange,
  type = "text",
  required,
}: {
  label: string;
  id: string;
  value: string;
  onChange: (v: string) => void;
  type?: string;
  required?: boolean;
}) {
  return (
    <div>
      <label htmlFor={id} className="block text-xs uppercase tracking-[0.16em] text-muted-foreground mb-2">
        {label}
      </label>
      <input
        id={id}
        type={type}
        required={required}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full bg-surface/40 border border-border rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-brand focus:ring-2 focus:ring-brand/20 transition-all"
      />
    </div>
  );
}
