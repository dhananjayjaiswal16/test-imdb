import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { filterReviews } from '../redux/api'

const Review = () => {
  const [basedOn, setBasedOn] = useState("vote");
  const [sortBy, setSortBy] = useState("asc");
  const { filteredReview, isFetching } = useSelector(state => state.movieSlice);
  const dispatch = useDispatch();
  useEffect(() => {
    const movieId = window.location.pathname.substring(8)
    console.log("movieId", movieId);
    filterReviews(dispatch, basedOn, sortBy, movieId);
  }, [sortBy, basedOn])

  const handleChange1 = (e) => {
    console.log("select ", e.target.value);
    setBasedOn(e.target.value);
  }
  const handleChange2 = (e) => {
    console.log("select ", e.target.value);
    setSortBy(e.target.value);
  }
  return (
    <div>
      <select onChange={handleChange1} defaultValue={basedOn}>
        <option value="helpfulness">helpfulness</option>
        <option value="date">date</option>
        <option value="votes">votes</option>
        <option value="rating">rating</option>
      </select>

      <select onChange={handleChange2} defaultValue={sortBy}>
        <option value="asc">Ascending</option>
        <option value="desc">Descending</option>
      </select>

      {isFetching ? <p>Loading...</p> : (
        <div>
          {filteredReview?.map(review => (
            <>
              <p>Star: {review?.stars}</p>
              <strong>{review?.heading}</strong>
              <p><a href={review?.authorUrl}>{review?.author}</a></p>
              <p>Votes: {review?.helpfulNess?.votes}</p>
              <hr />
            </>
          ))}
        </div>
      )}
    </div>
  )
}

export default Review;
