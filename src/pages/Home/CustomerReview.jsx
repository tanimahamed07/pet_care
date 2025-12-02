import React from "react";
import { FaStar } from "react-icons/fa";
import image1 from "../../assets/istockphoto-862664362-612x612.jpg";
import image2 from "../../assets/istockphoto-1147085770-612x612.jpg";
import image3 from "../../assets/istockphoto-922241460-612x612.jpg";
const CustomerReview = () => {
  return (
    <div className="w-11/12 mx-auto">
      <section className="bg-base-100 py-16">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 text-primary text-center">
            🐶 What Our Happy Clients Say 🐾
          </h2>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            <div
              data-aos="flip-left"
              className="card bg-base-100 shadow-xl hover:shadow-2xl transition-all duration-300 border border-gray-200"
            >
              <div className="card-body items-center text-center">
                <div className="avatar">
                  <div className="w-20 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                    <img src={image3} alt="Sarah Johnson" />
                  </div>
                </div>
                <h3 className="font-semibold text-lg mt-3">Sarah Johnson</h3>
                <p className="text-gray-500 text-sm italic">
                  "PawCare has been amazing! My dog Bella absolutely loves their
                  grooming service. They truly care for pets like family."
                </p>
                <div className="flex justify-center mt-3 text-yellow-400">
                  <FaStar /> <FaStar /> <FaStar /> <FaStar /> <FaStar />
                </div>
              </div>
            </div>
            <div
              data-aos="flip-up"
              className="card bg-base-100 shadow-xl hover:shadow-2xl transition-all duration-300 border border-gray-200"
            >
              <div className="card-body items-center text-center">
                <div className="avatar">
                  <div className="w-20 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                    <img src={image1} alt="" />
                  </div>
                </div>
                <h3 className="font-semibold text-lg mt-3">Mark Anderson</h3>
                <p className="text-gray-500 text-sm italic">
                  "Professional and kind staff. My cat is usually shy, but they
                  handled her so gently. Highly recommended!"
                </p>
                <div className="flex justify-center mt-3 text-yellow-400">
                  <FaStar /> <FaStar /> <FaStar /> <FaStar />
                </div>
              </div>
            </div>
            <div
              data-aos="flip-right"
              className="card bg-base-100 shadow-xl hover:shadow-2xl transition-all duration-300 border border-gray-200"
            >
              <div className="card-body items-center text-center">
                <div className="avatar">
                  <div className="w-20 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                    <img src={image2} alt="Emily Carter" />
                  </div>
                </div>
                <h3 className="font-semibold text-lg mt-3">Emily Carter</h3>
                <p className="text-gray-500 text-sm italic">
                  "Very satisfied with their vet checkup service. The team is
                  knowledgeable and loves animals."
                </p>
                <div className="flex justify-center mt-3 text-yellow-400">
                  <FaStar /> <FaStar /> <FaStar /> <FaStar /> <FaStar />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CustomerReview;
