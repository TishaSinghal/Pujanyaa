
import React from 'react';
import { rightImage, bgImage, rectImage1, rectImage2, leftIcon } from '../assets';

const Hero = () => {
  return (
    <div className="relative w-full h-screen bg-cover bg-center" style={{ backgroundImage: `url(${bgImage})` }}>
      <div className="relative w-full h-full bg-cover bg-center flex flex-col md:flex-row justify-between items-center" style={{ backgroundImage: `url(${bgImage})` }}>
        
        <div className="w-full md:w-1/2 text-customRed ml-8 md:ml-24 text-center md:text-left mt-8 md:mt-0">
          <p className="text-2xl md:text-3xl">Get Purohita & <br /> Pooja Samagri At</p>
          <h1 className="text-4xl md:text-5xl font-bold mt-2 font-poppins">Your Doorstep <br/> Through WhatsApp</h1>
        </div>

        
        <div className="w-full md:w-[60%] h-[60%] md:h-[90%] flex items-end mt-8 md:mt-0 mr-0 md:mr-24">
          <img src={rightImage} alt="Right side" className="w-full h-full object-cover" />
        </div>
      </div>

      
      <div className="absolute inset-x-0 -bottom-[30px] md:-bottom-[50px] flex justify-center space-x-4 md:space-x-20">
        <div className="w-3/4 md:w-1/3 h-[60px] md:h-[100px] bg-cover flex items-center justify-center space-x-4 md:space-x-14 px-6 md:px-10" style={{ backgroundImage: `url(${rectImage1})` }}>
        
          <img src={leftIcon} alt="Icon" className="h-10 w-10 md:h-20 md:w-20 object-contain" />

          
          <p className="text-center font-bold font-poppins text-sm md:text-xl text-white">Book Your <br/> Pandit Now</p>

         
          <p className="font-poppins text-lg md:text-3xl font-bold text-white">30%<br/>OFF</p>
        </div>

        <div className="w-3/4 md:w-1/3 h-[60px] md:h-[100px] bg-cover" style={{ backgroundImage: `url(${rectImage2})` }}></div>
      </div>
    </div>
  );
};

export default Hero;


