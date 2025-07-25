import React from 'react';
import { GraduationCap, Award } from 'lucide-react';

const Education: React.FC = () => {
  const educationData = [
    {
      degree: 'Bachelor of Technology in Computer Science & Engineering',
      institution: 'Pandit Deendayal Energy University (PDEU)',
      cgpa: '7.14',
      period: '2021 - 2025',
      status: 'Current',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      degree: 'Class XII (Higher Secondary)',
      institution: 'Higher Secondary Education Board',
      cgpa: '62%',
      period: '2019',
      status: 'Completed',
      color: 'from-purple-500 to-pink-500'
    },
    {
      degree: 'Class X (Secondary)',
      institution: 'Secondary Education Board',
      cgpa: '75%',
      period: '2017',
      status: 'Completed',
      color: 'from-green-500 to-blue-500'
    }
  ];

  const certifications = [
    'Python Programming (Udemy)',
    'Web Development Bootcamp',
    'Computer Vision',
    'Fintech (AI & Blockchain)',
    'Entrepreneurship'
  ];

  return (
    <section id="education" className="py-20 bg-slate-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-white text-center mb-16">
            Education & <span className="text-blue-400">Certifications</span>
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
                        <p className="text-gray-400 text-sm">
                          {edu.period}
                        </p>
                      </div>
                      <div className="text-right">
                        <div className={`inline-block px-3 py-1 text-sm font-medium text-white rounded-full bg-gradient-to-r ${edu.color} mb-2`}>
                          {edu.status}
                        </div>
                        <div className="text-white font-semibold">
                          CGPA: {edu.cgpa}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Certifications */}
            <div>
              <h3 className="text-2xl font-bold text-white mb-8 flex items-center">
                <Award className="text-blue-400 mr-3" size={24} />
                Certifications
              </h3>
              
              <div className="space-y-4">
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
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
