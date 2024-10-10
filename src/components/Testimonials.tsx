const Testimonials = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 text-center">
        <div className="max-w-3xl mx-auto">
          <div className="flex justify-center mb-6">
            {[1, 2, 3, 4, 5].map((star) => (
              <svg
                key={star}
                className="w-6 h-6 text-yellow-400 fill-current"
                viewBox="0 0 24 24"
              >
                <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
              </svg>
            ))}
          </div>
          <p className="text-xl mb-6">
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Suspendisse varius enim in eros elementum tristique. Duis cursus, mi
            quis viverra ornare, eros dolor interdum nulla, ut commodo diam
            libero vitae erat."
          </p>
          <div className="flex items-center justify-center">
            <img
              src="/api/placeholder/50/50"
              alt="Avatar"
              className="w-12 h-12 rounded-full mr-4"
            />
            <div className="text-left">
              <p className="font-semibold">John Doe</p>
              <p className="text-gray-600">CEO, Company Name</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
