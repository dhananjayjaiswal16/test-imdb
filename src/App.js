import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Movie from "./pages/Movie"
import Home from "./pages/Home"
import Review from "./pages/Review"
function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/movie/:id" element={<Movie />} />
          <Route exact path="/review/:id" element={<Review />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
