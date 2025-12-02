import React from "react";
import { FaStar } from "react-icons/fa";
import image1 from "../../assets/istockphoto-862664362-612x612.jpg";
import image2 from "../../assets/istockphoto-1147085770-612x612.jpg";
import image3 from "../../assets/istockphoto-922241460-612x612.jpg";
const CustomerReview = () => {
  return (
    <div className="mx-auto mt-14 pb-6">
      <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold  mb-12 text-primary text-center">
        Our Clients Say
      </h2>

      <div className="container mx-auto flex flex-col space-y-6 md:flex-row md:space-x-6 md:space-y-0">
        {/* Card 1 */}
        <div className="w-full md:w-1/3 bg-base-100 border border-gray-200 rounded-lg shadow-md p-6 flex flex-col md:flex-row items-center transition-transform transform hover:scale-105 duration-300">
          <div className="flex-shrink-0 mb-4 md:mb-0 md:mr-6">
            <div className="w-24 h-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2 overflow-hidden">
              <img
                src={image3}
                alt="Client"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          <div className="text-center md:text-left">
            <h3 className="font-semibold text-lg">Sarah Johnson</h3>
            <p className="text-gray-500 text-sm italic mt-2">
              "PawCare has been amazing! My dog Bella absolutely loves their
              grooming service. They truly care for pets like family."
            </p>
            <div className="flex justify-center md:justify-start mt-3 text-yellow-400 space-x-1">
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
            </div>
          </div>
        </div>

        {/* Card 2 */}
        <div className="w-full md:w-1/3 bg-base-100 border border-gray-200 rounded-lg shadow-md p-6 flex flex-col md:flex-row items-center transition-transform transform hover:scale-105 duration-300">
          <div className="flex-shrink-0 mb-4 md:mb-0 md:mr-6">
            <div className="w-24 h-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2 overflow-hidden">
              <img
                src={image1}
                alt="Client"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          <div className="text-center md:text-left">
            <h3 className="font-semibold text-lg">Mark Anderson</h3>
            <p className="text-gray-500 text-sm italic mt-2">
              "Professional and kind staff. My cat is usually shy, but they
              handled her so gently."
            </p>
            <div className="flex justify-center md:justify-start mt-3 text-yellow-400 space-x-1">
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
            </div>
          </div>
        </div>

        {/* Card 3 */}
        <div className="w-full md:w-1/3 bg-base-100 border border-gray-200 rounded-lg shadow-md p-6 flex flex-col md:flex-row items-center transition-transform transform hover:scale-105 duration-300">
          <div className="flex-shrink-0 mb-4 md:mb-0 md:mr-6">
            <div className="w-24 h-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2 overflow-hidden">
              <img
                src={image2}
                alt="Client"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          <div className="text-center md:text-left">
            <h3 className="font-semibold text-lg">Emily Carter</h3>
            <p className="text-gray-500 text-sm italic mt-2">
              "Very satisfied with their vet checkup service. The team is
              knowledgeable and loves animals."
            </p>
            <div className="flex justify-center md:justify-start mt-3 text-yellow-400 space-x-1">
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CustomerReview;
