'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Menu, Code } from 'lucide-react';
import { cn } from '@/lib/utils';

const navLinks = [
  { href: '#about', label: 'About' },
  { href: '#skills', label: 'Skills' },
  { href: '#experience', label: 'Experience' },
  { href: '#projects', label: 'Projects' },
  { href: '#services', label: 'Services' },
  { href: '#contact', label: 'Contact' },
];

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isSheetOpen, setIsSheetOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
      const totalHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      if (totalHeight > 0) {
        setScrollProgress((window.scrollY / totalHeight) * 100);
      } else {
        setScrollProgress(0);
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Call on mount to set initial state
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  const closeSheet = () => setIsSheetOpen(false);


  return (
    <header className={cn(
      "sticky top-0 z-50 w-full transition-all duration-300",
      isScrolled ? "bg-background/80 backdrop-blur-sm border-b border-border" : "bg-transparent"
    )}>
      <div className="relative">
        <div className="container mx-auto flex h-20 items-center justify-between px-4 md:px-6">
          <Link href="#hero" className="flex items-center gap-2 text-xl font-bold" onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); }}>
            <Code className="h-7 w-7 text-primary" />
            <span className='font-headline'>Mudrika Variya</span>
          </Link>

          <nav className="hidden items-center gap-6 md:flex">
            {navLinks.map((link) => (
              <Link key={link.href} href={link.href} className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary">
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-4">
            <Button asChild className="hidden md:flex">
              <Link href="#contact">Contact Me</Link>
            </Button>
            <Sheet open={isSheetOpen} onOpenChange={setIsSheetOpen}>
              <SheetTrigger asChild>
                <Button variant="outline" size="icon" className="md:hidden">
                  <Menu className="h-6 w-6" />
                  <span className="sr-only">Toggle navigation menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="right">
                <div className="grid gap-6 p-6">
                  <Link href="#hero" className="flex items-center gap-2 text-2xl font-bold" onClick={(e) => { e.preventDefault(); closeSheet(); window.scrollTo({ top: 0, behavior: 'smooth' }); }}>
                    <Code className="h-7 w-7 text-primary" />
                    <span className='font-headline'>Mudrika</span>
                  </Link>
                  <nav className="grid gap-4">
                    {navLinks.map((link) => (
                       <Link key={link.href} href={link.href} className="text-lg font-medium text-foreground transition-colors hover:text-primary" onClick={closeSheet}>
                        {link.label}
                      </Link>
                    ))}
                  </nav>
                  <Button asChild>
                    <Link href="#contact" onClick={closeSheet}>Contact Me</Link>
                  </Button>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 h-0.5 w-full bg-primary/10">
            <div className="h-0.5 bg-primary" style={{ width: `${scrollProgress}%` }}></div>
        </div>
      </div>
    </header>
  );
}
