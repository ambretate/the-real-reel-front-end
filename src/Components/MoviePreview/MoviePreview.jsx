import './MoviePreview.css';

function MoviePreview( {item} ) {
  // console.log('movie prev', item);
  return (
    <div id="background-MoviePreview">
      {/* <h1 id="title-MoviePreview">{item.title}</h1>  */}
      <img id="image-MoviePreview" src={item.image} alt={item.alt} />
      

    </div>
  )
}

export default MoviePreview;