import { useEffect, useState } from "react";
import { movies } from "./Data";




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
        <div className="input-group">
          <input
            type="text"
            className="form-control"
            placeholder="Search"
            value={searchKey}
            onChange={(e) => setSearchKey(e.target.value)}
          />
          <button type="submit" className="btn btn-primary">
            Search
          </button>
        </div>
      </form>

      <div className="container mt-3">
        <div className="row">
          {filteredMovies.map((movie) => (
            <div key={movie.id} className="col-md-4 mb-3">
              <img
                src={movie.image}
                alt={movie.title}
                className="img-fluid"
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
