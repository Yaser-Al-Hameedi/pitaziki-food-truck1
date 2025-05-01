const Services = () => {
  return (
    <section className="bg-gray-50 py-16 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-light text-gray-900 mb-2 tracking-wider">SERVICES</h2>
          <p className="text-gray-600 italic">Mediterranean flavors for your special day</p>
          <div className="w-30 h-px bg-lime-300 mx-auto mt-4"></div>
        </div>

        {/* Three Package Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">

          {/* Wedding Package */}
          <div className="bg-white shadow-sm border border-gray-200 overflow-hidden">
            <div className="relative h-48 w-full">
              <img
                src="/wedding-foodtruck.jpg"
                alt="Wedding catering"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900/10 to-transparent"></div>
              <span className="absolute top-4 right-4 bg-lime-500 text-white text-xs font-medium px-3 py-1">
                POPULAR
              </span>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Wedding Feast</h3>
              <p className="text-gray-600 font-light mb-5">
                Custom buffet for 50-200 guests with fresh Mediterranean flavors.
              </p>
              <ul className="space-y-2 mb-6">
                <li className="text-gray-600">• Mezze stations</li>
                <li className="text-gray-600">• Late-night snacks</li>
                <li className="text-gray-600">• Dietary accommodations</li>
              </ul>
              <button className="w-full shadow-sm border border-black bg-white-500 hover:bg-gray-100 text-black py-2 font-medium transition-colors">
                Learn More
              </button>
            </div>
          </div>

          {/* Corporate Package */}
          <div className="bg-white shadow-sm border border-gray-200 overflow-hidden">
            <div className="relative h-48 w-full">
              <img
                src="/corporate-event.jpg"
                alt="Corporate catering"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900/10 to-transparent"></div>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Corporate Events</h3>
              <p className="text-gray-600 font-light mb-5">
                Professional catering for meetings, conferences, and corporate gatherings.
              </p>
              <ul className="space-y-2 mb-6">
                <li className="text-gray-600">• Quick service</li>
                <li className="text-gray-600">• Custom menus</li>
                <li className="text-gray-600">• Branding options</li>
              </ul>
              <button className="w-full bg-white-500 hover:bg-gray-100 shadow-sm border border-black text-black py-2 font-medium transition-colors">
                Learn More
              </button>
            </div>
          </div>

          {/* Private Party Package */}
          <div className="bg-white shadow-sm border border-gray-200 overflow-hidden">
            <div className="relative h-48 w-full">
              <img
                src="/private-party.jpg"
                alt="Private party catering"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900/10 to-transparent"></div>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Private Parties</h3>
              <p className="text-gray-600 font-light mb-5">
                Memorable dining experience for birthdays, anniversaries, and celebrations.
              </p>
              <ul className="space-y-2 mb-6">
                <li className="text-gray-600">• Interactive stations</li>
                <li className="text-gray-600">• Themed menus</li>
                <li className="text-gray-600">• Flexible scheduling</li>
              </ul>
              <button className="w-full bg-white-500 hover:bg-gray-100 shadow-sm border border-black-500 text-black py-2 font-medium transition-colors">
                Learn More
              </button>
            </div>
          </div>
        </div>


      
        {/* Food Truck Services */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-light text-gray-900 mb-2 tracking-wider">FOOD TRUCK SERVICES</h2>
          <p className="text-gray-600 italic">Perfect for corporate events, parties, and private gatherings</p>
          <div className="w-30 h-px bg-lime-300 mx-auto mt-4"></div>
        </div>

        {/* Horizontal Scrolling Container */}
        <div className="relative">
          <div className="flex space-x-8 pb-6 overflow-x-auto scrollbar-hide">
            
            {/* Card 1 - Up to 50 Guests */}
            <div className="flex-shrink-0 w-96 bg-white shadow-sm border border-gray-200 overflow-hidden">
              <div className="relative h-64 w-full">
                <img src="/foodtruck-event1.jpg" alt="Event catering" className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/10 to-transparent"></div>
              </div>
              <div className="p-6">
                <div className="flex justify-between items-baseline mb-3">
                  <h3 className="text-xl font-semibold text-gray-900">Up to 50 Guests</h3>
                  <p className="text-xl font-semibold text-gray-800">$1,355.96</p>
                </div>
                <div className="space-y-3 mb-6">
                  <p className="text-gray-600"><strong>Staff:</strong> 1-2 servers</p>
                  <p className="text-gray-600"><strong>Lunch:</strong> 11:30AM - 3:30PM</p>
                  <p className="text-gray-400 text-center">or</p>
                  <p className="text-gray-600"><strong>Dinner:</strong> 5:30PM - 9:00PM</p>
                </div>
                <button className="w-full shadow-sm border border-black bg-white hover:bg-gray-100 text-black py-3 font-medium transition-colors">
                  Book Now
                </button>
              </div>
            </div>

            {/* Card 2 - 50-75 Guests (Popular) */}
            <div className="flex-shrink-0 w-96 bg-white shadow-sm border border-gray-200 overflow-hidden">
              <div className="relative h-64 w-full">
                <img src="/foodtruck-event2.jpg" alt="Event catering" className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/10 to-transparent"></div>
                <span className="absolute top-4 right-4 bg-lime-500 text-white text-xs font-medium px-3 py-1">
                  POPULAR
                </span>
              </div>
              <div className="p-6">
                <div className="flex justify-between items-baseline mb-3">
                  <h3 className="text-xl font-semibold text-gray-900">50-75 Guests</h3>
                  <p className="text-xl font-semibold text-gray-800">$1,676.01</p>
                </div>
                <div className="space-y-3 mb-6">
                  <p className="text-gray-600"><strong>Staff:</strong> 1-2 servers</p>
                  <p className="text-gray-600"><strong>Lunch:</strong> 11:30AM - 3:30PM</p>
                  <p className="text-gray-400 text-center">or</p>
                  <p className="text-gray-600"><strong>Dinner:</strong> 5:30PM - 9:00PM</p>
                </div>
                <button className="w-full shadow-sm border border-black bg-white hover:bg-gray-100 text-black py-3 font-medium transition-colors">
                  Book Now
                </button>
              </div>
            </div>

            {/* Card 3 - 75-100 Guests */}
            <div className="flex-shrink-0 w-96 bg-white shadow-sm border border-gray-200 overflow-hidden">
              <div className="relative h-64 w-full">
                <img src="/foodtruck-event3.jpg" alt="Event catering" className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/10 to-transparent"></div>
              </div>
              <div className="p-6">
                <div className="flex justify-between items-baseline mb-3">
                  <h3 className="text-xl font-semibold text-gray-900">75-100 Guests</h3>
                  <p className="text-xl font-semibold text-gray-800">$2,100.01</p>
                </div>
                <div className="space-y-3 mb-6">
                  <p className="text-gray-600"><strong>Staff:</strong> 1-2 servers</p>
                  <p className="text-gray-600"><strong>Lunch:</strong> 11:30AM - 3:30PM</p>
                  <p className="text-gray-400 text-center">or</p>
                  <p className="text-gray-600"><strong>Dinner:</strong> 5:30PM - 9:00PM</p>
                </div>
                <button className="w-full shadow-sm border border-black bg-white hover:bg-gray-100 text-black py-3 font-medium transition-colors">
                  Book Now
                </button>
              </div>
            </div>

            {/* Card 4 - 100-125 Guests */}
            <div className="flex-shrink-0 w-96 bg-white shadow-sm border border-gray-200 overflow-hidden">
              <div className="relative h-64 w-full">
                <img src="/foodtruck-event4.jpg" alt="Event catering" className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/10 to-transparent"></div>
              </div>
              <div className="p-6">
                <div className="flex justify-between items-baseline mb-3">
                  <h3 className="text-xl font-semibold text-gray-900">100-125 Guests</h3>
                  <p className="text-xl font-semibold text-gray-800">$2,419.46</p>
                </div>
                <div className="space-y-3 mb-6">
                  <p className="text-gray-600"><strong>Staff:</strong> 2-3 servers</p>
                  <p className="text-gray-600"><strong>Lunch:</strong> 11:30AM - 3:30PM</p>
                  <p className="text-gray-400 text-center">or</p>
                  <p className="text-gray-600"><strong>Dinner:</strong> 5:30PM - 9:00PM</p>
                </div>
                <button className="w-full shadow-sm border border-black bg-white hover:bg-gray-100 text-black py-3 font-medium transition-colors">
                  Book Now
                </button>
              </div>
            </div>

            {/* Card 5 - 125-150 Guests */}
            <div className="flex-shrink-0 w-96 bg-white shadow-sm border border-gray-200 overflow-hidden">
              <div className="relative h-64 w-full">
                <img src="/foodtruck-event5.jpg" alt="Event catering" className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/10 to-transparent"></div>
              </div>
              <div className="p-6">
                <div className="flex justify-between items-baseline mb-3">
                  <h3 className="text-xl font-semibold text-gray-900">125-150 Guests</h3>
                  <p className="text-xl font-semibold text-gray-800">$2,924.63</p>
                </div>
                <div className="space-y-3 mb-6">
                  <p className="text-gray-600"><strong>Staff:</strong> 2-3 servers</p>
                  <p className="text-gray-600"><strong>Lunch:</strong> 11:30AM - 3:30PM</p>
                  <p className="text-gray-400 text-center">or</p>
                  <p className="text-gray-600"><strong>Dinner:</strong> 5:30PM - 9:00PM</p>
                </div>
                <button className="w-full shadow-sm border border-black bg-white hover:bg-gray-100 text-black py-3 font-medium transition-colors">
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