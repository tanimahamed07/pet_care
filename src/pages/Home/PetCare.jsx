import React from "react";
import { FaCheckCircle } from "react-icons/fa";

const PetCare = () => {
  const rules = [
    "Ensure your pet has fresh water at all times.",
    "Provide a balanced and nutritious diet suitable for your pet's age and breed.",
    "Regularly groom your pet to maintain hygiene, including brushing fur and trimming nails.",
    "Schedule routine vet check-ups and vaccinations.",
    "Provide adequate exercise and playtime daily.",
    "Keep your pet's living area clean, safe, and comfortable.",
  ];
  return (
    <div>
      <section className="py-1">
        <div className="container mx-auto px-4 text-center">
          {/* Banner Heading */}
          <h2 className="text-3xl sm:text-4xl md:text-5xl pt-12 font-bold mb-6 text-primary">
            Essential Pet Care Rules
          </h2>
          <p className="text-lg sm:text-xl md:text-2xl mb-12">
            Follow these simple rules to keep your beloved pets happy and
            healthy.
          </p>

          {/* Rules List */}
          <div className="max-w-4xl mx-auto text-left space-y-4">
            {rules.map((rule, index) => (
              <div
                key={index}
                className="flex items-start space-x-3 bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300"
              >
                <FaCheckCircle className="text-green-500 mt-1 flex-shrink-0" />
                <p className="text-base sm:text-lg md:text-xl text-gray-700">
                  {rule}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default PetCare;
