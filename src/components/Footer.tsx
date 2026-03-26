import { Github } from "lucide-react";

const Footer = () => (
  <footer className="border-t border-border py-8 px-6">
    <div className="max-w-5xl mx-auto flex items-center justify-between text-sm text-muted-foreground">
      <span>© 2025 Cauã Mendonça Martello · Desenvolvido com React</span>
      <a
        href="https://github.com/caua-mendonca"
        target="_blank"
        rel="noopener noreferrer"
        className="hover:text-foreground transition-colors"
      >
        <Github size={18} />
      </a>
    </div>
  </footer>
);

export default Footer;
