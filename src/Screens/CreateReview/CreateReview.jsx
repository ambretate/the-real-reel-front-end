import { useState } from 'react'
import './CreateReview.css'
import { createReview } from '../../Services/reviews.js'

const CreateReview = ({setToggleReviews, movieID, userID}) => {

  const [review, setReview] = useState({
    userID: "",
    movieID: "",
    title: '',
    review: '',
    hasSpoiler: false,
  })

  const handleChange = (event) => {
    const { name, value } = event.target
    setReview(prevReview => ({
      ...prevReview,
      [name]: value,
    }))
  }

  const handleCheckBoxChange = (event) => {
    const { name, checked } = event.target
    setReview(prevReview => ({
      ...prevReview,
      [name]: checked,
    }))
  }

  const handleSubmit = async (event) => {
    event.preventDefault()
    const finalReview = {
      ...review,
      userID,
      movieID
    }
    await createReview(finalReview)

    setReview({
      userID: "",
      movieID: "",
      title: '',
      review: '',
      hasSpoiler: false,
    })
    setToggleReviews(prev => !prev)
  }

  return (
    <div className="create-form-container">
      <form className='create-form' onSubmit={handleSubmit}>
        <input
          className='input-title'
          placeholder='Title'
          value={review.title}
          name='title'
          required
          autoFocus
          onChange={handleChange}
        />
        <textarea
          className='textarea-review'
          rows={5}
          placeholder='Review'
          value={review.review}
          name='review'
          required
          onChange={handleChange}
        />
        <div>
          <label htmlFor="hasSpoiler">Has Spoilers?</label>
          <input
            type="checkbox"
            id="hasSpoiler"
            className='input-hasSpoiler'
            checked={review.hasSpoiler}
            name='hasSpoiler'
            required
            onChange={handleCheckBoxChange}
          />
        </div>
        <button type='submit' className='submit-button'>
          Submit Your Review
        </button>
      </form>
    </div>
  )
}

export default CreateReview
