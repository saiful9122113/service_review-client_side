import React from 'react';

const ReviewCard = ({singleReview}) => {
    const { _id, serviceName, photo, review,customerName, email } = singleReview;
    return (
        <div>
            <img src={photo} alt="" />
            <h2>Customer Name :{customerName}</h2>
            <h2>Email :{email}</h2>
            <p>Service Id :{_id}</p>
            <h2>Service Name :{serviceName}</h2>
            <p>Customer Review :{review}</p>

        </div>
    );
};

export default ReviewCard;