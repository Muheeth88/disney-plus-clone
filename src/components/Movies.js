import React from 'react'
import '../styles/Movies.css'
import { selectMovies } from '../features/movie/movieSlice'
import { useSelector } from 'react-redux'

const Movies = () => {

    const movies = useSelector(selectMovies);
  return (
    <div className='moviesContainer'>
        <h2>Recommemded for You</h2>
        <div className='mainContent'>
            { movies &&
                movies.map((movie) => (
                    <div className='imgWrap' key={movie.id}>
                        <img src={movie.cardImg} alt=''></img>
                    </div>
                ))
            }
        </div>
    </div>
  )
}

export default Movies