import { motion } from 'framer-motion';
import { Briefcase } from 'lucide-react';

const experiences = [
  {
    company: "Tech Corp",
    position: "Senior Full Stack Developer",
    period: "2021 - Present",
    description: "Led development of enterprise applications, mentored junior developers, and implemented CI/CD pipelines."
  },
  {
    company: "StartupX",
    position: "Frontend Developer",
    period: "2019 - 2021",
    description: "Developed responsive web applications using React and TypeScript, improved performance by 40%."
  },
  {
    company: "Digital Agency",
    position: "Web Developer",
    period: "2017 - 2019",
    description: "Created custom websites and e-commerce solutions for various clients using modern web technologies."
  }
];

export const Experience = () => {
  return (
    <section className="py-20 px-4">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-3xl font-bold text-white text-center mb-12"
      >
        Work Experience
      </motion.h2>
      <div className="max-w-4xl mx-auto space-y-8">
        {experiences.map((exp, index) => (
          <motion.div
            key={exp.company}
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            className="bg-zinc-900/50 p-6 rounded-lg backdrop-blur-sm"
          >
            <div className="flex items-start gap-4">
              <div className="p-2 bg-indigo-500/10 rounded-lg">
                <Briefcase className="text-indigo-400" size={24} />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-white">{exp.position}</h3>
                <p className="text-indigo-400 mb-2">{exp.company}</p>
                <p className="text-gray-400 text-sm mb-3">{exp.period}</p>
                <p className="text-gray-300">{exp.description}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};