import React, { useEffect, useState } from "react";
import { Link } from "react-router";
import ServiceCard from "../ServiceCard";

import Card from "../../components/Card";
const TopRatedService = () => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    fetch("/petcare.json")
      .then((res) => res.json())
      .then((data) => setServices(data))
      .catch((err) => console.error(err));
  }, []);

  return (
    <section id="top-items" className="py-16 bg-base-100">
      <div className="container mx-auto px-4">
        {/* px added for small screen padding */}
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-primary text-center mb-12 tracking-wide">
          Our Top Services for Your Beloved Pets
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {services.slice(0, 4).map((item, idx) => (
            <Card key={idx} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TopRatedService;
