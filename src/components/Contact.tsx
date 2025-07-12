import { useState } from "react";
import { Mail, Send, Download, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";

export const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setFormData({ name: "", email: "", message: "" });
      
      toast({
        title: "Message sent! ✨",
        description: "Thanks! Your message just danced into my inbox.",
      });
    }, 2000);
  };

  return (
    <section id="contact" className="py-20 px-6 bg-card/30">
      <div className="max-w-4xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-hero bg-clip-text text-transparent">
              Let's Collaborate
            </span>
          </h2>
          <p className="text-xl text-muted-foreground">
            Ready to build something stunning together?
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="space-y-8">
            <div className="glass p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-foreground mb-4">Get In Touch</h3>
              <p className="text-muted-foreground mb-6">
                I'm always excited to work on new projects and collaborate with creative teams. 
                Drop me a message and let's discuss your ideas!
              </p>
              
              <div className="flex items-center gap-3 mb-4">
                <Mail className="h-5 w-5 text-neon-teal" />
                <a 
                  href="mailto:jordanlee.dev@gmail.com"
                  className="text-foreground hover:text-neon-teal transition-colors animated-underline"
                >
                  jordanlee.dev@gmail.com
                </a>
              </div>
            </div>

            {/* Resume Download */}
            <Card className="glass border-0">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Download className="h-5 w-5 text-neon-violet" />
                  Download Resume
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Want to see my full experience and background?
                </p>
                <Button 
                  className="w-full glow-violet hover:scale-105 transition-transform"
                  asChild
                >
                  <a href="/resume.pdf" download>
                    <Download className="mr-2 h-4 w-4" />
                    Download PDF Resume
                  </a>
                </Button>
              </CardContent>
            </Card>

            {/* Quick Stats */}
            <div className="glass p-6 rounded-lg">
              <h4 className="font-semibold text-foreground mb-4">Quick Stats</h4>
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center">
                  <div className="text-2xl font-bold text-neon-teal">50+</div>
                  <div className="text-sm text-muted-foreground">Projects Built</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-neon-violet">4+</div>
                  <div className="text-sm text-muted-foreground">Years Experience</div>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <Card className="glass border-0">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Send className="h-5 w-5 text-neon-teal" />
                Send a Message
              </CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <Input
                    name="name"
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="form-input bg-background/50 border-muted focus:border-neon-teal transition-all"
                  />
                </div>
                
                <div>
                  <Input
                    name="email"
                    type="email"
                    placeholder="your.email@example.com"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="form-input bg-background/50 border-muted focus:border-neon-teal transition-all"
                  />
                </div>
                
                <div>
                  <Textarea
                    name="message"
                    placeholder="Tell me about your project..."
                    rows={4}
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    className="form-input bg-background/50 border-muted focus:border-neon-teal transition-all resize-none"
                  />
                </div>
                
                <Button 
                  type="submit" 
                  disabled={isSubmitting}
                  className="w-full bg-gradient-to-r from-neon-teal to-neon-violet hover:scale-105 transition-transform font-semibold"
                >
                  {isSubmitting ? (
                    <>
                      <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-background mr-2" />
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send className="mr-2 h-4 w-4" />
                      Send Message
                    </>
                  )}
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};