import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Testimonials from './components/Testimonials';
import Home from './components/Home';

function App() {
  return (
    <div className="font-sans text-white bg-[#FFFFFF] min-h-screen w-full overflow-x-hidden">
      
      <Home />
      
    // Our Story Section

      <section className="bg-white py-20 px-4 sm:px-8">
  <div className="max-w-6xl mx-auto">
    {/* Main Header with Decorative Elements */}
    <div className="text-center mb-16 relative">
      <h2 className="text-4xl md:text-5xl font-light text-gray-800 mb-6">
        <span className="relative inline-block">
          OUR STORY
          <span className="absolute -bottom-3 left-0 right-0 h-1 bg-lime-400 transform scale-x-75 origin-center"></span>
        </span>
      </h2>
      <p className="text-lg text-lime-600 max-w-2xl mx-auto italic">
        A Mediterranean journey of flavor and passion
      </p>
    </div>

    {/* Equal-Width Columns with Visual Impact */}
    <div className="grid md:grid-cols-2 gap-10 items-stretch">
      {/* Text Box - Enhanced Styling */}
      <div className="bg-gradient-to-br from-gray-50 to-white p-10 rounded-xl shadow-lg border border-gray-100 relative overflow-hidden">
        {/* Decorative Mediterranean pattern */}
        <div className="absolute top-0 right-0 w-32 h-32 bg-lime-100 opacity-20 rounded-full -mr-16 -mt-16"></div>
        <div className="absolute bottom-0 left-0 w-24 h-24 bg-lime-100 opacity-20 rounded-full -ml-12 -mb-12"></div>
        
        <div className="relative">
          <p className="text-gray-600 mb-6 leading-relaxed text-lg">
            <span className="text-2xl text-lime-500 font-serif">"</span>
            Just like the freshness of Pita dipped in Taziki sauce, Pitaziki brings delicious, nutritious, fresh Mediterranean food to you in an open and bright interior. Our top quality food and reasonable prices make us the best option for a healthy, personalized, quick-serve meal any time of the day.
          </p>
          
          <p className="text-gray-600 mb-6 leading-relaxed">
            It's the sight and aroma of Pitaziki, pita, falafel and shawarma being made in front of you. It's exotic Mediterranean entrée choices you can customize any way you want. It's authentic sauces and flavors you won't find anywhere else. It's the graciousness and warmth so characteristic of Mediterranean hospitality.
          </p>
          
          <div className="bg-lime-50 p-6 rounded-lg mb-6 border-l-4 border-lime-300">
            <p className="text-gray-600 italic">
              "We purchase the freshest ingredients and prepare our foods daily in small batches. Our recipes are both classic and inventive, while our atmosphere is fun and energizing."
            </p>
          </div>
          
          <p className="text-gray-600">
            At Pitaziki, we are not only dedicated to satisfying the appetites of our customers, but also to leave them feeling happier. Every one of our staff are committed to making the Pitaziki experience as easy and enjoyable as possible.
          </p>
        </div>
      </div>

      {/* Image Box - Enhanced Styling */}
      <div className="relative group rounded-xl overflow-hidden shadow-lg h-full">
        {/* Image with overlay effect */}
        <img 
          src="/Ammar.png" 
          alt="Pitaziki restaurant team preparing fresh food"
          className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
        />
        {/* Decorative overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900/30 to-transparent"></div>
        
      </div>
    </div>

    {/* Signature CTA */}
    <div className="text-center mt-16">
      <button className="text-gray-800 font-medium italic">
      "We want you to enjoy good food anytime, anywhere."
      </button>
    </div>
  </div>
</section>

// Services Section

<section className="bg-gray-50 py-16 px-4 sm:px-8">
  <div className="max-w-6xl mx-auto">
    {/* Section Header */}
    <div className="text-center mb-12">
      <h2 className="text-3xl md:text-4xl font-light text-gray-800 mb-2">
         SERVICES
      </h2>
      <p className="text-lime-600 italic">Mediterranean flavors for your special day</p>
      <div className="w-24 h-0.5 bg-lime-400 mx-auto mt-4"></div>
    </div>

    {/* Service Cards Grid */}
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
      {/* Wedding Package Card */}
      <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
        <div className="relative h-48 overflow-hidden">
          <img
            src="/wedding-foodtruck.jpg"  // Replace with your image
            alt="Food truck at a wedding"
            className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-gray-900/30 to-transparent"></div>
          <span className="absolute top-4 right-4 bg-lime-500 text-white text-xs font-bold px-3 py-1 rounded-full">
            POPULAR
          </span>
        </div>
        <div className="p-6">
          <h3 className="text-xl font-semibold text-gray-800 mb-2">Wedding Feast Package</h3>
          <p className="text-gray-600 mb-4">
            Customizable Mediterranean buffet for 50-200 guests, served fresh from our truck.
          </p>
          <ul className="space-y-2 mb-6">
            <li className="flex items-start">
              <span className="text-lime-500 mr-2">✓</span>
              <span className="text-gray-600">Falafel, shawarma, mezze stations</span>
            </li>
            <li className="flex items-start">
              <span className="text-lime-500 mr-2">✓</span>
              <span className="text-gray-600">Late-night pita snack service</span>
            </li>
            <li className="flex items-start">
              <span className="text-lime-500 mr-2">✓</span>
              <span className="text-gray-600">Vegan/GF options included</span>
            </li>
          </ul>
          <button className="w-full bg-lime-500 hover:bg-lime-600 text-white py-2 rounded-lg font-medium transition-colors duration-200">
            Inquire Now
          </button>
        </div>
      </div>

      {/* Add other service cards below */}
      <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
        {/* Cocktail Hour Package */}
      </div>
      <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
        {/* Rehearsal Dinner Package */}
      </div>
    </div>
  </div>
</section>


<Testimonials />

    



export default Testimonials;
    </div>
  
  
  );
}

export default App;
