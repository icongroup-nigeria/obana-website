import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { ReactNode, useRef, useState } from 'react';
import { classNames } from '@/Utils/functions';
import { ArrowLeft, ArrowRight } from 'lucide-react';

const SlickSlider = ({
  settings,
  children,
  slideLength,
  showDots = false,
  showArrows = false,
}: {
  settings: any;
  children: ReactNode;
  slideLength?: number;
  showDots?: boolean;
  showArrows?: boolean;
}) => {
  const [slideIndex, setSlideIndex] = useState(0);
  let sliderRef: any = useRef(null);
  return (
    <div>
      <Slider
        {...settings}
        beforeChange={(_, next) => setSlideIndex(next)}
        ref={(slider: Slider) => {
          sliderRef = slider;
        }}
      >
        {children}
      </Slider>
      {showDots && slideLength && (
        <div className="flex gap-2.5 justify-center items-center mt-8">
          {[...Array(slideLength)].map((_, i) => (
            <div
              onClick={() => sliderRef.slickGoTo(i)}
              className={classNames(
                slideIndex === i
                  ? 'w-[3.125rem] bg-obGray-700 h-2 rounded-full'
                  : 'w-[1.875rem] bg-obGray-400 h-1.5 rounded-full',
                'rounded-full transition-all duration-300 ease-in-out hover:opacity-80'
              )}
              key={i}
            />
          ))}
        </div>
      )}
      {showArrows && (
        <div className="max-md:hidden w-full flex justify-center items-center gap-4 px-4 mt-16">
          <button
            onClick={() => sliderRef.slickPrev()}
            className="bg-obGray-100 p-2 rounded-full text-obGray-500 h-10 w-10 hover:opacity-80"
          >
            <ArrowLeft className="h-5 w-5" />
          </button>
          <button
            onClick={() => sliderRef.slickNext()}
            className="bg-obGray-100 p-2 rounded-full text-obGray-500 h-10 w-10 hover:opacity-80"
          >
            <ArrowRight className="h-5 w-5" />
          </button>
        </div>
      )}
    </div>
  );
};

export default SlickSlider;
