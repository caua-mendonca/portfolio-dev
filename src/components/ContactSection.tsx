import { Mail, Linkedin, MessageCircle } from "lucide-react";
import AnimatedSection from "./AnimatedSection";

const contacts = [
  {
    icon: Mail,
    label: "Email",
    value: "devcauamartello@gmail.com",
    href: "mailto:devcauamartello@gmail.com",
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    value: "linkedin.com/in/cauamendonca",
    href: "https://linkedin.com/in/cauamendonca",
  },
  {
    icon: MessageCircle,
    label: "WhatsApp",
    value: "+55 16 98177-7449",
    href: "https://wa.me/5516981777449",
  },
];

const ContactSection = () => (
  <section id="contato" className="py-32 px-6">
    <div className="max-w-5xl mx-auto text-center">
      <AnimatedSection>
        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Vamos Conversar</h2>
        <p className="text-muted-foreground mb-14 max-w-lg mx-auto">
          Aberto a novas oportunidades, projetos freelance ou apenas uma boa conversa.
        </p>
      </AnimatedSection>

      <div className="grid sm:grid-cols-3 gap-6 max-w-3xl mx-auto">
        {contacts.map((c, i) => (
          <AnimatedSection key={c.label} delay={i * 0.1}>
            <a
              href={c.href}
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center gap-3 p-6 rounded-xl border border-border bg-card transition-all duration-300 hover:border-primary/40 group"
            >
              <c.icon size={24} className="text-primary" />
              <span className="text-sm font-medium text-foreground">{c.label}</span>
              <span className="text-xs text-muted-foreground group-hover:text-foreground transition-colors">
                {c.value}
              </span>
            </a>
          </AnimatedSection>
        ))}
      </div>
    </div>
  </section>
);

export default ContactSection;
