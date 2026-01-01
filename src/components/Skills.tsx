import { 
  Code, 
  Palette, 
  Database, 
  Smartphone,
  Figma,
  Terminal,
  Github
} from "lucide-react";

const Skills = () => {
  const skills = [
    {
      name: "HTML",
      icon: <Code className="w-6 h-6" />,
      color: "from-orange-500 to-orange-600"
    },
    {
      name: "CSS",
      icon: <Palette className="w-6 h-6" />,
      color: "from-blue-500 to-blue-600"
    },
    {
      name: "JavaScript",
      icon: <Terminal className="w-6 h-6" />,
      color: "from-yellow-500 to-yellow-600"
    },
    {
      name: "Figma",
      icon: <Figma className="w-6 h-6" />,
      color: "from-purple-500 to-purple-600"
    },
    {
      name: "MERN Stack",
      icon: <Database className="w-6 h-6" />,
      color: "from-green-500 to-green-600"
    },
    {
      name: "Git & GitHub",
      icon: <Github className="w-6 h-6" />,
      color: "from-gray-500 to-gray-600"
    }
  ];

  return (
    <section id="skills" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="section-title">My Skills</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto font-inter">
            Technologies and tools I work with to bring ideas to life
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {skills.map((skill, index) => (
            <div 
              key={index}
              className="skill-badge text-center group animate-slide-up hover:bg-white"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className={`w-12 h-12 bg-gradient-to-r ${skill.color} rounded-xl flex items-center justify-center mx-auto mb-3 text-white group-hover:scale-110 transition-transform duration-300`}>
                {skill.icon}
              </div>
              <span className="font-medium text-navy font-inter">{skill.name}</span>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center animate-fade-in">
          <p className="text-muted-foreground font-inter max-w-2xl mx-auto">
            I'm constantly learning and exploring new technologies to stay current with 
            industry trends and best practices. My goal is to build robust, scalable 
            applications using the most appropriate tools for each project.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Skills;