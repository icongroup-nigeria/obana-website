import Image from 'next/image';
import Headding from './Headding';
import brand from '@/assets/brand.png';

const Brands = () => {
  return (
    <section className="container mx-auto px-4 space-y-8">
      <Headding smallText="Get access to 4,000+ brands across globe" />
      <div className="flex items-center gap-4 overflow-auto no-scrollbar">
        {/* Brand Item */}
        {[...Array(10)].map((_, i) => (
          <div className="min-h-[5.3125rem] min-w-[17.5rem]" key={i}>
            <Image src={brand} alt="brand" />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Brands;
