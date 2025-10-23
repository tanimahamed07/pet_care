import React from "react";
import img from "../../assets/image copy.png";
const TipsSection = () => {
  return (
   <div  data-aos="fade-up" data-aos-anchor-placement="top-center" className="max-w-[800px] mx-auto bg-gradient-to-l from-blue-50 to-white border border-blue-100 shadow-md rounded-xl p-5 mt-8 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 flex flex-col md:flex-row justify-between items-center gap-4">
      <div className="text-center md:text-left">
        <h2 className="text-xl font-semibold text-blue-700 mb-3">
          ❄️ Winter Care Tips for Pets
        </h2>
        <ul className="list-disc  text-gray-700 text-sm space-y-1.5 text-left">
          <li>Keep your pets warm indoors with blankets or a heated bed.</li>
          <li>Protect their paws with soft, pet-safe boots.</li>
          <li>Feed a balanced diet and avoid overfeeding.</li>
          <li>Ensure they have access to fresh, unfrozen water.</li>
          <li>Limit outdoor walks in freezing temperatures.</li>
          <li>Brush regularly to keep their fur insulating properly.</li>
        </ul>
      </div>

      <div className="w-full md:w-auto">
        <img
          src={img}
          alt="Winter Pet Care"
          className="w-full h-auto max-h-[250px] object-contain mx-auto rounded-lg shadow-sm border border-blue-100"
        />
      </div>
    </div>
  );
};

export default TipsSection;
