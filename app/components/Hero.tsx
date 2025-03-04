"use client";

import ImageSlideshow from './ImageSlideshow';

const Hero = () => {
  const images = [
    { 
      src: '/images/slide1.jpeg', 
      alt: 'Empowering our community through health initiatives and medical camps' 
    },
    { 
      src: '/images/slide2.jpeg', 
      alt: 'Providing quality education and learning opportunities for local students' 
    },
    { 
      src: '/images/slide3.jpeg', 
      alt: 'Working together to protect and preserve our environment' 
    },
    { 
      src: '/images/slide4.jpeg', 
      alt: 'Working together to protect and preserve our environment' 
    },
    { 
      src: '/images/slide5.jpeg', 
      alt: 'Working together to protect and preserve our environment' 
    },
    { 
      src: '/images/slide6.jpeg', 
      alt: 'Working together to protect and preserve our environment' 
    },
    { 
      src: '/images/slide7.jpeg', 
      alt: 'Working together to protect and preserve our environment' 
    },
    { 
      src: '/images/slide8.jpeg', 
      alt: 'Working together to protect and preserve our environment' 
    },
  ];

  return (
    <div className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-green-800 via-green-700 to-green-600 text-white overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMzLjMxIDAgNiAyLjY5IDYgNnMtMi42OSA2LTYgNi02LTIuNjktNi02IDIuNjktNiA2LTZ6TTI0IDQ4YzMuMzEgMCA2IDIuNjkgNiA2cy0yLjY5IDYtNiA2LTYtMi42OS02LTYgMi42OS02IDYtNnptMC0xMmMzLjMxIDAgNiAyLjY5IDYgNnMtMi42OSA2LTYgNi02LTIuNjktNi02IDIuNjktNiA2LTZ6IiBzdHJva2U9IiNmZmYiIHN0cm9rZS13aWR0aD0iMiIvPjwvZz48L3N2Zz4=')] bg-repeat opacity-20"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              <span className="block mb-2">Msambweni Better</span>
              <span className="block text-green-300">Heedu C.B.O</span>
            </h1>
            <p className="text-xl md:text-2xl mb-12 max-w-3xl mx-auto text-green-50 leading-relaxed">
              Creating positive change and improving the quality of life in Msambweni Sub-county through sustainable community-driven initiatives.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="#contact"
                className="inline-block bg-white text-green-700 px-8 py-4 rounded-full font-semibold hover:bg-green-50 transition duration-300 transform hover:scale-105 shadow-lg"
              >
                Get Involved
              </a>
              <a
                href="#about"
                className="inline-block border-2 border-white text-white px-8 py-4 rounded-full font-semibold hover:bg-white/10 transition duration-300 transform hover:scale-105"
              >
                Learn More
              </a>
            </div>
          </div>
          <div className="relative">
            <ImageSlideshow 
              images={images}
              interval={5000}
              className="shadow-2xl rounded-xl"
            />
          </div>
        </div>
      </div>

      {/* Decorative bottom gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent"></div>
    </div>
  );
};

export default Hero;
