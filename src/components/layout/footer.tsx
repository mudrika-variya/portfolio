import { FlutterLogo } from '@/components/ui/flutter-logo';
import { Button } from '@/components/ui/button';
import { Github, Linkedin } from 'lucide-react';
import Link from 'next/link';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="border-t border-border/50">
      <div className="container mx-auto flex flex-col items-center justify-center gap-6 px-4 py-8 md:px-6">
        <div className="flex items-center gap-2 text-lg font-bold">
          <FlutterLogo className="h-6 w-6" />
          <span className='font-headline'>Mudrika Variya</span>
        </div>
        <p className="text-center text-sm text-muted-foreground">
          &copy; {currentYear} Mudrika Variya. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
