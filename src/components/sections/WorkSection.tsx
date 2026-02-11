import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import { workContent } from "@/lib/content";

// Project images
import glamourStudioImg from "@/assets/project-glamour-studio.jpg";
import elektroProImg from "@/assets/project-elektro-pro.jpg";
import sparkDigitalImg from "@/assets/project-spark-digital.jpg";
import urbanResidenceImg from "@/assets/project-urban-residence.jpg";

const projectImages: Record<string, string> = {
  "hair-salon": glamourStudioImg,
  "electrician": elektroProImg,
  "marketing-agency": sparkDigitalImg,
  "real-estate": urbanResidenceImg,
};

const gradients = [
  "from-emerald-500/20 to-teal-500/20",
  "from-green-500/20 to-emerald-500/20",
  "from-teal-500/20 to-cyan-500/20",
  "from-cyan-500/20 to-emerald-500/20",
];

export const WorkSection = () => {
  return (
    <section id="work" className="py-16 md:py-24 relative">
      <div className="container relative z-10 px-4">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16">
          <p className="text-primary font-mono text-sm tracking-widest uppercase mb-4">
            {workContent.sectionTitle}
          </p>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-display font-bold text-foreground mb-4">
            {workContent.sectionSubtitle}
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            {workContent.sectionDescription}
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8">
          {workContent.projects.map((project, index) => (
            <div
              key={project.id}
              className={cn(
                "group relative rounded-2xl overflow-hidden border border-border",
                "hover:border-primary/50 transition-all duration-500",
                "opacity-0 animate-slide-up"
              )}
              style={{ animationDelay: `${0.1 * index}s` }}
            >
              {/* Gradient Background */}
              <div className={cn(
                "absolute inset-0 bg-gradient-to-br opacity-50 group-hover:opacity-70 transition-opacity",
                gradients[index % gradients.length]
              )} />

              {/* Project Image */}
              {projectImages[project.id] && (
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={projectImages[project.id]} 
                    alt={project.title}
                    className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/90 to-transparent" />
                </div>
              )}

              {/* Content */}
              <div className="relative p-6 md:p-8">
                {/* Header */}
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <Badge variant="outline" className="mb-3 text-primary border-primary/30">
                      {project.category}
                    </Badge>
                    <h3 className="text-xl md:text-2xl font-display font-bold text-foreground group-hover:text-primary transition-colors">
                      {project.title}
                    </h3>
                  </div>
                </div>

                {/* Result Highlight */}
                <div className="mb-6 p-3 bg-primary/10 rounded-lg border border-primary/20">
                  <p className="text-primary font-semibold text-sm md:text-base">
                    📈 {project.result}
                  </p>
                </div>

                {/* Problem → Solution → Outcome */}
                <div className="space-y-3 mb-6">
                  <div>
                    <p className="text-xs font-mono text-muted-foreground uppercase tracking-wider mb-1">Problem</p>
                    <p className="text-sm text-muted-foreground">{project.problem}</p>
                  </div>
                  <div>
                    <p className="text-xs font-mono text-muted-foreground uppercase tracking-wider mb-1">Rešenje</p>
                    <p className="text-sm text-muted-foreground">{project.solution}</p>
                  </div>
                  <div>
                    <p className="text-xs font-mono text-muted-foreground uppercase tracking-wider mb-1">Rezultat</p>
                    <p className="text-sm text-foreground">{project.outcome}</p>
                  </div>
                </div>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="text-xs px-2 py-1 bg-background/50 border border-border rounded-md text-muted-foreground"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

              </div>

              {/* Decorative Elements */}
              <div className="absolute top-4 right-4 w-16 h-16 border border-primary/20 rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WorkSection;
