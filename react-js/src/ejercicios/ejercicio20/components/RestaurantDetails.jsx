import { useEffect, useState } from "react";
import { restaurants} from "./Data";




const RestaurantDetails = () => {
  const [searchKey, setSearchKey] = useState("");
  const [filteredrestaurants, setFilteredrestaurants] = useState([]);

  const searchrestaurants = (e) => {
    e.preventDefault();
    const filtered = restaurants.filter((restaurants) =>
    restaurants.nombre.toLowerCase().includes(searchKey.toLowerCase())
    );
    setFilteredrestaurants(filtered);
  };

  useEffect(() => {
    setFilteredrestaurants(restaurants);
  }, []);

  return (
    <div>
      <h2 className="text-center mt-5 mb-5">Restaurants</h2>

      <form className="container mb-4" onSubmit={searchrestaurants}>
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
          {filteredrestaurants.map((restaurants) => (
            <div key={restaurants.id} className="col-md-4 mb-3">
              <img
                src={restaurants.image}
                alt={restaurants.nombre}
                className="img-fluid"
              />
              <h2>Título: {restaurants.nombre}</h2>
              <h2>Sito Web: {restaurants.direccion}</h2>
              <h2>Ubicacion:{restaurants.ubicacion}</h2>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default RestaurantDetails;
