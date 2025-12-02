import React from "react";
import toast from "react-hot-toast";
import { useLoaderData, useNavigate, useParams } from "react-router";

const ServiceDetails = () => {
  const data = useLoaderData();
  console.log(data);
  const { id } = useParams();
  console.log(id);
  const serviceDetails = data.find((d) => d.id == id);
  console.log(serviceDetails);
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    toast.success("Booking Successful");
    e.target.reset();
    navigate("/");
  };
  return (
    <div className="container mx-auto px-4 mt-38">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
        {/* LEFT SIDE — IMAGE */}
        <div>
          <img
            src={serviceDetails.image}
            alt={serviceDetails.title}
            className="w-full h-[200px] sm:h-[300px] md:h-[400px] lg:h-[500px] object-cover rounded-xl shadow-lg"
          />
        </div>

        {/* RIGHT SIDE — DETAILS */}
        <div className="space-y-6">
          <h1 className="text-2xl sm:text-3xl md:text-4xl text-primary font-bold">
            {serviceDetails.title}
          </h1>

          <p className="text-base sm:text-lg leading-relaxed">
            {serviceDetails.fullDesc}
          </p>

          {/* BENEFITS */}
          <div>
            <h2 className="text-xl font-semibold mb-2">Benefits</h2>
            <ul className="list-disc ml-6 space-y-1 text-sm sm:text-base">
              {serviceDetails.benefits.map((b, index) => (
                <li key={index}>{b}</li>
              ))}
            </ul>
          </div>

          {/* TIPS */}
          <div>
            <h2 className="text-xl font-semibold mb-2">Tips for Pet Owners</h2>
            <ul className="list-disc ml-6 space-y-1 text-sm sm:text-base">
              {serviceDetails.tips.map((t, index) => (
                <li key={index}>{t}</li>
              ))}
            </ul>
          </div>

          {/* PRICE + DURATION */}
          <div className="flex flex-col sm:flex-row flex-wrap gap-4 mt-4">
            <div className="badge badge-primary p-3 text-base sm:text-lg">
              Price: {serviceDetails.price}
            </div>
            <div className="badge badge-secondary p-3 text-base sm:text-lg">
              Duration: {serviceDetails.duration}
            </div>
          </div>
        </div>
      </div>

      {/* BOOKING FORM - FULL WIDTH BELOW */}
      <div className="mt-12">
        <h2 className="text-2xl sm:text-3xl md:text-4xl text-primary font-bold mb-6 text-center md:text-left">
          Book This Service
        </h2>

        <form
          onSubmit={handleSubmit}
          className="grid grid-cols-1 md:grid-cols-2 gap-4"
        >
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            required
            className="input input-bordered w-full"
          />

          <input
            type="text"
            name="petName"
            placeholder="Pet Name"
            required
            className="input input-bordered w-full"
          />

          <input
            type="number"
            name="phone"
            placeholder="Phone Number"
            required
            className="input input-bordered w-full"
          />

          <input
            type="date"
            name="date"
            required
            className="input input-bordered w-full"
          />

          <textarea
            name="note"
            placeholder="Additional Notes"
            className="textarea textarea-bordered md:col-span-2 w-full"
          ></textarea>

          <button
            type="submit"
            className="btn btn-primary w-full md:col-span-2 mt-3"
          >
            Confirm Booking
          </button>
        </form>
      </div>
    </div>
  );
};

export default ServiceDetails;
