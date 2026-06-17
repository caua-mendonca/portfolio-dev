import { motion } from "framer-motion";
import TypewriterText from "./TypewriterText";
import { Download, ArrowDown } from "lucide-react";

const HeroSection = () => (
  <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
    {/* Grid pattern background */}
    <div className="absolute inset-0 grid-pattern gradient-mask" />

    <div className="relative z-10 max-w-3xl mx-auto px-6 text-center">
      {/* Badge de disponibilidade */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="flex justify-center mb-8"
      >
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-green-500/30 bg-green-500/10 text-sm text-green-400 font-medium">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-green-400" />
          </span>
          Disponível para novas oportunidades
        </div>
      </motion.div>

      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-5xl md:text-7xl font-bold tracking-tight text-foreground"
      >
        Cauã Mendonça Martello
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.15 }}
        className="mt-4 text-lg md:text-xl text-muted-foreground font-light tracking-wide"
      >
        Desenvolvedor Full-Stack · <TypewriterText />
      </motion.p>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="mt-6 text-muted-foreground max-w-xl mx-auto leading-relaxed"
      >
        Front-End, automações RPA e APIs — da interface ao robô que roda em produção.
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.45 }}
        className="mt-10 flex items-center justify-center gap-4 flex-wrap"
      >
        <a
          href="#projetos"
          className="px-7 py-3.5 rounded-lg bg-primary text-primary-foreground text-sm font-semibold hover:brightness-110 transition-all duration-200 shadow-lg shadow-primary/25"
        >
          Ver Projetos
        </a>
        <a
          href="#contato"
          className="px-6 py-3 rounded-lg border border-border text-foreground text-sm font-medium hover:bg-accent transition-all duration-200"
        >
          Fale Comigo
        </a>
        <a
          href="/Cauã_Mendonça_CV.pdf"
          download
          className="px-6 py-3 rounded-lg border border-primary/30 text-primary text-sm font-medium hover:bg-primary/10 transition-all duration-200 flex items-center gap-2"
        >
          <Download size={16} />
          Baixar CV
        </a>
      </motion.div>

      {/* Scroll hint */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 1.2 }}
        className="mt-16 flex flex-col items-center gap-2"
      >
        <span className="text-xs text-muted-foreground tracking-widest uppercase">
          Explore o trabalho
        </span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ repeat: Infinity, duration: 1.6, ease: "easeInOut" }}
        >
          <ArrowDown size={16} className="text-muted-foreground" />
        </motion.div>
      </motion.div>
    </div>
  </section>
);

export default HeroSection;
