import React from 'react';
import { GraduationCap, Award } from 'lucide-react';

const Education: React.FC = () => {
  const educationData = [
    {
      degree: 'Bachelor of Technology in Computer Science & Engineering',
      institution: 'Pandit Deendayal Energy University',
      cgpa: '7.14',
      status: 'Current',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      degree: 'Class XII',
      institution: 'Higher Secondary Education',
      cgpa: '62%',
      status: 'Completed',
      color: 'from-purple-500 to-pink-500'
    },
    {
      degree: 'Class X',
      institution: 'Secondary Education',
      cgpa: '75%',
      status: 'Completed',
      color: 'from-green-500 to-blue-500'
    }
  ];

  const certifications = [
    'Python Programming (Udemy)',
    'Web Development Bootcamp',
    'Computer Vision',
    'Fintech/Blockchain',
    'SSC CGL'
  ];

  const achievements = [
    'Finalist in District-level Cricket Tournament'
  ];

  return (
    <section id="education" className="py-20 bg-slate-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-white text-center mb-16">
            Education & <span className="text-blue-400">Achievements</span>
          </h2>
          
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Education */}
            <div className="lg:col-span-2">
              <h3 className="text-2xl font-bold text-white mb-8 flex items-center">
                <GraduationCap className="text-blue-400 mr-3" size={28} />
                Education
              </h3>
              
              <div className="space-y-6">
                {educationData.map((edu, index) => (
                  <div
                    key={index}
                    className="bg-slate-900/50 p-6 rounded-lg border border-blue-500/20 hover:border-blue-500/40 transition-all duration-300"
                  >
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex-1">
                        <h4 className="text-xl font-semibold text-white mb-2">
                          {edu.degree}
                        </h4>
                        <p className="text-blue-400 font-medium mb-2">
                          {edu.institution}
                        </p>
                      </div>
                      <div className="text-right">
                        <div className={`inline-block px-3 py-1 text-sm font-medium text-white rounded-full bg-gradient-to-r ${edu.color}`}>
                          {edu.status}
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center">
                      <span className="text-gray-300">Score: </span>
                      <span className="text-white font-semibold ml-2">{edu.cgpa}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Certifications & Achievements */}
            <div className="space-y-8">
              {/* Certifications */}
              <div>
                <h3 className="text-2xl font-bold text-white mb-6 flex items-center">
                  <Award className="text-blue-400 mr-3" size={24} />
                  Certifications
                </h3>
                
                <div className="space-y-3">
                  {certifications.map((cert, index) => (
                    <div
                      key={index}
                      className="bg-slate-900/50 p-4 rounded-lg border border-blue-500/20 hover:border-blue-500/40 transition-all duration-300 hover:transform hover:scale-105"
                    >
                      <p className="text-gray-300 font-medium">{cert}</p>
                    </div>
                  ))}
                </div>
              </div>
              
              {/* Achievements */}
              <div>
                <h3 className="text-2xl font-bold text-white mb-6">
                  Achievements
                </h3>
                
                <div className="space-y-3">
                  {achievements.map((achievement, index) => (
                    <div
                      key={index}
                      className="bg-gradient-to-r from-green-500/20 to-blue-500/20 p-4 rounded-lg border border-green-500/30"
                    >
                      <p className="text-gray-300 font-medium">{achievement}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
