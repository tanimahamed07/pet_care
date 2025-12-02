import React from "react";
import dr1 from "../../assets/dorctor1.jpg";
import dr2 from "../../assets/dr2.jpg";
import dr3 from "../../assets/dr-3.jpg";
const VetsSection = () => {
  return (
    <div className="container mx-auto px-4 mt-12">
      <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-12 text-primary text-center">
        Meet Our Expert Vets
      </h2>

      <div className="flex flex-col md:flex-row md:space-x-6 space-y-6 md:space-y-0 items-center md:items-start">
        {/* Card 1 */}
        <div className="card bg-base-100 border border-blue-100 shadow-md hover:shadow-xl transition-transform transform hover:-translate-y-1 rounded-xl w-full md:w-1/3">
          <figure className="px-6 pt-6">
            <img
              src={dr1}
              alt="Dr. Emily Snow"
              className="w-32 h-32 sm:w-36 sm:h-36 md:w-32 md:h-32 lg:w-36 lg:h-36 object-cover rounded-full border-4 border-blue-200 mx-auto"
            />
          </figure>
          <div className="card-body text-center px-4 pb-6">
            <h3 className="text-lg sm:text-xl font-semibold">Dr. Emily Snow</h3>
            <p className="text-sm sm:text-base">
              Cold Weather Pet Health Specialist
            </p>
            <p className="text-sm italic">Experience: 8 years</p>
            <p className="mt-2 text-gray-500 text-sm sm:text-base">
              Expert in preventing frostbite and managing cold-related pet
              illnesses.
            </p>
          </div>
        </div>

        {/* Card 2 */}
        <div className="card bg-base-100 border border-blue-100 shadow-md hover:shadow-xl transition-transform transform hover:-translate-y-1 rounded-xl w-full md:w-1/3">
          <figure className="px-6 pt-6">
            <img
              src={dr2}
              alt="Dr. Liam Frost"
              className="w-32 h-32 sm:w-36 sm:h-36 md:w-32 md:h-32 lg:w-36 lg:h-36 object-cover rounded-full border-4 border-blue-200 mx-auto"
            />
          </figure>
          <div className="card-body text-center px-4 pb-6">
            <h3 className="text-lg sm:text-xl font-semibold">Dr. Liam Frost</h3>
            <p className="text-sm sm:text-base">
              Pet Nutrition & Wellness Expert
            </p>
            <p className="text-sm italic">Experience: 10 years</p>
            <p className="mt-2 text-gray-500 text-sm sm:text-base">
              Focuses on winter diet plans that boost pet immunity and energy.
            </p>
          </div>
        </div>

        {/* Card 3 */}
        <div className="card bg-base-100 border border-blue-100 shadow-md hover:shadow-xl transition-transform transform hover:-translate-y-1 rounded-xl w-full md:w-1/3">
          <figure className="px-6 pt-6">
            <img
              src={dr3}
              alt="Dr. Olivia Paws"
              className="w-32 h-32 sm:w-36 sm:h-36 md:w-32 md:h-32 lg:w-36 lg:h-36 object-cover rounded-full border-4 border-blue-200 mx-auto"
            />
          </figure>
          <div className="card-body text-center px-4 pb-6">
            <h3 className="text-lg sm:text-xl font-semibold">
              Dr. Olivia Paws
            </h3>
            <p className="text-sm sm:text-base">
              Veterinary Grooming Consultant
            </p>
            <p className="text-sm italic">Experience: 6 years</p>
            <p className="mt-2 text-gray-500 text-sm sm:text-base">
              Helps pet owners choose winter-safe grooming routines and skin
              care.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VetsSection;
