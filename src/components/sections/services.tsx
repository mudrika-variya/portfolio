import { Code, Smartphone, Rocket, Palette, Zap, Cloud, CheckCheck } from 'lucide-react';

const services = [
  { title: "Flutter App Development", icon: <Smartphone />, description: "Building high-quality, performant, and scalable mobile apps from scratch." },
  { title: "FlutterFlow Rapid Development", icon: <Rocket />, description: "Quickly turning your ideas into functional prototypes and MVPs with FlutterFlow." },
  { title: "MVP Development", icon: <CheckCheck />, description: "Creating Minimum Viable Products to validate your business ideas efficiently." },
  { title: "UI/UX Implementation", icon: <Palette />, description: "Translating Figma designs into pixel-perfect, responsive, and beautiful Flutter UIs." },
  { title: "App Performance Optimization", icon: <Zap />, description: "Analyzing and improving your app's speed, responsiveness, and resource usage." },
  { title: "API Integration", icon: <Code />, description: "Connecting your app to backend services, REST APIs, and other third-party systems." },
  { title: "Play/App Store Deployment", icon: <Cloud />, description: "Full support for building, signing, and deploying your app to the stores." }
];

export default function Services() {
  return (
    <section id="services" className="py-24 sm:py-32">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="font-headline text-3xl font-bold tracking-tight sm:text-4xl text-primary">Services I Offer</h2>
          <p className="mt-4 text-lg text-muted-foreground">How I can help bring your vision to life.</p>
        </div>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <div key={service.title} className="flex items-start gap-4 p-6 rounded-lg border border-transparent hover:bg-card/60 hover:border-border/50 transition-all">
              <div className="text-primary mt-1">{service.icon}</div>
              <div>
                <h3 className="text-lg font-bold mb-1">{service.title}</h3>
                <p className="text-sm text-muted-foreground">{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
