function MoviePreview( {item} ) {
  // console.log('movie prev', item);
  return (
    <div id="background-MoviePreview">
      <img id="image-MoviePreview" src={item.image} alt={item.alt} />
      <h1 id="title-MoviePreview">{item.title}</h1> 
      

    </div>
  )
}

export default MoviePreview;