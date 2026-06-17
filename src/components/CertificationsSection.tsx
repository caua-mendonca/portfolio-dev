import { Award, ExternalLink } from "lucide-react";
import AnimatedSection from "./AnimatedSection";

const certifications = [
  // IA
  {
    title: "Claude Code in Action",
    institution: "Anthropic",
    year: "2025",
    category: "Inteligência Artificial",
    link: "https://verify.skilljar.com/c/u4hys3u3bte8",
  },
  {
    title: "Build Real World AI Applications with Gemini and Imagen",
    institution: "Google",
    year: "2025",
    category: "Inteligência Artificial",
    link: null,
  },
  {
    title: "Gemini for Application Developers",
    institution: "Google",
    year: "2025",
    category: "Inteligência Artificial",
    link: null,
  },
  {
    title: "AI Fluency Framework & Foundations",
    institution: "Google",
    year: "2025",
    category: "Inteligência Artificial",
    link: null,
  },
  // Full-Stack
  {
    title: "JavaScript e TypeScript Full-Stack: Node.js, Express, React, Redux, Design Patterns",
    institution: "Udemy",
    year: "2024",
    category: "Desenvolvimento Full-Stack",
    link: null,
  },
  {
    title: "Desenvolvimento Full-Stack",
    institution: "Udemy",
    year: "2025",
    category: "Desenvolvimento Full-Stack",
    link: null,
  },
  // Técnico
  {
    title: "Assistente de Desenvolvimento de Aplicativos Computacionais (620h)",
    institution: "SENAC São Paulo",
    year: "2022",
    category: "Técnico",
    link: null,
  },
  {
    title: "Técnico em Informática",
    institution: "SENAC São Paulo",
    year: "2023",
    category: "Técnico",
    link: null,
  },
  // Complementares
  {
    title: "Node.js, JavaScript e Lógica de Programação",
    institution: "Danki Code",
    year: "2025",
    category: "Complementar",
    link: null,
  },
  {
    title: "HTML5, CSS3 e JavaScript (40h)",
    institution: "Curso em Vídeo",
    year: "2024",
    category: "Complementar",
    link: null,
  },
];

const CATEGORY_COLORS: Record<string, string> = {
  "Inteligência Artificial": "text-violet-400 bg-violet-400/10 border-violet-400/20",
  "Desenvolvimento Full-Stack": "text-primary bg-primary/10 border-primary/20",
  "Técnico": "text-emerald-400 bg-emerald-400/10 border-emerald-400/20",
  "Complementar": "text-amber-400 bg-amber-400/10 border-amber-400/20",
};

const CertificationsSection = () => (
  <section id="certificacoes" className="py-32 px-6">
    <div className="max-w-5xl mx-auto">
      <AnimatedSection>
        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-12">
          Certificações
        </h2>
      </AnimatedSection>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
        {certifications.map((cert, i) => (
          <AnimatedSection key={i} delay={i * 0.07}>
            <div className="group h-full rounded-xl border border-border bg-card p-5 transition-all duration-300 hover:border-primary/40 flex flex-col">
              <div className="flex items-start justify-between gap-2 mb-3">
                <div className="w-9 h-9 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                  <Award size={18} className="text-primary" />
                </div>
                {cert.link && (
                  <a
                    href={cert.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs text-muted-foreground hover:text-primary transition-colors flex items-center gap-1 shrink-0"
                    aria-label={`Verificar certificado: ${cert.title}`}
                  >
                    <ExternalLink size={12} />
                    Verificar
                  </a>
                )}
              </div>

              <h3 className="text-sm font-semibold text-foreground mb-2 leading-snug flex-1">
                {cert.title}
              </h3>

              <div className="mt-auto pt-3 flex items-center justify-between gap-2">
                <p className="text-xs text-muted-foreground">{cert.institution}</p>
                <span
                  className={`text-xs px-2 py-0.5 rounded-full border font-medium ${CATEGORY_COLORS[cert.category]}`}
                >
                  {cert.year}
                </span>
              </div>
            </div>
          </AnimatedSection>
        ))}
      </div>
    </div>
  </section>
);

export default CertificationsSection;
