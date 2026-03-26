import AnimatedCounter from "./AnimatedCounter";

const stats = [
  { end: 2, suffix: "+", label: "Anos de Experiência" },
  { end: 5, suffix: "+", label: "Projetos Realizados" },
  { end: 10, suffix: "+", label: "Tecnologias Dominadas" },
  { end: 3, suffix: "", label: "Certificações" },
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
