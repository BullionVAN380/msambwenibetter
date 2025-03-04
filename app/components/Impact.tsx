"use client";

import { FaHeartbeat, FaTree, FaGraduationCap } from 'react-icons/fa';

const Impact = () => {
  const impacts = [
    {
      icon: <FaHeartbeat className="w-8 h-8" />,
      title: "Health",
      achievements: [
        "Reduced malaria incidence through mosquito net distribution",
        "Mentorship on WASH services",
        "Mental health awareness in schools and community"
      ],
      color: "from-red-500 to-pink-500"
    },
    {
      icon: <FaTree className="w-8 h-8" />,
      title: "Environment",
      achievements: [
        "Planted over 5,000 trees",
        "Participated in beach cleaning activities",
        "Environmental conservation mentorship"
      ],
      color: "from-green-500 to-emerald-500"
    },
    {
      icon: <FaGraduationCap className="w-8 h-8" />,
      title: "Education",
      achievements: [
        "Conducted motivational talks in local schools",
        "Improved access to birth certificates",
        "Enhanced educational resources"
      ],
      color: "from-blue-500 to-indigo-500"
    }
  ];

  return (
    <section id="impact" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Our <span className="text-green-700">Impact</span>
          </h2>
          <div className="w-24 h-1 bg-green-700 mx-auto mb-8"></div>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {impacts.map((impact, index) => (
            <div
              key={index}
              className="group bg-white rounded-2xl shadow-lg overflow-hidden transform hover:-translate-y-1 transition-all duration-300"
            >
              <div className={`bg-gradient-to-br ${impact.color} p-6 text-white`}>
                <div className="flex items-center justify-center mb-4">
                  <div className="w-16 h-16 rounded-full bg-white/20 flex items-center justify-center transform group-hover:scale-110 transition-transform duration-300">
                    {impact.icon}
                  </div>
                </div>
                <h3 className="text-2xl font-semibold text-center">{impact.title}</h3>
              </div>

              <div className="p-6">
                <ul className="space-y-3">
                  {impact.achievements.map((achievement, i) => (
                    <li key={i} className="flex items-start space-x-2">
                      <span className="text-green-500 mt-1">•</span>
                      <span className="text-gray-600">{achievement}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Impact;
