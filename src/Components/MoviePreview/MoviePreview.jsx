import './MoviePreview.css';

function MoviePreview( {movie} ) {
  // console.log('movie prev', item);
  console.log(movie)
  return (
    <div id="background-MoviePreview">
      {/* <h1 id="title-MoviePreview">{item.title}</h1>  */}
      <img id="image-MoviePreview" src={movie.image} alt={movie.alt} />
      

    </div>
  )
}

export default MoviePreview;