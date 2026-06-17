import AnimatedSection from "./AnimatedSection";

const techs = [
  // Front-End
  "Angular", "React.js", "Next.js", "TypeScript", "JavaScript",
  "HTML5", "CSS3", "Tailwind CSS", "Bootstrap", "Redux",
  // Back-End / RPA
  "Node.js", "Express.js", "Symfony", "Playwright", "Python",
  // DevOps / Banco
  "Docker", "Git", "MongoDB", "PWA", "AWS",
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
            Desenvolvedor Full-Stack com foco em Front-End e liderança técnica
            no setor de automações RPA financeiras. Na Cia do Crédito, sou
            responsável integral pelo desenvolvimento, validação e
            disponibilização de mais de 18 automações ativas em produção com
            Node.js, Playwright e Python — automatizando 100% dos processos de
            importação e integração de dados do setor financeiro. Atuo também
            no desenvolvimento de PWAs com Angular e React.js e na manutenção
            de APIs com Symfony.
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
