'use client';

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Github, Linkedin, Mail } from "lucide-react";
import Link from 'next/link';

export default function Contact() {
  return (
    <section id="contact" className="py-16 sm:py-24 bg-card">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="font-headline text-3xl font-bold tracking-tight sm:text-4xl text-primary">Get in Touch</h2>
          <p className="mt-4 text-lg text-muted-foreground">I'm open to discussing new projects and opportunities.</p>
        </div>
        <div className="grid gap-12 lg:grid-cols-2 max-w-4xl mx-auto">
          <div className="space-y-6">
            <p className="text-muted-foreground">
              Have a project in mind or just want to say hi? Feel free to reach out. You can also find me on these platforms:
            </p>
            <div className="flex gap-4">
              <Button asChild variant="outline" size="icon" className="h-12 w-12">
                <Link href="mailto:mudrika.variya.dev@gmail.com" target="_blank" rel="noopener noreferrer" aria-label="Email">
                  <Mail className="h-6 w-6" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="icon" className="h-12 w-12">
                <Link href="https://linkedin.com/in/mudrika-variya" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                  <Linkedin className="h-6 w-6" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="icon" className="h-12 w-12">
                <Link href="https://github.com/mudrika-variya" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                  <Github className="h-6 w-6" />
                </Link>
              </Button>
            </div>
          </div>
          <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
            <Input 
              type="text" 
              placeholder="Your Name" 
              className="bg-background focus-visible:ring-primary focus-visible:ring-2 focus-visible:shadow-glow-accent"
              aria-label="Your Name"
            />
            <Input 
              type="email" 
              placeholder="Your Email" 
              className="bg-background focus-visible:ring-primary focus-visible:ring-2 focus-visible:shadow-glow-accent"
              aria-label="Your Email"
            />
            <Textarea 
              placeholder="Your Message" 
              rows={5} 
              className="bg-background focus-visible:ring-primary focus-visible:ring-2 focus-visible:shadow-glow-accent"
              aria-label="Your Message"
            />
            <Button type="submit" size="lg" className="w-full shadow-glow-primary">Send Message</Button>
          </form>
        </div>
      </div>
    </section>
  );
}
