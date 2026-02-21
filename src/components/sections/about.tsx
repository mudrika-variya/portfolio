import { Card, CardContent } from "@/components/ui/card";
import { Briefcase, Layers, Rocket, ShieldCheck } from "lucide-react";

const stats = [
  { icon: <Briefcase className="h-8 w-8 text-primary" />, value: "3+ Years", label: "Experience" },
  { icon: <Rocket className="h-8 w-8 text-primary" />, value: "15+", label: "Projects Completed" },
  { icon: <Layers className="h-8 w-8 text-primary" />, value: "Hybrid App", label: "Specialist" },
  { icon: <ShieldCheck className="h-8 w-8 text-primary" />, value: "Clean Code", label: "Advocate" },
];

export default function About() {
  return (
    <section id="about" className="py-16 sm:py-24">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
          <div className="space-y-4">
            <h2 className="font-headline text-3xl font-bold tracking-tight sm:text-4xl text-primary">About Me</h2>
            <p className="text-lg text-muted-foreground">
              I am a passionate Flutter & FlutterFlow Developer specializing in building high-performance, scalable, and visually appealing cross-platform mobile applications. I focus on clean architecture, performance optimization, and delivering seamless user experiences.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-4 md:gap-6">
            {stats.map((stat) => (
              <Card key={stat.label} className="bg-card/60 backdrop-blur-sm border-border/50 text-center p-4">
                <CardContent className="flex flex-col items-center justify-center gap-2 p-0">
                  {stat.icon}
                  <p className="text-2xl font-bold">{stat.value}</p>
                  <p className="text-sm text-muted-foreground">{stat.label}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
