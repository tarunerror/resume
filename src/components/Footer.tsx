import { Github, Linkedin, Mail, Twitter } from 'lucide-react';

export const Footer = () => {
  return (
    <footer className="bg-zinc-900/80 backdrop-blur-sm py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold text-white mb-4">Tarun Gautam</h3>
            <p className="text-gray-400 mb-4">
              Full Stack Developer passionate about creating innovative web solutions
            </p>
            <div className="flex gap-4">
              <a
                href="https://github.com/tarunerror"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <Github size={20} />
              </a>
              <a
                href="https://linkedin.com/in/tarunerror"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <Twitter size={20} />
              </a>
              <a
                href="mailto:its.tarun01@gmail.com"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <Mail size={20} />
              </a>
            </div>
          </div>
          <div>
            <h3 className="text-xl font-bold text-white mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="#projects" className="text-gray-400 hover:text-white transition-colors">
                  Projects
                </a>
              </li>
              <li>
                <a href="#skills" className="text-gray-400 hover:text-white transition-colors">
                  Skills
                </a>
              </li>
              <li>
                <a href="#experience" className="text-gray-400 hover:text-white transition-colors">
                  Experience
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-bold text-white mb-4">Contact</h3>
            <p className="text-gray-400 mb-2">Email: its.tarun01@gmail.com</p>
            <p className="text-gray-400 mb-2">Location: Phagwara, Punjab, India</p>
            <a href="https://drive.google.com/file/d/1vNN-_Hi1i_hNT1JBXU2l5TdmL3r0R1DJ/view?usp=sharing" download>
              <button className="px-4 py-2 bg-indigo-500 text-white rounded-lg hover:bg-indigo-600 transition-colors">
                Download CV
              </button>
            </a>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-zinc-800 text-center text-gray-400">
          <p>© {new Date().getFullYear()} Tarun Gautam. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};
