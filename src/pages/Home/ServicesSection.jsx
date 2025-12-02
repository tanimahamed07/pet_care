// ServicesSection.jsx
import React, { useEffect, useState } from "react";
import Card from "../../components/Card";

const ServicesSection = () => {
  const [services, setServices] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [sortOrder, setSortOrder] = useState(""); // "", "asc", "desc"

  useEffect(() => {
    fetch("/petcare.json")
      .then((res) => res.json())
      .then((data) => setServices(data))
      .catch((err) => console.error(err));
  }, []);

  const filteredAndSorted = services
    .filter((s) =>
      s.title.toLowerCase().includes(searchTerm.toLowerCase())
    )
    .sort((a, b) => {
      if (!sortOrder) return 0;

      // Remove $ and convert to number for proper sorting
      const priceA = Number(a.price.replace("$", "").split(" ")[0]) || 0;
      const priceB = Number(b.price.replace("$", "").split(" ")[0]) || 0;

      return sortOrder === "asc" ? priceA - priceB : priceB - priceA;
    });

  return (
    <section id="top-items" className="py-16 bg-base-100 mt-[100px]">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-primary text-center mb-8 tracking-wide">
          Our All Services for Your Beloved Pets
        </h2>

        {/* Search + Sort Controls */}
        <div className="flex flex-col sm:flex-row sm:items-center mb-6 space-y-4 p-10 sm:space-y-0 sm:space-x-4">
          <input
            type="text"
            placeholder="Search services..."
            className="input input-bordered w-full sm:flex-grow"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />

          <select
            className="select select-bordered w-auto sm:w-auto"
            value={sortOrder}
            onChange={(e) => setSortOrder(e.target.value)}
          >
            <option value="">Sort by Price</option>
            <option value="asc">Price — Low to High</option>
            <option value="desc">Price — High to Low</option>
          </select>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {filteredAndSorted.map((item) => (
            <Card key={item.id} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
