import React from 'react'

const MovieReviews = ({reviews}) => {
    const reviewsDivs = reviews.map((movieReview,index)=>{
      return (<div key={index} className="review">
        <h4> {movieReview.display_title} </h4>
        <p> {movieReview.headline}</p>
        <p> {movieReview.summary_short}</p>
      </div>)
    })
    return(
      <div className="review-list">
        {reviewsDivs}
      </div>
    )
  }

MovieReviews.defaultProps = {
  reviews: []
}

export default MovieReviews
