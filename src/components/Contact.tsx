import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Mail, Linkedin, Send } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Simple form validation
    if (!formData.name || !formData.email || !formData.message) {
      toast({
        title: "Please fill in all fields",
        variant: "destructive",
      });
      return;
    }

    // Here you would typically send the form data to your backend
    toast({
      title: "Message sent successfully!",
      description: "Thank you for reaching out. I'll get back to you soon.",
    });

    // Reset form
    setFormData({ name: "", email: "", message: "" });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <section id="contact" className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="section-title">Get In Touch</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto font-inter">
            I'm always open to discussing new opportunities, collaborating on projects, 
            or just having a chat about web development
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Info */}
          <div className="space-y-8 animate-slide-up">
            <div>
              <h3 className="text-2xl font-semibold text-navy mb-6 font-poppins">
                Let's Connect
              </h3>
              <p className="text-muted-foreground font-inter leading-relaxed mb-8">
                Whether you have a project in mind, want to collaborate, or just want to say hello, 
                I'd love to hear from you. Feel free to reach out through the form or contact me directly.
              </p>
            </div>

            <div className="space-y-4">
              <div className="flex items-center gap-4 p-4 bg-secondary/50 rounded-xl hover:bg-white transition-colors duration-300">
                <div className="w-12 h-12 bg-gradient-to-br from-teal to-teal-light rounded-xl flex items-center justify-center">
                  <Mail className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="font-semibold text-navy font-poppins">Email</h4>
                  <a 
                    href="mailto:mathialagan@example.com" 
                    className="text-muted-foreground hover:text-teal transition-colors duration-300 font-inter"
                  >
                    mathialagan823@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4 p-4 bg-secondary/50 rounded-xl hover:bg-white transition-colors duration-300">
                <div className="w-12 h-12 bg-gradient-to-br from-navy to-navy-light rounded-xl flex items-center justify-center">
                  <Linkedin className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="font-semibold text-navy font-poppins">LinkedIn</h4>
                  <a 
                    href="https://linkedin.com/in/mathialagan-t" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-teal transition-colors duration-300 font-inter"
                  >
                    www.linkedin.com/in/mathialagan-t-1a3647265
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="animate-fade-in">
            <form onSubmit={handleSubmit} className="space-y-6 p-8 bg-white rounded-2xl shadow-card">
              <div className="space-y-2">
                <Label htmlFor="name" className="text-navy font-medium font-inter">
                  Full Name
                </Label>
                <Input
                  id="name"
                  name="name"
                  type="text"
                  placeholder="Your full name"
                  value={formData.name}
                  onChange={handleChange}
                  className="border-border focus:border-teal focus:ring-teal/20"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="email" className="text-navy font-medium font-inter">
                  Email Address
                </Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="your.email@example.com"
                  value={formData.email}
                  onChange={handleChange}
                  className="border-border focus:border-teal focus:ring-teal/20"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="message" className="text-navy font-medium font-inter">
                  Message
                </Label>
                <Textarea
                  id="message"
                  name="message"
                  placeholder="Tell me about your project or just say hello..."
                  value={formData.message}
                  onChange={handleChange}
                  rows={5}
                  className="border-border focus:border-teal focus:ring-teal/20 resize-none"
                />
              </div>

              <Button type="submit" className="hero-button w-full">
                <Send className="w-4 h-4 mr-2" />
                Send Message
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;