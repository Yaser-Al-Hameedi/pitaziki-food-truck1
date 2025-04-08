const Services = () => {
  return (
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

        {/* Wedding Package Card (Full Width) */}
        <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300 mb-16">
          <div className="relative h-64 overflow-hidden">
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

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Pricing Tier 1 */}
            <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-shadow duration-300 border border-lime-100">
              <h4 className="text-xl font-semibold text-gray-800 mb-2">Up to 50 Guests</h4>
              <p className="text-2xl font-bold text-lime-600 mb-4">$1,355.96</p>
              <ul className="space-y-3 mb-6">
                <li className="flex items-start">
                  <span className="text-lime-500 mr-2">✓</span>
                  <span className="text-gray-600">1-2 servers included</span>
                </li>
                <li className="flex items-start">
                  <span className="text-lime-500 mr-2">✓</span>
                  <span className="text-gray-600">4-hour service window</span>
                </li>
                <li className="flex items-start">
                  <span className="text-lime-500 mr-2">✓</span>
                  <span className="text-gray-600">Lunch or dinner options</span>
                </li>
              </ul>
            </div>

            {/* Pricing Tier 2 */}
            <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-shadow duration-300 border border-lime-100">
              <h4 className="text-xl font-semibold text-gray-800 mb-2">50-75 Guests</h4>
              <p className="text-2xl font-bold text-lime-600 mb-4">$1,676.01</p>
              <ul className="space-y-3 mb-6">
                <li className="flex items-start">
                  <span className="text-lime-500 mr-2">✓</span>
                  <span className="text-gray-600">1-2 servers included</span>
                </li>
                <li className="flex items-start">
                  <span className="text-lime-500 mr-2">✓</span>
                  <span className="text-gray-600">4-hour service window</span>
                </li>
                <li className="flex items-start">
                  <span className="text-lime-500 mr-2">✓</span>
                  <span className="text-gray-600">Lunch or dinner options</span>
                </li>
              </ul>
            </div>

            {/* Pricing Tier 3 */}
            <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-shadow duration-300 border border-lime-100">
              <h4 className="text-xl font-semibold text-gray-800 mb-2">75-100 Guests</h4>
              <p className="text-2xl font-bold text-lime-600 mb-4">$2,100.01</p>
              <ul className="space-y-3 mb-6">
                <li className="flex items-start">
                  <span className="text-lime-500 mr-2">✓</span>
                  <span className="text-gray-600">1-2 servers included</span>
                </li>
                <li className="flex items-start">
                  <span className="text-lime-500 mr-2">✓</span>
                  <span className="text-gray-600">4-hour service window</span>
                </li>
                <li className="flex items-start">
                  <span className="text-lime-500 mr-2">✓</span>
                  <span className="text-gray-600">Lunch or dinner options</span>
                </li>
              </ul>
            </div>

            {/* Pricing Tier 4 */}
            <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-shadow duration-300 border border-lime-100">
              <h4 className="text-xl font-semibold text-gray-800 mb-2">100-125 Guests</h4>
              <p className="text-2xl font-bold text-lime-600 mb-4">$2,419.46</p>
              <ul className="space-y-3 mb-6">
                <li className="flex items-start">
                  <span className="text-lime-500 mr-2">✓</span>
                  <span className="text-gray-600">2-3 servers included</span>
                </li>
                <li className="flex items-start">
                  <span className="text-lime-500 mr-2">✓</span>
                  <span className="text-gray-600">4-hour service window</span>
                </li>
                <li className="flex items-start">
                  <span className="text-lime-500 mr-2">✓</span>
                  <span className="text-gray-600">Lunch or dinner options</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="text-center mt-10">
            <p className="text-gray-600 mb-6">
              For groups over 125 guests or custom requests, please call us at {' '}
              <a href="tel:2037735000" className="text-lime-600 hover:underline font-medium">203.773.5000</a>
            </p>
            <button className="bg-white border-2 border-lime-500 text-lime-600 hover:bg-lime-50 py-3 px-8 rounded-lg font-medium transition-colors duration-200">
              Book Your Event
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;