import React from "react";
import ReviewList from "./ReviewList";
import ReviewForm from "./reviewForm";


const Movie = ({ movie, addReview }) => {

    const submitHandler = (e) => {
        e.preventDefault();
        addReview(movie.id, e.target.rating.value, e.target.comment.value);
        e.target.reset();
    }

    return (
        <div className="movie-container">
            <div className="movie-header">
                <h1>{movie.title}</h1>
            </div>
            <div className="movie-info-container">
                <div className="movie-image">
                    <img src={movie.image} alt={movie.alt} />
                </div>
                <div className="review-container">
                    <ReviewList reviews={movie.reviews} />
                    <ReviewForm submitHandler={submitHandler} />
                </div>
            </div>
            <div className="movie-description">
                <p>{movie.description}</p>
            </div>
        </div>
    );
}

export default Movie;