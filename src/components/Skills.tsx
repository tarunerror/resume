import { motion } from 'framer-motion';
import { Code2, Database, Globe, Palette, Server, Settings } from 'lucide-react';

const skills = [
  {
    category: "Frontend",
    icon: <Globe size={24} />,
    items: ["React", "TypeScript", "Tailwind CSS", "Next.js"]
  },
  {
    category: "Backend",
    icon: <Server size={24} />,
    items: ["Node.js", "Express", "Python", "PostgreSQL"]
  },
  {
    category: "DevOps",
    icon: <Settings size={24} />,
    items: ["Docker", "AWS", "CI/CD", "Kubernetes"]
  },
  {
    category: "Design",
    icon: <Palette size={24} />,
    items: ["Figma", "Adobe XD", "UI/UX", "Responsive Design"]
  },
  {
    category: "Database",
    icon: <Database size={24} />,
    items: ["MongoDB", "Redis", "MySQL", "Firebase"]
  },
  {
    category: "Languages",
    icon: <Code2 size={24} />,
    items: ["JavaScript", "Python", "Java", "Go"]
  }
];

export const Skills = () => {
  return (
    <section className="py-20 px-4 bg-zinc-900/50">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-3xl font-bold text-white text-center mb-12"
      >
        Skills & Technologies
      </motion.h2>
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {skills.map((skill, index) => (
          <motion.div
            key={skill.category}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="bg-zinc-800/50 p-6 rounded-lg backdrop-blur-sm"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="text-indigo-400">{skill.icon}</div>
              <h3 className="text-xl font-semibold text-white">{skill.category}</h3>
            </div>
            <div className="flex flex-wrap gap-2">
              {skill.items.map((item) => (
                <span
                  key={item}
                  className="px-3 py-1 bg-zinc-700/50 text-gray-300 rounded-full text-sm"
                >
                  {item}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};