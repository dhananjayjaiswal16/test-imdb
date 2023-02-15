import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom';
import { fetchSingleMovie } from '../redux/api';

const Movie = () => {
  const data = useSelector(state => state.movieSlice);
  console.log("curr data", data);
  const dispatch = useDispatch();
  useEffect(() => {
    const query = window.location.pathname.substring(7);
    fetchSingleMovie(dispatch, query)
  }, [])
  if (data.isFetching) {
    return "Loading..."
  }
  return (
    <div>
      <div>
        <img style={{ width: "300px" }} src={data.currentMovie?.image} alt="" srcset="" />
      </div>
      <div>
        <h1>Plot</h1>

        <p>{data.currentMovie?.plot}</p>
        <Link to={`/review/${window.location.pathname.substring(7)}`}><button>Review</button></Link>
      </div>
    </div>
  )
}

export default Movie
