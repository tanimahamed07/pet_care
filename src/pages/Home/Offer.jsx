import React from "react";
import image from "../../assets/pet-growming.webp";
import { Fade } from "react-awesome-reveal";

const Offer = () => {
  return (
    <section className="bg-base-200  w-full overflow-x-hidden py-10">
      <div className="container mx-auto flex flex-col md:flex-row items-center gap-8">
        {/* Left Image */}
        <div className="md:w-1/2">
          <Fade triggerOnce>
            <img
              src={image}
              alt="Pet Grooming"
              className="rounded-lg shadow-lg w-full object-cover"
            />
          </Fade>
        </div>

        {/* Right Text */}
        <div className="md:w-1/2 text-center md:text-left">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Special Pet Grooming Offer!
          </h2>
          <p className="text-lg md:text-xl text-gray-500 mb-6">
            Keep your pets clean and happy! Get 25% off on full grooming
            services this month.
          </p>
          <button className="btn btn-primary btn-lg">Book Grooming</button>
        </div>
      </div>
    </section>
  );
};

export default Offer;
