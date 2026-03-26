import { Award } from "lucide-react";
import AnimatedSection from "./AnimatedSection";

const certifications = [
  {
    title: "Assistente de Desenvolvimento de Aplicativos Computacionais",
    institution: "Senac São Paulo",
    year: "2023",
  },
  {
    title: "Curso JavaScript",
    institution: "Certificação Online",
    year: "2023",
  },
  {
    title: "Curso Node.js",
    institution: "Certificação Online",
    year: "2023",
  },
];

const CertificationsSection = () => (
  <section id="certificacoes" className="py-32 px-6">
    <div className="max-w-5xl mx-auto">
      <AnimatedSection>
        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-12">
          Certificações
        </h2>
      </AnimatedSection>

      <div className="grid md:grid-cols-3 gap-6">
        {certifications.map((cert, i) => (
          <AnimatedSection key={i} delay={i * 0.1}>
            <div className="group h-full rounded-xl border border-border bg-card p-6 transition-all duration-300 hover:border-primary/40">
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                <Award size={20} className="text-primary" />
              </div>
              <h3 className="text-sm font-semibold text-foreground mb-2 leading-snug">
                {cert.title}
              </h3>
              <p className="text-xs text-muted-foreground">{cert.institution}</p>
              <p className="text-xs text-primary mt-2">{cert.year}</p>
            </div>
          </AnimatedSection>
        ))}
      </div>
    </div>
  </section>
);

export default CertificationsSection;
