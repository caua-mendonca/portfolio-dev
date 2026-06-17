import { useState, useEffect } from "react";
import { ExternalLink, Github, Star, GitFork, Clock, AlertCircle } from "lucide-react";
import AnimatedSection from "./AnimatedSection";
import TiltCard from "./TiltCard";

// Cores padrão do GitHub por linguagem de programação
const LANGUAGE_COLORS: Record<string, string> = {
  JavaScript: "#f1e05a",
  TypeScript: "#3178c6",
  Python: "#3572A5",
  Go: "#00ADD8",
  Rust: "#dea584",
  Java: "#b07219",
  HTML: "#e34c26",
  CSS: "#563d7c",
  SCSS: "#c6538c",
  Vue: "#41b883",
  Svelte: "#ff3e00",
  Dart: "#00B4AB",
  Shell: "#89e051",
  Kotlin: "#A97BFF",
  Swift: "#F05138",
  Ruby: "#701516",
  PHP: "#4F5D95",
  "C++": "#f34b7d",
  "C#": "#178600",
  C: "#555555",
  Dockerfile: "#384d54",
};

const REPOS = [
  "task-manager-microservices",
  "playwright-rpa-transparencia",
  "react-component-generator",
  "shopee-vendedor-pro",
  "football-aplication-flutter",
];

const GITHUB_USER = "caua-mendonca";

interface GitHubRepo {
  name: string;
  description: string | null;
  language: string | null;
  stargazers_count: number;
  forks_count: number;
  updated_at: string;
  html_url: string;
  homepage: string | null;
  topics: string[];
}

interface RepoCard {
  repo: GitHubRepo;
  languages: Record<string, number>;
}

// Fallback estático exibido se a GitHub API estiver indisponível
const FALLBACK_DATA: RepoCard[] = [
  {
    repo: {
      name: "task-manager-microservices",
      description: "Sistema de gerenciamento de tarefas com arquitetura de microsserviços, filas de mensagens e comunicação via REST e gRPC.",
      language: "TypeScript",
      stargazers_count: 0,
      forks_count: 0,
      updated_at: new Date().toISOString(),
      html_url: `https://github.com/${GITHUB_USER}/task-manager-microservices`,
      homepage: null,
      topics: ["typescript", "microservices", "nodejs", "docker"],
    },
    languages: { TypeScript: 80, JavaScript: 15, Dockerfile: 5 },
  },
  {
    repo: {
      name: "playwright-rpa-transparencia",
      description: "Robô de automação RPA para coleta e processamento de dados públicos do Portal da Transparência do Governo Federal.",
      language: "TypeScript",
      stargazers_count: 0,
      forks_count: 0,
      updated_at: new Date().toISOString(),
      html_url: `https://github.com/${GITHUB_USER}/playwright-rpa-transparencia`,
      homepage: null,
      topics: ["playwright", "rpa", "automation", "typescript"],
    },
    languages: { TypeScript: 90, JavaScript: 10 },
  },
  {
    repo: {
      name: "react-component-generator",
      description: "CLI para geração automática de componentes React com templates configuráveis, suporte a TypeScript e Storybook.",
      language: "TypeScript",
      stargazers_count: 0,
      forks_count: 0,
      updated_at: new Date().toISOString(),
      html_url: `https://github.com/${GITHUB_USER}/react-component-generator`,
      homepage: null,
      topics: ["react", "cli", "generator", "typescript"],
    },
    languages: { TypeScript: 85, JavaScript: 15 },
  },
  {
    repo: {
      name: "shopee-vendedor-pro",
      description: "Ferramenta web para gestão e otimização de listagens de vendedores na plataforma Shopee com análise de métricas.",
      language: "JavaScript",
      stargazers_count: 0,
      forks_count: 0,
      updated_at: new Date().toISOString(),
      html_url: `https://github.com/${GITHUB_USER}/shopee-vendedor-pro`,
      homepage: null,
      topics: ["react", "javascript", "ecommerce"],
    },
    languages: { JavaScript: 70, CSS: 20, HTML: 10 },
  },
  {
    repo: {
      name: "football-aplication-flutter",
      description: "Aplicativo mobile de futebol com informações de times, partidas e tabelas de campeonatos, desenvolvido com Flutter.",
      language: "Dart",
      stargazers_count: 0,
      forks_count: 0,
      updated_at: new Date().toISOString(),
      html_url: `https://github.com/${GITHUB_USER}/football-aplication-flutter`,
      homepage: null,
      topics: ["flutter", "dart", "mobile", "sports"],
    },
    languages: { Dart: 95, HTML: 5 },
  },
];

