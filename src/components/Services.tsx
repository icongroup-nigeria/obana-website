import Headding from './Headding';
import ServicesSlider from './ServicesSlider';

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
        <ServicesSlider />
      </div>
    </section>
  );
};

export default Services;
