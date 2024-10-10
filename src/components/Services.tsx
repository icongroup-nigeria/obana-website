import Headding from './Headding';

const Services = () => {
  return (
    <section className="py-20 bg-white" id="services">
      <div className="container mx-auto px-4">
        <Headding
          smallText="Our Services"
          headerText="Comprehensive Solutions for Your Business Needs"
          subText="Experience seamless import and export solutions tailored to your needs with Obana Africa. Our platform ensures you get the best prices and reliable shipping every time."
          className="max-w-[738px] text-center mx-auto"
        />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[1, 2, 3, 4].map((item) => (
            <div key={item} className="bg-gray-100 p-6 rounded-lg">
              <div className="bg-gray-300 h-48 mb-4 rounded flex items-center justify-center">
                <span className="text-gray-600">Image</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">
                Medium length section heading goes here
              </h3>
              <p className="text-gray-600">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse varius enim in eros elementum tristique.
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
