import { useEffect, useState } from "react";
import { movies } from "./Data";
import ReactStars from "react-rating-stars-component";

const MoviesDetails = () => {
  const [searchKey, setSearchKey] = useState("");
  const [filteredMovies, setFilteredMovies] = useState([]);

  const searchMovies = (e) => {
    e.preventDefault();
    const filtered = movies.filter((movie) =>
      movie.title.toLowerCase().includes(searchKey.toLowerCase())
    );
    setFilteredMovies(filtered);
  };

  useEffect(() => {
    setFilteredMovies(movies);
  }, []);

  return (
    <div>
      <h2 className="text-center mt-5 mb-5">MOVIES</h2>

      <form className="container mb-4" onSubmit={searchMovies}>
        <input
          type="text"
          placeholder="Search"
          value={searchKey}
          onChange={(e) => setSearchKey(e.target.value)}
        />
        <button type="submit">Search</button>
      </form>

      <div className="container mt-3">
        <div className="row">
          {filteredMovies.map((movie) => (
            <div key={movie.id} className="col-md-4 mb-3">
              <img
                src={movie.image}
                alt={movie.title}
                height={600}
                width="100%"
              />
              <h2>Título: {movie.title}</h2>
              <h2>Descripción: {movie.description}</h2>
              
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MoviesDetails;
