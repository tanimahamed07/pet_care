import React from 'react';
import { Link } from 'react-router';

const ServiceCard = ({service}) => {
    return (
         <div key={service.serviceId} className="card shadow-xl  bg-gradient-to-l from-blue-50 to-white border border-blue-100  hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 backdrop-blur-md rounded-2xl">
            <figure>
              <img src={service.image} alt={service.serviceName} className="h-48 w-full object-cover"/>
            </figure>
            <div className="card-body text-gray-700">
              <h3 className="card-title">{service.serviceName}</h3>
              <p className="text-yellow-500 font-semibold">⭐ {service.rating}</p>
              <p className="text-blue-600 font-bold">${service.price}</p>
              <div className="card-actions mt-4">
               <Link to = {`/details/${service.serviceId}`}> <button className="btn bg-gradient-to-r from-blue-500 to-cyan-400 text-white font-semibold hover:from-blue-600 hover:to-cyan-500 border-none rounded-full btn-block">View Details</button></Link>
              </div>
            </div>
          </div>
        
    );
};

export default ServiceCard;