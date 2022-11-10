import React, { useEffect, useState } from "react";
import Modal from "react-modal";
import { FaTimes } from "react-icons/fa";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    maxHeight: "70vh",
    overflowY: "auto",
    overflowX: "hidden",
    width: "80%",
  },
};

Modal.setAppElement("#root");

const UpdateReviewModal = ({
  modalIsOpen,
  closeModal,
  selectedReview,
  setReviews,
}) => {
  const [review, setReview] = useState({});

  useEffect(() => {
    setReview(selectedReview);
  }, [selectedReview]);

  const handleChange = (e) => {
    setReview((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!review.review.trim()) {
      return alert("Review must!");
    }

    fetch(`http://localhost:5000/update-review?id=${review._id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({ review: review.review }),
    })
      .then((res) => res.json())
      .then(() => {
        setReviews((prev) => {
          const index = prev.findIndex((r) => r._id === review._id);
          if (index !== -1) {
            prev.splice(index, 1, review);
          }
          return prev;
        });
        alert("Review updated!")
      })
      .catch((error) => alert("Review not updated!"));
  };

  return (
    <div>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <div className="flex justify-between items-centers">
          <h1>Update Review</h1>
          <button className="btn btn-error" onClick={closeModal}>
            <FaTimes />
          </button>
        </div>
        <form
          onSubmit={handleSubmit}
          className="flex justify-center items-center flex-col gap-3 mt-5"
        >
          <textarea
            required
            name="review"
            value={review.review}
            onChange={handleChange}
            rows={5}
            cols={10}
            className="w-full p-3 rounded"
            placeholder="Update review..."
          />
          <button type="submit" className="btn btn-info">
            Update
          </button>
        </form>
      </Modal>
    </div>
  );
};

export default UpdateReviewModal;
