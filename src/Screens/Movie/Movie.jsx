import { useEffect, useState } from "react";
import { useParams, NavLink } from "react-router-dom";
import Header from "../../Components/Header/Header.jsx";
import MovieBlock from "../../Components/MovieBlock/MovieBlock.jsx";
import CreateReview from "../CreateReview/CreateReview.jsx";
import PreReview from "../../Components/PreReview/PreReview.jsx";
import Footer from "../../Components/Footer/Footer.jsx";
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
      //console.log('checkout what a review obj loook like', item.reviews);
      setFollows(followsData);
    };

    fetchMovie();
  }, [id, toggleReviews]);

  // we should add a back button here to nav back to the main Catalog
  return (
      <div className="movie-page">
        <div id="mainContain-Movie">
          <MovieBlock movie={movie} />
        </div>
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
        </div>
      </div>
  );
}

export default Movie;
