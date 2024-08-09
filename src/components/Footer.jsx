import React from 'react';
import { logo, icons, mastercard, visa, rupay, amex, ios, android, help } from '../assets';

const Footer = () => {
  return (
    <footer className="bg-customRed text-white py-8">
      <div className="container mx-auto px-4 grid grid-cols-2 md:grid-cols-5 gap-6">
        {/* Column 1 */}
        <div className="flex flex-col items-center md:items-start mb-4 md:mb-0">
          <img src={logo} alt="Pujanya Logo" className="mb-4 h-20 w-20" />
          <img src={icons} alt="Pujanya Logo" className="mb-2" />
          <p className="mb-4 text-center md:text-left">Download Our App</p>
          <div className="flex flex-col md:flex-row space-y-2 md:space-x-4 md:space-y-0">
            <a href="#" className="flex items-center">
              <img src={ios} alt="iOS" className="mr-1" />iOS
            </a>
            <a href="#" className="flex items-center">
              <img src={android} alt="Android" className="mr-1" />Android
            </a>
          </div>
          <a href="#" className="flex items-center mt-2">
            <img src={help} alt="Customer Help" className="mr-1" />Customer Help
          </a>
        </div>

        {/* Column 2 */}
        <div className="text-center md:text-left mb-4 md:mb-0">
          <h3 className="font-bold mb-4">Popular Categories</h3>
          <ul className="space-y-2">
            <li><a href="#">Vastu Puja Samagri</a></li>
            <li><a href="#">Smart Puja Samagri</a></li>
            <li><a href="#">All Samagri</a></li>
            <li><a href="#">Puja Samagri</a></li>
            <li><a href="#">Online Booking</a></li>
            <li><a href="#">Prediction</a></li>
          </ul>
        </div>

        {/* Column 3 */}
        <div className="text-center md:text-left mb-4 md:mb-0">
          <h3 className="font-bold mb-4">Customer Services</h3>
          <ul className="space-y-2">
            <li><a href="#">About Us</a></li>
            <li><a href="#">Contact Us</a></li>
            <li><a href="#">Our Wallet</a></li>
            <li><a href="#">FAQs</a></li>
            <li><a href="#">Our T&Cs</a></li>
            <li><a href="#">Vendor Connect</a></li>
            <li><a href="#">Cancellation and return policy</a></li>
          </ul>
        </div>

        {/* Column 4 */}
        <div className="text-center md:text-left mb-4 md:mb-0">
          <h3 className="font-bold mb-4">Contact Us</h3>
          <ul className="space-y-2">
            <li><p>Address: There are many variations of passages of Lorem Ipsum available</p></li>
            <li><p>Phone Number: +91 1234567890</p></li>
            <li><p>Email Address: info@pujanya.com</p></li>
          </ul>
        </div>

        {/* Column 5 */}
        <div className="text-center md:text-left">
          <h4 className="font-semibold mb-2">Payment Method</h4>
          <div className="flex justify-center md:justify-start space-x-4 mb-4">
            <img src={visa} alt="Visa" className="h-6" />
            <img src={mastercard} alt="MasterCard" className="h-6" />
            <img src={amex} alt="Amex" className="h-6" />
            <img src={rupay} alt="RuPay" className="h-6" />
          </div>

          <div className="flex flex-col md:flex-row justify-center md:justify-start space-y-2 md:space-y-0 md:space-x-2">
            <input
              type="text"
              placeholder="Enter your Mobile Number"
              className="p-2 text-sm rounded-l border-none h-10"
            />
            <button className="p-2 text-sm bg-customOr rounded-r h-10">Submit</button>
          </div>
        </div>
      </div>

      <div className="bg-customOr py-2 mt-8 text-center text-xs">
        <p>Copyright © 2024 Pujanya</p>
        <p>
          <a href="#" className="underline">Terms and Conditions</a> | 
          <a href="#" className="underline"> Refund Policy</a> | 
          <a href="#" className="underline"> Disclaimer</a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;


