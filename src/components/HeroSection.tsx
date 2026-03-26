import { motion } from "framer-motion";
import TypewriterText from "./TypewriterText";
import { Download } from "lucide-react";

const HeroSection = () => (
  <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
    {/* Grid pattern background */}
    <div className="absolute inset-0 grid-pattern gradient-mask" />

    <div className="relative z-10 max-w-3xl mx-auto px-6 text-center">
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
        Desenvolvedor Fullstack · <TypewriterText />
      </motion.p>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="mt-6 text-muted-foreground max-w-xl mx-auto leading-relaxed"
      >
        Construo aplicações web rápidas, escaláveis e bonitas — de interfaces
        pixel-perfect a APIs back-end robustas.
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.45 }}
        className="mt-10 flex items-center justify-center gap-4 flex-wrap"
      >
        <a
          href="#projetos"
          className="px-6 py-3 rounded-lg bg-primary text-primary-foreground text-sm font-medium hover:brightness-110 transition-all duration-200"
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
    </div>
  </section>
);

export default HeroSection;
