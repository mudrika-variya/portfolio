import Image from 'next/image';
import Link from 'next/link';
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { ExternalLink, FolderGit2 } from 'lucide-react';

const projects = [
  {
    title: "Himachal Tour & Guide",
    subtitle: "Tourism & Travel Exploration Application",
    description:
      "A travel companion application designed to help users explore popular destinations in Himachal Pradesh, discover nearby hotels and activities, and plan their trips efficiently with booking and inquiry options.",
    features: [
      "Explore tourist places with detailed information",
      "Discover nearby hotels and activities",
      "Add destinations to favorites",
      "Rate and review places",
      "Direct call booking option",
      "Inquiry form-based booking",
      "Offline data storage using local database",
    ],
    tech: ["Flutter", "Firebase", "REST API Integration", "JSON Parsing", "SQLite"],
    image: PlaceHolderImages.find((img) => img.id === "project-1"),
    link: "https://github.com/mudrika-variya/mudrika-variya/blob/main/PROJECTS.md",
  },
  {
    title: "Weather Application",
    subtitle: "Location-Based Weather Forecasting App",
    description:
      "A real-time weather forecasting application that provides accurate, location-based weather updates with a dynamic and visually adaptive user interface.",
    features: [
      "Automatic location-based weather detection",
      "7-day weather forecast",
      "Real-time temperature and condition updates",
      "Dynamic UI theme based on weather conditions",
      "Forecast visualization using charts",
      "Google Maps integration",
    ],
    tech: ["Flutter", "Firebase", "OpenWeatherMap API", "Google Maps API"],
    image: PlaceHolderImages.find((img) => img.id === "project-2"),
    link: "https://github.com/mudrika-variya/mudrika-variya/blob/main/PROJECTS.md",
  },
  {
    title: "Tile Match Master",
    subtitle: "Triple Match Puzzle Game",
    description:
      "A classic triple-match puzzle game designed to challenge logical thinking and provide an engaging gaming experience with rewarding progression mechanics.",
    features: [
      "Multiple progressively challenging levels",
      "24-hour daily reward spinner",
      "In-game currency system (Coins & Diamonds)",
      "Asset purchasing system",
      "Background music and sound effects",
      "AdMob monetization integration",
    ],
    tech: ["Flutter", "SharedPreferences", "Google AdMob", "Figma"],
    image: PlaceHolderImages.find((img) => img.id === "project-3"),
    link: "https://github.com/mudrika-variya/mudrika-variya/blob/main/PROJECTS.md",
  },
  {
    title: "MediBridge",
    subtitle: "Multi-Vendor Medicine E-Commerce Platform",
    description:
      "A scalable multi-panel e-commerce platform for ordering prescription and non-prescription medicines, supporting users, vendors, admins, and delivery partners with complete order and payment management.",
    features: [
      "Multi-role panels (User, Admin, Vendor, Delivery Partner)",
      "Prescription and non-prescription medicine ordering",
      "KYC verification system",
      "Order tracking and management",
      "Razorpay payment gateway integration",
      "GST taxation and shipping management",
    ],
    tech: ["FlutterFlow", "Firebase", "REST APIs", "Razorpay", "Figma"],
    image: PlaceHolderImages.find((img) => img.id === "project-4"),
    link: "https://github.com/mudrika-variya/mudrika-variya/blob/main/PROJECTS.md",
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
        <div className="grid gap-6 md:grid-cols-1 xl:grid-cols-2">
          {projects.map((project) => (
            <Card
              key={project.title}
              className="group h-full overflow-hidden rounded-xl border border-border/50 bg-background/60 backdrop-blur-sm shadow-md transition-all duration-300 hover:border-primary/60 hover:shadow-glow-accent hover:-translate-y-1.5 hover:scale-[1.01]"
            >
              <div className="flex h-full flex-col gap-4 p-4 md:flex-row md:p-5">
                <div className="relative mx-auto h-64 w-40 shrink-0 overflow-hidden rounded-3xl border border-border/80 bg-background/80 shadow-inner md:mx-0">
                  {project.image && (
                    <Image
                      src={project.image.imageUrl}
                      alt={project.image.description}
                      data-ai-hint={project.image.imageHint}
                      width={600}
                      height={1200}
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                    />
                  )}
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/10 via-transparent to-black/10" />
                </div>
                <CardContent className="flex flex-1 flex-col gap-3 p-0">
                  <div>
                    <h3 className="text-lg font-bold font-headline leading-snug">{project.title}</h3>
                    {"subtitle" in project && (
                      <p className="mt-1 text-[11px] font-semibold uppercase tracking-wide text-primary/80">
                        {project.subtitle}
                      </p>
                    )}
                  </div>
                  <p className="text-sm text-muted-foreground">
                    {project.description}
                  </p>
                  {"features" in project && project.features && (
                    <ul className="mt-1 list-disc space-y-1 pl-4 text-xs text-muted-foreground/90">
                      {project.features.slice(0, 4).map((feature) => (
                        <li key={feature}>{feature}</li>
                      ))}
                    </ul>
                  )}
                  <div className="mt-2 flex flex-wrap gap-2">
                    {project.tech.map((tag) => (
                      <Badge key={tag} variant="secondary" className="px-2 py-0.5 text-[11px]">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                  <div className="mt-3">
                    <Button asChild size="sm" variant="outline" className="text-xs">
                      <Link href={project.link} target="_blank" rel="noopener noreferrer">
                        View Project <ExternalLink className="ml-2 h-3 w-3" />
                      </Link>
                    </Button>
                  </div>
                </CardContent>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
