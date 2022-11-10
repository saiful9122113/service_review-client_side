import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../contexts/AuthProvider";
import UpdateReviewModal from "./UpdateReviewModal";

const MyReviews = () => {
  const { user } = useContext(AuthContext);
  const [reviews, setReviews] = useState([]);
  const [modalIsOpen, setIsOpen] = React.useState(false);
  const [selectedReview, setSelectedReview] = useState({});

  function openModal(review) {
    setSelectedReview(review);
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  useEffect(() => {
    if (!user.email) return;
    fetch(`http://localhost:5000/review?email=${user.email}`, {
      method: "GET",
      headers: {
        "content-type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => setReviews(data));
  }, []);

  const handleDelete = (id) => {
    fetch(`http://localhost:5000/delete-review?id=${id}`, {
      method: "DELETE",
      headers: {
        "content-type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) =>
        setReviews((pre) => pre.filter((review) => review._id !== id))
      )
      .catch((error) => alert("Review not deleted!"));
  };

  return (
    <div className="flex flex-wrap justify-center items-center gap-3">
      {reviews.map((review) => (
        <div key={review._id} className="card w-96 bg-base-100 shadow-xl">
          <figure>
            <img src={review.photo} alt="Shoes" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">{review.serviceName}</h2>
            <p>{review.review?.substring(0, 100)}...</p>
            <h2 className="font-semibold">Charge : {review.price}</h2>
            <div className="card-actions justify-between">
              <button className="btn btn-info" onClick={() => openModal(review)}>Update Review</button>
              <button
                className="btn btn-error"
                onClick={() => handleDelete(review._id)}
              >
                Delete Review
              </button>
            </div>
          </div>
        </div>
      ))}
      <UpdateReviewModal
        modalIsOpen={modalIsOpen}
        closeModal={closeModal}
        selectedReview={selectedReview}
        setReviews={setReviews}
      />
    </div>
  );
};

export default MyReviews;
