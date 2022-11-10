import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../contexts/AuthProvider";
import ReviewCard from "./ReviewCard";

const Reviews = ({service}) => {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    // const {user} = useContext(AuthContext);
    // fetch('https://b6a11-service-review-server-side-one.vercel.app/review')
    fetch(`https://b6a11-service-review-server-side-one.vercel.app/review?service=${service}`)
      .then((res) => res.json())
      .then((data) => setReviews(data));
  }, []);

  return (
    <div>
      <div className="text-center my-6">
        <p className="text-2xl font-bold text-orange-600">Reviews</p>
        <h2 className="text-4xl font-semibold">Our Reviews Area</h2>
      </div>
    
      <div className="grid gap-6 grid-cols-1 md:grid-cols:2 lg:grid-cols-3">
        {
          reviews.map(singleReview=><ReviewCard
          key={singleReview._id}
          singleReview={singleReview}
          ></ReviewCard>)
        }
      </div>
    </div>
  );
};

export default Reviews;
