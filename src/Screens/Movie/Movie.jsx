import {useEffect, useState} from 'react';
import { NavLink, useParams } from 'react-router-dom';
import MovieBlock from '../../Components/MovieBlock/MovieBlock.jsx';
import PreReview from '../../Components/PreReview/PreReview.jsx';
import Header from '../../Components/Header/Header.jsx';
import Footer from '../../Components/Footer/Footer.jsx';
import { getMovie } from '../../Services/movies.js';
import './Movie.css';

function Movie() {
  // get id with useParams
  const { id } = useParams();
  // console.log('print params', id);

  // set states
  const [movie, setMovie ] = useState({});
  const [reviews, setReviews] = useState([]);
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
  // console.log('the reviews', reviews);
  
  // make function to populate recommendations, post MVP
  // useEffect( () => {
    
  // }, []);

  console.log('da reviews', reviews._id)
  // we should add a back button here to nav back to the main Catalog
  return (
    <div className="movie-page">
    <div id="mainContain-Movie">
      <Header/>
        <MovieBlock movie={movie}/>
        <h1 id="h1-Movie" >Reviews</h1>
        <div id="reviewContainer-Movie">
          {
            reviews.map( (item, idx) => (
              <NavLink to={`/reviews/${reviews[idx].id}`}>
                <PreReview 
                  movie={movie} 
                  review={reviews[idx]} 
                  key={idx} 
                  showUser={false}
                />
              </NavLink>
            ))
          }
        </div>
    </div>
      <Footer />
    </div>
  )
}

export default Movie