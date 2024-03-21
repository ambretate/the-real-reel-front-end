import {useEffect, useState} from 'react';
import { useParams } from 'react-router-dom';
import MovieBlock from '../../Components/MovieBlock/MovieBlock.jsx';
import PreReview from '../../Components/PreReview/PreReview.jsx';
import MoviePreview from '../../Components/MoviePreview/MoviePreview.jsx';
import Header from '../../Components/Header/Header.jsx';
import Footer from '../../Components/Footer/Footer.jsx';
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
    //console.log('check the split', arr)
    
    // object table for month conversion
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

    // function to add st rd and so on
    const appendDay =  function(day) {
      const arr = day.split('');
      let answer = '';
      switch (arr[arr.length-1]) {
        case '1': 
          answer = 'st';
          break;
        case '2':
          answer = 'nd';
          break;
        case '3':
          answer = 'rd';
          break;
        default:
          answer = 'th';
      }
      return answer;
    }

    return `${num2date[ arr[1] ]} ${arr[2]}${appendDay(arr[2])} ${arr[0]}`;
  }
    
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
      <Footer />
    </div>
  )
}

export default Movie