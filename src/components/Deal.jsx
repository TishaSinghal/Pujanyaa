import React from 'react';
import { dealData } from '../constant';

const Deal = () => {
    return (
        <div className="font-poppins text-center p-8 pt-12 bg-customPink">
            <h2 className="text-4xl font-semibold mb-8">Our Deals Categories</h2>
            <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mx-4 md:mx-12">
                {dealData.map((service, index) => (
                    <div key={index} className="bg-white border border-gray-500 shadow-md p-5 flex flex-col justify-between h-[300px] w-full sm:w-[250px]">
                        <div className="w-24 h-6 bg-customRed rounded-full flex items-center justify-center mb-4">
                            <p className="text-xs text-white mb-0">{service.top}</p>
                        </div>

                        <div className="flex flex-col items-center flex-grow">
                            <div className="w-24 h-24 bg-customRed rounded-full flex items-center justify-center mb-4">
                                <img src={service.image} alt="Icon" className="w-14 h-14 filter brightness-110" />
                            </div>
                            <h3 className="text-3xl text-customRed font-bold mb-3">{service.decription}</h3>
                            <p className="text-lg text-customRed mb-4">{service.title}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Deal;
