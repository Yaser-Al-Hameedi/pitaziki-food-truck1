import React from 'react';

const Home = () => {
  return (
    <>
      {/* Navbar */}
      <header className="w-full flex items-center justify-between px-8 py-4 bg-white gap-8 max-w-none">
        {/* Logo */}
        <div className="h-12">
          <img
            src="http://pitaziki.com/wp-content/uploads/2021/09/Logo.jpg"
            alt="Pitaziki Logo"
            className="h-full object-contain"
          />
        </div>

        {/* Nav links */}
        <nav className="hidden md:flex items-center ml-8 space-x-8">
          <a 
            href="#"
            className="text-gray-800 uppercase text-[15px] tracking-[0.05em] font-light hover:text-lime-500 transition-colors duration-200 px-4 py-2"
          >
            HOME
          </a>
          <a 
            href="#"
            className="text-gray-800 uppercase text-[15px] tracking-[0.05em] font-light hover:text-lime-500 transition-colors duration-200 px-4 py-2"
          >
            OUR STORY
          </a>
          <a 
            href="#"
            className="text-gray-800 uppercase text-[15px] tracking-[0.05em] font-light hover:text-lime-500 transition-colors duration-200 px-4 py-2"
          >
            SERVICES
          </a>
          <a 
            href="#"
            className="text-gray-800 uppercase text-[15px] tracking-[0.05em] font-light hover:text-lime-500 transition-colors duration-200 px-4 py-2"
          >
            TESTIMONIALS
          </a>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="w-screen h-[1000px] md:h-[950px] relative overflow-hidden flex items-center justify-center">
        {/* Video background */}
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute top-0 left-0 w-screen h-full object-cover z-0"
        >
          <source src="/truck-promo.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        {/* Overlay content */}
        <div className="relative z-10 flex flex-col md:flex-row items-center justify-between w-full px-8 mx-auto">
          {/* Text content */}
          <div className="text-left md:w-1/2">
            <h1 className="text-3xl md:text-5xl font-bold leading-tight mb-4 text-white">
              Cook anything <br /> with the experts
            </h1>
            <p className="text-lg mb-6 text-gray-200 max-w-md">
              Experience Pitaziki's Mediterranean flavor in motion — authentic food on wheels!
            </p>
            <div className="space-x-4">
              <button className="bg-lime-600 text-white px-6 py-3 rounded-full font-semibold transition-all duration-200 hover:bg-white hover:text-lime-500 border-2 border-lime-600">
                Let's Cook
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;