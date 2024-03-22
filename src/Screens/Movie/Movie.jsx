import { useEffect, useState } from "react";
import { NavLink, useParams } from "react-router-dom";
import MovieBlock from "../../Components/MovieBlock/MovieBlock.jsx";
import PreReview from "../../Components/PreReview/PreReview.jsx";
import Header from "../../Components/Header/Header.jsx";
import Footer from "../../Components/Footer/Footer.jsx";
import { getMovie } from "../../Services/movies.js";
import "./Movie.css";
import CreateReview from "../CreateReview/CreateReview.jsx";

function Movie({user}) {
  // get id with useParams
  const { id } = useParams();

  // set states
  const [movie, setMovie] = useState({});
  const [reviews, setReviews] = useState([]);
  const [toggleReviews, setToggleReviews] = useState(false)
  const [recs, setRecs] = useState([]);

  // fetch the movie with ID
  useEffect(() => {
    const fetchMovie = async () => {
      const item = await getMovie(id);
      setMovie(item.movie);
      setReviews(item.reviews);
    };

    fetchMovie();
  }, [id]);

  // we should add a back button here to nav back to the main Catalog
  return (
    <div className="movie-page">
      <div id="mainContain-Movie">
        <Header />
        <MovieBlock movie={movie} />
        <h3 className="write-a-review">Write a review for {movie.title}</h3>
        <CreateReview />
        <h1 id="h1-Movie">Reviews</h1>
        <div id="reviewContainer-Movie">
          {reviews.map((item, idx) => (
            
              <PreReview
                movie={movie}
                review={reviews[idx]}
                key={idx}
                showUser={false}
              />
            
          ))}
        </div>
        <Footer />
      </div>
    </div>
  );
}

export default Movie;
