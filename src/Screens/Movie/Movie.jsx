import {useEffect, useState} from 'react';
import { NavLink, useParams } from 'react-router-dom';
import MovieBlock from '../../Components/MovieBlock/MovieBlock.jsx';
import PreReview from '../../Components/PreReview/PreReview.jsx';
import CreateReview from '../CreateReview/CreateReview.jsx';
import Header from '../../Components/Header/Header.jsx';
import Footer from '../../Components/Footer/Footer.jsx';
import { getMovie } from '../../Services/movies.js';
import './Movie.css';

function Movie({user}) {
  // get id with useParams
  const { id } = useParams();
  // console.log('print params', id);

  // set states
  const [movie, setMovie ] = useState({});
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
  }, [id, toggleReviews]);
  // console.log('the reviews', reviews);
  
  // make function to populate recommendations, post MVP
  // useEffect( () => {
    
  // }, []);

  console.log('da reviews', reviews._id)
  // we should add a back button here to nav back to the main Catalog
  return (
    <div id="mainContain-Movie">
      <Header/>
        <MovieBlock movie={movie}/>
        <h1 id="h1-Movie" >Reviews</h1>
        <CreateReview setToggleReviews={setToggleReviews} movieID={movie._id} userID={user?.id}/>
        <div id="reviewContainer-Movie">
          {
            reviews.map( (review, idx) => (
              <PreReview  
                movie={movie} 
                review={review} 
                key={idx} 
                showUser={false}
              />
            ))
          }
        </div>
      <Footer />
    </div>
  )
}

export default Movie