import Headding from './Headding';
import { toInitials } from '@/Utils/functions';
import SlickSlider from './Slider';

const settings = {
  centerPadding: '60px',
  infinite: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  speed: 1000,
  autoplaySpeed: 5000,
  cssEase: 'ease-in-out',
};
const Testimonials = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 text-center">
        <Headding smallText="What Our Customers Are Saying" />
        <div className="py-4 px-4 mt-8 lg:w-[1000px] mx-auto">
          <SlickSlider
            settings={settings}
            slideLength={feedbacks?.length}
            showDots
          >
            {feedbacks.map((item) => (
              <div
                className="snap-center shrink-0 flex-none transition-transform duration-300 w-full "
                key={item.name}
              >
                <div className="flex justify-center mb-6">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <svg
                      key={star}
                      className="w-6 h-6 text-primary fill-current"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                    </svg>
                  ))}
                </div>
                <p className="text-xl lg:text-[1.75rem] lg:leading-[2.45rem] mb-6">
                  "{item.content}"
                </p>
                <div className="flex items-center justify-center">
                  <div className="w-12 h-12 rounded-full mr-4 bg-obGray-200 flex items-center justify-center">
                    {toInitials(item.name)}
                  </div>
                  <div className="text-left">
                    <p className="font-semibold capitalize">{item.name}</p>
                    <p className="text-gray-600">{item.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </SlickSlider>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
const feedbacks = [
  {
    content:
      'This platform made it incredibly easy for me to source goods from overseas. Delivery was fast and reliable!',
    name: 'John Chinweuba',
    role: 'Importer',
  },
  {
    content:
      'Thanks to their financing options, I was able to stock up on inventory without stressing about cash flow',
    name: 'Ifeoluwa ige',
    role: 'Retailer',
  },
  {
    content:
      'The logistics service is top-notch! I can now confidently ship goods to and from Africa',
    name: 'Thomas Saliu',
    role: 'Exporter',
  },
];
