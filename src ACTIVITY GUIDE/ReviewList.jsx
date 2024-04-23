import React from 'react';

function ReviewList({ reviews, onDeleteReview }) {
  return (
    <div>
      <h2>Reviews</h2>
      <ul>
        {reviews.map((review, index) => (
          <li key={index}>
            <strong>{review.title}</strong> - {review.date}
            <p>{review.body}</p>
            <button onClick={() => onDeleteReview(index)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ReviewList;
