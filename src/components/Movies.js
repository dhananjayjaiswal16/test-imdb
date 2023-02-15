import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

const Movies = () => {
  const { movies, isFetching } = useSelector(state => state.movieSlice)
  if (isFetching) {
    return "Loading..."
  }
  return (
    <div>
      {movies?.map(movie => (
        <>
          <Link to={`/movie/${movie?.id}`}>
            <div>
              <img src={movie?.image} alt="" srcset="" />
            </div>
            <div>
              <h3>{movie?.title}</h3>
              <p>{movie?.year}</p>
            </div>
          </Link>
        </>
      ))}
    </div>
  )
}

export default Movies
