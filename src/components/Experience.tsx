import React from 'react';
import { Briefcase, Calendar } from 'lucide-react';

const Experience: React.FC = () => {
  const experiences = [
    {
      title: 'Web Developer Intern',
      company: 'Zidio Development',
      period: 'May - July 2024',
      description: 'Built a comprehensive full-stack Resume Builder system with dynamic templates and REST API integration, focusing on responsive design and user experience.',
      responsibilities: [
        'Built full-stack Resume Builder with REST APIs and responsive design',
        'Implemented dynamic templates and real-time preview functionality',
        'Developed user authentication and data management systems',
        'Created responsive UI using modern CSS frameworks'
      ],
      technologies: ['MERN Stack', 'REST APIs', 'Tailwind CSS', 'React.js'],
      color: 'from-blue-500 to-cyan-500'
    },
    {
      title: 'Developer',
      company: 'Forage Virtual Internship',
      period: 'June - July 2024',
      description: 'Integrated live stock data into dashboards using Python and frontend basics, focusing on data visualization and user interface optimization.',
      responsibilities: [
        'Integrated live stock data into interactive dashboards',
        'Optimized frontend performance and user interface',
        'Implemented Python backend for data processing',
        'Enhanced user experience with responsive design elements'
      ],
      technologies: ['Python', 'JavaScript', 'Data Visualization', 'Frontend Basics'],
      color: 'from-purple-500 to-pink-500'
    }
  ];

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
            
            <div className="space-y-12">
              {experiences.map((exp, index) => (
                <div key={index} className="relative flex items-start">
                  <div className={`flex-shrink-0 w-16 h-16 bg-gradient-to-r ${exp.color} rounded-full flex items-center justify-center relative z-10`}>
                    <Briefcase className="text-white" size={24} />
                  </div>
                  
                  <div className="ml-8 flex-1">
                    <div className="bg-slate-800/50 p-8 rounded-lg border border-blue-500/20">
                      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4">
                        <h3 className="text-2xl font-bold text-white">{exp.title}</h3>
                        <div className="flex items-center text-blue-400 mt-2 sm:mt-0">
                          <Calendar size={16} className="mr-2" />
                          <span className="text-sm">{exp.period}</span>
                        </div>
                      </div>
                      
                      <h4 className="text-xl text-blue-400 mb-4 font-semibold">{exp.company}</h4>
                      
                      <p className="text-gray-300 mb-6 leading-relaxed">
                        {exp.description}
                      </p>
                      
                      <div className="space-y-4">
                        <div>
                          <h5 className="text-lg font-semibold text-white mb-2">Key Responsibilities:</h5>
                          <ul className="list-disc list-inside text-gray-300 space-y-1">
                            {exp.responsibilities.map((responsibility, respIndex) => (
                              <li key={respIndex}>{responsibility}</li>
                            ))}
                          </ul>
                        </div>
                        
                        <div>
                          <h5 className="text-lg font-semibold text-white mb-3">Technologies Used:</h5>
                          <div className="flex flex-wrap gap-2">
                            {exp.technologies.map((tech, techIndex) => (
                              <span
                                key={techIndex}
                                className={`px-3 py-1 text-sm font-medium text-white rounded-full bg-gradient-to-r ${exp.color}`}
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
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
