import Image from 'next/image';
import Headding from './Headding';
import jJ from '@/assets/brands/j&j.png';
import blend from '@/assets/brands/blend.png';
import bohooman from '@/assets/brands/bohooman.png';
import ralph from '@/assets/brands/ralph.jpg';
import tommy from '@/assets/brands/tommy-hilfiger.png';
import zara from '@/assets/brands/zara.png';
const brands = [jJ, bohooman, ralph, tommy, zara, blend];
const Brands = () => {
  return (
    <section className="container mx-auto px-4 space-y-8">
      <Headding smallText="Get access to 4,000+ brands across globe" />
      <div className="flex items-center gap-4 overflow-auto no-scrollbar">
        {/* Brand Item */}
        {brands.map((brand, i) => (
          <div
            className="h-full max-h-[5.3125rem] w-max max-w-[17.5rem]  overflow-hidden shrink-0"
            key={i}
          >
            <Image
              src={brand}
              alt="brand"
              className="h-[70%] w-auto object-contain"
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Brands;
