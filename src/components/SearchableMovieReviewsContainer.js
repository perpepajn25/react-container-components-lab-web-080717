import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews';

const NYT_API_KEY = 'f98593a095b44546bf4073744b540da0';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/all.json?'
            + `api-key=${NYT_API_KEY}`;

class SearchableMovieReviewsContainer extends React.Component{
  constructor(){
    super()

    this.state= {
      reviews: [],
      searchTerm: ''
    }
  }

  handleChange = (event) => {
    this.setState({
      searchTerm: event.target.value
    })
  }

  fetchSearchedMovies = (event) => {
    event.preventDefault()
    fetch(URL+'&&query='+ `${this.state.searcwhTerm}`)
    .then(resp => resp.json())
    .then(json => {
      console.log(json)
      this.setState({
        reviews: json.results
      })
    })
  }

  render(){
    return(
      <div className= "searchable-movie-reviews">
      <form onSubmit={this.fetchSearchedMovies}>
        <input type='text' onChange={this.handleChange}/>
        <input type='submit' value="Search"/>
      </form>
      <MovieReviews reviews={this.state.reviews}/>
    </div>
    )
  }
}

export default SearchableMovieReviewsContainer
