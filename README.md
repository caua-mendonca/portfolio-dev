# 🚀 Portfólio - Cauã Mendonça Martello

> Um portfólio moderno, responsivo e interativo de um desenvolvedor fullstack, construído com as mais recentes tecnologias web. Showcase profissional com animações sofisticadas, modo dark/light e experiência de usuário excepcional.

[![React](https://img.shields.io/badge/React-18.3-blue?logo=react)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.8-blue?logo=typescript)](https://www.typescriptlang.org/)
[![Vite](https://img.shields.io/badge/Vite-5.4-blue?logo=vite)](https://vitejs.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind%20CSS-3.4-blue?logo=tailwindcss)](https://tailwindcss.com/)
[![License](https://img.shields.io/badge/License-MIT-green)](#license)

## 📋 Índice

- [Sobre o Projeto](#sobre-o-projeto)
- [Stack Tecnológico](#stack-tecnológico)
- [Funcionalidades](#funcionalidades)
- [Estrutura do Projeto](#estrutura-do-projeto)
- [Instalação e Setup](#instalação-e-setup)
- [Scripts Disponíveis](#scripts-disponíveis)
- [Seções do Portfólio](#seções-do-portfólio)
- [Componentes Principais](#componentes-principais)
- [Animações e Interatividade](#animações-e-interatividade)
- [Configurações Importantes](#configurações-importantes)
- [Testes](#testes)
- [Contribuindo](#contribuindo)
- [Contato](#contato)

---

## 📌 Sobre o Projeto

Este portfólio é uma **Single Page Application (SPA)** responsiva que showcasa o trabalho e as habilidades de **Cauã Mendonça Martello**, desenvolvedor fullstack especializado em:

- 💻 Desenvolvimento de interfaces pixel-perfect com React
- 🎨 Componentes reutilizáveis e escaláveis
- 🚀 APIs robustas e escaláveis com Node.js/Express
- 📱 Aplicações responsivas e otimizadas
- 🌙 Experiências de usuário com animações e transições

O projeto foi desenvolvido com foco em:
- ✨ **Performance**: Build otimizado com Vite e SWC
- 🎭 **Experiência visual**: Animações sofisticadas com Framer Motion
- 🧭 **Navegação intuitiva**: Com Scroll detection e ativação automática
- 🌓 **Acessibilidade**: Suporte a dark/light mode
- 📦 **Código limpo**: TypeScript com type safety completo

---

## 🛠️ Stack Tecnológico

### Frontend Core
| Tecnologia | Versão | Propósito |
|-----------|--------|----------|
| **React** | 18.3 | Framework UI principal |
| **TypeScript** | 5.8 | Tipagem estática completa |
| **Vite** | 5.4 | Build tool com SWC (compilação rápida) |
| **React Router** | v6 | Roteamento e navegação |
| **Tailwind CSS** | 3.4 | Styling utilitário |

### Animações e Interatividade
| Tecnologia | Propósito |
|-----------|----------|
| **Framer Motion** | Animações avançadas (scroll, hover, entrada/saída) |
| **React Intersection Observer** | Detecção de visibilidade de elementos |
| **Cursor Glow** | Efeito de brilho que segue o cursor |
| **3D Tilt Cards** | Perspectiva 3D com movimento do mouse |

### Componentes e UI
| Tecnologia | Quantidade | Propósito |
|-----------|-----------|----------|
| **shadcn/ui** | 30+ | Componentes pré-construídos (Modal, Accordion, Toast, etc.) |
| **Radix UI** | - | Primitivos sem estilo (acessibilidade garantida) |
| **Lucide React** | - | Ícones SVG modernos e escaláveis |

### Gerenciamento de Estado e Dados
| Tecnologia | Propósito |
|-----------|----------|
| **TanStack React Query** | Gerenciamento de estado do servidor |
| **React Hook Form** | Gerenciamento eficiente de formulários |
| **Zod** | Validação de esquema |

### Utilitários e Bibliotecas
| Tecnologia | Propósito |
|-----------|----------|
| **Sonner** | Notificações Toast elegantes |
| **Recharts** | Gráficos e visualizações de dados |
| **Embla Carousel** | Carrossel responsivo e acessível |
| **date-fns** | Manipulação de datas |

### Ferramentas de Desenvolvimento
| Ferramenta | Propósito |
|-----------|----------|
| **ESLint** | Linting de código com foco em React |
| **Vitest** | Framework de testes unitários |
| **Playwright** | Testes end-to-end |
| **PostCSS** | Transformações de CSS (autoprefixo, Tailwind) |

---

## ✨ Funcionalidades

### 🎯 Principais
- ✅ **Portfólio Responsivo**: Design mobile-first com suporte completo para todos os tamanhos de tela
- ✅ **Modo Dark/Light**: Tema alternável com persistência via localStorage
- ✅ **Navegação Inteligente**: Menu sticky que detecta seção ativa automaticamente
- ✅ **Barras de Progresso**: Indicador visual do scroll na página
- ✅ **CV Descargável**: Link para download do currículo em PDF
- ✅ **Scroll Suave**: Navegação fluida entre seções

### 🎨 Animações
- 🔤 **Typewriter Text**: Animação de digitação rotativa (React → Next.js → Node.js → TypeScript → Express)
- ⬆️ **Fade-in ao Scroll**: Conteúdo aparece com animação ao entrar na viewport
- 🔢 **Animated Counters**: Números contam até o valor final com efeito visual
- 🖱️ **Cursor Glow**: Gradiente radial de 500px que segue o movimento do mouse
- 3️⃣ **3D Tilt Cards**: Efeito de perspectiva 3D ao passar o mouse
- 📊 **Progress Bar**: Barra superior que acompanha o scroll da página

### 🌐 Integrações
- 🔗 Link para GitHub (projetos e perfil)
- 💌 Link WhatsApp direto
- 📧 Link LinkedIn integrado
- 💼 Currículo disponível para download

---

## 📁 Estrutura do Projeto

```
cau-martello-fullstack-dev/
│
├── 📄 index.html                 # Ponto de entrada HTML principal
├── 📦 package.json              # Dependências e scripts
├── 🔧 vite.config.ts            # Configuração do Vite
├── 🎨 tailwind.config.ts        # Configuração do Tailwind CSS
├── 📝 tsconfig.json             # Configuração do TypeScript
├── 🔍 eslint.config.js          # Configuração do ESLint
├── 📋 components.json           # Configuração shadcn/ui
├── 🌐 postcss.config.js         # Configuração do PostCSS
│
├── 🌍 public/
│   └── robots.txt               # Robots.txt para SEO
│
├── 📚 src/
│   ├── 🎯 main.tsx              # Ponto de entrada React
│   ├── 🎨 App.tsx               # Componente raiz com providers
│   ├── 🎨 App.css               # Estilos globais
│   ├── 🎨 index.css             # Estilos base do Tailwind
│   ├── 🔐 vite-env.d.ts         # Tipos do Vite
│   │
│   ├── 📄 pages/                # Páginas da aplicação
│   │   ├── Index.tsx            # Página inicial (portfólio completo)
│   │   └── NotFound.tsx         # Página 404
│   │
│   ├── 🧩 components/           # Componentes React
│   │   ├── Navbar.tsx           # Navegação sticky com scroll detection
│   │   ├── HeroSection.tsx      # Seção hero com CTA buttons
│   │   ├── StatsSection.tsx     # Contador animado de estatísticas
│   │   ├── AboutSection.tsx     # Bio e competências do dev
│   │   ├── ExperienceSection.tsx # Timeline de experiência profissional
│   │   ├── CertificationsSection.tsx # Grid de certificados
│   │   ├── ProjectsSection.tsx  # Portfólio de projetos
│   │   ├── ContactSection.tsx   # Cards de contato
│   │   ├── Footer.tsx           # Rodapé da página
│   │   ├── CursorGlow.tsx       # Efeito de brilho do cursor
│   │   ├── ScrollProgress.tsx   # Barra de progresso do scroll
│   │   ├── AnimatedSection.tsx  # Wrapper de animação ao scroll
│   │   ├── AnimatedCounter.tsx  # Número que conta ao entrar em vista
│   │   ├── TypewriterText.tsx   # Animação de digitação
│   │   ├── TiltCard.tsx         # Card com efeito 3D tilt
│   │   ├── ThemeToggle.tsx      # Toggle dark/light mode
│   │   ├── NavLink.tsx          # Link de navegação customizado
│   │   │
│   │   └── ui/                  # Componentes shadcn/ui (~30+)
│   │       ├── button.tsx
│   │       ├── card.tsx
│   │       ├── accordion.tsx
│   │       ├── dialog.tsx
│   │       ├── modal.tsx
│   │       ├── toast.tsx
│   │       ├── tooltip.tsx
│   │       ├── badge.tsx
│   │       ├── progress.tsx
│   │       └── ... (mais componentes)
│   │
│   ├── 🪝 hooks/                # Custom React Hooks
│   │   ├── use-mobile.tsx       # Detecta breakpoint mobile
│   │   └── use-toast.ts         # Hook para notificações toast
│   │
│   ├── 📦 lib/                  # Funções e utilitários
│   │   └── utils.ts             # Funções helper (classname merge, etc)
│   │
│   └── 🧪 test/                 # Testes
│       ├── setup.ts             # Configuração de testes (mocks)
│       └── example.test.ts      # Teste exemplo

└── 📦 node_modules/            # Dependências instaladas
```

### 🔑 Diretórios Importantes

**`src/components/`** - Coração da aplicação
- Componentes de página reutilizáveis
- Primitivos de UI com shadcn/ui
- Componentes de animação especializados

**`src/pages/`** - Rotas e páginas
- Index: Portfólio completo em uma página
- NotFound: Página 404

**`src/lib/`** - Lógica compartilhada
- Funções utilitárias para classname merging
- Helpers para tipagem

**`src/hooks/`** - Custom Hooks
- `use-mobile`: Responsive design helpers
- `use-toast`: Gerenciamento de notificações

---

## 🚀 Instalação e Setup

### Pré-requisitos
- Node.js 18.0.0 ou superior
- npm ou yarn instalado

### Passo 1: Clonar/Baixar o Repositório
```bash
# Via Git
git clone https://github.com/seu-usuario/cau-martello-fullstack-dev.git
cd cau-martello-fullstack-dev

# Ou extrair o arquivo ZIP
```

### Passo 2: Instalar Dependências
```bash
# Com npm
npm install

# Com yarn
yarn install

# Com pnpm
pnpm install
```

### Passo 3: Iniciar o Servidor de Desenvolvimento
```bash
npm run dev
```
A aplicação estará disponível em `http://localhost:8080`

### Passo 4: Build para Produção
```bash
npm run build
```

Os arquivos otimizados estarão em `dist/`

---

## 📋 Scripts Disponíveis

```bash
# Desenvolvimento
npm run dev              # Inicia servidor de desenvolvimento com HMR (Hot Module Replacement)
npm run preview          # Visualiza versão de produção localmente

# Build
npm run build            # Cria build otimizado para produção
npm run build:dev        # Cria build em modo desenvolvimento (debug)

# Qualidade de Código
npm run lint             # Executa ESLint para verificar issues de código
npm run lint --fix       # Corrige automaticamente issues encontradas

# Testes
npm run test             # Executa testes uma única vez
npm run test:watch       # Executa testes em modo watch (reexecuta ao mudar código)
```

---

## 🎨 Seções do Portfólio

### 🎯 Hero Section
- **Descrição**: Seção de boas-vindas com efeito visual atraente
- **Conteúdo**: 
  - Nome do desenvolvedor com animação de fade-in
  - Subtítulo com TypewriterText rotativo
  - Descrição profissional
  - 3 CTAs: "Ver Projetos", "Fale Comigo", "Baixar CV"
- **Animações**: Fade-in sequencial, grid pattern background
- **Arquivo**: [src/components/HeroSection.tsx](src/components/HeroSection.tsx)

### 📊 Stats Section
- **Descrição**: Mostra estatísticas importantes do desenvolvedor
- **Estatísticas**:
  - Anos de experiência (2+)
  - Projetos concluídos (5+)
  - Tecnologias dominadas (10+)
  - Certificações obtidas (3)
- **Animações**: Contadores que animam ao entrar em viewport
- **Arquivo**: [src/components/StatsSection.tsx](src/components/StatsSection.tsx)

### 👤 About Section
- **Descrição**: Apresentação completa do desenvolvedor
- **Conteúdo**:
  - Biografia profissional
  - Badge de tecnologias (React, Next.js, Node.js, TypeScript, Express, MongoDB, etc.)
  - Ícones representativos
- **Animações**: Fade-in ao scroll
- **Arquivo**: [src/components/AboutSection.tsx](src/components/AboutSection.tsx)

### 💼 Experience Section
- **Descrição**: Timeline de experiência profissional
- **Informações**:
  - Cargo na empresa
  - Período de trabalho
  - Descrição das responsabilidades
  - Stack de tecnologias usadas
- **Exemplo**: Experiência na "Cia do Crédito"
- **Arquivo**: [src/components/ExperienceSection.tsx](src/components/ExperienceSection.tsx)

### 🏆 Certifications Section
- **Descrição**: Galeria de certificados e credenciais
- **Certificações**:
  - Senac
  - Certificação JavaScript
  - Certificação Node.js
- **Layout**: Grid responsivo com cards
- **Arquivo**: [src/components/CertificationsSection.tsx](src/components/CertificationsSection.tsx)

### 🚀 Projects Section
- **Descrição**: Portfolio de projetos desenvolvidos
- **Informações por Projeto**:
  - Título e descrição
  - Link para GitHub
  - Tecnologias utilizadas (badges)
  - Imagens/screenshots
- **Animações**: Cards com 3D tilt effect
- **Arquivo**: [src/components/ProjectsSection.tsx](src/components/ProjectsSection.tsx)

### 📧 Contact Section
- **Descrição**: Formas de contato disponíveis
- **Canais**:
  - Email direto
  - WhatsApp
  - LinkedIn
  - GitHub
- **Design**: Cards grandes e acessíveis
- **Arquivo**: [src/components/ContactSection.tsx](src/components/ContactSection.tsx)

### 🔗 Navigation (Navbar)
- **Descrição**: Navegação sticky que acompanha scroll
- **Funcionalidades**:
  - Links para todas as seções da página
  - Highlight automático da seção ativa
  - Toggle de tema escuro/claro
  - Fundo inteligente (transparente ao topo, opaco ao rolar)
- **Arquivo**: [src/components/Navbar.tsx](src/components/Navbar.tsx)

### 🦶 Footer
- **Descrição**: Rodapé com copyright
- **Conteúdo**: Copyright info e link para GitHub
- **Arquivo**: [src/components/Footer.tsx](src/components/Footer.tsx)

---

## 🧩 Componentes Principais

### Componentes de Layout

#### `Navbar.tsx`
```tsx
// Sticky navigation com scroll detection
- Auto-hide/show no scroll
- Active section highlighting
- Theme toggle (dark/light)
- Smooth scroll links
```

#### `HeroSection.tsx`
```tsx
// Seção principal com CTAs
- Animações sequenciais de fade-in
- TypewriterText rotativa
- Buttons para ações principais
- Grid pattern background
```

### Componentes de Animação

#### `AnimatedSection.tsx`
```tsx
// Wrapper reutilizável para scroll animations
- Fade-in ao entrar na viewport
- Slide-up customizável
- Usa Intersection Observer
```

#### `AnimatedCounter.tsx`
```tsx
// Números que contam animadamente
- Conta de 0 até valor final
- Ativa ao entrar em viewport
- Animação suave e performática
```

#### `TypewriterText.tsx`
```tsx
// Texto que digita/apaga ciclicamente
- Efeito de digitação realista
- Rotação entre múltiplas palavras
- Customizável
```

#### `CursorGlow.tsx`
```tsx
// Gradiente que segue o cursor
- Radial gradient de 500px
- Segue movimento do mouse em tempo real
- Enhancement visual não-intrusivo
```

#### `ScrollProgress.tsx`
```tsx
// Barra de progresso do scroll
- Barra fixa no topo
- Width = scroll percentage
- Suavizado com spring animation
```

#### `TiltCard.tsx`
```tsx
// Card com efeito 3D tilt
- Perspectiva 3D ao hover
- Movimento baseado em mouse
- Sombra dinâmica
```

### Componentes de UI (shadcn/ui)

Mais de 30 componentes pré-configurados:
- `Button` - Botões com variações
- `Card` - Containers com styling base
- `Dialog` - Diálogos modais
- `Accordion` - Abas recolhíveis
- `Toast/Sonner` - Notificações
- `Tooltip` - Dicas ao hover
- `Badge` - Etiquetas
- `Progress` - Barras de progresso
- E muito mais...

---

## 🎬 Animações e Interatividade

### Sistema de Animações

| Animação | Componente | Tecnologia | Descrição |
|----------|-----------|-----------|-----------|
| **Typewriter** | [TypewriterText.tsx](src/components/TypewriterText.tsx) | setTimeout | Digitação letra por letra |
| **Scroll Fade** | [AnimatedSection.tsx](src/components/AnimatedSection.tsx) | Framer Motion + Intersection Observer | Fade-in ao scroll |
| **Counter Animation** | [AnimatedCounter.tsx](src/components/AnimatedCounter.tsx) | requestAnimationFrame | Contagem animada de números |
| **Cursor Glow** | [CursorGlow.tsx](src/components/CursorGlow.tsx) | mousemove event | Gradiente que segue cursor |
| **Scroll Progress** | [ScrollProgress.tsx](src/components/ScrollProgress.tsx) | Framer Motion useScroll | Barra de progresso suavizada |
| **3D Tilt** | [TiltCard.tsx](src/components/TiltCard.tsx) | CSS transform 3D | Perspectiva 3D no hover |
| **Section Highlight** | [Navbar.tsx](src/components/Navbar.tsx) | Intersection Observer | Highlight automático da seção |

### Configuração de Framer Motion

A aplicação utiliza Framer Motion para animações complexas:
- `motion.div` - Elementos com animação
- `initial` - Estado inicial
- `animate` - Estado animado
- `whileInView` - Anima ao entrar em viewport
- `useScroll` - Rastreia scroll
- `useSpring` - Animação suavizada

---

## ⚙️ Configurações Importantes

### 🎨 Tailwind CSS

**Arquivo**: [tailwind.config.ts](tailwind.config.ts)

```typescript
// Recursos principais:
- Dark mode com strategy 'class'
- Cores personalizadas (HSL variables)
- Temas light/dark integrados
- Extensões de animação
```

### 🔧 Vite Configuration

**Arquivo**: [vite.config.ts](vite.config.ts)

```typescript
// Configuração:
- SWC compiler (mais rápido que Babel)
- React plugin automático
- Alias @/ para /src
- Port 8080 para dev server
- HMR desabilitado em overlay
```

### 📝 TypeScript

**Arquivo**: [tsconfig.json](tsconfig.json)

```typescript
// Foco:
- Strict mode ativado
- DOM lib incluída
- ESNext target
- Alias paths configurados
```

### 🔍 ESLint

**Arquivo**: [eslint.config.js](eslint.config.js)

```javascript
// Regras:
- React hooks rules
- Recomendações gerais
- TypeScript support
```

### 🌐 App Configuration

**Root Component**: [src/App.tsx](src/App.tsx)

```typescript
// Providers principais:
- QueryClientProvider (React Query)
- TooltipProvider (Radix UI)
- Toaster (Sonner notifications)
- BrowserRouter (React Router)
```

---

## 🧪 Testes

### Setup de Testes

**Arquivo**: [vitest.config.ts](vitest.config.ts)

```typescript
// Configuração:
- Ambiente: jsdom (DOM simulado)
- Globals: true (describe/it/expect disponíveis)
- Teste files: src/**/*.{test,spec}.{ts,tsx}
```

### Executar Testes

```bash
# Testes uma única vez
npm run test

# Modo watch (reexecuta ao mudança)
npm run test:watch

# Com cobertura
npm run test -- --coverage
```

### Exemplo de Teste

**Arquivo**: [src/test/example.test.ts](src/test/example.test.ts)

```typescript
import { describe, it, expect } from 'vitest';

describe('Example Test', () => {
  it('should work', () => {
    expect(true).toBe(true);
  });
});
```

### Setup de Testes

**Arquivo**: [src/test/setup.ts](src/test/setup.ts)

```typescript
// Mock de window.matchMedia para testes
// Necessário para componentes responsivos
```

### Bibliotecas de Teste Incluídas

- `@testing-library/react` - Testes de componentes React
- `@testing-library/jest-dom` - Matchers customizados
- `vitest` - Framework de testes
- `playwright` - E2E testing (opcional)

---

## 📱 Responsividade

O projeto segue mobile-first approach com Tailwind CSS breakpoints:

```
xs: 0px      (padrão)
sm: 640px
md: 768px
lg: 1024px
xl: 1280px
2xl: 1536px
```

**Hook disponível**: 
```tsx
import { useIsMobile } from '@/hooks/use-mobile';

// Retorna boolean se width < 768px
```

---

## 🌓 Tema Dark/Light

### Implementação

Utiliza sistema de classes do Tailwind:

```tsx
// Toggle via ThemeToggle.tsx
import { ThemeToggle } from '@/components/ThemeToggle';

// Ou manualmente:
document.documentElement.classList.toggle('dark');
```

### Cores Base

Usa CSS Variables em HSL:
- `--background` - Cor de fundo
- `--foreground` - Cor do texto
- `--primary` - Cor primária
- `--secondary` - Cor secundária
- E mais...

---

## 🔗 Links e Referências

- **GitHub**: https://github.com/cau-online
- **LinkedIn**: linkedin.com/in/cauã-martello
- **Email**: cau.martello@email.com
- **WhatsApp**: (número disponível no site)

---

## 📄 Arquivo do Portfólio

O arquivo `Cauã_Mendonça_CV.pdf` é servido da pasta `public/` e pode ser baixado diretamente do Hero Section.

---

## 🛠️ Troubleshooting

### Porta 8080 já está em uso
```bash
# Mude a porta no vite.config.ts
# Ou mate o processo na porta
```

### CSS não carrega corretamente
```bash
# Limpe node_modules e reinstale
rm -rf node_modules
npm install
```

### Erro de tipos TypeScript
```bash
# Gere os tipos do Vite
npm run dev
# Arquivos .d.ts serão gerados automaticamente
```

### Componentes shadcn/ui não funcionam
```bash
# Reinstale dependências do Radix UI
npm install @radix-ui/react-dialog @radix-ui/react-tooltip
```

---

## 🤝 Contribuindo

Este é um portfólio pessoal. Para sugestões ou reportar bugs:

1. Abra uma issue descrevendo o problema
2. Faça um fork do projeto
3. Crie uma branch para sua feature (`git checkout -b feature/AmazingFeature`)
4. Commit suas mudanças (`git commit -m 'Add some AmazingFeature'`)
5. Push para a branch (`git push origin feature/AmazingFeature`)
6. Abra um Pull Request

---

## 📄 Licença

Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

---

## 📞 Suporte e Contato

**Cauã Mendonça Martello**

- 🌐 Portfólio: [https://cau-martello.vercel.app](https://cau-martello.vercel.app) (ou seu domínio)
- 💼 LinkedIn: [linkedin.com/in/cauã-martello](https://linkedin.com/in/cauã-martello)
- 🐙 GitHub: [@cau-online](https://github.com/cau-online)
- 📧 Email: cau.martello@email.com
- 💬 WhatsApp: [Disponível no portfólio]

---

## ✅ Checklist de Deploy

Antes de fazer deploy para produção:

- [ ] Executar `npm run lint` e corrigir issues
- [ ] Executar `npm run test` e garantir todos os testes passam
- [ ] Executar `npm run build` e verificar a build sem erros
- [ ] Testar a build localmente com `npm run preview`
- [ ] Atualizar informações de contato no código
- [ ] Verificar links externos (GitHub, LinkedIn, etc.)
- [ ] Otimizar imagens e assets
- [ ] Testar responsividade em diferentes dispositivos
- [ ] Testar tema dark/light
- [ ] Verificar performance com lighthouse

---

## 🎯 Próximas Melhorias (Roadmap)

- [ ] Blog integrado
- [ ] Sistema de comentários
- [ ] Analytics integrado
- [ ] CMS para gerenciar projetos
- [ ] Suporte multi-idioma
- [ ] PWA capabilities
- [ ] Performance optimizations adicionais
- [ ] Mais projetos showcaseados

---

## 📊 Performance

**Métricas Esperadas**:
- Lighthouse Performance: 90+
- First Contentful Paint: < 1.5s
- Largest Contentful Paint: < 2.5s
- Cumulative Layout Shift: < 0.1

**Build Size**:
- HTML: ~10KB
- CSS (Tailwind): ~30KB
- JS (React + componentes): ~80KB
- Total aproximado: ~120KB (gzipped)

---

## 🔐 Segurança

- ✅ Nenhuma dependência vulnerável (verificar com `npm audit`)
- ✅ CSP headers configurados (se hospedado em servidor próprio)
- ✅ HTTPS obrigatório
- ✅ Sem dados sensíveis no código

---

## 📚 Referências e Recursos

- [React Documentation](https://react.dev)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)
- [Vite Guide](https://vitejs.dev/guide/)
- [Tailwind CSS Docs](https://tailwindcss.com/docs)
- [Framer Motion](https://www.framer.com/motion/)
- [shadcn/ui](https://ui.shadcn.com/)
- [React Router](https://reactrouter.com/)

---

**Desenvolvido por Cauã Mendonça Martello** ✨

Data de última atualização: 2026

---

## 🌟 Agradecimentos

Agradecimentos especiais a:
- React team pela excelente biblioteca
- Vercel pelo Vite
- Tailwind Labs pelo TailwindCSS
- Comunidade open-source que mantém as dependências

---

> "Construindo a web, um pixel de cada vez." 🎨

