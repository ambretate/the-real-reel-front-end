import "./MoviePreview.css";

function MoviePreview({ movie }) {
  // console.log('movie prev', item);
  return (
    <div id="background-MoviePreview">
      <img id="image-MoviePreview" src={movie.image} alt={movie.alt} />
    </div>
  );
}

export default MoviePreview;
