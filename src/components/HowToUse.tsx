import Headding from './Headding';
import HowToUseSteps from './HowToUseSteps';

const HowToUse = () => {
  return (
    <section className="pt-10 sm:pt-20 pb-6 sm:pb-16 bg-obGray-100 w-[95%] md:w-[97%] mx-auto rounded-lg">
      <div className="container mx-auto px-4">
        <div className="md:flex items-end">
          <div className="flex-1">
            <Headding
              smallText="How to use the Platform"
              headerText="Simplify Your Sourcing Process with Us"
              className=""
              size="lg"
            />
          </div>
          <p className="text-lg md:text-[22px] flex-1">
            Whether you're looking to buy goods from Nigeria, source from
            international suppliers, or need financial support to make
            purchases, we've got you covered:
          </p>
        </div>
        <HowToUseSteps />
      </div>
    </section>
  );
};

export default HowToUse;
