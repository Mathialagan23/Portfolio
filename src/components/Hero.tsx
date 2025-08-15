import { Button } from "@/components/ui/button";
import { ArrowRight, Mail } from "lucide-react";
import profileAvatar from "@/assets/profile-avatar.jpg";

const Hero = () => {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="home" className="min-h-screen flex items-center bg-gradient-to-br from-background to-secondary/30 pt-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          {/* Text Content */}
          <div className="flex-1 text-center lg:text-left animate-fade-in">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-navy mb-6 font-poppins">
              Hi, I'm{" "}
              <span className="text-gradient-accent">Mathialagan T</span>
            </h1>
            
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-semibold text-navy-light mb-6 font-poppins">
              Aspiring Web Developer & UI/UX Designer
            </h2>
            
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl font-inter leading-relaxed">
              Passionate about UX/UI and web development, I create clean, user-friendly websites and applications that deliver seamless digital experiences. Skilled in modern web technologies and Figma, I transform ideas into visually engaging and functional products.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button 
                onClick={() => scrollToSection("#projects")}
                className="hero-button"
              >
                View Projects
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              
              <Button 
                variant="outline"
                onClick={() => scrollToSection("#contact")}
                className="hero-button-outline"
              >
                <Mail className="mr-2 h-4 w-4" />
                Contact Me
              </Button>
            </div>
          </div>

          {/* Profile Image */}
          {/* <div className="flex-shrink-0 animate-slide-up">
            <div className="relative">
              <div className="w-72 h-72 sm:w-80 sm:h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden shadow-elegant hover:shadow-glow transition-all duration-500">
                <img
                  src={profileAvatar}
                  alt="Mathialagan T - Full-Stack Developer"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
              
              
              <div className="absolute inset-0 rounded-full border-2 border-teal/20 scale-110 animate-pulse"></div>
              <div className="absolute inset-0 rounded-full border border-teal/10 scale-125"></div>
            </div>
          </div> */}
        </div>
      </div>
    </section>
  );
};

export default Hero;