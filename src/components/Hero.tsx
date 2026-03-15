import { Button } from "@/components/ui/button";
import { ArrowRight, Mail } from "lucide-react";
import profile from "@/assets/portfolio.png";

const Hero = () => {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="home" className="min-h-screen flex items-center bg-gradient-to-br from-background to-secondary/30 pt-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="animate-fade-in">

          {/* Profile Image - floated right so text wraps around it */}
          <div
            className="hidden lg:block float-right animate-slide-up flex-shrink-0"
            style={{
              shapeOutside: "circle(50%)",
              width: "clamp(280px, 25vw, 384px)",
              height: "clamp(280px, 25vw, 384px)",
              marginLeft: "2rem",
              marginBottom: "1rem",
            }}
          >
            <div className="relative w-full h-full">
              <div className="w-full h-full rounded-full overflow-hidden shadow-elegant hover:shadow-glow transition-all duration-500">
                <img
                  src={profile}
                  alt="Mathialagan T - Full-Stack Developer"
                  className="w-full h-full object-contain hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="absolute inset-0 rounded-full border-2 border-teal/20 scale-110 animate-pulse pointer-events-none"></div>
              <div className="absolute inset-0 rounded-full border border-teal/10 scale-125 pointer-events-none"></div>
            </div>
          </div>

          {/* Profile Image - Mobile only (centered, no float) */}
          <div
            className="block lg:hidden mx-auto mb-8 animate-slide-up flex-shrink-0"
            style={{
              width: "clamp(180px, 50vw, 240px)",
              height: "clamp(180px, 50vw, 240px)",
            }}
          >
            <div className="relative w-full h-full">
              <div className="w-full h-full rounded-full overflow-hidden shadow-elegant hover:shadow-glow transition-all duration-500">
                <img
                  src={profile}
                  alt="Mathialagan T - Full-Stack Developer"
                  className="w-full h-full object-contain hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="absolute inset-0 rounded-full border-2 border-teal/20 scale-110 animate-pulse pointer-events-none"></div>
              <div className="absolute inset-0 rounded-full border border-teal/10 scale-125 pointer-events-none"></div>
            </div>
          </div>

          {/* Text Content */}
          <div className="text-center lg:text-left">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-navy dark:text-white mb-6 font-poppins">
              Hi, I'm{" "}
              <span className="text-gradient-accent">Mathialagan</span>
            </h1>

            <h2 className="text-xl sm:text-2xl lg:text-3xl font-semibold text-navy-light dark:text-gray-300 mb-6 font-poppins">
              Aspiring Web Developer
            </h2>

            <p className="text-lg text-muted-foreground mb-8 font-inter leading-relaxed text-justify">
              I am a full-stack developer focused on building reliable, scalable, and maintainable web applications. I work across the entire development stack, designing responsive frontend interfaces and developing robust backend APIs while ensuring smooth integration between services. I have experience deploying cloud-native applications using modern tools and platforms such as Docker and Google Cloud, implementing CI/CD pipelines, serverless deployments, and automated background jobs. I enjoy solving real-world problems by building systems that are efficient, secure, and user-focused. I continuously improve my skills in full-stack development, cloud infrastructure, and DevOps practices while writing clean, maintainable code. I aim to grow in an environment where I can take ownership of projects, collaborate with teams, and contribute to building high-quality digital products that deliver real value.
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

          {/* Clear float */}
          <div className="clear-both"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;