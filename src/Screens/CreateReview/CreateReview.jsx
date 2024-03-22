import { useEffect, useState } from "react";
import "./CreateReview.css";
import { createReview, getReview } from "../../Services/reviews.js";

const CreateReview = ({ setToggleReviews, movieID, userID }) => {

  const [review, setReview] = useState({
    userID: "",
    movieID: "",
    title: "",
    review: "",
    hasSpoilers: false,
  });

  useEffect(() => {});

  const handleChange = (event) => {
    const { name, value } = event.target;
    setReview((prevReview) => ({
      ...prevReview,
      [name]: value,
    }));
    console.log(review);
  };

  const handleCheckBoxChange = (event) => {
    const { name, checked } = event.target;
    setReview((prevReview) => ({
      ...prevReview,
      [name]: checked,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const finalReview = {
      ...review,
      userID,
      movieID,
    };
    console.log(finalReview);
    await createReview(finalReview);

    setReview({
      userID,
      movieID,
      title: "",
      review: "",
      hasSpoiler: false,
    });
    setToggleReviews((prev) => !prev);
  };

  return (
    <div className="create-form-container">
      <form className="create-form" onSubmit={handleSubmit}>
        <input
          className="input-title"
          placeholder="Title"
          value={review.title}
          name="title"
          required
          autoFocus
          onChange={handleChange}
        />
        <textarea
          className="textarea-review"
          rows={5}
          placeholder="Review"
          value={review.review}
          name="review"
          required
          onChange={handleChange}
        />
        <div>
          <label htmlFor="hasSpoilers">Has Spoilers?</label>
          <input
            type="checkbox"
            id="hasSpoilers"
            className="input-hasSpoiler"
            checked={review.hasSpoilers}
            name="hasSpoilers"
            onChange={handleCheckBoxChange}
          />
        </div>
        <button type="submit" className="submit-button">
          Submit Your Review
        </button>
      </form>
    </div>
  );
};

export default CreateReview;
