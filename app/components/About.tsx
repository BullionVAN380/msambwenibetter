"use client";

const About = () => {
  return (
    <section id="about" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            About <span className="text-green-700">Us</span>
          </h2>
          <div className="w-24 h-1 bg-green-700 mx-auto mb-8"></div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Msambweni Better Heedu C.B.O is a community-based organization located in Vingujini, Msambweni Sub-county. Established in 2023 and officially registered in May 2024, we focus on sustainable development and community empowerment.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12 mt-16">
          <div className="bg-gradient-to-br from-green-50 to-white p-8 rounded-2xl shadow-lg transform hover:-translate-y-1 transition-transform duration-300">
            <div className="bg-green-700 w-16 h-16 rounded-full flex items-center justify-center mb-6 mx-auto md:mx-0">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <h3 className="text-2xl font-semibold text-green-700 mb-4 text-center md:text-left">Our Mission</h3>
            <p className="text-gray-600 leading-relaxed">
              To create a healthier, greener, and more educated society by implementing sustainable community-driven initiatives.
            </p>
          </div>
          
          <div className="bg-gradient-to-br from-green-50 to-white p-8 rounded-2xl shadow-lg transform hover:-translate-y-1 transition-transform duration-300">
            <div className="bg-green-700 w-16 h-16 rounded-full flex items-center justify-center mb-6 mx-auto md:mx-0">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
              </svg>
            </div>
            <h3 className="text-2xl font-semibold text-green-700 mb-4 text-center md:text-left">Our Vision</h3>
            <p className="text-gray-600 leading-relaxed">
              A thriving community with access to quality healthcare services, a clean and greener environment, and equitable education opportunities for all.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
