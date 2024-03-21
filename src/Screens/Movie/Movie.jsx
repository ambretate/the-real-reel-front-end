import {useEffect, useState} from 'react';
import { useParams } from 'react-router-dom';
import MovieBlock from '../../Components/MovieBlock/MovieBlock.jsx';
import PreReview from '../../Components/PreReview/PreReview.jsx';
import MoviePreview from '../../Components/MoviePreview/MoviePreview.jsx';
import Header from '../../Components/Header/Header.jsx';
import Footer from '../../Components/Footer/Footer.jsx';
import { getMovie } from '../../Services/movies.js';
import { parseDate } from '../../Services/conversions.js';
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
  
  // make function to populate recommendations, post MVP
  // useEffect( () => {
    
  // }, []);

    
  // we should add a back button here to nav back to the main Catalog
  return (
    <div id="mainContain-Movie">
      <Header/>
        <h1 id="title-Movie">{movie.title}</h1>  
        <img 
          id="image-Movie"
          src={movie.image} 
          alt={`${movie.title}'s main poster`} 
        />
        <p id="dataBullets-Movie">{(movie.releaseDate) ? 
              `Release Date: ${parseDate( movie.releaseDate )}` 
              : null }
        </p>
        <p id="description-Movie">{movie.description}</p>

        {
          reviews.map( (item, idx) => (
            <PreReview movie={item} review={reviews[idx]} key={idx} />
          ))
        }
      <Footer />
    </div>
  )
}

export default Movie