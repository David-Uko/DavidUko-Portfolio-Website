import { ExternalLink, Github, Zap, ShoppingCart, Camera } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const projects = [
    {
    title: "Mita School",
    description: "At Mita School, we equip you with the practical skills needed to build successful careers in tech.whether you’re just starting out, switching paths, or upskilling for better opportunities. Every course is designed to be beginner-friendly, hands-on, and focused on real job outcomes",
    tech: ["HTML", "CSS", "Vanilla JS", "AOS.js"],
    animation: "Elements like text, images, and icons fade or slide into view as you scroll, creating a modern and polished feel that adds life to the layout while maintaining a professional look.",
    icon: ShoppingCart,
    liveUrl: "https://mitaschool.com/",
    gradient: "from-neon-violet to-neon-pink"
  },
  {
    title: "Empower Her Remotely",
    description: "A platform built to equip men and women—especially those in underserved and underrepresented communities—with the knowledge, tools, and network they need to thrive in the global remote economy.",
    tech: ["HTML", "CSS", "Vanilla JS", "AOS.js"],
    animation: "Elements like text, images, and icons fade or slide into view as you scroll, creating a modern and polished feel that adds life to the layout while maintaining a professional look.",
    icon: ShoppingCart,
    liveUrl: "https://www.empowerherremotely.com/",
    gradient: "from-neon-violet to-neon-pink"
  },
  
  {
    title: "Jubilee Events",
    description: "Jubilee Events is a premium event planning and booking platform designed to help individuals effortlessly organize memorable moments such as weddings, surprise proposals, birthday celebrations, anniversaries, and other special occasions.",
    tech: ["Next.js", "Styled Components", "Framer Motion"],
    animation: "Lazy-load gallery grid; lightbox pop-up with zoom/fade animations",
    icon: Camera,
    liveUrl: "https://www.jubileeeventsyyc.org/",
    gradient: "from-neon-pink to-neon-teal"
  },
    {
    title: "Dropps",
    description: "Droops Laundry is a convenient and reliable online laundry service platform designed to make washing and dry-cleaning effortless. The website allows users to schedule pick-ups and deliveries from the comfort of their homes, view service options, and track orders in real time",
    tech: ["HTML", "CSS", "Vanilla JS", "AOS.js"],
    animation: "Elements like text, images, and icons fade or slide into view as you scroll, creating a modern and polished feel that adds life to the layout while maintaining a professional look.",
    icon: ShoppingCart,
    liveUrl: "https://www.dropps.com/",
    gradient: "from-neon-violet to-neon-pink"
  },
    {
    title: "Youth Music", 
    description: "Youth Music is a leading charity dedicated to supporting young people through music—especially those facing social or economic barriers.",
    tech: ["React", "Tailwind CSS", "Chart.js", "GSAP"],
    animation: "Scroll-triggered chart animations; animated dashboard transitions",
    icon: Zap,
    liveUrl: "https://www.youthmusic.org.uk/",
    gradient: "from-neon-teal to-neon-violet"
  } 
];

export const Projects = () => {
  return (
    <section id="projects" className="py-20 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-hero bg-clip-text text-transparent">
              Featured Projects
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Showcasing interactive web experiences with smooth animations and modern tech stacks
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card
              key={project.title}
              className="project-card glass border-0 group cursor-pointer overflow-hidden"
              style={{
                animationDelay: `${index * 0.2}s`
              }}
            >
              <CardHeader className="relative pb-4">
                {/* Project Icon */}
                <div className={`w-12 h-12 rounded-lg bg-gradient-to-r ${project.gradient} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <project.icon className="h-6 w-6 text-background" />
                </div>
                
                <CardTitle className="text-xl font-bold text-foreground group-hover:text-neon-teal transition-colors">
                  {project.title}
                </CardTitle>
                <CardDescription className="text-muted-foreground">
                  {project.description}
                </CardDescription>
              </CardHeader>

              <CardContent className="space-y-4">
                {/* Tech Stack */}
                <div>
                  <h4 className="text-sm font-semibold text-neon-violet mb-2">Tech Stack</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-1 text-xs rounded-md bg-muted text-muted-foreground border border-border"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Animation Feature */}
                <div>
                  <h4 className="text-sm font-semibold text-neon-teal mb-2">Animation Highlight</h4>
                  <p className="text-sm text-muted-foreground">{project.animation}</p>
                </div>

                {/* Action Buttons */}
                <div className="flex gap-2 pt-4">
                  <Button
                    size="sm"
                    className="flex-1 bg-neon-teal hover:bg-neon-teal/80 text-background font-medium"
                    asChild
                  >
                    <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="mr-1 h-3 w-3" />
                      Live Demo
                    </a>
                  </Button>
                  <Button
                    size="sm"
                    variant="outline"
                    className="border-neon-violet hover:bg-neon-violet hover:text-background"
                    asChild
                  > 
                  </Button>
                </div>
              </CardContent>

              {/* Hover Glow Effect */}
              <div className="absolute inset-0 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                <div className={`absolute inset-0 bg-gradient-to-r ${project.gradient} opacity-10 rounded-lg`} />
              </div>
            </Card>
          ))}
        </div>

        {/* More Projects CTA */}
        <div className="text-center mt-16">
          <p className="text-muted-foreground mb-4 text-3xl font-bold">Want to see more of my work?</p>
          <Button
            variant="outline"
            size="lg"
            className="border-neon-teal hover:bg-neon-teal hover:text-background animated-underline"
            asChild
          >
            <a href="https://github.com/David-Uko" target="_blank" rel="noopener noreferrer">
              <Github className="mr-2 h-6 w-6" />
              View All Projects on GitHub
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};