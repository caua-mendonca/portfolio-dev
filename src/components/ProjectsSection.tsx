import { ExternalLink } from "lucide-react";
import AnimatedSection from "./AnimatedSection";
import TiltCard from "./TiltCard";

const projects = [
  {
    title: "Sistema de Cadastro e Login",
    description:
      "Fluxo completo de autenticação com cadastro e login de usuários, com validação de formulário e tratamento seguro de credenciais.",
    tags: ["React", "Node.js", "Express"],
    github: "https://github.com/caua-mendonca/cadastro-login",
  },
  {
    title: "Lilac Front-end Test",
    description:
      "Projeto de desafio front-end demonstrando habilidades de desenvolvimento de UI com uma interface limpa e responsiva.",
    tags: ["React", "CSS", "JavaScript"],
    github: "https://github.com/caua-mendonca/lilac-front-end-test",
  },
];

const ProjectsSection = () => (
  <section id="projetos" className="py-32 px-6">
    <div className="max-w-5xl mx-auto">
      <AnimatedSection>
        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-12">Projetos</h2>
      </AnimatedSection>

      <div className="grid md:grid-cols-2 gap-6">
        {projects.map((project, i) => (
          <AnimatedSection key={project.title} delay={i * 0.1}>
            <TiltCard>
              <div className="h-full rounded-xl border border-border bg-card p-6 transition-colors duration-300 hover:border-primary/40">
                <div className="flex items-start justify-between mb-3">
                  <h3 className="text-lg font-semibold text-foreground">{project.title}</h3>
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-primary transition-colors"
                    aria-label="GitHub"
                  >
                    <ExternalLink size={18} />
                  </a>
                </div>

                <p className="text-muted-foreground text-sm leading-relaxed mb-5">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs px-3 py-1 rounded-full bg-secondary text-muted-foreground"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </TiltCard>
          </AnimatedSection>
        ))}
      </div>
    </div>
  </section>
);

export default ProjectsSection;
