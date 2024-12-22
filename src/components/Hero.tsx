import { motion } from 'framer-motion';
import { Github, Linkedin, Mail } from 'lucide-react';

export const Hero = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="text-white text-center relative z-10"
    >
      <h1 className="text-5xl font-bold mb-6">Tarun Gautam</h1>
      <h2 className="text-2xl text-gray-400 mb-8">Full Stack Developer</h2>
      <p className="max-w-2xl mx-auto text-gray-300 mb-8">
        Crafting digital experiences with modern web technologies.
        Specialized in building scalable applications with React and Node.js.
      </p>
      <div className="flex justify-center gap-6">
        <a
          href="https://github.com/tarunerror"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-400 hover:text-white transition-colors"
        >
          <Github size={24} />
        </a>
        <a
          href="https://linkedin.com/in/tarunerror/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-400 hover:text-white transition-colors"
        >
          <Linkedin size={24} />
        </a>
        <a
          href="mailto:its.tarun01@gmail.com"
          className="text-gray-400 hover:text-white transition-colors"
        >
          <Mail size={24} />
        </a>
      </div>
    </motion.div>
  );
};