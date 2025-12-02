import React, { useEffect, useState } from "react";
import { Fade } from "react-awesome-reveal";
import Card from "../../components/Card";
import Offer from "./Offer";

const ServicesSection = () => {
    const [services, setServices] = useState([]);
  
    useEffect(() => {
      fetch("/petcare.json")
        .then((res) => res.json())
        .then((data) => setServices(data))
        .catch((err) => console.error(err));
    }, []);
  return (
     <section id="top-items" className="py-16 bg-base-100 mt-[100px]">
      <div className="container mx-auto">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-primary text-center mb-12 tracking-wide">
          Our All Services for Your Beloved Pets
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {services.map((item) => (
            <Card item={item}></Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
