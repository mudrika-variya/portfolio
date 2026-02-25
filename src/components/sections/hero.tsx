'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowRight, Github, Linkedin, Mail } from 'lucide-react';
import { ParticlesBackground } from '@/components/ui/particles';

const namePhrase = "Hiee, I'm Mudrika Variya";
const rolePhrases = [
  'FlutterFlow Developer',
  'Flutter Developer',
  'Android Developer',
  'iOS Developer',
  'Mobile Application Developer',
];

export default function Hero() {
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentPhrase = rolePhrases[phraseIndex];

    if (!isDeleting && charIndex === currentPhrase.length) {
      const timeout = setTimeout(() => setIsDeleting(true), 1000);
      return () => clearTimeout(timeout);
    }

    if (isDeleting && charIndex === 0) {
      setIsDeleting(false);
      setPhraseIndex((prev) => (prev + 1) % rolePhrases.length);
      return;
    }

    const timeout = setTimeout(
      () => setCharIndex((prev) => prev + (isDeleting ? -1 : 1)),
      isDeleting ? 50 : 90
    );

    return () => clearTimeout(timeout);
  }, [charIndex, isDeleting, phraseIndex]);

  const currentText = rolePhrases[phraseIndex].slice(0, charIndex);

  return (
    <section id="hero" className="relative flex min-h-[calc(100vh-5rem)] items-center overflow-hidden">
      <ParticlesBackground />
      <div className="container mx-auto px-4 md:px-6 text-center">
        <div className="mx-auto max-w-4xl">
          <h1
            className="font-headline text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl !leading-tight"
          >
            {namePhrase}
          </h1>
          <p className="mt-3 font-mono text-sm text-muted-foreground sm:text-base flex items-center justify-center gap-2">
            <span>{currentText}</span>
            <span className="inline-block h-[0.9em] w-1 bg-primary align-text-bottom animate-pulse" />
          </p>
          <p className="mt-6 text-lg text-muted-foreground md:text-xl">
            I design, build, and ship production-ready Flutter apps for startups and businesses.
          </p>
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button size="lg" asChild className="shadow-glow-primary transition-all hover:scale-105">
              <Link href="/Mudrika_Variya_CV.pdf" target="_blank" rel="noopener noreferrer">
                View My CV
              </Link>
            </Button>
            <Button size="lg" variant="outline" asChild className="transition-all hover:scale-105">
              <Link href="#contact">
                Contact Me <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
          <div className="mt-6 flex items-center justify-center gap-4">
            <Button asChild variant="outline" size="icon">
              <Link href="https://www.linkedin.com/in/mudrika-variya/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                <Linkedin className="h-5 w-5" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="icon">
              <Link href="https://github.com/mudrika-variya" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                <Github className="h-5 w-5" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="icon">
              <Link href="mailto:mudrikavariya79@gmail.com" aria-label="Email">
                <Mail className="h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
