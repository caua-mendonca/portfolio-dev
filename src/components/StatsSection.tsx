import AnimatedCounter from "./AnimatedCounter";

const stats = [
  { end: 2, suffix: "+", label: "Anos de Experiência" },
  { end: 18, suffix: "+", label: "RPAs em Produção" },
  { end: 20, suffix: "+", label: "Tecnologias Dominadas" },
  { end: 10, suffix: "+", label: "Certificações e Cursos" },
];

const StatsSection = () => (
  <section className="py-20 px-6 border-y border-border">
    <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8">
      {stats.map((s) => (
        <AnimatedCounter key={s.label} {...s} />
      ))}
    </div>
  </section>
);

export default StatsSection;
