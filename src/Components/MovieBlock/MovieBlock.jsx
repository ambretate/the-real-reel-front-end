import React from 'react'

function MovieBlock( { id } ) {
  return (
    <div id="container-MovieBlock">
        <img id="img-MovieBlock" src={id.img} alt={id.alt} />
        <h1 id="title-MovieBlock"> {id.title} </h1>
        <h3 id="genreDateLength-MovieBlock"> 
            {id.genre} ‧ 
            {id.releaseDate} ‧ 
            {id.runtime}
        </h3>
        <p id="description-MovieBlock"> {id.description} </p>
        <p id="budget-MovieBlock"> {id.budget} </p>
    </div>
  )
}

export default MovieBlock
