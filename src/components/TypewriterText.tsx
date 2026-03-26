import { useState, useEffect } from "react";

const words = ["React", "Next.js", "Node.js", "TypeScript", "Express"];

const TypewriterText = () => {
  const [wordIndex, setWordIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const word = words[wordIndex];
    const timeout = deleting ? 40 : 80;

    if (!deleting && charIndex === word.length) {
      setTimeout(() => setDeleting(true), 1800);
      return;
    }

    if (deleting && charIndex === 0) {
      setDeleting(false);
      setWordIndex((prev) => (prev + 1) % words.length);
      return;
    }

    const timer = setTimeout(() => {
      setCharIndex((prev) => prev + (deleting ? -1 : 1));
    }, timeout);

    return () => clearTimeout(timer);
  }, [charIndex, deleting, wordIndex]);

  return (
    <span className="text-primary">
      {words[wordIndex].substring(0, charIndex)}
      <span className="animate-pulse">|</span>
    </span>
  );
};

export default TypewriterText;
