import React from 'react';
import { ExternalLink, Github } from 'lucide-react';

const Projects: React.FC = () => {
  const projects = [
    {
      title: 'Student Placement Portal',
      description: 'A comprehensive university placement system with role-based access control for students, companies, and administrators. Features email alerts and real-time notifications.',
      technologies: ['React', 'Node.js', 'Express', 'MySQL', 'PrimeReact'],
      color: 'from-blue-500 to-cyan-500',
      features: ['Role-based Access', 'Email Alerts', 'Real-time Updates', 'Admin Dashboard'],
      github: 'https://github.com/KetanNag'
    },
    {
      title: 'Resume Builder System',
      description: 'A full-stack resume generation tool built during Zidio internship. Features dynamic templates, real-time preview, and professional formatting.',
      technologies: ['MERN', 'Tailwind CSS', 'REST APIs'],
      color: 'from-purple-500 to-pink-500',
      features: ['Dynamic Templates', 'Real-time Preview', 'PDF Export', 'Professional Format'],
      github: 'https://github.com/KetanNag'
    },
    {
      title: 'Movie Recommendation System',
      description: 'An intelligent recommendation engine using cosine similarity for content-based filtering. Analyzes movie preferences to suggest personalized content.',
      technologies: ['Python', 'Pandas', 'NumPy', 'Scikit-learn'],
      color: 'from-green-500 to-blue-500',
      features: ['Cosine Similarity', 'Content Filtering', 'Data Analysis', 'ML Algorithms'],
      github: 'https://github.com/KetanNag'
    },
    {
      title: 'Face Recognition Attendance',
      description: 'Real-time student attendance system using advanced face detection and recognition with retraining capabilities.',
      technologies: ['Python', 'Flask', 'OpenCV'],
      color: 'from-red-500 to-orange-500',
      features: ['Real-time Detection', 'Face Recognition', 'Auto Retraining', 'Web Interface'],
      github: 'https://github.com/KetanNag'
    },
    {
      title: 'Climate Change Model',
      description: 'Forecasts climate data with ML models and comprehensive dashboards for data visualization.',
      technologies: ['Python', 'Scikit-learn', 'LSTM', 'Power BI'],
      color: 'from-yellow-500 to-green-500',
      features: ['LSTM Networks', 'Climate Forecasting', 'ML Models', 'Data Dashboards'],
      github: 'https://github.com/KetanNag'
    }
  ];

  return (
    <section id="projects" className="py-20 bg-slate-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-white text-center mb-4">
            Featured <span className="text-blue-400">Projects</span>
          </h2>
          <p className="text-center text-gray-400 mb-16">
            <a href="https://github.com/KetanNag" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition-colors">
              View all projects on GitHub →
            </a>
          </p>
          
          <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div
                key={index}
                className="group bg-slate-900/50 rounded-xl overflow-hidden border border-blue-500/20 hover:border-blue-500/40 transition-all duration-500 hover:transform hover:scale-105"
              >
                <div className={`h-48 bg-gradient-to-br ${project.color} relative overflow-hidden`}>
                  <div className="absolute inset-0 bg-black/20"></div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-white/80 text-6xl font-bold opacity-50">
                      {index + 1}
                    </div>
                  </div>
                  
                  {/* Animated Lines */}
                  <svg className="absolute inset-0 w-full h-full opacity-30">
                    <defs>
                      <linearGradient id={`projectGradient${index}`} x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" style={{stopColor:'#ffffff', stopOpacity:0.5}} />
                        <stop offset="100%" style={{stopColor:'#ffffff', stopOpacity:0.1}} />
                      </linearGradient>
                    </defs>
                    <path
                      d="M0,50 Q50,20 100,50 T200,50"
                      stroke={`url(#projectGradient${index})`}
                      strokeWidth="2"
                      fill="none"
                      className="animate-pulse"
                    />
                  </svg>
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors">
                    {project.title}
                  </h3>
                  
                  <p className="text-gray-300 mb-4 leading-relaxed">
                    {project.description}
                  </p>
                  
                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-gray-400 mb-2">Key Features:</h4>
                    <div className="grid grid-cols-2 gap-1">
                      {project.features.map((feature, featureIndex) => (
                        <span key={featureIndex} className="text-xs text-gray-300 bg-slate-700/50 px-2 py-1 rounded">
                          {feature}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className={`px-3 py-1 text-xs font-medium text-white rounded-full bg-gradient-to-r ${project.color}`}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  
                  <div className="flex gap-3">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors text-sm"
                    >
                      <Github size={16} />
                      Code
                    </a>
                    <button className="flex items-center gap-2 px-4 py-2 border border-blue-500 text-blue-400 rounded-lg hover:bg-blue-500 hover:text-white transition-colors text-sm">
                      <ExternalLink size={16} />
                      Demo
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
