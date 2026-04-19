import React, { ReactNode, useEffect, useState } from 'react';
import useEmblaCarousel from 'embla-carousel-react';

interface Props {
  children: ReactNode[];
  desktopGridClasses: string;
}

const MobileSlider: React.FC<Props> = ({ children, desktopGridClasses }) => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: false, align: 'start', containScroll: 'trimSnaps' });
  const [selectedIndex, setSelectedIndex] = useState(0);

  useEffect(() => {
    if (!emblaApi) return;
    emblaApi.on('select', () => {
      setSelectedIndex(emblaApi.selectedScrollSnap());
    });
  }, [emblaApi]);

  return (
    <>
      {/* Desktop view */}
      <div className={`hidden md:grid ${desktopGridClasses.replace('grid', '').replace('md:', '')}`}>
        {children}
      </div>

      {/* Mobile view */}
      <div className="md:hidden w-full overflow-hidden" ref={emblaRef}>
        <div className="flex gap-4 mb-4">
          {children.map((child, index) => (
            <div key={index} className="flex-[0_0_85%] min-w-0">
              {child}
            </div>
          ))}
        </div>
        
        {/* Dots */}
        <div className="flex justify-center gap-2">
          {children.map((_, index) => (
            <button
              key={index}
              className={`h-1.5 rounded-full transition-all duration-300 ${index === selectedIndex ? 'bg-gold-500 w-4' : 'bg-white/20 w-1.5'}`}
              onClick={() => emblaApi?.scrollTo(index)}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default MobileSlider;
