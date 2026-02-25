const experiences = [
  {
    company: "YohoSys",
    duration: "1 Year 3 Months",
    contributions: [
      "Led development of multiple Flutter applications from concept to deployment, collaborating closely with designers and backend teams.",
      "Implemented complex, pixel-perfect UI/UX that matched Figma designs and improved user engagement.",
      "Introduced Bloc and Riverpod for scalable state management, reducing bugs and simplifying feature delivery."
    ]
  },
  {
    company: "Emperic Infotech",
    duration: "4 Months",
    contributions: [
      "Contributed to a large-scale e-commerce app used by thousands of users.",
      "Optimized app performance, reducing critical screen load times by ~20%.",
      "Integrated secure payment and logistics APIs to support end-to-end order flows."
    ]
  },
  {
    company: "Quad Softtech",
    duration: "1.4 Years",
    contributions: [
      "Developed and maintained hybrid mobile applications for Android and iOS across multiple client projects.",
      "Worked within Agile sprints, actively participating in planning, reviews, and code reviews.",
      "Refactored legacy codebases to improve performance, readability, and long-term maintainability."
    ]
  }
];

export default function Experience() {
  return (
    <section id="experience" className="py-16 sm:py-24">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="inline-flex items-center justify-center gap-3 font-headline text-3xl font-bold tracking-tight sm:text-4xl text-primary">
            <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-primary/10 text-primary text-sm">
              {/* briefcase icon style circle */}
              &#128188;
            </span>
            Work Experience
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">How I’ve helped teams ship and scale real-world apps.</p>
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
