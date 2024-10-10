const HowToUse = () => {
  return (
    <section className="py-20 bg-gray-100">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-8 md:mb-0">
            <h2 className="text-3xl font-bold mb-6">
              Discover the Benefits of Our Services
            </h2>
            <p className="text-xl mb-8">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse varius enim in eros elementum tristique.
            </p>
            <button className="bg-black text-white px-6 py-3 rounded-md hover:bg-blue-700 transition duration-300">
              Learn More
            </button>
          </div>
          <div className="md:w-1/2 md:pl-12">
            <div className="bg-gray-300 h-96 rounded-lg flex items-center justify-center">
              <span className="text-gray-600 text-2xl">Image Placeholder</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowToUse;
