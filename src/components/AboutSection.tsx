import AnimatedSection from "./AnimatedSection";

const techs = [
  "React", "Next.js", "Node.js", "Express", "JavaScript",
  "TypeScript", "HTML", "CSS", "Git", "GitHub",
];

const AboutSection = () => (
  <section id="sobre" className="py-32 px-6">
    <div className="max-w-5xl mx-auto">
      <AnimatedSection>
        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-12">Sobre</h2>
      </AnimatedSection>

      <div className="grid md:grid-cols-2 gap-12 items-start">
        <AnimatedSection delay={0.1}>
          <p className="text-muted-foreground leading-relaxed text-lg">
            Sou um desenvolvedor Fullstack apaixonado por construir experiências
            web modernas. Atuo em todo o stack — desde interfaces React/Next.js
            limpas até APIs REST escaláveis com Node.js e Express.
          </p>
        </AnimatedSection>

        <AnimatedSection delay={0.2}>
          <div className="flex flex-wrap gap-2">
            {techs.map((tech) => (
              <span
                key={tech}
                className="px-4 py-1.5 text-sm rounded-full border border-border bg-secondary text-muted-foreground"
              >
                {tech}
              </span>
            ))}
          </div>
        </AnimatedSection>
      </div>
    </div>
  </section>
);

export default AboutSection;
