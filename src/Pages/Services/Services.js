import React, { useEffect, useState } from "react";
import ServiceCard from "../../Shared/ServiceCard/ServiceCard";

const Services = () => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    fetch('https://b6a11-service-review-server-side-one.vercel.app/services')
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);

  return (
    <div>
      <div className="text-center my-6">
        <p className="text-2xl font-bold text-orange-600">Service</p>
        <h2 className="text-4xl font-semibold">Our Services Area</h2>
      </div>
      <div className="grid gap-6 grid-cols-1 md:grid-cols:2 lg:grid-cols-3">
        {
          services.map(service=><ServiceCard
          key={service._id}
          service={service}
          ></ServiceCard>)
        }
      </div>
    </div>
  );
};

export default Services;
