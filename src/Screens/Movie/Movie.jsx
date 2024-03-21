import {useEffect, useState} from 'react';
import { useParams } from 'react-router-dom';
import MovieBlock from '../../Components/MovieBlock/MovieBlock.jsx';
import PreReview from '../../Components/PreReview/PreReview.jsx';
import MoviePreview from '../../Components/MoviePreview/MoviePreview.jsx';
import { getReviews } from '../../Services/reviews.js';
import { getMovie } from '../../Services/movies.js';
import './Movie.css';

function Movie() {
  // get id with useParams
  const { id } = useParams();
  console.log('print params', id);

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

  //its movie.movie :)
  console.log('title reviews', movie, reviews);


  // make function to populate recommendations, post MVP
  // useEffect( () => {
    
  // }, []);
  function parseDate(d) {
    let arr = d.split('-');
    console.log('check the split', arr)
    const num2date = {
      '01': 'January',
      '02': 'Feburary',
      '03': 'March',
      '04': 'April',
      '05': 'May',
      '06': 'June',
      '07': 'July',
      '08': 'August',
      '09': 'September',
      '10': 'October',
      '11': 'November',
      '12': 'December'
    }
    
    return `${num2date[ arr[1] ]} ${arr[2]} ${arr[0]}`;
  }

  return (
    <div id="mainContain-Movie">
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
      
    </div>
  )
}

export default Movie