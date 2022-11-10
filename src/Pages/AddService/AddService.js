import React, { useContext, useState } from "react";
import { AuthContext } from "../../contexts/AuthProvider";

const AddService = () => {
    const [newService, setNewService] = useState({
        name: "",
        img: "",
        description: "",
        charge: ""
    });

    const handleInputs = (e) => {
        setNewService(pre => ({...pre, [e.target.name]: e.target.value}))
    }

  const handleReview = (event) => {
    event.preventDefault();
    
    fetch("https://b6a11-service-review-server-side-one.vercel.app/add-service", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newService),
    })
      .then((res) => res.json())
      .then((data) => {
        alert("Reviewed successfully");
      })
      .catch((er) => console.error(er));
  };

  return (
    <div>
      <form onSubmit={handleReview} className="text-center">
        <h2 className="text-4xl">You are about to review service</h2>
        <input
          name="name"
          type="text"
          placeholder="Name"
          className="bg-indigo-900 my-3 input input-ghost w-full"
          value={newService.name}
          onChange={handleInputs}
        />
        <br />
        <input
          name="img"
          type="text"
          placeholder="Image URL"
          className="bg-indigo-900 my-3 input input-ghost w-full"
          value={newService.img}
          onChange={handleInputs}
        />
        <br />
        <textarea
          name="description"
          className="textarea textarea-bordered bg-indigo-900 my-3 h-24 mb-1 w-full"
          placeholder="Description"
          value={newService.description}
          onChange={handleInputs}
        ></textarea>
        <br />
        <input
          name="charge"
          type="number"
          placeholder="Charge"
          className="bg-indigo-900 my-3 input input-ghost w-full"
          value={newService.charge}
          onChange={handleInputs}
        />
        <br />
        <input
          className=" btn my-3 bg-indigo-900 px-11"
          type="submit"
          value="Place Your Review"
        />
      </form>
    </div>
  );
};

export default AddService;
<h3>Add service</h3>;
