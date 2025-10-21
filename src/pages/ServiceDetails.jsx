import React from "react";
import { useLoaderData, useParams } from "react-router";

const ServiceDetails = () => {
  const data = useLoaderData();
  const { id } = useParams();
  console.log(data, id);
  const serviceDetails = data.find((d) => d.serviceId == id);
  console.log(serviceDetails);
  const handleSubmit = () => {
    
  }
  return (
    <div className="max-w-11/12 mx-auto mt-10 bg-gradient-to-br from-blue-50 to-white p-6 rounded-2xl shadow-xl border border-blue-100">
      <img
        src={serviceDetails.image}
        alt={serviceDetails.serviceName}
        className="w-full h-72 object-cover rounded-xl shadow-md mb-6"
      />

      <h2 className="text-3xl font-bold text-blue-700 mb-3">
        {serviceDetails.serviceName}
      </h2>
      <p className="text-gray-600 mb-2">
        <strong>Category:</strong> {serviceDetails.category}
      </p>
      <p className="text-gray-600 mb-2">
        <strong>Provider:</strong> {serviceDetails.providerName} (
        <span className="text-blue-500">{serviceDetails.providerEmail}</span>)
      </p>
      <p className="text-gray-600 mb-2">
        <strong>Slots Available:</strong> {serviceDetails.slotsAvailable}
      </p>
      <p className="text-gray-600 mb-2">
        <strong>Rating:</strong> ⭐ {serviceDetails.rating}
      </p>
      <p className="text-gray-700 mb-4">
        <strong>Description:</strong> {serviceDetails.description}
      </p>
      <p className="text-2xl font-semibold text-green-600 mb-8">
        ${serviceDetails.price}
      </p>

      {/* Book Form */}
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          placeholder="Your Name"
          className="input input-bordered w-full"
        />
        <input
          type="email"
          placeholder="Your Email"
          className="input input-bordered w-full"
          // value={formData.email}
        />
        <button
          type="submit"
          className="btn bg-blue-600 hover:bg-blue-700 text-white w-full"
        >
          Book Now
        </button>
      </form>
    </div>
  );
};

export default ServiceDetails;
