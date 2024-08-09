import React, { useState, useEffect } from 'react';
import { HiChevronLeft, HiChevronRight } from 'react-icons/hi';
import { sliderData } from '../constant';

const Slider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [visibleCards, setVisibleCards] = useState(6);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) { 
        setVisibleCards(2);
      } else if (window.innerWidth < 1024) { 
        setVisibleCards(4);
      } else { 
        setVisibleCards(6);
      }
    };

    handleResize(); // Initial check
    window.addEventListener('resize', handleResize);
    
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handlePrev = () => setCurrentIndex((prev) => Math.max(prev - 1, 0));
  const handleNext = () => setCurrentIndex((prev) => Math.min(prev + 1, sliderData.length - visibleCards));

  return (
    <div className="flex items-center justify-between bg-customRed overflow-hidden py-2 px-6">
      <HiChevronLeft
        onClick={handlePrev}
        className="p-2 rounded-full text-gray-400 hover:text-white cursor-pointer ml-8"
        size={52}
      />

      <div className="flex flex-grow justify-between space-x-4">
        {sliderData.slice(currentIndex, currentIndex + visibleCards).map((item, index) => (
          <div
            key={index}
            className="rounded-lg shadow-md p-4 w-full my-2 flex items-center"
            style={{ backgroundColor: item.bgColor }}
          >
            <img src={item.image} alt={item.title} className="w-12 h-12 object-cover rounded-lg mr-2" />
            <h2 className="text-xs font-semibold text-black" style={{ fontFamily: 'Poppins, sans-serif' }}>
              {item.title}
            </h2>
          </div>
        ))}
      </div>

      <HiChevronRight
        onClick={handleNext}
        className="p-2 rounded-full text-gray-400 hover:text-white cursor-pointer mr-8"
        size={52}
      />
    </div>
  );
};

export default Slider;






