import React from "react";
import dr1 from '../../assets/dorctor1.jpg'
import dr2 from '../../assets/dr2.jpg'
import dr3 from '../../assets/dr-3.jpg'
const VetsSection = () => {
  return (
    <div className="max-w-11/12 mx-auto p-6 mt-12">
      <h2 className="text-2xl md:text-3xl font-semibold text-center text-blue-700 mb-8">
        🩺 Meet Our Expert Vets
      </h2>
      <div className="grid gap-6 md:grid-cols-3">
        <div className="card bg-base-100 border border-blue-100 shadow-md hover:shadow-xl transition-transform transform hover:-translate-y-1 rounded-xl">
          <figure className="px-6 pt-6">
            <img
              src={dr1}
              alt="Dr. Emily Snow"
              className="w-32 h-32 object-cover rounded-full border-4 border-blue-200"
            />
          </figure>
          <div className="card-body text-center">
            <h3 className="text-lg font-semibold text-blue-800">
              Dr. Emily Snow
            </h3>
            <p className="text-sm text-blue-500">
              Cold Weather Pet Health Specialist
            </p>
            <p className="text-sm text-gray-500 italic">Experience: 8 years</p>
            <p className="mt-2 text-gray-600 text-sm">
              Expert in preventing frostbite and managing cold-related pet
              illnesses.
            </p>
          </div>
        </div>
        <div className="card bg-base-100 border border-blue-100 shadow-md hover:shadow-xl transition-transform transform hover:-translate-y-1 rounded-xl">
          <figure className="px-6 pt-6">
            <img
              src={dr2}
              alt="Dr. Liam Frost"
              className="w-32 h-32 object-cover rounded-full border-4 border-blue-200"
            />
          </figure>
          <div className="card-body text-center">
            <h3 className="text-lg font-semibold text-blue-800">
              Dr. Liam Frost
            </h3>
            <p className="text-sm text-blue-500">
              Pet Nutrition & Wellness Expert
            </p>
            <p className="text-sm text-gray-500 italic">Experience: 10 years</p>
            <p className="mt-2 text-gray-600 text-sm">
              Focuses on winter diet plans that boost pet immunity and energy.
            </p>
          </div>
        </div>

        {/* Vet 3 */}
        <div className="card bg-base-100 border border-blue-100 shadow-md hover:shadow-xl transition-transform transform hover:-translate-y-1 rounded-xl">
          <figure className="px-6 pt-6">
            <img
              src={dr3}
              alt="Dr. Olivia Paws"
              className="w-32 h-32 object-cover rounded-full border-4 border-blue-200"
            />
          </figure>
          <div className="card-body text-center">
            <h3 className="text-lg font-semibold text-blue-800">
              Dr. Olivia Paws
            </h3>
            <p className="text-sm text-blue-500">
              Veterinary Grooming Consultant
            </p>
            <p className="text-sm text-gray-500 italic">Experience: 6 years</p>
            <p className="mt-2 text-gray-600 text-sm">
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
