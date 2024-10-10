import { useRef } from 'react';
import exportImg from '@/assets/mega-menu-img.png';
import importImg from '@/assets/import.png';
import financing from '@/assets/financing.png';
import logistics from '@/assets/logistics.png';
import Image from 'next/image';
import { classNames } from '@/Utils/functions';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import Button from './Button';

const ServicesSlider = () => {
  const sliderRef = useRef<HTMLDivElement>(null);

  const services = [
    {
      title: 'Export Services',
      description:
        'We help businesses in Sub-Saharan Africa access international markets by exporting goods efficiently and compliantly.',
      imgSrc: exportImg, // Replace with actual image paths
      buttonLabel: 'Get Started',
      bg: 'bg-[#F5F2EB]',
    },
    {
      title: 'Import Services',
      description:
        'Sourcing quality products from suppliers worldwide, making importing into Africa faster and more reliable.',
      imgSrc: importImg,
      buttonLabel: 'Get Started',
      bg: 'bg-[#E8EDF8]',
    },
    {
      title: 'Inventory Financing',
      description:
        "Need to purchase goods but don't have enough funds? We offer flexible financing solutions to help you manage inventory.",
      imgSrc: financing,
      buttonLabel: 'Get Started',
      bg: 'bg-[#E6F5EB]',
    },
    {
      title: 'Logistics Solutions',
      description:
        'Seamless logistics and shipping services that ensure your goods are delivered on time, no matter the destination.',
      imgSrc: logistics,
      buttonLabel: 'Get Started',
      bg: 'bg-[#FCEEEF]',
    },
  ];

  const scrollToNext = () => {
    if (sliderRef.current) {
      const itemWidth = (sliderRef.current.children[0] as HTMLElement)
        .offsetWidth; // Get width of one item
      sliderRef.current.scrollBy({
        left: itemWidth, // Scroll by the width of one item
        behavior: 'smooth',
      });
    }
  };

  const scrollToPrev = () => {
    if (sliderRef.current) {
      const itemWidth = (sliderRef.current.children[0] as HTMLElement)
        .offsetWidth; // Get width of one item
      sliderRef.current.scrollBy({
        left: -itemWidth, // Scroll by the width of one item in reverse
        behavior: 'smooth',
      });
    }
  };

  return (
    <div className="relative w-full py-8">
      {/* Slider Wrapper */}
      <div className="relative">
        {/* Scrollable Container */}
        <div
          ref={sliderRef}
          className="flex max-md:flex-col max-md:gap-6 md:space-x-4 overflow-x-scroll no-scrollbar snap-x scroll-smooth py-4 px-4"
        >
          {services.map((service, index) => (
            <div
              key={index}
              className={classNames(
                service.bg,
                'snap-center shrink-0 md:w-[700px] md:h-[432px] p-6 rounded-lg shadow-md grid md:grid-cols-2 max-md:gap-6 transition-transform duration-300'
              )}
            >
              <div className="text-left h-full flex flex-col">
                <h3 className="text-xl font-semibold mb-2 text-main-blue">
                  {service.title}
                </h3>
                <p className="mb-4 max-md:text-sm">{service.description}</p>
                <div className=" mt-auto">
                  <Button
                    variant="ghost"
                    className="bg-white border-[#D0D5DD] border px-4 py-2 rounded-md"
                    icon
                  >
                    {service.buttonLabel}
                  </Button>
                </div>
              </div>
              <div className="overflow-hidden flex flex-col h-[15.6875rem] md:h-full">
                <Image
                  src={service.imgSrc}
                  alt={service.title}
                  className="h-full w-auto md:w-full md:h-auto object-contain md:object-cover rounded-md mt-auto"
                />
              </div>
            </div>
          ))}
        </div>

        {/* Navigation Controls */}
        <div className="max-md:hidden w-full flex justify-center items-center gap-4 px-4 mt-16">
          <button
            onClick={scrollToPrev}
            className="bg-obGray-100 p-2 rounded-full text-obGray-500 h-10 w-10 hover:opacity-80"
          >
            <ArrowLeft className="h-5 w-5" />
          </button>
          <button
            onClick={scrollToNext}
            className="bg-obGray-100 p-2 rounded-full text-obGray-500 h-10 w-10 hover:opacity-80"
          >
            <ArrowRight className="h-5 w-5" />
          </button>
        </div>
      </div>

      {/* Mobile Sequential View */}
      {/* <div className="flex md:hidden flex-col space-y-4">
        {services.map((service, index) => (
          <div
            key={index}
            className={classNames(service.bg, 'p-6 rounded-lg shadow-md')}
          >
            <div>
              <h3 className="text-lg font-semibold mb-2">{service.title}</h3>
              <p className="mb-4">{service.description}</p>
              <Button
                variant="ghost"
                className="bg-white border-[#D0D5DD] border px-4 py-2 rounded-md"
                icon
              >
                {service.buttonLabel}
              </Button>
            </div>

            <Image
              src={service.imgSrc}
              alt={service.title}
              className="w-full h-48 object-cover rounded-md mb-4"
            />
          </div>
        ))}
      </div> */}

      {/* Slider Controls */}
    </div>
  );
};

export default ServicesSlider;
