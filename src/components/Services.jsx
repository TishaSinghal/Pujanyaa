import React from 'react';
import { servicesData } from '../constant';

const Services = () => {
    return (
        <div className="font-poppins text-center p-8 pt-24 hidden md:block">
            <h2 className="text-4xl font-semibold mb-8">Our Services</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 ml-12 mr-12">
                {servicesData.map((service, index) => (
                    <div key={index} className="bg-white border border-gray-500 shadow-md p-6 rounded-lg flex flex-col justify-between h-[340px]">
                        <div className="flex flex-col items-center flex-grow">
                            <div className="w-16 h-16 bg-customPink rounded-full flex items-center justify-center mb-4">
                                <img src={service.image} alt="Icon" className="w-10 h-10 filter brightness-110" />
                            </div>
                            <h3 className="text-3xl font-bold mb-4">{service.title}</h3>
                            <p className="text-lg text-gray-600 mb-6">{service.description}</p>
                        </div>
                        <button className="bg-customRed text-white w-full py-2 rounded-lg hover:bg-customRed">
                            {service.buttonLabel}
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Services;
