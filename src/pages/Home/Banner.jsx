import React from "react";
import { Fade } from "react-awesome-reveal";

const Banner = () => {
  return (
    <div className="bg-base-200 pt-[125px] w-full overflow-x-hidden py-10">
      <div className="flex flex-col-reverse md:flex-row-reverse justify-between items-center gap-12 container mx-auto px-4">
        {/* Banner Image */}
        <div className="flex justify-center md:justify-end w-full md:w-1/2">
          <Fade triggerOnce>
            <img
              src="https://archanababu.epizy.com/wp-content/uploads/2022/08/27-1432737199-pet.jpg"
              className="w-full max-w-md sm:max-w-lg md:max-w-xl lg:max-w-2xl rounded-xl shadow-2xl"
              alt="Pet Care Banner"
            />
          </Fade>
        </div>

        {/* Text Section */}
        <div className="space-y-6 text-center lg:text-left w-full md:w-1/2">
          {/* Top Line */}
          <Fade direction="down" triggerOnce>
            <div className="flex items-center justify-center lg:justify-start gap-4 text-xl">
              <p className="text-primary font-semibold">Trusted Pet Care</p>
              <hr className="border-secondary flex-1 border-t hidden sm:block" />
            </div>
          </Fade>

          <div>
            {/* Title */}
            <Fade triggerOnce>
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
                YOUR PET DESERVES <br /> THE BEST CARE
              </h1>
            </Fade>

            {/* Subtitle */}
            <Fade direction="up" triggerOnce>
              <p className="text-gray-500 text-lg sm:text-xl max-w-lg mx-auto lg:mx-0 mt-4">
                Professional grooming, health checkups, and 24/7 pet care
                support — because your furry friend deserves comfort, love, and
                premium care.
              </p>
            </Fade>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
