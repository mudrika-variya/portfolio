import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

export default function Hero() {
  return (
    <section id="hero" className="relative flex min-h-[calc(100vh-5rem)] items-center overflow-hidden">
      <div className="absolute top-0 left-0 -z-10 h-full w-full bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,hsl(var(--primary)/0.2),rgba(255,255,255,0))]"></div>
      <div className="container mx-auto px-4 md:px-6 text-center">
        <div className="mx-auto max-w-4xl">
          <h1
            className="font-headline text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl !leading-tight"
          >
            Building High-Performance Mobile Apps with Flutter
          </h1>
          <p className="mt-6 text-lg text-muted-foreground md:text-xl">
            Flutter & FlutterFlow Developer with 3+ years of experience delivering scalable and pixel-perfect applications.
          </p>
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button size="lg" asChild className="shadow-glow-primary transition-all hover:scale-105">
              <Link href="#projects">View My Work</Link>
            </Button>
            <Button size="lg" variant="outline" asChild className="transition-all hover:scale-105 hover:bg-accent/20">
              <Link href="#contact">
                Contact Me <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
      
      <div className="absolute top-1/4 left-1/4 h-32 w-32 bg-primary/10 rounded-full filter blur-3xl animate-float opacity-50 -z-10"></div>
      <div className="absolute top-1/2 right-1/4 h-48 w-48 bg-accent/10 rounded-full filter blur-3xl animate-float animation-delay-[-3s] opacity-50 -z-10"></div>
    </section>
  );
}