function timeAgo(dateStr: string): string {
  const diffDays = Math.floor((Date.now() - new Date(dateStr).getTime()) / 86400000);
  if (diffDays === 0) return "hoje";
  if (diffDays === 1) return "ontem";
  if (diffDays < 30) return `há ${diffDays} dias`;
  const months = Math.floor(diffDays / 30);
  if (months < 12) return `há ${months} ${months === 1 ? "mês" : "meses"}`;
  const years = Math.floor(diffDays / 365);
  return `há ${years} ${years === 1 ? "ano" : "anos"}`;
}

function formatRepoName(name: string): string {
  return name
    .split("-")
    .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
    .join(" ");
}

function getLanguagePercentages(languages: Record<string, number>) {
  const total = Object.values(languages).reduce((a, b) => a + b, 0);
  if (total === 0) return [];
  return Object.entries(languages)
    .map(([name, bytes]) => ({ name, pct: Math.round((bytes / total) * 100) }))
    .filter(({ pct }) => pct > 0)
    .sort((a, b) => b.pct - a.pct)
    .slice(0, 4);
}

const SkeletonCard = () => (
  <div className="rounded-xl border border-border bg-card p-6 animate-pulse h-[280px] flex flex-col gap-3">
    <div className="flex items-center justify-between">
      <div className="h-4 w-36 bg-muted rounded" />
      <div className="h-4 w-4 bg-muted rounded" />
    </div>
    <div className="h-3 w-full bg-muted rounded" />
    <div className="h-3 w-4/5 bg-muted rounded" />
    <div className="h-1.5 w-full bg-muted rounded-full mt-1" />
    <div className="flex gap-2">
      <div className="h-5 w-16 bg-muted rounded-full" />
      <div className="h-5 w-20 bg-muted rounded-full" />
    </div>
    <div className="mt-auto pt-3 border-t border-border flex justify-between">
      <div className="flex gap-3">
        <div className="h-3 w-10 bg-muted rounded" />
        <div className="h-3 w-10 bg-muted rounded" />
        <div className="h-3 w-20 bg-muted rounded" />
      </div>
      <div className="h-6 w-20 bg-muted rounded" />
    </div>
  </div>
);

