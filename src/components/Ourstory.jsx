const Ourstory = () => {
  return (
    <section className="bg-white py-20 px-4 sm:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Main Header with Decorative Elements */}
        <div className="text-center mb-16 relative">
          <h2 className="text-4xl md:text-5xl font-light text-gray-800 mb-6">
            <span className="relative inline-block">
              OUR STORY
              <span className="absolute -bottom-3 left-0 right-0 h-1 bg-lime-400 transform scale-x-75 origin-center" />
            </span>
          </h2>
          <p className="text-lg text-lime-600 max-w-2xl mx-auto italic">
            A Mediterranean journey of flavor and passion
          </p>
        </div>

        {/* Equal-width columns */}
        <div className="grid md:grid-cols-2 gap-10">
          {/* Text Box (unchanged) */}
          <div className="bg-gradient-to-br from-gray-50 to-white p-10 rounded-xl shadow-md border border-gray-100 relative overflow-hidden">
            {/* Decorative pattern */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-lime-100 opacity-20 rounded-full -mr-16 -mt-16" />
            <div className="absolute bottom-0 left-0 w-24 h-24 bg-lime-100 opacity-20 rounded-full -ml-12 -mb-12" />

            <div className="relative">
              <p className="text-gray-600 mb-6 leading-relaxed text-lg">
                <span className="text-2xl text-lime-500 font-serif">"</span>
                Just like the freshness of Pita dipped in Taziki sauce, Pitaziki
                brings delicious, nutritious, fresh Mediterranean food to you in
                an open and bright interior. Our top quality food and reasonable
                prices make us the best option for a healthy, personalized,
                quick-serve meal any time of the day.
              </p>

              <p className="text-gray-600 mb-6 leading-relaxed">
                It's the sight and aroma of Pitaziki, pita, falafel and shawarma
                being made in front of you. It's exotic Mediterranean entrée
                choices you can customize any way you want. It's authentic
                sauces and flavors you won't find anywhere else. It's the
                graciousness and warmth so characteristic of Mediterranean
                hospitality.
              </p>

              <div className="bg-lime-50 p-6 rounded-lg mb-6 border-l-4 border-lime-300">
                <p className="text-gray-600 italic">
                  "We purchase the freshest ingredients and prepare our foods
                  daily in small batches. Our recipes are both classic and
                  inventive, while our atmosphere is fun and energizing."
                </p>
              </div>

              <p className="text-gray-600">
                At Pitaziki, we are not only dedicated to satisfying the
                appetites of our customers, but also to leave them feeling
                happier. Every one of our staff are committed to making the
                Pitaziki experience as easy and enjoyable as possible.
              </p>
            </div>
          </div>

          {/* Image Box - Centered vertically */}
          <div className="flex items-center justify-center h-full"> {/* Added flex container */}
            <div className="relative group rounded-xl overflow-hidden shadow-lg w-full">
              <img
                src="/store.png"
                alt="Pitaziki restaurant team preparing fresh food"
                className="w-full object-contain max-h-[500px]" /* Adjusted height control */
              />
              <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-gray-900/30 to-transparent" />
            </div>
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
  );
};

export default Ourstory;