import { FlutterLogo } from '@/components/ui/flutter-logo';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="border-t border-border/50">
      <div className="container mx-auto flex flex-col items-center justify-between gap-4 px-4 py-8 md:flex-row md:px-6">
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
