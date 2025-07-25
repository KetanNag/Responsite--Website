import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section id="home" className="min-h-screen relative overflow-hidden bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/20 to-cyan-900/20"></div>
        
        {/* Flowing Lines Animation */}
        <div className="absolute inset-0">
          <svg className="w-full h-full" viewBox="0 0 1200 800" preserveAspectRatio="xMidYMid slice">
            <defs>
              <linearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" style={{stopColor:'#3b82f6', stopOpacity:0.3}} />
                <stop offset="50%" style={{stopColor:'#60a5fa', stopOpacity:0.6}} />
                <stop offset="100%" style={{stopColor:'#3b82f6', stopOpacity:0.3}} />
              </linearGradient>
            </defs>
            <path
              d="M0,400 Q300,300 600,400 T1200,400"
              stroke="url(#gradient1)"
              strokeWidth="2"
              fill="none"
              className="animate-pulse"
            />
            <path
              d="M0,500 Q300,400 600,500 T1200,500"
              stroke="url(#gradient1)"
              strokeWidth="1"
              fill="none"
              className="animate-pulse"
              style={{animationDelay: '1s'}}
            />
            <path
              d="M0,300 Q300,200 600,300 T1200,300"
              stroke="url(#gradient1)"
              strokeWidth="1.5"
              fill="none"
              className="animate-pulse"
              style={{animationDelay: '2s'}}
            />
          </svg>
        </div>

        {/* Code Overlay */}
        <div className="absolute top-20 right-10 text-blue-300/20 font-mono text-xs hidden lg:block">
          <div className="space-y-1">
            <div>const developer = {'{'}</div>
            <div className="ml-4">name: 'Ketan Nag',</div>
            <div className="ml-4">skills: ['React', 'Node.js', 'Python', 'ML'],</div>
            <div className="ml-4">passion: 'Innovation & Intelligence'</div>
            <div>{'}'}</div>
          </div>
        </div>

        {/* Geometric Patterns */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-1/4 left-1/4 w-32 h-32 border border-blue-400 rotate-45 animate-spin-slow"></div>
          <div className="absolute bottom-1/4 right-1/4 w-24 h-24 border border-cyan-400 rotate-12 animate-pulse"></div>
          <div className="absolute top-1/2 left-1/2 w-16 h-16 bg-blue-500/30 rounded-full animate-ping"></div>
        </div>
      </div>

      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 h-screen flex items-center">
        <div className="w-full max-w-4xl">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white mb-6">
              <span className="block">Ketan</span>
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">
                Nag
              </span>
            </h1>
            
            <h2 className="text-xl sm:text-2xl lg:text-3xl text-gray-300 mb-8 font-light">
              Full Stack Developer | Machine Learning Enthusiast
            </h2>
            
            <p className="text-lg text-gray-400 mb-12 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
              Passionate about building scalable web solutions and intelligent systems that 
              bridge the gap between cutting-edge technology and real-world applications.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-12">
              <a
                href="#projects"
                className="px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-600 text-white rounded-lg font-semibold hover:from-blue-700 hover:to-cyan-700 transition-all duration-300 transform hover:scale-105 text-center"
              >
                View Projects
              </a>
              <a
                href="#contact"
                className="px-8 py-4 border-2 border-blue-500 text-blue-400 rounded-lg font-semibold hover:bg-blue-500 hover:text-white transition-all duration-300 text-center"
              >
                Connect
              </a>
            </div>

            <div className="flex gap-6 justify-center lg:justify-start">
              <a href="mailto:ketannag6677@gmail.com" className="text-gray-400 hover:text-blue-400 transition-colors duration-200">
                <Mail size={24} />
              </a>
              <a href="https://github.com/KetanNag" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-blue-400 transition-colors duration-200">
                <Github size={24} />
              </a>
              <a href="https://linkedin.com/in/ketannag" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-blue-400 transition-colors duration-200">
                <Linkedin size={24} />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <div className="animate-bounce">
          <div className="w-6 h-10 border-2 border-blue-400 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-blue-400 rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
