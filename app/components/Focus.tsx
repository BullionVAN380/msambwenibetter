"use client";

import { FaHeartbeat, FaGraduationCap, FaLeaf } from 'react-icons/fa';
import { Tab } from '@headlessui/react';
import { Fragment } from 'react';

const Focus = () => {
  const focusAreas = [
    {
      icon: <FaHeartbeat className="w-8 h-8" />,
      title: "Health and Well-being",
      description: "Implementing programs that address prevalent health issues, promoting preventive care, and ensuring access to essential health services and awareness.",
      details: [
        "Distribution of mosquito nets",
        "Health education sessions",
        "Mental health awareness programs",
        "WASH services mentorship"
      ],
      color: "from-red-500 to-pink-500"
    },
    {
      icon: <FaLeaf className="w-8 h-8" />,
      title: "Environmental Empowerment",
      description: "Engaging the community in conservation efforts, sustainable resource management, and initiatives to protect local ecosystems.",
      details: [
        "Tree planting initiatives",
        "Beach cleaning activities",
        "Environmental education",
        "Sustainable resource management"
      ],
      color: "from-green-500 to-emerald-500"
    },
    {
      icon: <FaGraduationCap className="w-8 h-8" />,
      title: "Educational Empowerment",
      description: "Providing resources and support to improve educational outcomes, mentorship and school motivational talks.",
      details: [
        "School motivational talks",
        "Educational resource provision",
        "Mentorship programs",
        "Birth certificate access support"
      ],
      color: "from-blue-500 to-indigo-500"
    }
  ];

  return (
    <section id="focus" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Core Areas of <span className="text-green-700">Focus</span>
          </h2>
          <div className="w-24 h-1 bg-green-700 mx-auto mb-8"></div>
        </div>
        
        <Tab.Group>
          <Tab.List className="flex space-x-2 rounded-xl bg-white p-1 shadow-lg mb-12">
            {focusAreas.map((area) => (
              <Tab key={area.title} as={Fragment}>
                {({ selected }) => (
                  <button
                    className={`w-full rounded-lg py-2.5 text-sm font-medium leading-5
                      ${selected 
                        ? 'bg-green-700 text-white shadow'
                        : 'text-gray-700 hover:bg-green-50 hover:text-green-700'
                      } transition-all duration-200 ease-out`}
                  >
                    {area.title}
                  </button>
                )}
              </Tab>
            ))}
          </Tab.List>
          <Tab.Panels>
            {focusAreas.map((area, idx) => (
              <Tab.Panel
                key={idx}
                className={`rounded-xl bg-white p-6 shadow-lg
                  ring-white ring-opacity-60 ring-offset-2 ring-offset-green-400 focus:outline-none`}
              >
                <div className="relative group">
                  <div className={`absolute inset-0 bg-gradient-to-br opacity-5 rounded-lg ${area.color}`}></div>
                  <div className="relative">
                    <div className="flex items-center space-x-4 mb-6">
                      <div className={`w-16 h-16 rounded-full bg-gradient-to-br ${area.color} flex items-center justify-center text-white`}>
                        {area.icon}
                      </div>
                      <h3 className="text-2xl font-semibold text-gray-900">{area.title}</h3>
                    </div>
                    
                    <p className="text-gray-600 mb-6 leading-relaxed">{area.description}</p>
                    
                    <div className="grid md:grid-cols-2 gap-4">
                      {area.details.map((detail, i) => (
                        <div key={i} className="flex items-center space-x-2 text-gray-700">
                          <span className="w-2 h-2 rounded-full bg-green-500"></span>
                          <span>{detail}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </Tab.Panel>
            ))}
          </Tab.Panels>
        </Tab.Group>
      </div>
    </section>
  );
};

export default Focus;
