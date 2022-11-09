import React from "react";
import img from '../../../images/photographer.jpg'

const About = () => {
  return (
    <div className="hero bg-base-200 p-4">
      <div className="hero-content flex-col lg:flex-row">
        <div className="w-1/3">
          <img alt=""
            src={img}
          />
        </div>
        <div className="w-2/3">
          <p className="text-2xl font-bold text-orange-600">About us</p>
          <h3 className="text-3xl font-bold">
            Very much qualified &<br />
            experienced in this field
          </h3>
          <p className="py-6">
            The majority of photographers are self-employed, I'am also one of them. Independent photographers need to able
            to handle their marketing, accounting and sales. They need to
            understand copyright law and be able to read and fully understand
            contracts
          </p>
          <p className="py-1">
          In order to work well with their clients, they need strong interpersonal and customer service skills, in addition to self-confidence. Which is the strong zone for me
          </p>
          {/* <button className="btn btn-primary">Get Started</button> */}
        </div>
      </div>
    </div>
  );
};

export default About;
