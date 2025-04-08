import { StarIcon } from '@heroicons/react/24/solid';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Testimonials = () => {
  const reviews = [
    {
      id: 1,
      initials: 'AW',
      name: 'Alex W.',
      role: 'Wedding Client',
      quote: "We hired Pitaziki for our wedding reception, and it was hands down one of the best decisions we made! The food was absolutely delicious—fresh, flavorful, and with something for everyone. Our guests loved the idea of customizing their own pitas and bowls with shawarma, lamb kofta, and falafel. The variety of toppings and sauces meant that each guest could create their perfect meal. The Pitaziki team was professional, friendly, and efficient, making it a stress-free experience for us. If you’re planning a wedding and want to serve your guests something unique and mouth-watering, I highly recommend booking Pitaziki!",
      stars: 5
    },
    {
      id: 2,
      initials: 'TJ',
      name: 'Taylor J.',
      role: 'Corporate Event',
      quote: "We booked Pitaziki for our office lunch, and it was a huge success! The truck showed up on time, and the team had everything ready for us. The build-your-own concept is perfect for a group because everyone can customize their own meal. I went with a lamb kofta wrap, and the combination of fresh veggies, creamy tzatziki, and the delicious meat was out of this world. We had a mix of dietary preferences in the office (vegan, gluten-free, etc.), and Pitaziki made sure there was something for everyone. I will definitely be booking them again for future office events!",
      stars: 5
    },
    {
      id: 3,
      initials: 'EC',
      name: 'Elena C.',
      role: 'Company Event',
      quote: "I hired Pitaziki to cater for our company’s quarterly meeting, and the team went above and beyond. The Mediterranean flavors were a refreshing change from the usual office catering options. We loved the build-your-own pita station with options like chicken shawarma, lamb kofta, and falafel, plus a huge variety of toppings and sauces. Everyone had a great time customizing their bowls and wraps, and the food was simply amazing! If you're looking to add something special to your office events, Pitaziki is the way to go. So happy with the experience!",
      stars: 5
    },
    {
        id: 4,
        initials: 'TG',
        name: 'Timmy G.',
        role: 'Birthday Celebration',
        quote: "We recently booked Pitaziki for a birthday celebration, and I was impressed by how easy and stress-free the entire process was. The food was incredible, with a wide range of options to satisfy every guest. Their build-your-own bowls were such a hit, and the falafel and shawarma were crowd favorites. We also loved how fresh and flavorful everything was. Pitaziki made sure to tailor the event to our needs, providing great service and delicious food that made the celebration unforgettable. If you’re planning a wedding, corporate event, or just want to enjoy amazing Mediterranean food, Pitaziki is the place to book!",
        stars: 5
      },
      {
        id: 5,
        initials: 'JM',
        name: 'Jason M.',
        role: 'Get Together',
        quote: "We booked Pitaziki for a casual lunch with friends and family, and it was a total hit! The truck showed up on time, the staff was super friendly, and the food was fresh and full of flavor. I loved being able to create my own pita with chicken shawarma, hummus, grilled veggies, and their amazing hot sauce. It's the perfect solution for everything from a quick meal to a large gathering. We’re already planning to book them for our office’s next big meeting. Highly recommend it!",
        stars: 5
      },
      {
        id: 6,
        initials: 'ER',
        name: 'Emily R.',
        role: 'Wedding',
        quote: "We hired Pitaziki for our wedding, and it was perfect! The food was fresh, flavorful, and everything was made to order. We had a mix of shawarma, kofta, chicken kabobs, and falafel, and everyone raved about how delicious everything was. The build-your-own pita and bowl concept allowed our guests to customize their meals, which made it even more fun. Whether you’re hosting a wedding, corporate event, or even a casual get-together, Pitaziki is the way to go for a meal that’s sure to impress!",
        stars: 5
      },
      {
        id: 7,
        initials: 'KT',
        name: 'Kelvin T.',
        role: 'Office Catering',
        quote: "We invited Pitaziki to cater our corporate lunch, and it was fantastic. The ability to build your own bowl or wrap was a huge hit with our team, and the food was top-notch. The shawarma was perfectly seasoned, the falafel was crispy on the outside and soft on the inside, and the sauces were absolutely delicious. It was a quick, easy, and delicious way to feed our entire office, and we’ll definitely be booking them again for future events. Highly recommended for anyone looking to elevate their office lunch game!",
        stars: 5
      },
      {
        id: 8,
        initials: 'SL',
        name: 'Sarah L.',
        role: 'Neighborhood Get Together',
        quote: "We booked Pitaziki for a casual neighborhood get-together, and it was amazing! The food was fresh, flavorful, and made to order. My favorite part was the variety of toppings and sauces—you can truly make your meal your own! We had everything from shawarma and kofta to falafel and chicken kabobs. It was so fun and delicious. I can only imagine how great they’d be for weddings or larger events! Highly recommend booking them for your next celebration or event. The food speaks for itself!",
        stars: 5
      },
      {
        id: 9,
        initials: 'DK',
        name: 'Daniel K.',
        role: 'Customer Satisfaction',
        quote: "What really makes Pitaziki stand out is their innovative build-your-own concept. I’m used to food trucks that serve pre-made meals, but Pitaziki lets you pick and choose your own ingredients from a wide variety of options. The meats are incredibly juicy and flavorful—especially the chicken kabob and shawarma—and you get to load up on fresh toppings like cucumbers, grilled onions, pickles, and even feta cheese. Plus, their signature sauces like tahini and garlic sauce are absolutely to die for. Pitaziki isn’t just another food truck; it’s an experience. The customization and freshness make them one of a kind!",
        stars: 5
      },
      {
        id: 10,
        initials: 'OB',
        name: 'Olivia B.',
        role: 'Personal Review',
        quote: "If you're looking for something different from the typical food truck fare, Pitaziki is a must-try! What sets them apart is their incredible concept: build-your-own pitas, wraps, and bowls! I’ve never had such a customizable experience before—being able to pick from shawarma, lamb kofta, falafel, and so many fresh toppings and sauces makes each meal feel like it’s made just for me. Plus, the flavors are incredible. The chicken shawarma was tender and flavorful, and the lamb kofta was perfectly seasoned. This is not your average food truck experience—Pitaziki is in a league of its own!",
        stars: 5
      },
      {
        id: 11,
        initials: 'MJ',
        name: 'Marcus J.',
        role: 'Food Quality',
        quote: "I recently tried Pitaziki, and it was amazing! The build-your-own concept is such a game-changer. I had a chicken shawarma wrap with fresh veggies, hummus, and their delicious garlic sauce, and it was packed with flavor. The staff was super friendly and helped me pick the perfect toppings. Everything was so fresh, and it felt like my meal was made just for me. I’ll definitely be back next time I’m in the area!",
        stars: 5
      },
      {
        id: 12,
        initials: 'HC',
        name: 'Hannah C.',
        role: 'Customer Service',
        quote: "The service at Pitaziki was fantastic! The staff was so friendly and took the time to help me pick out the best toppings for my shawarma wrap. They made the whole experience enjoyable, and the food was absolutely delicious. I’ll definitely be back!",
        stars: 5
      },
      {
        id: 13,
        initials: 'BS',
        name: 'Brian S.',
        role: 'Customer Service',
        quote: "I’ve been to Pitaziki a few times now, and the service is always outstanding. The staff is welcoming, quick, and always ready to make great recommendations. It’s clear they care about their customers, and that makes the food even better. Highly recommended!",
        stars: 5
      }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isMounted, setIsMounted] = useState(false);

  // Debugging logs
  useEffect(() => {
    console.log('Component mounted with reviews:', reviews.length);
    setIsMounted(true);
    return () => setIsMounted(false);
  }, []);

  // Auto-rotation with validation
  useEffect(() => {
    if (!isMounted || reviews.length === 0) return;

    console.log('Setting up interval with', reviews.length, 'reviews');
    
    const interval = setInterval(() => {
      setCurrentIndex(prev => {
        const nextIndex = (prev + 1) % reviews.length;
        console.log('Rotating from', prev, 'to', nextIndex);
        return nextIndex;
      });
    }, 10000);

    return () => {
      console.log('Clearing interval');
      clearInterval(interval);
    };
  }, [isMounted, reviews.length]);

  // Safety check
  if (!reviews || reviews.length === 0) {
    console.error('No reviews found!');
    return <div>Loading testimonials...</div>;
  }

  return (
    <section className="bg-gray-50 py-16 px-4 sm:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-light text-gray-800 mb-2">
            WHAT OUR CUSTOMERS SAY
          </h2>
          <div className="w-20 h-0.5 bg-lime-500 mx-auto"></div>
          {/* Debug info - remove in production */}
          <p className="text-sm text-gray-500 mt-2">
              
          </p>
        </div>

        {/* Testimonial Container */}
        <div className="relative h-[300px] md:h-[400px] mb-8">
          <AnimatePresence mode='wait'>
            <motion.div
              key={reviews[currentIndex].id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="absolute inset-0"
            >
              <div className="bg-white p-8 rounded-xl shadow-lg h-full flex flex-col">
                <div className="flex items-start mb-6">
                  <div className="w-14 h-14 rounded-full bg-lime-100 flex items-center justify-center text-lime-600 font-bold text-xl mr-6 flex-shrink-0">
                    {reviews[currentIndex].initials}
                  </div>
                  <div>
                    <h3 className="text-xl font-medium text-gray-800">
                      {reviews[currentIndex].name}
                    </h3>
                    <p className="text-gray-500">{reviews[currentIndex].role}</p>
                    <div className="flex mt-2 text-amber-400">
                      {[...Array(5)].map((_, i) => (
                        <StarIcon 
                          key={i}
                          className={`w-5 h-5 ${i >= reviews[currentIndex].stars ? 'text-gray-300' : 'fill-current'}`}
                        />
                      ))}
                    </div>
                  </div>
                </div>
                <p className="text-gray-600 italic text-lg leading-relaxed flex-grow overflow-y-auto">
                  "{reviews[currentIndex].quote}"
                </p>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Navigation Dots - now shows all 13 */}
        <div className="flex flex-wrap justify-center gap-2 max-w-lg mx-auto">
          {reviews.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                currentIndex === index ? 'bg-lime-500 w-6' : 'bg-gray-300'
              }`}
              aria-label={`View testimonial ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;