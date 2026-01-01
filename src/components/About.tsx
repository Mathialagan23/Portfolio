import { GraduationCap, Code, Heart } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="section-title">About Me</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto font-inter">
            Get to know more about my journey, passion, and dedication to web development
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-6 animate-slide-up">
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-teal to-teal-light rounded-xl flex items-center justify-center">
                <GraduationCap className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-navy mb-2 font-poppins">Education & Background</h3>
                <p className="text-muted-foreground font-inter leading-relaxed">
                  B-Tech, Computer Science and Business Systems, 2021 - 2025 <br />
                  Francis Xavier Engineering College - Tirunelveli, Tamilnadu <br />
                  CGPA: 7.3/10 <br />
                  I believe in continuous learning and staying updated with the latest 
                  technologies and industry best practices.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-navy to-navy-light rounded-xl flex items-center justify-center">
                <Code className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-navy mb-2 font-poppins">Development Focus</h3>
                <p className="text-muted-foreground font-inter leading-relaxed">
                  Specializing in full-stack web development with a focus on creating 
                  responsive, accessible, and performant applications. I enjoy working 
                  with modern frameworks and tools to build exceptional user experiences.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-teal-light to-teal rounded-xl flex items-center justify-center">
                <Heart className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-navy mb-2 font-poppins">Passion & Vision</h3>
                <p className="text-muted-foreground font-inter leading-relaxed">
                  I'm passionate about clean code, intuitive design, and solving real-world 
                  problems through technology. My goal is to create digital solutions that 
                  make a positive impact on users' lives.
                </p>
              </div>
            </div>
          </div>

          {/* Stats or additional info */}
          <div className="grid grid-cols-2 gap-6 animate-fade-in">
            <div className="text-center p-6 bg-white rounded-2xl shadow-card hover:shadow-glow transition-all duration-300">
              <div className="text-3xl font-bold text-gradient-accent mb-2 font-poppins">4+</div>
              <div className="text-navy font-medium font-inter">Projects Completed</div>
            </div>
            
            <div className="text-center p-6 bg-white rounded-2xl shadow-card hover:shadow-glow transition-all duration-300">
              <div className="text-3xl font-bold text-gradient-accent mb-2 font-poppins">6+</div>
              <div className="text-navy font-medium font-inter">Technologies</div>
            </div>
            
            {/* <div className="text-center p-6 bg-white rounded-2xl shadow-card hover:shadow-glow transition-all duration-300">
              <div className="text-3xl font-bold text-gradient-accent mb-2 font-poppins">1+</div>
              <div className="text-navy font-medium font-inter">Years Learning</div>
            </div> */}
            
            <div className="text-center p-6 bg-white rounded-2xl shadow-card hover:shadow-glow transition-all duration-300">
              <div className="text-3xl font-bold text-gradient-accent mb-2 font-poppins">∞</div>
              <div className="text-navy font-medium font-inter">Passion Level</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;