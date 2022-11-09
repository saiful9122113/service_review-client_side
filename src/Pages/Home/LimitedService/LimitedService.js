import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ServiceCard from "../../../Shared/ServiceCard/ServiceCard";

const LimitedService = () => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/limited-services")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);

  return (
    <div>
      <div className="text-center my-6">
        <p className="text-2xl font-bold text-orange-600">Some Service of us</p>
        <h2 className="text-4xl font-semibold">Our Services Area</h2>
      </div>
      <div className="grid gap-6 grid-cols-1 md:grid-cols:2 lg:grid-cols-3">
        {services.map((service) => (
          <ServiceCard key={service._id} service={service}></ServiceCard>
        ))}
      </div>
      <div className="text-center">
        <button className="btn btn-primary my-4 px-12">
        <Link className="text-orange-600 font-bold" to="/services" href="">
          See All Services
        </Link>
        </button>
      </div>
    </div>
  );
};

export default LimitedService;
