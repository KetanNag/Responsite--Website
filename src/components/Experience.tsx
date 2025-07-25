import React from 'react';
import { Briefcase, Calendar } from 'lucide-react';

const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-20 bg-slate-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-white text-center mb-16">
            Professional <span className="text-blue-400">Experience</span>
          </h2>
          
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-blue-500/30"></div>
            
            <div className="relative">
              <div className="flex items-start">
                <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center relative z-10">
                  <Briefcase className="text-white" size={24} />
                </div>
                
                <div className="ml-8 flex-1">
                  <div className="bg-slate-800/50 p-8 rounded-lg border border-blue-500/20">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4">
                      <h3 className="text-2xl font-bold text-white">Software Engineering Intern</h3>
                      <div className="flex items-center text-blue-400 mt-2 sm:mt-0">
                        <Calendar size={16} className="mr-2" />
                        <span className="text-sm">Internship Period</span>
                      </div>
                    </div>
                    
                    <h4 className="text-xl text-blue-400 mb-4 font-semibold">Forage</h4>
                    
                    <p className="text-gray-300 mb-6 leading-relaxed">
                      Developed and optimized live stock data dashboards, enhancing real-time data 
                      visualization and user experience. Worked extensively with modern web technologies 
                      to create efficient, scalable solutions.
                    </p>
                    
                    <div className="space-y-4">
                      <div>
                        <h5 className="text-lg font-semibold text-white mb-2">Key Responsibilities:</h5>
                        <ul className="list-disc list-inside text-gray-300 space-y-1">
                          <li>Dashboard optimization for live stock data visualization</li>
                          <li>Performance enhancement of real-time data processing</li>
                          <li>Frontend development using modern JavaScript frameworks</li>
                          <li>Integration of JSON APIs for dynamic data updates</li>
                        </ul>
                      </div>
                      
                      <div>
                        <h5 className="text-lg font-semibold text-white mb-3">Technologies Used:</h5>
                        <div className="flex flex-wrap gap-2">
                          {['Python', 'JSON', 'HTML', 'JavaScript'].map((tech, index) => (
                            <span
                              key={index}
                              className="px-3 py-1 text-sm font-medium text-white rounded-full bg-gradient-to-r from-blue-500 to-cyan-500"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
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

export default Experience;
