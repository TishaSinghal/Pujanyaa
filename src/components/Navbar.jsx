
import React, { useState } from 'react';
import { logo, account, ascetic, calendar, gps, heart, pooja, cart, store, telephone, line, list } from "../assets";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className="w-full h-[60px] md:h-[70px] bg-customBg border-b"> 
      <div className="md:max-w-[1480px] max-w-[600px] m-auto w-full h-full flex flex-col md:flex-row justify-center items-center md:px-0 px-4">
        
     
        <div className="flex items-center justify-between w-full md:w-auto space-x-2 md:mr-4">
          <div className="flex items-center space-x-2">
            <img src={logo} alt="Logo" className="w-10 h-10 filter brightness-110" />
            
           
            <div className="hidden md:flex items-center space-x-2">
              <div className="w-7 h-7 bg-customRed rounded-full flex items-center justify-center">
                <img src={telephone} alt="Icon" className="w-4 h-4 filter brightness-110" />
              </div>
              <span className="text-customRed text-xs font-bold">+91 1234567890</span>
            </div>
          </div>

         
          <div className="md:hidden w-5 h-5 filter brightness-110 bg-customRed rounded-full flex items-center justify-center cursor-pointer" onClick={toggleMenu}>
            <img src={list} alt="Menu Icon" className="w-3 h-3" />
          </div>
        </div>

        <div className="bg-white shadow-md p-2 rounded-full w-full max-w-md md:max-w-lg lg:max-w-xl xl:max-w-2xl h-[35px] border border-gray-500 flex items-center space-x-4 justify-between md:mx-4">
          <div className="flex items-center space-x-20"> 
            <div className="flex items-center space-x-2">
              <img src={gps} alt="Icon" className="w-4 h-4 filter brightness-110" />
              <span className="text-gray-500 text-xs md:text-sm">Location</span>
            </div>
            <div className="flex items-center space-x-2">
              <img src={line} alt="Icon" className="w-3 h-3" />
              <img src={calendar} alt="Icon" className="w-4 h-4 filter brightness-110" />
              <span className="text-gray-500 text-xs md:text-sm">Date</span>
            </div>
            <div className="flex items-center space-x-2">
              <img src={line} alt="Icon" className="w-3 h-3" />
              <img src={pooja} alt="Icon" className="w-4 h-4 filter brightness-110" />
              <span className="text-gray-500 text-xs md:text-sm">Select Puja or Pandit</span>
            </div>
          </div>
          <button className="bg-customRed text-white py-2 px-4 rounded-full h-[30px] flex items-center justify-center hover:bg-red-700 text-xs md:text-sm">
            Book Now
          </button>
        </div>


        <div className="relative hidden md:flex items-center md:ml-4">
      
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-customRed rounded-full flex items-center justify-center">
              <img src={store} alt="Icon" className="w-4 h-4 filter brightness-110" />
            </div>
            <div className="w-8 h-8 bg-customRed rounded-full flex items-center justify-center">
              <img src={ascetic} alt="Icon" className="w-4 h-4 filter brightness-110" />
            </div>
            <div className="w-8 h-8 bg-customRed rounded-full flex items-center justify-center">
              <img src={heart} alt="Icon" className="w-4 h-4 filter brightness-110" />
            </div>
            <div className="w-8 h-8 bg-customRed rounded-full flex items-center justify-center">
              <img src={account} alt="Icon" className="w-4 h-4 filter brightness-110" />
            </div>
            <div className="relative w-8 h-8 bg-customRed rounded-full flex items-center justify-center">
              <img src={cart} alt="Icon" className="w-4 h-4 filter brightness-110" />
              <div className="absolute top-0 right-0 transform translate-x-1/4 -translate-y-1/4 w-4 h-4 bg-customRed rounded-full flex items-center justify-center">
                <span className="text-white text-xs leading-none">0</span>
              </div>
            </div>
            <span className="text-customRed text-xs font-bold">₹0.00</span>
          </div>

          
          {menuOpen && (
            <div className="absolute top-full right-0 mt-2 bg-white shadow-lg rounded-lg py-2">
              <a href="#" className="block px-4 py-1 text-gray-800 hover:bg-gray-100">Store</a>
              <a href="#" className="block px-4 py-1 text-gray-800 hover:bg-gray-100">Ascetic</a>
              <a href="#" className="block px-4 py-1 text-gray-800 hover:bg-gray-100">Heart</a>
              <a href="#" className="block px-4 py-1 text-gray-800 hover:bg-gray-100">Account</a>
              <a href="#" className="block px-4 py-1 text-gray-800 hover:bg-gray-100">Cart</a>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default Navbar;



