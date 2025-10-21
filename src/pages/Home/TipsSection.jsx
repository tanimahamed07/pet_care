import React from "react";
import img from "../../assets/image copy.png";
const TipsSection = () => {
  return (
    <div className="max-w-[800px] mx-auto bg-gradient-to-l from-blue-50 to-white border border-blue-100 shadow-md rounded-xl p-5 mt-8 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 flex justify-between items-center">
      <div>
        <h2 className="text-xl font-semibold text-center text-blue-700 mb-3">
          ❄️ Winter Care Tips for Pets
        </h2>

        <ul className="list-disc list-inside text-gray-700 text-sm space-y-1.5">
          <li>Keep your pets warm indoors with blankets or a heated bed.</li>
          <li>Protect their paws with soft, pet-safe boots.</li>
          <li>Feed a balanced diet and avoid overfeeding.</li>
          <li>Ensure they have access to fresh, unfrozen water.</li>
          <li>Limit outdoor walks in freezing temperatures.</li>
          <li>Brush regularly to keep their fur insulating properly.</li>
        </ul>
      </div>
      <div className="">
        <img 
          src={img}
          alt="Winter Pet Care"
          className=" h-[300px] mx-auto rounded-lg shadow-sm border border-blue-100"
        />
      </div>
    </div>
  );
};

export default TipsSection;
