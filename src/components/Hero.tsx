import { useEffect, useState } from "react";
import { ArrowDown, Mail, Eye } from "lucide-react";
import { Button } from "@/components/ui/button";

export const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const scrollToProjects = () => {
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 hero-bg opacity-90" />
      
      {/* Floating Particles */}
      <div className="absolute inset-0">
        {[...Array(50)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-neon-teal rounded-full opacity-50"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animation: `float ${3 + Math.random() * 4}s ease-in-out infinite`,
              animationDelay: `${Math.random() * 2}s`,
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-6xl mx-auto">
        {/* Avatar */}
        <div 
          className={`mb-8 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
          style={{ transitionDelay: '0.2s' }}
        >
          <div className="w-32 h-32 mx-auto rounded-full bg-gradient-card border-2 border-neon-teal glow-teal flex items-center justify-center">
            <span className="text-4xl font-bold text-neon-teal">DU</span>
          </div>
        </div>

        {/* Main Headline */}
        <h1 
          className={`text-5xl md:text-7xl lg:text-8xl font-bold mb-6 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
          style={{ transitionDelay: '0.4s' }}
        >
          <span className="block text-foreground">Hi, I'm</span>
          <span className="block bg-gradient-hero bg-clip-text text-transparent animate-pulse-glow">
            David Uko
          </span>
        </h1>

        {/* Animated Tagline */}
        <div 
          className={`text-xl md:text-2xl lg:text-3xl text-muted-foreground mb-4 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
          style={{ transitionDelay: '0.6s' }}
        >
          <span className="animated-underline text-white">"I engineer sleek, high-performance websites and web apps using modern front-end and back-end technologies."</span>
        </div>
        
           <br />

        {/* Mission Statement */}
        <p 
          className={`text-lg text-white text-muted-foreground max-w-3xl mx-auto mb-12 leading-relaxed transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
          style={{ transitionDelay: '1s' }}
        >
          A creative front-end and back-end web developer who transforms ideas into engaging, fast, and interactive 
          digital experiences using HTML, CSS, JavaScript, React, PHP and other backend and animation frameworks and tools.
        </p>

        {/* CTA Buttons */}
        <div 
          className={`flex flex-col sm:flex-row gap-4 justify-center mb-16 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
          style={{ transitionDelay: '1.2s' }}
        >
          <Button 
            onClick={scrollToProjects}
            size="lg"
            className="glass glow-teal hover:glow-violet group font-semibold"
          >
            <Eye className="mr-2 h-5 w-5 group-hover:animate-pulse" />
            View My Work
          </Button>
          <Button 
            onClick={scrollToContact}
            variant="outline"
            size="lg"
            className="glass border-neon-violet hover:bg-neon-violet hover:text-background group font-semibold"
          >
            <Mail className="mr-2 h-5 w-5 group-hover:animate-pulse" />
            Contact Me
          </Button>
        </div>

        {/* Scroll Indicator */}
        <div 
          className={`transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
          style={{ transitionDelay: '1.4s' }}
        >
          <ArrowDown className="mx-auto h-6 w-6 text-neon-teal animate-bounce cursor-pointer" onClick={scrollToProjects} />
        </div>
      </div>

      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          33% { transform: translateY(-10px) rotate(120deg); }
          66% { transform: translateY(5px) rotate(240deg); }
        }
      `}</style>
    </section>
  );
};
