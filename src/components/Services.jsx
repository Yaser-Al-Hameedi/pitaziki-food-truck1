const Services = () => {
  return (
    <section className="bg-gray-50 py-16 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-light text-gray-900 mb-2 tracking-wider">SERVICES</h2>
          <p className="text-gray-600 italic">Mediterranean flavors for your special day</p>
          <div className="w-20 h-px bg-gray-300 mx-auto mt-4"></div>
        </div>

        {/* Three Package Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Wedding Package */}
          <div className="bg-white shadow-sm border border-gray-200 overflow-hidden"> {/* Removed rounded-lg */}
            <div className="relative h-48 w-full">
              <img
                src="/wedding-foodtruck.jpg"
                alt="Wedding catering"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900/10 to-transparent"></div>
              <span className="absolute top-4 right-4 bg-lime-500 text-white text-xs font-medium px-3 py-1"> {/* Removed rounded-full */}
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
              <button className="w-full bg-lime-500 hover:bg-lime-600 text-white py-2 font-medium transition-colors"> {/* Removed rounded */}
                Learn More
              </button>
            </div>
          </div>

          {/* Corporate Package */}
          <div className="bg-white shadow-sm border border-gray-200 overflow-hidden"> {/* Removed rounded-lg */}
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
              <button className="w-full bg-lime-500 hover:bg-lime-600 text-white py-2 font-medium transition-colors"> {/* Removed rounded */}
                Learn More
              </button>
            </div>
          </div>

          {/* Private Party Package */}
          <div className="bg-white shadow-sm border border-gray-200 overflow-hidden"> {/* Removed rounded-lg */}
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
              <button className="w-full bg-lime-500 hover:bg-lime-600 text-white py-2 font-medium transition-colors"> {/* Removed rounded */}
                Learn More
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;