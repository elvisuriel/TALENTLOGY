import { useEffect, useState } from "react";
import { restaurants } from "./Data";

const RestaurantDetails = () => {
  const [searchKey, setSearchKey] = useState("");
  const [filterOption, setFilterOption] = useState("title");
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);

  const searchRestaurants = (e) => {
    e.preventDefault();
    const filtered = restaurants.filter((restaurant) => {
      const value = searchKey.toLowerCase();

      if (filterOption === "title") {
        return restaurant.nombre.toLowerCase().includes(value);
      } else if (filterOption === "website") {
        return restaurant.direccion.toLowerCase().includes(value);
      } else if (filterOption === "location") {
        return restaurant.ubicacion.toLowerCase().includes(value);
      }

      return false;
    });

    setFilteredRestaurants(filtered);
  };

  useEffect(() => {
    setFilteredRestaurants(restaurants);
  }, []);

  const handleSearchKeyChange = (e) => {
    setSearchKey(e.target.value);
  };

  const handleFilterChange = (e) => {
    setFilterOption(e.target.value);
  };

  return (
    <div>
      <h2 className="text-center mt-5 mb-5">Restaurants</h2>

      <form className="container mb-4" onSubmit={searchRestaurants}>
        <div className="input-group">
          <input
            type="text"
            className="form-control"
            placeholder="Search"
            value={searchKey}
            onChange={handleSearchKeyChange}
          />
          <select
            className="form-select"
            value={filterOption}
            onChange={handleFilterChange}
          >
            <option value="title">Title</option>
            <option value="website">Website</option>
            <option value="location">Location</option>
          </select>
          <button type="submit" className="btn btn-primary">
            Search
          </button>
        </div>
      </form>

      <div className="container mt-3">
        <div className="row">
          {filteredRestaurants.map((restaurant) => (
            <div key={restaurant.id} className="col-md-4 mb-3">
              <img
                src={restaurant.image}
                alt={restaurant.nombre}
                className="img-fluid"
              />
              <h2>Título: {restaurant.nombre}</h2>
              <h2>Sitio Web: {restaurant.direccion}</h2>
              <h2>Ubicación: {restaurant.ubicacion}</h2>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default RestaurantDetails;
