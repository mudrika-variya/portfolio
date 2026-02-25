import Image from 'next/image';
import Link from 'next/link';
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { ExternalLink, FolderGit2 } from 'lucide-react';

const projects = [
  {
    title: "Fitness Tracker App",
    description: "A comprehensive fitness tracking app with personalized workout plans and progress monitoring.",
    tech: ["Flutter", "Firebase", "Riverpod", "Clean Architecture"],
    image: PlaceHolderImages.find(img => img.id === 'project-1'),
    link: "#"
  },
  {
    title: "Crypto Wallet",
    description: "A secure and user-friendly cryptocurrency wallet supporting multiple blockchains.",
    tech: ["Flutter", "Supabase", "Bloc", "MVVM"],
    image: PlaceHolderImages.find(img => img.id === 'project-2'),
    link: "#"
  },
  {
    title: "Social Connect Platform",
    description: "A social networking app focused on connecting people with shared interests and hobbies.",
    tech: ["FlutterFlow", "Firebase", "Provider"],
    image: PlaceHolderImages.find(img => img.id === 'project-3'),
    link: "#"
  },
  {
    title: "Travel Planner AI",
    description: "An AI-powered travel planning application that creates custom itineraries.",
    tech: ["Flutter", "REST APIs", "Dart", "GetX"],
    image: PlaceHolderImages.find(img => img.id === 'project-4'),
    link: "#"
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-16 sm:py-24 bg-card">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="inline-flex items-center justify-center gap-3 font-headline text-3xl font-bold tracking-tight sm:text-4xl text-primary">
            <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-primary/10 text-primary">
              <FolderGit2 className="h-5 w-5" />
            </span>
            Featured Projects
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">A selection of apps I’ve designed, built, and shipped.</p>
        </div>
        <div className="grid gap-8 md:grid-cols-2">
          {projects.map((project) => (
            <Card
              key={project.title}
              className="group overflow-hidden rounded-xl border border-border/50 bg-background/50 backdrop-blur-sm shadow-md transition-all duration-300 hover:border-primary/60 hover:shadow-glow-accent hover:-translate-y-2 hover:scale-[1.01]"
            >
              <div className="relative h-60 overflow-hidden">
                {project.image && (
                  <Image
                    src={project.image.imageUrl}
                    alt={project.image.description}
                    data-ai-hint={project.image.imageHint}
                    width={600}
                    height={400}
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                )}
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors"></div>
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold font-headline mb-2">{project.title}</h3>
                <p className="text-sm text-muted-foreground mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tag) => (
                    <Badge key={tag} variant="secondary">{tag}</Badge>
                  ))}
                </div>
                <Button asChild variant="outline">
                  <Link href={project.link}>
                    View Project <ExternalLink className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
