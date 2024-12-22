import { motion } from 'framer-motion';
import { Award, Rocket, Lightbulb, Trophy, Target, Star } from 'lucide-react';

const achievements = [
  {
    year: 2024,
    title: "Innovation Award",
    description: "Received industry recognition for developing an AI-powered code review system",
    icon: <Trophy size={24} />,
    color: "from-purple-500 to-pink-500"
  },
  {
    year: 2023,
    title: "Open Source Milestone",
    description: "Created a popular React component library with 5k+ GitHub stars",
    icon: <Star size={24} />,
    color: "from-blue-500 to-cyan-500"
  },
  {
    year: 2022,
    title: "Tech Leadership",
    description: "Led a team of 10 developers in building a revolutionary fintech platform",
    icon: <Target size={24} />,
    color: "from-green-500 to-emerald-500"
  },
  {
    year: 2021,
    title: "Patent Pending",
    description: "Filed a patent for a novel blockchain-based authentication system",
    icon: <Lightbulb size={24} />,
    color: "from-yellow-500 to-orange-500"
  },
  {
    year: 2020,
    title: "Startup Launch",
    description: "Founded a successful SaaS startup focusing on developer productivity tools",
    icon: <Rocket size={24} />,
    color: "from-red-500 to-pink-500"
  },
  {
    year: 2019,
    title: "First Recognition",
    description: "Won the Best Developer Award at International Tech Summit",
    icon: <Award size={24} />,
    color: "from-indigo-500 to-purple-500"
  }
];

export const Timeline = () => {
  return (
    <section className="py-20 px-4">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-3xl font-bold text-white text-center mb-12"
      >
        Milestones & Achievements
      </motion.h2>
      <div className="max-w-4xl mx-auto">
        {achievements.map((achievement, index) => (
          <motion.div
            key={achievement.year}
            initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="relative flex items-center mb-12 last:mb-0"
          >
            <div className="absolute left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-zinc-700 to-transparent" />
            
            <motion.div
              whileHover={{ scale: 1.05 }}
              className={`relative z-10 flex-1 p-6 bg-zinc-900/50 backdrop-blur-sm rounded-lg shadow-xl
                ${index % 2 === 0 ? 'mr-8' : 'ml-8'}`}
            >
              <div className="flex items-center gap-4 mb-4">
                <div className={`p-2 rounded-lg bg-gradient-to-r ${achievement.color}`}>
                  {achievement.icon}
                </div>
                <div>
                  <span className="text-sm font-semibold text-gray-400">
                    {achievement.year}
                  </span>
                  <h3 className="text-xl font-bold text-white">
                    {achievement.title}
                  </h3>
                </div>
              </div>
              <p className="text-gray-300">
                {achievement.description}
              </p>
              
              <div className="absolute top-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-gradient-to-r from-indigo-500 to-purple-500
                ${index % 2 === 0 ? '-right-10' : '-left-10'}" />
            </motion.div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};