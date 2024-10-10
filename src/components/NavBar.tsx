import { ChevronDown, Menu, X } from 'lucide-react';
import { classNames, scrollToSection, scrollToTop } from '@/Utils/functions';
import Image from 'next/image';
import logo from '@/assets/logo.png';
import serviceImg from '@/assets/mega-menu-img.png';
import { useState } from 'react';
import Button from './Button';
import { useWindowSize } from 'usehooks-ts';
import { obIcons } from '@/assets/obIcons';
const services = [
  {
    name: 'Export Services',
    icon: obIcons['export'](),
    description: 'Facilitate your international trade',
  },
  {
    name: 'Import Services',
    icon: obIcons['import'](),
    description: 'Source quality products for fast, reliable African imports',
  },
  {
    name: 'Inventory Financing',
    icon: obIcons['finance'](),
    description: 'Short on funds for goods? We provide flexible financing.',
  },
  {
    name: 'Logistics Solutions',
    icon: obIcons['logistic'](),
    description: 'Timely logistics and shipping services, anywhere.',
  },
];

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMegaMenuOpen, setIsMegaMenuOpen] = useState(false);
  const { width } = useWindowSize();
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const toggleMegaMenu = () => setIsMegaMenuOpen(!isMegaMenuOpen);

  return (
    <nav className="bg-white sticky top-0 z-50">
      <div className="mx-auto px-4 py-4 flex gap-6 items-center max-md:flex-col">
        <div
          className="text-xl font-bold xl:h-12 overflow-hidden flex items-center justify-between max-md:w-full"
          onClick={scrollToTop}
        >
          <Image
            src={logo}
            alt="Obana.Africa"
            className="object-cover h-full"
          />
          <div className="flex items-center md:hidden">
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-main-blue hover:text-obGray-800 hover:bg-gray-100 focus:outline-none"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
        <div
          className={classNames(
            isMenuOpen ? 'flex flex-col' : 'hidden md:flex ',
            'justify-between md:items-center flex-1 w-full md:text-sm lg:text-base gap-6'
          )}
        >
          <div className="max-md:flex-col flex md:items-center md:space-x-4 xl:space-x-8 ">
            <button
              onClick={scrollToTop}
              className="text-obGray-700 hover:text-primary max-md:text-left min-h-[3.1875rem]"
            >
              Home
            </button>
            <button
              onClick={() =>
                width > 700 ? scrollToSection('services') : toggleMegaMenu()
              }
              onMouseEnter={() =>
                width > 700 ? setIsMegaMenuOpen(true) : null
              }
              onMouseLeave={() =>
                width > 700 ? setIsMegaMenuOpen(false) : null
              }
              className="text-obGray-700 hover:text-primary flex flex-col justify-center min-h-[3.1875rem]"
            >
              <span className="flex items-center">
                <span>Our Service</span>
                <ChevronDown className="inline-block ml-1" size={16} />
              </span>

              {isMegaMenuOpen && (
                <MegaMenu setIsMegaMenuOpen={setIsMegaMenuOpen} />
              )}
            </button>

            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="text-obGray-700 hover:text-primary flex items-center min-h-[3.1875rem]"
            >
              Blog
            </a>
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="text-obGray-700 hover:text-primary flex items-center min-h-[3.1875rem]"
            >
              Join Our Sales Team
            </a>
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="text-obGray-700 hover:text-primary flex items-center min-h-[3.1875rem]"
            >
              Vendor Signup
            </a>
          </div>
          <div className="max-md:flex-col flex md:items-center gap-2.5 md:gap-x-4">
            <Button variant="ghost">Login</Button>

            <Button icon> Order Now</Button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
const MegaMenu = ({
  setIsMegaMenuOpen,
}: {
  setIsMegaMenuOpen: (x: boolean) => void;
}) => {
  const { width } = useWindowSize();
  return (
    <div
      className="md:fixed md:left-0 md:top-[3.25rem]  md:w-screen bg-white md:shadow-lg text-base"
      onMouseEnter={() => (width > 700 ? setIsMegaMenuOpen(true) : null)}
      onMouseLeave={() => (width > 700 ? setIsMegaMenuOpen(false) : null)}
    >
      <div className="flex justify-between gap-6">
        {/* Left Column - Our Services */}
        <div className="flex-1  py-5 px-4 pl-8">
          <h2 className="text-main-blue font-bold mb-4 text-left">
            Our Services
          </h2>
          <div className="flex">
            <div className="space-y-4">
              {/* Service Item */}
              {services.map((service) => (
                <div className="flex items-center gap-2.5 min-h-[5.3125rem] max-w-[23rem]">
                  <div className="text-3xl text-teal-500 h-6 w-6 block">
                    {service.icon}
                  </div>
                  <div className="text-left">
                    <h3 className="text-lg font-semibold text-main-blue">
                      {service.name}
                    </h3>
                    <p className="text-gray-800 text-sm">
                      {service.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Image Section */}
            <div
              className={classNames(
                width > 1200 ? 'block' : 'hidden',
                'bg-[#EEEEEE] rounded-xl flex-1 max-w-[334.88px] max-h-[340px] m-auto  p-2.5'
              )}
            >
              <Image
                src={serviceImg}
                alt="Featured"
                className="h-full w-auto  object-fill rounded-lg shadow-md"
              />
            </div>
          </div>
        </div>

        {/* Right Column - Featured Section */}
        <div className="flex-1 max-w-[560px] flex flex-col items-center space-y-4 bg-gray-100  py-5 px-4">
          {/* Blog Section */}
          <div className="w-full">
            <h2 className="text-main-blue font-bold mb-4 text-left">
              Featured from Blog
            </h2>

            <div className="space-y-4">
              {/* Blog Post */}
              {[1, 2].map((item) => (
                <div
                  key={item}
                  className="text-main-blue flex items-center gap-2 lg:gap-6"
                >
                  <div className="h-[105px] w-full max-w-[160px] bg-main-blue"></div>
                  <div className="text-left space-y-2">
                    <h3 className="font-semibold text-base">Article Title</h3>
                    <p className="max-w-[200px] text-sm">
                      Lorem ipsum dolor sit amet consectetur elit
                    </p>
                    <a href="#" className="underline text-sm">
                      Read more
                    </a>
                  </div>
                </div>
              ))}

              {/* Blog Post */}
            </div>
          </div>
          <div className="ml-0 w-full flex justify-start">
            <Button variant="ghost">Get Started</Button>
          </div>
        </div>
      </div>
    </div>
  );
};
