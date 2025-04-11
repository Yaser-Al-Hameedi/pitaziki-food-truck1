const Services = () => {
    return (
      <section className="bg-gray-50 py-20 px-4 sm:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-light text-gray-800 mb-2">
              SERVICES
            </h2>
            <p className="text-lime-600 italic">Mediterranean flavors for your special day</p>
            <div className="w-24 h-0.5 bg-lime-400 mx-auto mt-4"></div>
          </div>
  
          {/* Wedding Package Card (Full Width) */}
          <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300 mb-16">
            <div className="relative h-100 overflow-hidden">
              <img
                src="/wedding-foodtruck.jpg"
                alt="Food truck at a wedding"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900/30 to-transparent"></div>
              <span className="absolute top-4 right-4 bg-lime-500 text-white text-xs font-bold px-3 py-1 rounded-full">
                POPULAR
              </span>
            </div>
            <div className="p-8">
              <h3 className="text-2xl font-semibold text-gray-800 mb-3">Wedding Feast Package</h3>
              <p className="text-gray-600 mb-6 text-lg">
                Customizable Mediterranean buffet for 50-200 guests, served fresh from our truck.
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start">
                  <span className="text-lime-500 mr-2 text-xl">✓</span>
                  <span className="text-gray-600 text-lg">Falafel, shawarma, mezze stations</span>
                </li>
                <li className="flex items-start">
                  <span className="text-lime-500 mr-2 text-xl">✓</span>
                  <span className="text-gray-600 text-lg">Late-night pita snack service</span>
                </li>
                <li className="flex items-start">
                  <span className="text-lime-500 mr-2 text-xl">✓</span>
                  <span className="text-gray-600 text-lg">Vegan/GF options included</span>
                </li>
              </ul>
              <button className="w-full md:w-auto bg-lime-500 hover:bg-lime-600 text-white py-3 px-8 rounded-lg font-medium transition-colors duration-200 text-lg">
                Inquire Now
              </button>
            </div>
          </div>
  
          {/* Food Truck Pricing Section */}
          <div className="mb-12">
            <h3 className="text-2xl md:text-3xl font-light text-gray-800 mb-6 text-center">
              Food Truck Services
            </h3>
            <p className="text-gray-600 mb-8 text-center max-w-2xl mx-auto">
              Perfect for corporate events, parties, and private gatherings
            </p>
  
            <div className="flex flex-col items-center">
              {/* First Row - 3 cards */}
              <div className="grid md:grid-cols-3 gap-8 mb-8 w-full justify-items-center">
                {/* Pricing Tier 1 */}
                <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-all duration-300 border border-lime-100 flex flex-col transform hover:-translate-y-1 w-full max-w-[320px]">
                  <h4 className="text-xl font-semibold text-gray-800 mb-2 text-center">Up to 50 Guests</h4>
                  <p className="text-2xl font-bold text-gray-800 mb-4 text-center">$1,355<span className="text-lg">.96</span></p>
                  <div className="text-gray-600 mb-4 space-y-4 flex-grow">
                    <div className="text-center flex items-center justify-center gap-2">
                      <span className="text-gray-500">👨‍🍳</span>
                      <span className="font-medium">Staff: 1-2 servers</span>
                    </div>
                    <div className="bg-gray-50 p-3 rounded-lg">
                      <p className="font-medium text-sm text-center flex items-center justify-center gap-2">
                        <span>🥗</span> Lunch
                      </p>
                      <p className="text-xs text-center text-gray-500">11:30am - 3:30pm</p>
                    </div>
                    <div className="bg-gray-50 p-3 rounded-lg">
                      <p className="font-medium text-sm text-center flex items-center justify-center gap-2">
                        <span>🍽️</span> Dinner
                      </p>
                      <p className="text-xs text-center text-gray-500">5:30pm - 9:00pm</p>
                    </div>
                  </div>
                  <button className="w-full bg-lime-500 hover:bg-lime-600 text-white py-2.5 rounded-lg font-medium transition-colors duration-200 text-md shadow-sm hover:shadow-md">
                    Book Now
                  </button>
                </div>
  
                {/* Pricing Tier 2 - Highlighted Middle Offer */}
                <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-all duration-300 border-2 border-lime-200 flex flex-col transform hover:-translate-y-1 w-full max-w-[350px] relative">
                  <span className="absolute top-0 right-0 bg-lime-500 text-white text-xs font-bold px-3 py-1 rounded-tr-xl rounded-bl-lg">
                    BEST VALUE
                  </span>
                  <h4 className="text-xl font-semibold text-gray-800 mb-2 text-center">50-75 Guests</h4>
                  <p className="text-3xl font-bold text-gray-800 mb-4 text-center">$1,676<span className="text-lg">.01</span></p>
                  <div className="text-gray-600 mb-4 space-y-4 flex-grow">
                    <div className="text-center flex items-center justify-center gap-2">
                      <span className="text-gray-500">👨‍🍳</span>
                      <span className="font-medium">Staff: 1-2 servers</span>
                    </div>
                    <div className="bg-lime-50 p-3 rounded-lg">
                      <p className="font-medium text-sm text-center flex items-center justify-center gap-2">
                        <span>🥗</span> Lunch
                      </p>
                      <p className="text-xs text-center text-gray-500">11:30am - 3:30pm</p>
                    </div>
                    <div className="bg-lime-50 p-3 rounded-lg">
                      <p className="font-medium text-sm text-center flex items-center justify-center gap-2">
                        <span>🍽️</span> Dinner
                      </p>
                      <p className="text-xs text-center text-gray-500">5:30pm - 9:00pm</p>
                    </div>
                  </div>
                  <button className="w-full bg-lime-600 hover:bg-lime-700 text-white py-3 rounded-lg font-medium transition-colors duration-200 text-md shadow-md hover:shadow-lg">
                    Book Now
                  </button>
                </div>
  
                {/* Pricing Tier 3 */}
                <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-all duration-300 border border-lime-100 flex flex-col transform hover:-translate-y-1 w-full max-w-[320px]">
                  <h4 className="text-xl font-semibold text-gray-800 mb-2 text-center">75-100 Guests</h4>
                  <p className="text-2xl font-bold text-gray-800 mb-4 text-center">$2,100<span className="text-lg">.01</span></p>
                  <div className="text-gray-600 mb-4 space-y-4 flex-grow">
                    <div className="text-center flex items-center justify-center gap-2">
                      <span className="text-gray-500">👨‍🍳</span>
                      <span className="font-medium">Staff: 1-2 servers</span>
                    </div>
                    <div className="bg-gray-50 p-3 rounded-lg">
                      <p className="font-medium text-sm text-center flex items-center justify-center gap-2">
                        <span>🥗</span> Lunch
                      </p>
                      <p className="text-xs text-center text-gray-500">11:30am - 3:30pm</p>
                    </div>
                    <div className="bg-gray-50 p-3 rounded-lg">
                      <p className="font-medium text-sm text-center flex items-center justify-center gap-2">
                        <span>🍽️</span> Dinner
                      </p>
                      <p className="text-xs text-center text-gray-500">5:30pm - 9:00pm</p>
                    </div>
                  </div>
                  <button className="w-full bg-lime-500 hover:bg-lime-600 text-white py-2.5 rounded-lg font-medium transition-colors duration-200 text-md shadow-sm hover:shadow-md">
                    Book Now
                  </button>
                </div>
              </div>
  
              {/* Second Row - 2 cards (centered) */}
              <div className="grid md:grid-cols-2 gap-8 w-full max-w-2xl mx-auto justify-items-center">
                {/* Pricing Tier 4 */}
                <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-all duration-300 border border-lime-100 flex flex-col transform hover:-translate-y-1 w-full max-w-[320px]">
                  <h4 className="text-xl font-semibold text-gray-800 mb-2 text-center">100-125 Guests</h4>
                  <p className="text-2xl font-bold text-gray-800 mb-4 text-center">$2,419<span className="text-lg">.46</span></p>
                  <div className="text-gray-600 mb-4 space-y-4 flex-grow">
                    <div className="text-center flex items-center justify-center gap-2">
                      <span className="text-gray-500">👨‍🍳</span>
                      <span className="font-medium">Staff: 2-3 servers</span>
                    </div>
                    <div className="bg-gray-50 p-3 rounded-lg">
                      <p className="font-medium text-sm text-center flex items-center justify-center gap-2">
                        <span>🥗</span> Lunch
                      </p>
                      <p className="text-xs text-center text-gray-500">11:30am - 3:30pm</p>
                    </div>
                    <div className="bg-gray-50 p-3 rounded-lg">
                      <p className="font-medium text-sm text-center flex items-center justify-center gap-2">
                        <span>🍽️</span> Dinner
                      </p>
                      <p className="text-xs text-center text-gray-500">5:30pm - 9:00pm</p>
                    </div>
                  </div>
                  <button className="w-full bg-lime-500 hover:bg-lime-600 text-white py-2.5 rounded-lg font-medium transition-colors duration-200 text-md shadow-sm hover:shadow-md">
                    Book Now
                  </button>
                </div>
  
                {/* Pricing Tier 5 */}
                <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-all duration-300 border border-lime-100 flex flex-col transform hover:-translate-y-1 w-full max-w-[320px]">
                  <h4 className="text-xl font-semibold text-gray-800 mb-2 text-center">125-150 Guests</h4>
                  <p className="text-2xl font-bold text-gray-800 mb-4 text-center">$2,924<span className="text-lg">.63</span></p>
                  <div className="text-gray-600 mb-4 space-y-4 flex-grow">
                    <div className="text-center flex items-center justify-center gap-2">
                      <span className="text-gray-500">👨‍🍳</span>
                      <span className="font-medium">Staff: 2-3 servers</span>
                    </div>
                    <div className="bg-gray-50 p-3 rounded-lg">
                      <p className="font-medium text-sm text-center flex items-center justify-center gap-2">
                        <span>🥗</span> Lunch
                      </p>
                      <p className="text-xs text-center text-gray-500">11:30am - 3:30pm</p>
                    </div>
                    <div className="bg-gray-50 p-3 rounded-lg">
                      <p className="font-medium text-sm text-center flex items-center justify-center gap-2">
                        <span>🍽️</span> Dinner
                      </p>
                      <p className="text-xs text-center text-gray-500">5:30pm - 9:00pm</p>
                    </div>
                  </div>
                  <button className="w-full bg-lime-500 hover:bg-lime-600 text-white py-2.5 rounded-lg font-medium transition-colors duration-200 text-md shadow-sm hover:shadow-md">
                    Book Now
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  };
  
  export default Services;