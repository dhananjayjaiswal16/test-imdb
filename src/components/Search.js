import React, { useCallback, useRef, useState } from 'react'
import { useDispatch } from 'react-redux';
import { fetchMovies } from '../redux/api';

const Search = () => {
  const inputRef = useRef();
  const [text, setText] = useState("");
  const dispatch = useDispatch();

  const debounce = (func) => {
    let timer;
    return function (...args) {
      const context = this;
      if (timer) clearTimeout(timer)
      timer = setTimeout(() => {
        timer = null;
        func.apply(context, args)
      }, 800)
    }
  }
  const handleChange = (e) => {
    setText(e.target.value);
    fetchMovies(dispatch, e.target.value)
  }

  const optimisedFunction = useCallback(debounce(handleChange), []);
  return (
    <div>
      <form action="">
        <input ref={inputRef} placeholder="Enter title to be searched" name="text" onChange={optimisedFunction} type="text" />
      </form>
    </div>
  )
}

export default Search
