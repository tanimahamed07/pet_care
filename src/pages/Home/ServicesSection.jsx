import React from "react";
import { useLoaderData } from "react-router";
import ServiceCard from "../ServiceCard";

const ServicesSection = () => {
  const data = useLoaderData();
  return (
    <div data-aos="fade-zoom-in" data-aos-offset="200" data-aos-easing="ease-in-sine" data-aos-duration="600"  className=" container mx-auto p-4">
      <h1 className="text-3xl font-bold text-blue-600 mb-6">
        Popular Winter Care Services
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {data?.map((service) => (
          <ServiceCard key={service.serviceId} service={service} />
        ))}
      </div>
    </div>
  );
};

export default ServicesSection;
