import { Button } from "@/components/ui/button";
import { ExternalLink, Github, Figma } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "IT Consulting Company Landing Page",
      description: "Designed and prototyped a professional landing page for an IT consulting company using Figma, including sections for services, case studies, testimonials, and contact forms.",
      technologies: ["Figma"],
      figmaLink: "https://www.figma.com/proto/sWv0hH70xDpXy45Is5RYFx/Untitled?page-id=0%3A1&node-id=7-7&p=f&viewport=364%2C86%2C0.31&t=jrNMyBta8xbFDpo3-1&scaling=min-zoom&content-scaling=fixed",
      type: "design"
    },
    {
      title: "Travel Management Website",
      description: "Designed and developed a travel management platform for backpackers using HTML, CSS, and JavaScript, featuring itineraries, bookings, and admin functions.",
      technologies: ["HTML", "CSS", "JavaScript"],
      liveLink: "#",
      codeLink: "#",
      type: "web"
    },
    {
      title: "Trendsetter",
      description: "A clean and modern Figma e-commerce design for a clothing brand, featuring intuitive navigation, stylish product displays, and detailed product pages. Designed with a neutral palette and bold typography to reflect a premium shopping experience.",
      technologies: ["Figma"],
      figmaLink: "https://www.figma.com/proto/gaImyNIkY7yetcKEejmgoV/Untitled?page-id=0%3A1&node-id=1-5&viewport=356%2C422%2C0.28&t=whK8x0FXpnayCERC-1&scaling=min-zoom&content-scaling=fixed",
      type: "design"
    },
    {
      title: "E-commerce Website",
      description: "Created a feature-rich online store with product listings, shopping cart, checkout, and customer support sections.",
      technologies: ["HTML", "CSS", "JavaScript"],
      liveLink: "#",
      codeLink: "#",
      type: "web"
    }
    
  ];

  return (
    <section id="projects" className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="section-title">My Projects</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto font-inter">
            Here are some of the projects I've worked on, showcasing my skills in web development and design
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div 
              key={index} 
              className="project-card animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="mb-4">
                <h3 className="text-xl font-semibold text-navy mb-3 font-poppins">
                  {project.title}
                </h3>
                <p className="text-muted-foreground font-inter leading-relaxed">
                  {project.description}
                </p>
              </div>

              <div className="mb-6">
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, techIndex) => (
                    <span 
                      key={techIndex}
                      className="skill-badge text-sm font-medium text-navy"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex flex-wrap gap-3">
                {project.type === "web" && (
                  <>
                    <Button variant="default" className="hero-button" asChild>
                      <a href={project.liveLink} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="w-4 h-4 mr-2" />
                        View Project
                      </a>
                    </Button>
                    <Button variant="outline" className="hero-button-outline" asChild>
                      <a href={project.codeLink} target="_blank" rel="noopener noreferrer">
                        <Github className="w-4 h-4 mr-2" />
                        View Code
                      </a>
                    </Button>
                  </>
                )}
                
                {project.type === "design" && (
                  <Button variant="default" className="hero-button" asChild>
                    <a href={project.figmaLink} target="_blank" rel="noopener noreferrer">
                      <Figma className="w-4 h-4 mr-2" />
                      View Design
                    </a>
                  </Button>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;