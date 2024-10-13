import exportImg from '@/assets/mega-menu-img.png';
import importImg from '@/assets/import.png';
import financing from '@/assets/financing.png';
import logistics from '@/assets/logistics.png';
import Image from 'next/image';
import { classNames } from '@/Utils/functions';
import Button from './Button';
import SlickSlider from './Slider';

const settings = {
  infinite: true,
  slidesToScroll: 1,
  autoplay: true,
  slidesToShow: 1.5,
  centerMode: true,
  speed: 500,
  autoplaySpeed: 3000,
  cssEase: 'ease-in-out',
  pauseOnHover: true,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        initialSlide: 1,
        centerMode: false,
      },
    },
  ],
};
const ServicesSlider = () => {
  return (
    <div className="relative w-full py-8">
      {/* Slider Wrapper */}
      <div className="relative">
        {/* Scrollable Container */}
        <div className="max-md:hidden px-4">
          <SlickSlider settings={settings} showArrows>
            {services.map((service, index) => (
              <div key={index} className="py-4">
                <div
                  className={classNames(
                    service.bg,
                    'snap-center shrink-0 max-w-[31.25rem] xl:max-w-[43.75rem] md:h-[432px] p-6 rounded-lg shadow-md grid md:grid-cols-2 max-md:gap-6 transition-transform duration-300'
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
              </div>
            ))}
          </SlickSlider>
        </div>
      </div>

      {/* Mobile Sequential View */}
      <div className="flex md:hidden flex-col space-y-4">
        {services.map((service) => (
          <div
            key={service.title}
            className={classNames(
              service.bg,
              'snap-center shrink-0 md:max-w-[43.75rem] md:h-[432px] p-6 rounded-lg shadow-md grid md:grid-cols-2 max-md:gap-6 transition-transform duration-300'
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
    </div>
  );
};

export default ServicesSlider;

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
