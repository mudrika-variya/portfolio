const experiences = [
  {
    company: "YohoSys",
    duration: "1 Year 3 Months",
    contributions: [
      "Led development of multiple Flutter applications from concept to deployment.",
      "Implemented complex UI/UX designs with a focus on pixel-perfection.",
      "Managed state using Bloc and Riverpod for scalable and maintainable codebases."
    ]
  },
  {
    company: "Emperic Infotech",
    duration: "4 Months",
    contributions: [
      "Contributed to the development of a large-scale e-commerce app.",
      "Optimized app performance, reducing load times by 20%.",
      "Integrated various third-party APIs for payments and logistics."
    ]
  },
  {
    company: "Quad Softtech",
    duration: "1.4 Years",
    contributions: [
      "Developed and maintained hybrid mobile applications for Android and iOS.",
      "Worked in an Agile team, participating in sprints and code reviews.",
      "Refactored legacy code to improve performance and readability."
    ]
  }
];

export default function Experience() {
  return (
    <section id="experience" className="py-24 sm:py-32">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="font-headline text-3xl font-bold tracking-tight sm:text-4xl text-primary">Work Experience</h2>
          <p className="mt-4 text-lg text-muted-foreground">My professional journey as a developer.</p>
        </div>
        <div className="relative max-w-2xl mx-auto">
          <div className="absolute left-4 top-0 h-full w-0.5 bg-border -translate-x-1/2"></div>
          
          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div key={index} className="relative pl-12">
                <div className="absolute left-4 top-1 h-4 w-4 -translate-x-1/2 rounded-full bg-primary border-4 border-background"></div>
                
                <div className="p-6 rounded-lg border border-border/50 bg-card/60 backdrop-blur-sm shadow-md hover:border-primary/50 hover:shadow-glow-accent transition-all">
                  <p className="text-sm text-muted-foreground">{exp.duration}</p>
                  <h3 className="text-xl font-bold text-primary mt-1 mb-3">{exp.company}</h3>
                  <ul className="space-y-2 text-sm text-muted-foreground list-disc list-inside">
                    {exp.contributions.map((item, i) => <li key={i}>{item}</li>)}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
