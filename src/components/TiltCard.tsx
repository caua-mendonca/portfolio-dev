import { useRef, useState, ReactNode } from "react";

interface Props {
  children: ReactNode;
  className?: string;
}

const TiltCard = ({ children, className = "" }: Props) => {
  const ref = useRef<HTMLDivElement>(null);
  const [style, setStyle] = useState({ transform: "", boxShadow: "" });

  const handleMove = (e: React.MouseEvent) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    setStyle({
      transform: `perspective(800px) rotateY(${x * 8}deg) rotateX(${-y * 8}deg) scale(1.02)`,
      boxShadow: `${-x * 20}px ${y * 20}px 40px -15px hsl(239 84% 67% / 0.12)`,
    });
  };

  const handleLeave = () => {
    setStyle({ transform: "", boxShadow: "" });
  };

  return (
    <div
      ref={ref}
      className={`transition-all duration-300 ease-out ${className}`}
      style={style}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
    >
      {children}
    </div>
  );
};

export default TiltCard;
