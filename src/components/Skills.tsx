import { Code, Database, Cloud, Github, Figma } from "lucide-react";

const Skills = () => {
  const skillGroups = [
    {
      title: "Frontend",
      icon: <Code className="w-7 h-7" />,
      skills: ["HTML", "CSS", "JavaScript", "React.js"],
      color: "from-orange-500 to-red-500"
    },
    {
      title: "Backend",
      icon: <Database className="w-7 h-7" />,
      skills: ["Node.js", "Express.js", "MongoDB","REST APIs"],
      color: "from-green-500 to-emerald-600"
    },
    {
      title: "Cloud & DevOps",
      icon: <Cloud className="w-7 h-7" />,
      skills: [
        "Google Cloud (Cloud Run)",
        "Docker",
        "Firebase",
        "Vercel",
        "Render"
      ],
      color: "from-blue-500 to-indigo-600"
    },
    {
      title: "Design & Tools",
      icon: <Figma className="w-7 h-7" />,
      skills: ["Figma", "Git", "GitHub", "VS Code"],
      color: "from-purple-500 to-pink-500"
    }
  ];

  return (
    <section id="skills" className="py-24 bg-gray-50 dark:bg-slate-900">
      <div className="container mx-auto px-6">

        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Skills</h2>
          <p className="text-gray-500 dark:text-gray-400">
            Technologies I use to build modern full-stack applications
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skillGroups.map((group, index) => (
            <div
              key={index}
              className="group p-6 rounded-2xl bg-white dark:bg-slate-800 shadow-lg hover:shadow-2xl transition duration-300"
            >
              <div
                className={`w-12 h-12 flex items-center justify-center rounded-xl text-white bg-gradient-to-r ${group.color} mb-4 group-hover:scale-110 transition`}
              >
                {group.icon}
              </div>

              <h3 className="text-xl font-semibold mb-3">{group.title}</h3>

              <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                {group.skills.map((skill, i) => (
                  <li key={i} className="hover:text-black dark:hover:text-white transition">
                    • {skill}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Skills;