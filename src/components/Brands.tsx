import Image from 'next/image';
import Headding from './Headding';
import jJ from '@/assets/brands/j&j.png';
import blend from '@/assets/brands/blend.png';
import bohooman from '@/assets/brands/bohooman.png';
import ralph from '@/assets/brands/ralph.jpg';
import tommy from '@/assets/brands/tommy-hilfiger.png';
import zara from '@/assets/brands/zara.png';
import SlickSlider from './Slider';

const brands = [jJ, bohooman, ralph, tommy, zara, blend];

const settings = {
  centerPadding: '60px',
  infinite: true,
  slidesToShow: 4,
  slidesToScroll: 1,
  autoplay: true,
  speed: 2000,
  autoplaySpeed: 2000,
  cssEase: 'linear',
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        initialSlide: 1,
        speed: 5000,
        autoplaySpeed: 5000,
      },
    },
  ],
};
const Brands = () => {
  return (
    <section className="container mx-auto px-4 space-y-8">
      <Headding smallText="Get access to 4,000+ brands across globe" />
      <div>
        {/* Brand Item */}
        <SlickSlider settings={settings} slideLength={brands?.length}>
          {brands.map((brand, i) => (
            <div key={i}>
              <div className="h-full max-h-[5.3125rem] w-max max-w-[17.5rem] overflow-hidden shrink-0 ">
                <Image
                  src={brand}
                  alt="brand"
                  className="h-[70%] w-auto object-contain"
                />
              </div>
            </div>
          ))}
        </SlickSlider>
      </div>
    </section>
  );
};

export default Brands;
