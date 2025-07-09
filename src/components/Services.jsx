import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Services = () => {
  const [activeModal, setActiveModal] = useState(null);

  const servicesData = [
    {
      id: 1,
      title: "Wedding Feast",
      badge: "POPULAR",
      description:
        "Celebrate your special day with our exquisite wedding feast package, featuring a curated selection of mezze starters, gourmet entrées, and decadent desserts crafted to delight every guest.",
      features: [
        "Mezze stations",
        "Late-night snacks",
        "Dietary accommodations"
      ],
      review: {
        text:
          "We hired Pitaziki for our wedding reception, and every detail was flawless. The variety and quality of food kept our guests raving all night—highly recommend!",
        author: "Alex W.",
        rating: "★★★★★"
      }
    },
    {
      id: 2,
      title: "Corporate Events",
      description:
        "Elevate your corporate gatherings with our seamless catering service—custom menus, professional staffing, and elegant presentations designed to impress clients and colleagues alike.",
      features: [
        "Quick service",
        "Custom menus",
        "Branding options"
      ],
      review: {
        text:
          "Pitaziki showed up on time, served with precision, and made our office lunch a hit. Their build-your-own concept was perfect for our team’s varied tastes.",
        author: "Taylor J.",
        rating: "★★★★★"
      }
    },
    {
      id: 3,
      title: "Private Parties",
      description:
        "Host unforgettable private celebrations with our personalized party package, complete with interactive food stations, themed menus, and flexible scheduling to match your vision.",
      features: [
        "Interactive stations",
        "Themed menus",
        "Flexible scheduling"
      ],
      review: {
        text:
          "Our birthday bash was a breeze thanks to Pitaziki’s catering. From planning to execution, everything was smooth—and the food was superb!",
        author: "Timmy G.",
        rating: "★★★★★"
      }
    }
  ];

  const pricingData = [
    {
      id: 1,
      title: "Up to 50 Guests",
      price: "$1,355.96",
      staff: "1-2 servers",
      lunch: "11:30AM - 3:30PM",
      dinner: "5:30PM - 9:00PM"
    },
    {
      id: 2,
      title: "50-75 Guests",
      price: "$1,676.01",
      staff: "1-2 servers",
      lunch: "11:30AM - 3:30PM",
      dinner: "5:30PM - 9:00PM",
      badge: "POPULAR"
    },
    {
      id: 3,
      title: "75-100 Guests",
      price: "$2,100.01",
      staff: "1-2 servers",
      lunch: "11:30AM - 3:30PM",
      dinner: "5:30PM - 9:00PM"
    },
    {
      id: 4,
      title: "100-125 Guests",
      price: "$2,419.46",
      staff: "2-3 servers",
      lunch: "11:30AM - 3:30PM",
      dinner: "5:30PM - 9:00PM"
    },
    {
      id: 5,
      title: "125-150 Guests",
      price: "$2,924.63",
      staff: "2-3 servers",
      lunch: "11:30AM - 3:30PM",
      dinner: "5:30PM - 9:00PM"
    }
  ];

  return (
    <section className="bg-gray-50 py-16 px-4 sm:px-6">
      <div className="max-w-7xl mx-auto">
        {/* SERVICES Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-light text-gray-900 mb-2 tracking-wider">
            SERVICES
          </h2>
          <p className="text-gray-600 italic">
            Mediterranean flavors for your special day
          </p>
          <div className="w-30 h-px bg-lime-300 mx-auto mt-4" />
        </div>

        {/* Event Packages */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {servicesData.map((svc) => (
            <div
              key={svc.id}
              className="bg-white shadow-sm border border-gray-200 p-6 flex flex-col"
            >
              {svc.badge && (
                <span className="inline-block mb-2 bg-lime-500 text-white text-xs font-medium px-3 py-1 rounded">
                  {svc.badge}
                </span>
              )}
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                {svc.title}
              </h3>
              <ul className="space-y-2 flex-1 mb-6">
                {svc.features.map((feat, i) => (
                  <li key={i} className="text-gray-600">
                    • {feat}
                  </li>
                ))}
              </ul>
              <button
                onClick={() => setActiveModal(svc)}
                className="mt-auto w-full border border-black bg-white hover:bg-gray-100 text-black py-2 font-medium transition-colors"
              >
                Learn More
              </button>
            </div>
          ))}
        </div>

        {/* FOOD TRUCK SERVICES Header */}
        <div className="text-center mb-12">
          <h3 className="text-2xl font-light text-gray-800 mb-2">
            FOOD TRUCK SERVICES
          </h3>
          <p className="text-gray-600">
            Perfect for corporate events, parties, and private gatherings
          </p>
          <div className="w-35 h-px bg-lime-300 mx-auto mt-3" />
        </div>

        {/* Pricing Cards */}
        <div className="relative">
          <div className="flex space-x-8 pb-6 overflow-x-auto scrollbar-hide">
            {pricingData.map((pr) => (
              <div
                key={pr.id}
                className="flex-shrink-0 w-96 bg-white shadow-sm border border-gray-200 p-6 flex flex-col"
              >
                {pr.badge && (
                  <span className="inline-block mb-2 bg-lime-500 text-white text-xs font-medium px-3 py-1 rounded">
                    {pr.badge}
                  </span>
                )}
                <div className="flex justify-between items-baseline mb-3">
                  <h3 className="text-xl font-semibold text-gray-900">
                    {pr.title}
                  </h3>
                  <p className="text-xl font-semibold text-gray-800">
                    {pr.price}
                  </p>
                </div>
                <div className="space-y-3 mb-6 text-gray-600 flex-1">
                  <p>
                    <strong>Staff:</strong> {pr.staff}
                  </p>
                  <p>
                    <strong>Lunch:</strong> {pr.lunch}
                  </p>
                  <p className="text-center text-gray-400">or</p>
                  <p>
                    <strong>Dinner:</strong> {pr.dinner}
                  </p>
                </div>
                <button className="mt-auto w-full border border-black bg-white hover:bg-gray-100 text-black py-3 font-medium transition-colors">
                  Book Now
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Modal */}
        <AnimatePresence>
          {activeModal && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 bg-gray-900/70 z-50 flex items-center justify-center p-4"
            >
              <motion.div
                initial={{ scale: 0.95, y: 20 }}
                animate={{ scale: 1, y: 0 }}
                exit={{ scale: 0.95, y: 20 }}
                transition={{ duration: 0.3 }}
                className="bg-white max-w-3xl w-full rounded-lg shadow-xl overflow-hidden"
              >
                <div className="p-8 relative">
                  <button
                    onClick={() => setActiveModal(null)}
                    className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 rounded-full p-2"
                  >
                    ✕
                  </button>
                  <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                    {activeModal.title}
                  </h2>
                  {/* DESCRIPTION SLOT */}
                  <p className="text-gray-700 mb-6">
                    {activeModal.description}
                  </p>
                  {/* REVIEW */}
                  <blockquote className="text-gray-700 italic mb-4">
                    “{activeModal.review.text}”
                  </blockquote>
                  <p className="font-medium text-gray-900">
                    — {activeModal.review.author}
                  </p>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default Services;
