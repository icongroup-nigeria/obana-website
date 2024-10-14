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
      <div className="mx-auto px-4 py-4 flex gap-6 items-center max-lg:flex-col">
        <div
          className="text-xl font-bold xl:h-12 overflow-hidden flex items-center justify-between max-lg:w-full"
          onClick={scrollToTop}
        >
          <Image
            src={logo}
            alt="Obana.Africa"
            className="object-cover h-full"
          />
          <div className="flex items-center lg:hidden">
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
            isMenuOpen ? 'flex flex-col lg:flex-row' : 'hidden lg:flex',
            'justify-between lg:items-center flex-1 w-full lg:text-sm xl:text-base gap-6'
          )}
        >
          <div className="max-lg:flex-col flex lg:items-center lg:space-x-4 xl:space-x-8 ">
            <button
              onClick={scrollToTop}
              className="text-obGray-700 hover:text-primary max-lg:text-left min-h-[3.1875rem]"
            >
              Home
            </button>
            <button
              onClick={() =>
                width >= 1024 ? scrollToSection('services') : toggleMegaMenu()
              }
              onMouseEnter={() =>
                width >= 1024 ? setIsMegaMenuOpen(true) : null
              }
              onMouseLeave={() =>
                width >= 1024 ? setIsMegaMenuOpen(false) : null
              }
              className="text-obGray-700 hover:text-primary flex flex-col justify-center min-h-[3.1875rem]"
            >
              <span className="flex items-center">
                <span>About Us</span>
                <ChevronDown className="inline-block ml-1" size={16} />
              </span>

              {isMegaMenuOpen && (
                <MegaMenu setIsMegaMenuOpen={setIsMegaMenuOpen} />
              )}
            </button>

            <a
              href="https://forms.gle/2pyQZ4tM5fPNYWbK6"
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
          <div className="max-lg:flex-col flex lg:items-center gap-2.5 lg:gap-x-4">
            <Button variant="ghost">Sign Up</Button>
            <span className="lg:hidden border-t"></span>
            <span className="max-lg:hidden">|</span>
            <Button variant="ghost">Login</Button>
            <Button
              icon
              onClick={() =>
                window.open('https://shop.obana.africa/', '_blank')
              }
            >
              {' '}
              Order Now
            </Button>
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
      className="lg:fixed lg:left-0 lg:top-[3.25rem]  lg:w-screen bg-white lg:shadow-lg text-base"
      onMouseEnter={() => (width >= 1024 ? setIsMegaMenuOpen(true) : null)}
      onMouseLeave={() => (width >= 1024 ? setIsMegaMenuOpen(false) : null)}
    >
      <div className="flex justify-between gap-6 max-lg:flex-col">
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
      </div>
    </div>
  );
};
