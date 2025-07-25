import React from 'react';
import { Github, Linkedin, Mail, Heart } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-900 border-t border-blue-500/20 py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            {/* Brand & Description */}
            <div className="md:col-span-1">
              <h3 className="text-2xl font-bold text-white mb-4">
                <span className="text-blue-400">K</span>etan<span className="text-blue-400">N</span>ag
              </h3>
              <p className="text-gray-300 mb-4">
                Full Stack Developer & Machine Learning Enthusiast passionate about creating 
                scalable web solutions and intelligent systems that solve real-world problems.
              </p>
              <div className="flex space-x-4">
                <a href="mailto:ketannag6677@gmail.com" className="text-gray-400 hover:text-blue-400 transition-colors">
                  <Mail size={20} />
                </a>
                <a href="https://github.com/KetanNag" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-blue-400 transition-colors">
                  <Github size={20} />
                </a>
                <a href="https://linkedin.com/in/ketannag" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-blue-400 transition-colors">
                  <Linkedin size={20} />
                </a>
              </div>
            </div>
            
            {/* Quick Links */}
            <div>
              <h4 className="text-lg font-semibold text-white mb-4">Quick Links</h4>
              <ul className="space-y-2">
                {[
                  { href: '#home', label: 'Home' },
                  { href: '#about', label: 'About' },
                  { href: '#skills', label: 'Skills' },
                  { href: '#projects', label: 'Projects' },
                  { href: '#experience', label: 'Experience' },
                  { href: '#education', label: 'Education' }
                ].map((link) => (
                  <li key={link.href}>
                    <a href={link.href} className="text-gray-300 hover:text-blue-400 transition-colors">
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            
            {/* Contact Info */}
            <div>
              <h4 className="text-lg font-semibold text-white mb-4">Contact</h4>
              <ul className="space-y-2 text-gray-300">
                <li>
                  <a href="mailto:ketannag6677@gmail.com" className="hover:text-blue-400 transition-colors">
                    ketannag6677@gmail.com
                  </a>
                </li>
                <li>
                  <a href="tel:+917991423664" className="hover:text-blue-400 transition-colors">
                    +91-7991423664
                  </a>
                </li>
                <li>Ahmedabad, India</li>
                <li>
                  <a href="https://github.com/KetanNag" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition-colors">
                    GitHub Portfolio
                  </a>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-blue-500/20 mt-12 pt-8 text-center">
            <p className="text-gray-300 flex items-center justify-center">
              © 2025 Ketan Nag. Made with <Heart className="mx-2 text-red-500" size={16} /> using React & Tailwind CSS
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
