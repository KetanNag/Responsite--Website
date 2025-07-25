import React from 'react';

const Skills: React.FC = () => {
  const skillCategories = [
    {
      title: 'Programming Languages',
      skills: ['Python', 'JavaScript', 'HTML', 'CSS'],
      color: 'from-blue-500 to-blue-600'
    },
    {
      title: 'Full Stack/Backend',
      skills: ['Node.js', 'Express.js', 'MERN Stack'],
      color: 'from-green-500 to-green-600'
    },
    {
      title: 'Frontend',
      skills: ['React.js', 'PrimeReact', 'Material UI', 'Tailwind CSS'],
      color: 'from-purple-500 to-purple-600'
    },
    {
      title: 'Databases',
      skills: ['MySQL'],
      color: 'from-orange-500 to-orange-600'
    },
    {
      title: 'Tools',
      skills: ['Git', 'GitHub', 'JSON', 'Nodemailer'],
      color: 'from-cyan-500 to-cyan-600'
    },
    {
      title: 'ML Concepts',
      skills: ['Machine Learning', 'Data Analysis', 'Python ML Libraries'],
      color: 'from-pink-500 to-pink-600'
    }
  ];

  return (
    <section id="skills" className="py-20 bg-slate-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-white text-center mb-16">
            Technical <span className="text-blue-400">Skills</span>
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {skillCategories.map((category, index) => (
              <div
                key={index}
                className="bg-slate-800/50 p-6 rounded-lg border border-blue-500/20 hover:border-blue-500/40 transition-all duration-300 hover:transform hover:scale-105"
              >
                <div className={`w-12 h-12 rounded-lg bg-gradient-to-r ${category.color} flex items-center justify-center mb-4`}>
                  <div className="w-6 h-6 bg-white rounded-sm"></div>
                </div>
                
                <h3 className="text-xl font-semibold text-white mb-4">
                  {category.title}
                </h3>
                
                <div className="space-y-2">
                  {category.skills.map((skill, skillIndex) => (
                    <div
                      key={skillIndex}
                      className="flex items-center justify-between text-gray-300"
                    >
                      <span>{skill}</span>
                      <div className="w-20 h-2 bg-slate-700 rounded-full overflow-hidden">
                        <div
                          className={`h-full bg-gradient-to-r ${category.color} rounded-full animate-pulse`}
                          style={{
                            width: `${Math.random() * 30 + 70}%`,
                            animationDelay: `${skillIndex * 0.1}s`
                          }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
