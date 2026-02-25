import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Smartphone, Server, Layers, Zap, Settings2, PanelsTopLeft, Sparkles } from "lucide-react";

const skillCategories = [
  {
    title: "Mobile Development",
    icon: <Smartphone className="h-6 w-6" />,
    skills: ["Flutter", "FlutterFlow", "Native Android", "Dart", "Java", "C", "C++"]
  },
  {
    title: "Backend & APIs",
    icon: <Server className="h-6 w-6" />,
    skills: ["Firebase", "Supabase", "REST API", "Third-party APIs"]
  },
  {
    title: "Architecture",
    icon: <Layers className="h-6 w-6" />,
    skills: ["Clean Architecture", "MVVM", "SOLID", "Provider", "Riverpod", "Bloc", "Dependency Injection", "Modular Code"]
  },
  {
    title: "Performance",
    icon: <Zap className="h-6 w-6" />,
    skills: ["App Performance", "Code Refactoring", "Memory Management", "App Size Optimization"]
  },
  {
    title: "Deployment & Tools",
    icon: <Settings2 className="h-6 w-6" />,
    skills: ["CI/CD", "Play Store", "App Store", "Git & GitHub", "Postman", "Android Studio", "VS Code"]
  },
  {
    title: "UI/UX",
    icon: <PanelsTopLeft className="h-6 w-6" />,
    skills: ["Pixel Perfect UI", "Responsive Design", "Prototyping", "Wireframing", "Figma", "MVP Development"]
  }
];

export default function Skills() {
  return (
    <section id="skills" className="py-16 sm:py-24 bg-card">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="inline-flex items-center justify-center gap-3 font-headline text-3xl font-bold tracking-tight sm:text-4xl text-primary">
            <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-primary/10 text-primary">
              <Sparkles className="h-5 w-5" />
            </span>
            Core Skills
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">A snapshot of my technical capabilities.</p>
        </div>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {skillCategories.map((category) => (
            <Card key={category.title} className="bg-background/50 border-border/50 hover:border-primary/50 hover:shadow-glow-accent transition-all duration-300 transform hover:-translate-y-2">
              <CardHeader className="flex flex-row items-center gap-4">
                <div className="bg-primary/10 p-3 rounded-lg text-primary">{category.icon}</div>
                <CardTitle className="font-headline text-xl">{category.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <li key={skill} className="bg-card px-3 py-1 text-sm rounded-full border border-border/50 text-muted-foreground">{skill}</li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
