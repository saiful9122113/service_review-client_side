import React from "react";
import img1 from "../../images/popular/p1.jpg";
import img2 from "../../images/popular/p2.jpg";
import img3 from "../../images/popular/p3.jpg";
import img4 from "../../images/popular/p4.jpg";
import img5 from "../../images/popular/p5.jpg";
import img6 from "../../images/popular/p6.jpg";
import img7 from "../../images/popular/p7.jpg";
import img8 from "../../images/popular/p8.jpg";
import img9 from "../../images/popular/p9.jpg";

const PopularCollection = () => {
  return (
    <div>
      <div className="text-center my-12">
        <h1 className="font-bold text-4xl text-orange-600">
          Some Popular Clicks
        </h1>
      </div>
      <div className="grid gap-12 mb-12 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        <div className="avatar">
          <div className="w-96 rounded">
            <img src={img1} />
          </div>
        </div>
        <div className="avatar">
          <div className="w-96 rounded">
            <img src={img2} />
          </div>
        </div>
        <div className="avatar">
          <div className="w-96 rounded">
            <img src={img3} />
          </div>
        </div>
        <div className="avatar">
          <div className="w-96 rounded">
            <img src={img4} />
          </div>
        </div>
        <div className="avatar">
          <div className="w-96 rounded">
            <img src={img5} />
          </div>
        </div>
        <div className="avatar">
          <div className="w-96 rounded">
            <img src={img6} />
          </div>
        </div>
        <div className="avatar">
          <div className="w-96 rounded">
            <img src={img7} />
          </div>
        </div>
        <div className="avatar">
          <div className="w-96 rounded">
            <img src={img8} />
          </div>
        </div>
        <div className="avatar">
          <div className="w-96 rounded">
            <img src={img9} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PopularCollection;
