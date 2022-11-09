import React from "react";
import { useLoaderData } from "react-router-dom";

const CheckOut = () => {
  const { name, img, description, charge } = useLoaderData();
  return (
    <div>
      <div className="card w-96 bg-base-100 shadow-xl">
        <figure>
          <img src={img} alt="Shoes" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{name}</h2>
          <p>{description}</p>
          <h2 className="font-semibold">Charge : {charge}</h2>
          {/* <div className="card-actions justify-end">
            <Link to={`/checkout/${_id}`}>
              <button className="btn btn-primary">Show details</button>
            </Link>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default CheckOut;
