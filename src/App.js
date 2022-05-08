import React from 'react';
import './index.css';
import { store } from './components/store';
import MovieList from './components/MovieList';
import Header from './components/Header';
import { navLink } from './components/NavLink';

const useState = React.useState


function App() {
  const [movies, setMovies] = useState(store);

  

  const addReview = (id, rating, comment) => {
    const movie = movies.find(movie => movie.id === id);
    movie.reviews.push(
      {
        user: `user$(Math.floor(Math.random() * 1000) + 100)`,
        stars: rating,
        comment: comment
      }
    );
    setMovies([...movies, movie]);
  }

  return (

    <><div className='containter' /><Header links = {navLink} />
    <h1>Movie Review Site</h1><div className="movies-list-container">
      <MovieList movies={movies} addReview={addReview} />
    </div></>
      
   

  );
}

export default App;
