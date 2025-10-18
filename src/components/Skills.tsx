import { Code2, Palette, Zap } from "lucide-react";

const skillCategories = [
  {
    title: "Languages & Frameworks",
    icon: Code2,
    color: "neon-teal",
    skills: [
      { name: "PHP", level: 95 },
      { name: "Laravel", level: 95 },
      { name: "JavaScript", level: 90 },
      { name: "TypeScript", level: 85 },
      { name: "React", level: 90 },
      { name: "Node.js", level: 80 },
    ]
  },
  {
    title: "Animation & Design",
    icon: Palette,
    color: "neon-violet",
    skills: [
      { name: "GSAP", level: 85 },
      { name: "Framer Motion", level: 80 },
      { name: "CSS Keyframes", level: 95 },
      { name: "SVG Animation", level: 75 },
      { name: "Tailwind CSS", level: 90 },
      { name: "Styled Components", level: 80 },
    ]
  },
  {
    title: "Tools & Workflow",
    icon: Zap,
    color: "neon-pink",
    skills: [
      { name: "Git", level: 85 },
      { name: "Webpack", level: 75 },
      { name: "Figma", level: 80 },
      { name: "Performance Optimization", level: 85 },
      { name: "Accessibility", level: 80 },
      { name: "Responsive Design", level: 95 },
    ]
  }
];

export const Skills = () => {
  return (
    <section id="skills" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-hero bg-clip-text text-transparent">
              Skills & Expertise
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            The tools and technologies I use to bring ideas to life
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {skillCategories.map((category, categoryIndex) => (
            <div
              key={category.title}
              className="glass p-6 rounded-lg group hover:glow-teal transition-all duration-300"
              style={{
                animationDelay: `${categoryIndex * 0.2}s`
              }}
            >
              {/* Category Header */}
              <div className="flex items-center gap-3 mb-6">
                <div className={`w-10 h-10 rounded-lg bg-${category.color} flex items-center justify-center group-hover:scale-110 transition-transform`}>
                  <category.icon className="h-5 w-5 text-background" />
                </div>
                <h3 className="font-semibold text-foreground">{category.title}</h3>
              </div>

              {/* Skills List */}
              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skill.name} className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-sm font-medium text-foreground">{skill.name}</span>
                      <span className="text-xs text-muted-foreground">{skill.level}%</span>
                    </div>
                    
                    {/* Animated Progress Bar */}
                    <div className="w-full bg-muted rounded-full h-2 overflow-hidden">
                      <div 
                        className={`h-full bg-gradient-to-r from-${category.color} to-${category.color}/70 rounded-full transition-all duration-1000 ease-out`}
                        style={{
                          width: `${skill.level}%`,
                          animationDelay: `${(categoryIndex * 0.2) + (skillIndex * 0.1)}s`
                        }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Testimonials */}
        <div className="grid md:grid-cols-2 gap-8">
          <div className="glass p-6 rounded-lg border border-neon-teal/20">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-full bg-gradient-to-r from-neon-teal to-neon-violet flex items-center justify-center text-background font-bold">
                SM
              </div>
              <div>
                <p className="text-muted-foreground mb-3 italic">
                  "David transformed our static landing page into a dynamic experience. 
                  Our bounce rate dropped by 32%!"
                </p>
                <div>
                  <p className="font-semibold text-foreground">Sarah M.</p>
                  <p className="text-sm text-neon-teal">Product Manager</p>
                </div>
              </div>
            </div>
          </div>

          <div className="glass p-6 rounded-lg border border-neon-violet/20">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-full bg-gradient-to-r from-neon-violet to-neon-pink flex items-center justify-center text-background font-bold">
                AR
              </div>
              <div>
                <p className="text-muted-foreground mb-3 italic">
                  "His attention to animation detail makes every UI feel premium."
                </p>
                <div>
                  <p className="font-semibold text-foreground">Ankit R.</p>
                  <p className="text-sm text-neon-violet">Designer</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};