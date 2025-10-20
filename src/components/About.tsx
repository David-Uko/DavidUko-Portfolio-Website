import { MapPin, Heart, Lightbulb } from "lucide-react";

export const About = () => {
  return (
    <section id="about" className="py-20 px-6 bg-card/50">
      <div className="max-w-4xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-hero bg-clip-text text-transparent">
              About Me
            </span>
          </h2>
          <p className="text-xl text-muted-foreground">
            The story behind the animations
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Bio Text */}
          <div className="space-y-6">
            <div className="glass p-6 rounded-lg">
              <div className="flex items-center gap-2 mb-4">
                <MapPin className="h-5 w-5 text-neon-teal" />
                
              </div>
              
              <p className="text-foreground leading-relaxed mb-4">
                I'm a fullstack web developer with <span className="text-neon-violet font-semibold">5+ years of experience</span> building 
                interactive websites and single-page applications. My passion lies in merging clean code with creative, 
                fluid animation to create interfaces that don't just look good, but feel alive.
              </p>
              
              <p className="text-muted-foreground leading-relaxed">
                Whether it's subtle microinteractions or full-blown GSAP timelines, I believe motion is a tool for 
                storytelling. Every animation should serve a purpose - guiding users, providing feedback, or simply 
                adding that extra touch of personality that makes an interface memorable.
              </p>
              
            </div>

            <div className="glass p-6 rounded-lg">
              <div className="flex items-center gap-2 mb-4">
                <Heart className="h-5 w-5 text-neon-violet" />
                <span className="text-sm font-semibold text-neon-violet">What Drives Me</span>
              </div>
              
              <p className="text-muted-foreground leading-relaxed">
                I combine technical precision with a strong design sense and animation fluency to create 
                meaningful, expressive UIs. The web is my canvas, and code is my brush.
              </p>
            </div>
          </div>

          {/* Visual Elements */}
          <div className="space-y-6">
            {/* Experience Timeline */}
            <div className="glass p-6 rounded-lg">
              <div className="flex items-center gap-2 mb-6">
                <Lightbulb className="h-5 w-5 text-neon-teal" />
                <span className="text-sm font-semibold text-neon-teal">My Journey</span>
              </div>
              
              <div className="space-y-4">
                {[
                  { year: "2024", role: "Full-time Freelancer", company: "Building animated experiences" },
                  { year: "2023", role: "Lead Frontend Developer", company: "MotionWare" },
                  { year: "2022", role: "Backend Developer", company: "DevNova Agency" },
                  { year: "2021", role: "Freelance Developer", company: "Starting the journey" }
                ].map((item, index) => (
                  <div 
                    key={item.year}
                    className="flex items-center gap-4 group cursor-pointer"
                    style={{
                      animationDelay: `${index * 0.1}s`
                    }}
                  >
                    <div className="w-12 h-12 rounded-full bg-gradient-to-r from-neon-teal to-neon-violet flex items-center justify-center text-background font-bold text-sm group-hover:scale-110 transition-transform">
                      {item.year.slice(-2)}
                    </div>
                    <div className="flex-1">
                      <h4 className="font-semibold text-foreground group-hover:text-neon-teal transition-colors">
                        {item.role}
                      </h4>
                      <p className="text-sm text-muted-foreground">{item.company}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Fun Fact */}
            <div className="glass p-6 rounded-lg border border-neon-violet/20">
              <h4 className="font-semibold text-neon-violet mb-2">Fun Fact</h4>
              <p className="text-muted-foreground text-sm">
                When I'm not coding, you'll find me experimenting with motion graphics in After Effects 
                or playing around with new CSS properties that just dropped! 🎨
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