const ProjectCard = ({ repo, languages }: RepoCard) => {
  const langPercentages = getLanguagePercentages(languages);
  const hasDemo = Boolean(repo.homepage?.trim());

  return (
    <TiltCard className="h-full">
      <div className="h-full rounded-xl border border-border bg-card p-6 transition-colors duration-300 hover:border-primary/40 flex flex-col">
        {/* Header */}
        <div className="flex items-start justify-between gap-2 mb-3">
          <div className="flex items-center gap-2 min-w-0 flex-wrap">
            <h3 className="text-base font-semibold text-foreground truncate">
              {formatRepoName(repo.name)}
            </h3>
            {repo.language && (
              <span
                className="inline-flex items-center gap-1 text-xs px-2 py-0.5 rounded-full shrink-0 font-medium"
                style={{
                  backgroundColor: `${LANGUAGE_COLORS[repo.language] ?? "#888"}20`,
                  color: LANGUAGE_COLORS[repo.language] ?? "#888",
                  border: `1px solid ${LANGUAGE_COLORS[repo.language] ?? "#888"}40`,
                }}
              >
                <span
                  className="w-1.5 h-1.5 rounded-full"
                  style={{ backgroundColor: LANGUAGE_COLORS[repo.language] ?? "#888" }}
                />
                {repo.language}
              </span>
            )}
          </div>
          <a
            href={repo.html_url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-primary transition-colors shrink-0"
            aria-label={`Abrir repositório ${formatRepoName(repo.name)} no GitHub`}
          >
            <Github size={17} />
          </a>
        </div>

        {/* Descrição */}
        <p className="text-muted-foreground text-sm leading-relaxed mb-4 flex-1 line-clamp-3">
          {repo.description ?? "Sem descrição disponível."}
        </p>

        {/* Barra de linguagens */}
        {langPercentages.length > 0 && (
          <div className="mb-3">
            <div className="flex rounded-full overflow-hidden h-1.5 mb-2 gap-px">
              {langPercentages.map(({ name, pct }) => (
                <div
                  key={name}
                  style={{ width: `${pct}%`, backgroundColor: LANGUAGE_COLORS[name] ?? "#888" }}
                  title={`${name}: ${pct}%`}
                />
              ))}
            </div>
            <div className="flex flex-wrap gap-x-3 gap-y-1">
              {langPercentages.map(({ name, pct }) => (
                <span key={name} className="flex items-center gap-1 text-xs text-muted-foreground">
                  <span
                    className="w-2 h-2 rounded-full"
                    style={{ backgroundColor: LANGUAGE_COLORS[name] ?? "#888" }}
                  />
                  {name} {pct}%
                </span>
              ))}
            </div>
          </div>
        )}

        {/* Topics */}
        {repo.topics.length > 0 && (
          <div className="flex flex-wrap gap-1.5 mb-4">
            {repo.topics.slice(0, 4).map((topic) => (
              <span
                key={topic}
                className="text-xs px-2 py-0.5 rounded-full bg-primary/10 text-primary border border-primary/20"
              >
                {topic}
              </span>
            ))}
          </div>
        )}

        {/* Footer */}
        <div className="flex items-center justify-between pt-3 border-t border-border mt-auto gap-2">
          <div className="flex items-center gap-3 text-xs text-muted-foreground">
            <span className="flex items-center gap-1" title="Stars">
              <Star size={12} />
              {repo.stargazers_count}
            </span>
            <span className="flex items-center gap-1" title="Forks">
              <GitFork size={12} />
              {repo.forks_count}
            </span>
            <span className="hidden sm:flex items-center gap-1 whitespace-nowrap" title="Última atualização">
              <Clock size={12} />
              {timeAgo(repo.updated_at)}
            </span>
          </div>
          <div className="flex gap-1.5 shrink-0">
            {hasDemo && (
              <a
                href={repo.homepage!}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs px-3 py-1 rounded-md bg-primary text-primary-foreground hover:brightness-110 transition-all duration-200 flex items-center gap-1"
                aria-label={`Ver demonstração de ${formatRepoName(repo.name)}`}
              >
                <ExternalLink size={11} />
                Demo
              </a>
            )}
            <a
              href={repo.html_url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs px-3 py-1 rounded-md border border-border text-muted-foreground hover:text-foreground hover:border-primary/40 transition-all duration-200 flex items-center gap-1"
              aria-label={`Ver código-fonte de ${formatRepoName(repo.name)} no GitHub`}
            >
              <Github size={11} />
              Código
            </a>
          </div>
        </div>
      </div>
    </TiltCard>
  );
};

const CACHE_KEY = "gh_projects_v1";
const CACHE_TTL = 3600 * 1000; // 1 hora

// Cabeçalho de autenticação — aumenta o rate limit de 60 para 5000 req/hora
const GITHUB_TOKEN = import.meta.env.VITE_GITHUB_TOKEN as string | undefined;
const AUTH_HEADER: HeadersInit = GITHUB_TOKEN
  ? { Authorization: `Bearer ${GITHUB_TOKEN}` }
  : {};

const ProjectsSection = () => {
  const [cards, setCards] = useState<RepoCard[]>([]);
  const [status, setStatus] = useState<"loading" | "success" | "error">("loading");

  useEffect(() => {
    const fetchProjects = async () => {
      // Verifica cache antes de chamar a API
      try {
        const cached = localStorage.getItem(CACHE_KEY);
        if (cached) {
          const { data, ts } = JSON.parse(cached) as { data: RepoCard[]; ts: number };
          if (Date.now() - ts < CACHE_TTL) {
            setCards(data);
            setStatus("success");
            return;
          }
        }
      } catch { /* ignora erros de parse */ }

      try {
        const results = await Promise.allSettled(
          REPOS.map(async (repoName) => {
            const [repoRes, langsRes] = await Promise.all([
              fetch(`https://api.github.com/repos/${GITHUB_USER}/${repoName}`, { headers: AUTH_HEADER }),
              fetch(`https://api.github.com/repos/${GITHUB_USER}/${repoName}/languages`, { headers: AUTH_HEADER }),
            ]);

            if (!repoRes.ok) throw new Error(`${repoName}: ${repoRes.status}`);

            const repoData: GitHubRepo = await repoRes.json();
            const langsData: Record<string, number> = langsRes.ok
              ? await langsRes.json()
              : {};

            return { repo: repoData, languages: langsData } as RepoCard;
          })
        );

        const merged = results.map((result, i) =>
          result.status === "fulfilled" ? result.value : FALLBACK_DATA[i]
        );

        const allFailed = results.every((r) => r.status === "rejected");
        setStatus(allFailed ? "error" : "success");
        setCards(merged);

        // Salva no cache se pelo menos 1 repo carregou da API
        if (!allFailed) {
          try {
            localStorage.setItem(CACHE_KEY, JSON.stringify({ data: merged, ts: Date.now() }));
          } catch { /* ignora erros de storage */ }
        }
      } catch {
        setStatus("error");
        setCards(FALLBACK_DATA);
      }
    };

    fetchProjects();
  }, []);

  return (
    <section id="projetos" className="py-32 px-6">
      <div className="max-w-5xl mx-auto">
        <AnimatedSection>
          <div className="flex items-end justify-between mb-4">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">
              Projetos em Destaque
            </h2>
            <a
              href={`https://github.com/${GITHUB_USER}`}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden md:flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
              aria-label="Ver todos os repositórios no GitHub"
            >
              <Github size={15} />
              Ver todos
            </a>
          </div>
          <p className="text-muted-foreground text-sm mb-12">
            {status === "loading"
              ? "Buscando dados do GitHub..."
              : status === "success"
              ? "Dados em tempo real via GitHub API"
              : "Dados estáticos (GitHub API indisponível)"}
          </p>
        </AnimatedSection>

        {status === "error" && (
          <AnimatedSection>
            <div className="flex items-center gap-2 text-xs text-muted-foreground mb-8 px-4 py-3 rounded-lg bg-muted/30 border border-border">
              <AlertCircle size={14} className="shrink-0 text-yellow-500" />
              Não foi possível conectar à GitHub API. Exibindo informações estáticas de fallback.
            </div>
          </AnimatedSection>
        )}

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {status === "loading"
            ? REPOS.map((r, i) => (
                <AnimatedSection key={r} delay={i * 0.08} className="h-full">
                  <SkeletonCard />
                </AnimatedSection>
              ))
            : cards.map((card, i) => (
                <AnimatedSection key={card.repo.name} delay={i * 0.08} className="h-full">
                  <ProjectCard {...card} />
                </AnimatedSection>
              ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
