import { useEffect, useRef, useState } from 'react';
import Headding from './Headding';
import { classNames, toInitials } from '@/Utils/functions';

const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const sliderRef = useRef<HTMLDivElement>(null);

  // Scroll to the active slide
  const scrollToSlide = (index: number) => {
    if (sliderRef.current) {
      const slideWidth = sliderRef.current.offsetWidth; // Full width of one slide
      sliderRef.current.scrollTo({
        left: index * slideWidth, // Scroll to the selected slide
        behavior: 'smooth',
      });
      setActiveIndex(index); // Update the active index
    }
  };

  // Handle scroll event to update active dot based on scroll position
  const handleScroll = () => {
    if (sliderRef.current) {
      const slideWidth = sliderRef.current.offsetWidth;
      const scrollLeft = sliderRef.current.scrollLeft; // How far we have scrolled
      const currentIndex = Math.round(scrollLeft / slideWidth); // Calculate the current slide based on the scroll
      setActiveIndex(currentIndex); // Update the active index
    }
  };

  // Attach scroll event listener
  useEffect(() => {
    const slider = sliderRef.current;
    if (slider) {
      slider.addEventListener('scroll', handleScroll);
    }
    return () => {
      if (slider) {
        slider.removeEventListener('scroll', handleScroll);
      }
    };
  }, []);

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 text-center">
        <Headding smallText="What Our Customers Are Saying" />
        <div
          className="flex space-x-4 overflow-x-scroll no-scrollbar snap-x scroll-smooth py-4 px-4 mt-8 lg:w-[1000px] mx-auto"
          ref={sliderRef}
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
              <p className="text-xl mb-6">"{item.content}"</p>
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
        </div>
        <div className="flex gap-2.5 justify-center items-center mt-8">
          {[...Array(feedbacks.length)].map((item, i) => (
            <div
              onClick={() => scrollToSlide(i)}
              className={classNames(
                activeIndex === i
                  ? 'w-[3.125rem] bg-obGray-700 h-2 rounded-full'
                  : 'w-[1.875rem] bg-obGray-400 h-1.5 rounded-full',
                'rounded-full transition-all duration-300 ease-in-out hover:opacity-80'
              )}
              key={item}
            />
          ))}
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
