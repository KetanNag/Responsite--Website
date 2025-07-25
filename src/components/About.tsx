import React from 'react';
import { Calendar, MapPin, Languages } from 'lucide-react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-slate-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-white text-center mb-16">
            About <span className="text-blue-400">Me</span>
          </h2>
          
          <div className="grid lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <p className="text-lg text-gray-300 leading-relaxed mb-8">
                I am a passionate Full Stack Developer with extensive expertise in the MERN stack, 
                specializing in both frontend and backend development. My journey in technology is 
                driven by an insatiable curiosity for machine learning and intelligent systems, 
                constantly exploring innovative ways to integrate AI-driven solutions into web applications.
              </p>
              
              <p className="text-lg text-gray-300 leading-relaxed">
                With hands-on experience in building scalable applications, from university placement 
                systems to AI-powered recommendation engines, I enjoy tackling complex problems and 
                transforming ideas into elegant, functional solutions that make a real impact. My passion 
                extends beyond coding to creating intelligent systems that solve real-world challenges.
              </p>
            </div>
            
            <div className="space-y-6">
              <div className="bg-slate-700/50 p-6 rounded-lg border border-blue-500/20">
                <h3 className="text-xl font-semibold text-white mb-4">Personal Info</h3>
                
                <div className="space-y-4">
                  <div className="flex items-center text-gray-300">
                    <Calendar className="text-blue-400 mr-3" size={20} />
                    <div>
                      <span className="text-sm text-gray-400">Date of Birth</span>
                      <p className="font-medium">May 1, 2001</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center text-gray-300">
                    <MapPin className="text-blue-400 mr-3" size={20} />
                    <div>
                      <span className="text-sm text-gray-400">Location</span>
                      <p className="font-medium">Ahmedabad, India</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center text-gray-300">
                    <Languages className="text-blue-400 mr-3" size={20} />
                    <div>
                      <span className="text-sm text-gray-400">Languages</span>
                      <p className="font-medium">English, Hindi</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
