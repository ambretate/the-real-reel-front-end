import { useEffect, useState } from "react";
import { useParams, NavLink } from "react-router-dom";
import MovieBlock from "../../Components/MovieBlock/MovieBlock.jsx";
import CreateReview from "../CreateReview/CreateReview.jsx";
import PreReview from "../../Components/PreReview/PreReview.jsx";
import { getMovie } from "../../Services/movies.js";
import { getFollows } from "../../Services/users.js";

import "./Movie.css";

function Movie({ user }) {
  // get id with useParams
  const { id } = useParams();

  // set states
  const [movie, setMovie] = useState({});
  const [reviews, setReviews] = useState([]);
  const [follows, setFollows] = useState([]);
  const [toggleReviews, setToggleReviews] = useState(false);

  // fetch the movie with ID
  useEffect(() => {
    const fetchMovie = async () => {
      const item = await getMovie(id);
      const followsData = await getFollows();
      setMovie(item.movie);
      setReviews(item.reviews);
<<<<<<< HEAD
      //console.log('checkout what a review obj loook like', item.reviews);
=======
>>>>>>> b199dd24d31c99b4b80542e2ada1ce396d7eb26f
      setFollows(followsData);
    };

    fetchMovie();
  }, [id, toggleReviews]);

  return (
    <div className="movie-page">
      <div id="mainContain-Movie">
        <MovieBlock movie={movie} />
      </div>
      <NavLink to="/catalog">
        <div id="backCatalog-PreReview">
          <button>Back to Catalog</button>
        </div>
<<<<<<< HEAD
        <NavLink to="/catalog">
          <div id='backCatalog-PreReview'>
            <p style={{"textAlign": "center"}}>back to Catalog</p>
          </div>
        </NavLink>
        <div className="review-container">
          <h3 className="write-a-review">Write a review for {movie.title}</h3>
          <CreateReview
            setToggleReviews={setToggleReviews}
            movieID={movie._id}
            userID={user?.id}
          />
          <h1 id="h1-Movie">Reviews</h1>
          <div id="reviewContainer-Movie">
            {
              (reviews) ?
                reviews.map((review, idx) => {
                  //console.log('this is the review.map output',review, idx);
                  let isFollowingUser = follows.following.some(
                    (follow) => follow._id === review.userID
                  );
                  return (
                    <PreReview
                      movie={movie}
                      review={review}
                      key={idx}
                      index={idx}
                      showUser={false}
                      userID={user?.id}
                      isFollowingUser={isFollowingUser}
                      setToggleReviews={setToggleReviews}
                    />
                  );
                })
              : null
            }
          </div>
=======
      </NavLink>
      <div className="review-container">
        <h3 className="write-a-review">Write a review for {movie.title}</h3>
        <CreateReview
          setToggleReviews={setToggleReviews}
          movieID={movie._id}
          userID={user?.id}
        />
        <h1 id="h1-Movie">Reviews</h1>
        <div id="reviewContainer-Movie">
          {reviews
            ? reviews.map((review, idx) => {
                let isFollowingUser = follows.following.some(
                  (follow) => follow._id === review.userID
                );
                return (
                  <PreReview
                    movie={movie}
                    review={review}
                    key={idx}
                    index={idx}
                    showUser={false}
                    userID={user?.id}
                    isFollowingUser={isFollowingUser}
                    setToggleReviews={setToggleReviews}
                  />
                );
              })
            : null}
>>>>>>> b199dd24d31c99b4b80542e2ada1ce396d7eb26f
        </div>
      </div>
    </div>
  );
}

export default Movie;
