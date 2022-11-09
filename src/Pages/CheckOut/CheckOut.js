import React, { useContext } from "react";
import {  useLoaderData } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthProvider";

const CheckOut = () => {
  const { _id, name, img, description, charge } = useLoaderData();
  const { user } = useContext(AuthContext);

  const handleReview = event =>{
    event.preventDefault();
    const form = event.target;
    const email = user?.email || 'unregistered';
    const name = form.value;
    const review = form.message.value;

    const reviews = {
        service: _id,
        serviceName: name,
        price: charge,
        customer: name,
        email,
        review
    }
    fetch('http://localhost:5000/reviews',{
        method: 'POST',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(reviews)
    })
    .then(res => res.json())
    .then(data => {
        console.log(data)
        if(data.acknowledged){
            alert('Reviewed successfully')
            form.reset();
        }
    })
    .catch(er=>console.error(er));
  }
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
        </div>
      </div>

      <div>
        <form onSubmit={handleReview} className="text-center">
          <h2 className="text-4xl">You are about to review {name} service</h2>
          <input
            name="name"
            type="text"
            placeholder="Name"
            className="bg-indigo-900 my-3 w-1/2 input input-ghost w-full"
          />
          <br />
          <input
            name="email"
            type="email"
            placeholder="Email"
            className="bg-indigo-900 my-3 w-1/2 input input-ghost w-full"
          />
          <br />
          {/* <input name="" type="text" placeholder="Type your Review" className="bg-indigo-900 my-3 w-1/2 input input-ghost w-full" /><br/> */}
          <textarea
            name="message"
            className="textarea textarea-bordered bg-indigo-900 my-3 w-1/2 h-24 mb-1"
            placeholder="Review"
          ></textarea>
          <br />
          <input
            className=" btn my-3 bg-indigo-900 px-11"
            type="submit"
            value="Place Your Order"
          />
          {/* <input type="image" src="submit.gif" alt="Submit" width="48" height="48"></input> */}
        </form>
      </div>
    </div>
  );
};

export default CheckOut;
