function MoviePreview( {id} ) {
  return (
    <div id="background-MoviePreview">
      <img id="image-MoviePreview" src={id.img} alt={id.alt} />
      <h1 id="title-MoviePreview">{id.title}</h1> 
      

    </div>
  )
}

export default MoviePreview;