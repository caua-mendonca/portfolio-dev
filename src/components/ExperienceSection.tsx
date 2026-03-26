import AnimatedSection from "./AnimatedSection";

const experiences = [
  {
    role: "Desenvolvedor Júnior Full-Stack",
    company: "Cia do Crédito",
    period: "Jun 2025 – Presente",
    location: "Campos dos Goytacazes, RJ",
    description:
      "Desenvolvimento e manutenção da PWA Ciacred com Angular, criação de dashboards responsivos com integração via APIs REST. Manutenção da API Symfony e criação de automações RPA com Node.js e Playwright.",
    tags: ["Angular", "Symfony", "Node.js", "Playwright", "REST APIs"],
  },
  {
    role: "Estagiário Full-Stack",
    company: "Cia do Crédito",
    period: "Ago 2024 – Jun 2025",
    location: "Rio de Janeiro, RJ",
    description:
      "Atuação no desenvolvimento front-end da PWA com Angular e manutenção de endpoints da API em Symfony. Desenvolvimento de soluções de automação (RPA) para extração de relatórios.",
    tags: ["Angular", "Symfony", "Docker", "RPA"],
  },
];

const education = [
  {
    title: "Bacharelado em Engenharia de Software",
    institution: "Uni-FACEF",
    period: "2024 – 2027",
  },
  {
    title: "Técnico em Informática",
    institution: "Senac São Paulo",
    period: "2021 – 2023",
  },
];

const ExperienceSection = () => (
  <section id="experiencia" className="py-32 px-6">
    <div className="max-w-5xl mx-auto">
      <AnimatedSection>
        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-16">
          Experiência
        </h2>
      </AnimatedSection>

      {/* Timeline */}
      <div className="relative">
        {/* Vertical line */}
        <div className="absolute left-[7px] md:left-[9px] top-2 bottom-2 w-px bg-border" />

        <div className="space-y-12">
          {experiences.map((exp, i) => (
            <AnimatedSection key={i} delay={i * 0.1}>
              <div className="relative pl-8 md:pl-10">
                {/* Dot */}
                <div className="absolute left-0 top-2 h-[15px] w-[15px] md:h-[19px] md:w-[19px] rounded-full border-2 border-primary bg-background" />

                <div className="rounded-xl border border-border bg-card p-6 transition-all duration-300 hover:border-primary/40">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1 mb-1">
                    <h3 className="text-lg font-semibold text-foreground">
                      {exp.role}
                    </h3>
                    <span className="text-xs text-muted-foreground">
                      {exp.period}
                    </span>
                  </div>
                  <p className="text-sm text-primary mb-1">{exp.company}</p>
                  <p className="text-xs text-muted-foreground mb-4">
                    {exp.location}
                  </p>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                    {exp.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {exp.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-xs px-3 py-1 rounded-full bg-secondary text-muted-foreground"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>

      {/* Education */}
      <AnimatedSection delay={0.3}>
        <h3 className="text-2xl font-bold text-foreground mt-20 mb-8">
          Formação
        </h3>
      </AnimatedSection>

      <div className="grid md:grid-cols-2 gap-6">
        {education.map((edu, i) => (
          <AnimatedSection key={i} delay={0.3 + i * 0.1}>
            <div className="rounded-xl border border-border bg-card p-6">
              <h4 className="text-base font-semibold text-foreground mb-1">
                {edu.title}
              </h4>
              <p className="text-sm text-primary">{edu.institution}</p>
              <p className="text-xs text-muted-foreground mt-1">{edu.period}</p>
            </div>
          </AnimatedSection>
        ))}
      </div>
    </div>
  </section>
);

export default ExperienceSection;
