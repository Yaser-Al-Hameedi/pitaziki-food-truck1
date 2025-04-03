import { StarIcon } from '@heroicons/react/24/solid';
import { useEffect, useState } from 'react';

const Testimonials = () => {
  // Food truck-specific testimonials (can be moved to a separate JSON file)
  const allTestimonials = [
    {
      id: 1,
      initials: 'JM',
      name: 'Jamal M.',
      role: 'Food Festival Attendee',
      quote: "The lamb shawarma pita kept me coming back - waited in line 3 times at the Taste of Downtown festival!",
      stars: 5
    },
    {
      id: 2,
      initials: 'SR',
      name: 'Sophia R.',
      role: 'Corporate Lunch Order',
      quote: "Our office of 50 gets Pitaziki every Thursday. The meal deal with two sides is unbeatable!",
      stars: 5
    },
    {
      id: 3,
      initials: 'TP',
      name: 'Tyler P.',
      role: 'Wedding Catering',
      quote: "Had them park the truck at our reception - best decision ever. The garlic sauce station was legendary!",
      stars: 4
    },
    {
      id: 4,
      initials: 'EC',
      name: 'Elena C.',
      role: 'Daily Customer',
      quote: "I track their location via Instagram - the spicy feta fries are worth driving across town for.",
      stars: 5
    },
    {
      id: 5,
      initials: 'DK',
      name: 'Darnell K.',
      role: 'Food Truck Rally',
      quote: "Most generous portions at the event. That lemon-herb chicken pita fed me for two meals!",
      stars: 5
    }
  ];

  const [visibleTestimonials, setVisibleTestimonials] = useState(allTestimonials.slice(0, 3));
  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto-rotate testimonials every 10 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex(prev => (prev + 1) % allTestimonials.length);
      
      // Get next 3 testimonials (with wrap-around)
      const nextIndex = (currentIndex + 1) % allTestimonials.length;
      const nextThree = [
        allTestimonials[nextIndex],
        allTestimonials[(nextIndex + 1) % allTestimonials.length],
        allTestimonials[(nextIndex + 2) % allTestimonials.length]
      ];
      
      setVisibleTestimonials(nextThree);
    }, 10000);

    return () => clearInterval(interval);
  }, [currentIndex]);

  return (
    <section className="bg-gray-50 py-16 px-4 sm:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-light text-gray-800 mb-2">
            FOOD TRUCK LOVE
          </h2>
          <div className="w-20 h-0.5 bg-lime-500 mx-auto"></div>
          <p className="text-gray-500 mt-4">Hear what customers say about our mobile kitchen</p>
        </div>

        {/* Testimonial Cards */}
        <div className="grid md:grid-cols-3 gap-8 min-h-[300px]">
          {visibleTestimonials.map((testimonial) => (
            <div 
              key={testimonial.id}
              className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-500"
            >
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 rounded-full bg-lime-100 flex items-center justify-center text-lime-600 font-bold mr-4">
                  {testimonial.initials}
                </div>
                <div>
                  <h4 className="font-medium">{testimonial.name}</h4>
                  <p className="text-sm text-gray-500">{testimonial.role}</p>
                </div>
              </div>
              <p className="text-gray-600 italic mb-4">
                {testimonial.quote}
              </p>
              <div className="flex text-amber-400">
                {[...Array(5)].map((_, i) => (
                  <StarIcon 
                    key={i}
                    className={`w-5 h-5 ${i >= testimonial.stars ? 'text-gray-300' : 'fill-current'}`}
                  />
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Navigation Dots */}
        <div className="flex justify-center mt-8 space-x-2">
          {allTestimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => {
                setCurrentIndex(index);
                setVisibleTestimonials([
                  allTestimonials[index],
                  allTestimonials[(index + 1) % allTestimonials.length],
                  allTestimonials[(index + 2) % allTestimonials.length]
                ]);
              }}
              className={`w-3 h-3 rounded-full ${currentIndex === index ? 'bg-lime-500' : 'bg-gray-300'}`}
              aria-label={`View testimonial ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;