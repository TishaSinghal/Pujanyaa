
import React from 'react';
import { bannerrightImage, bannerbgImage } from '../assets';

const Booking = () => {
  return (
    <div className="relative w-full h-full bg-cover bg-center" style={{ backgroundImage: `url(${bannerbgImage})` }}>
      <div className="relative w-full h-full bg-cover bg-center flex flex-col md:flex-row justify-between items-center" style={{ backgroundImage: `url(${bannerbgImage})` }}>
        
        <div className="w-full md:w-1/2 text-customRed ml-8 md:ml-24 text-center md:text-left mt-8 md:mt-0">
        <h1 className="text-medium md:text-5xl font-bold mt-2 font-poppins">Book Your Samagri</h1>
          <p className="text-small md:text-3xl text-white bg-customRed py-2 pl-2 my-4">Delivery in 6-7 Days Guaranteed</p>
          <p className="text-small md:text-3xl">Next-day delivery avaialable <br /> only in India!</p>          
        </div>

       
        <div className="w-full md:w-[60%] h-[40%] md:h-[60%] flex items-end mt-8 md:mt-0 mr-0 md:mr-24">
          <img src={bannerrightImage} alt="Right side" className="w-full h-full object-cover" />
        </div>
      </div>
      
    </div>
  );
};

export default Booking;