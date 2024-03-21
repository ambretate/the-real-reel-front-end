function MovieBlock( { movie } ) {
  return (
    <div id="container-MovieBlock">
        <img id="img-MovieBlock" src={movie.img} alt={movie.alt} />
        <h1 id="title-MovieBlock"> {movie.title} </h1>
        <h3 id="genreDateLength-MovieBlock"> 
            {movie.genre} ‧ 
            {movie.releaseDate} ‧ 
            {movie.runtime}
        </h3>
        <p id="description-MovieBlock"> {movie.description} </p>
        <p id="budget-MovieBlock"> {movie.budget} </p>
    </div>
  )
}

export default MovieBlock
