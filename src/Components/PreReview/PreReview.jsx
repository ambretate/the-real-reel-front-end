function PreReview({id}) {
  return (
    <div id="mainContainer-PreReview">
      <img id="img-PreReview" src={id.img} alt={id.alt} />
      <h1 id="title-PreReview">
        {id.title}  
      </h1>
      (id.hasSpoilers)
        ? <p id="body-PreReview"> CONTAINS SPOILERS! </p>
        
        : <p id="body-PreReview">
            {id.review}
          </p>
        ;

      
    </div>
  )
}

export default PreReview