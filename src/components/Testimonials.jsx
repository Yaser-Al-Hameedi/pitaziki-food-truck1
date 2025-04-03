import { StarIcon } from '@heroicons/react/24/solid';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      initials: 'JM',
      name: 'Jamal M.',
      role: 'Food Festival',
      quote: "The lamb shawarma pita kept me coming back - waited in line 3 times!",
      stars: 5
    },
    {
      id: 2,
      initials: 'SR',
      name: 'Sophia R.',
      role: 'Corporate Lunch',
      quote: "Our office gets Pitaziki every Thursday. The meal deal is unbeatable!",
      stars: 5
    },
    {
      id: 3,
      initials: 'TP',
      name: 'Tyler P.',
      role: 'Wedding',
      quote: "Had them park at our reception - best decision ever!",
      stars: 4
    },
    {
      id: 4,
      initials: 'EC',
      name: 'Elena C.',
      role: 'Daily Customer',
      quote: "I track their location via Instagram - worth driving across town!",
      stars: 5
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(1); // 1 for forward, -1 for backward

  // Auto-rotate with smooth transitions
  useEffect(() => {
    const interval = setInterval(() => {
      setDirection(1);
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 8000); // Changed to 8s for better readability

    return () => clearInterval(interval);
  }, []);

  const goToIndex = (newIndex) => {
    setDirection(newIndex > currentIndex ? 1 : -1);
    setCurrentIndex(newIndex);
  };

  return (
    <section className="bg-gray-50 py-16 px-4 sm:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-light text-gray-800 mb-2">
            CUSTOMER LOVE
          </h2>
          <div className="w-20 h-0.5 bg-lime-500 mx-auto"></div>
        </div>

        {/* Animated Testimonial */}
        <div className="relative h-64 md:h-56 overflow-hidden">
          <AnimatePresence custom={direction}>
            <motion.div
              key={currentIndex}
              custom={direction}
              initial={{ opacity: 0, x: direction * 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: direction * -100 }}
              transition={{ duration: 0.6, ease: "easeInOut" }}
              className="absolute inset-0"
            >
              <div className="bg-white p-8 rounded-xl shadow-lg mx-auto max-w-lg">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 rounded-full bg-lime-100 flex items-center justify-center text-lime-600 font-bold mr-4">
                    {testimonials[currentIndex].initials}
                  </div>
                  <div>
                    <h4 className="font-medium">{testimonials[currentIndex].name}</h4>
                    <p className="text-sm text-gray-500">{testimonials[currentIndex].role}</p>
                  </div>
                </div>
                <p className="text-gray-600 italic mb-4">
                  {testimonials[currentIndex].quote}
                </p>
                <div className="flex text-amber-400">
                  {[...Array(5)].map((_, i) => (
                    <StarIcon 
                      key={i}
                      className={`w-5 h-5 ${i >= testimonials[currentIndex].stars ? 'text-gray-300' : 'fill-current'}`}
                    />
                  ))}
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Navigation Dots */}
        <div className="flex justify-center mt-8 space-x-2">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => goToIndex(index)}
              className={`w-3 h-3 rounded-full transition-all ${currentIndex === index ? 'bg-lime-500 w-6' : 'bg-gray-300'}`}
              aria-label={`View testimonial ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;