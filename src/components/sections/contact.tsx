'use client';

import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail } from "lucide-react";
import Link from 'next/link';

export default function Contact() {
  return (
    <section id="contact" className="py-16 sm:py-24 bg-card">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="font-headline text-3xl font-bold tracking-tight sm:text-4xl text-primary">Get in Touch</h2>
          <p className="mt-4 text-lg text-muted-foreground">
            I'm currently open to freelance and full-time opportunities, and happy to discuss new projects.
          </p>
        </div>
        <div className="max-w-xl mx-auto space-y-6 text-center">
          <p className="text-muted-foreground">
            Have a project in mind or just want to say hi?{" "}
            <span className="block mt-2">
              Contact me at{" "}
              <Link
                href="mailto:mudrikavariya79@gmail.com"
                className="font-medium text-primary underline underline-offset-4"
              >
                mudrikavariya79@gmail.com
              </Link>
            </span>
            <span className="block mt-3 text-sm text-muted-foreground/90">
              Prefer a quick call? Mention it in your email and I’ll share my calendar.
            </span>
          </p>
          <div className="flex justify-center gap-4">
            <Button asChild variant="outline" size="icon" className="h-12 w-12">
              <Link href="https://www.linkedin.com/in/mudrika-variya/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                <Linkedin className="h-6 w-6" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="icon" className="h-12 w-12">
              <Link href="https://github.com/mudrika-variya" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                <Github className="h-6 w-6" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="icon" className="h-12 w-12">
              <Link href="mailto:mudrikavariya79@gmail.com" aria-label="Email">
                <Mail className="h-6 w-6" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
