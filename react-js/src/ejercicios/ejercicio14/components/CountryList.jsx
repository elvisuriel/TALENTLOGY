import { countries } from "./CountryDetails";
import React, { useState } from "react";

const CountryList = () => {
  const [selectedCountry, setSelectedCountry] = useState(null);

  const handleCountrySelection = (country) => {
    setSelectedCountry(country);
  };

  return (
    <div>
      <h1>Lista de Países</h1>
      <div className="container-items">
        {countries.map((country) => (
          <div
            className="item"
            key={country.id}
            onClick={() => handleCountrySelection(country)}
          >
            <figure>
              <img src={country.image} alt={country.name} />
            </figure>
            <div className="info-product">
              <h2>País: {country.name}</h2>
            </div>
          </div>
        ))}
      </div>

      {selectedCountry && (
        <div>
          <h2>Detalles del país seleccionado</h2>
          <p>Cultura: {selectedCountry.culture}</p>
          <p>Historia: {selectedCountry.history}</p>
          <p>Idioma: {selectedCountry.language}</p>
          <p>Lugares Turisticos: {selectedCountry.places}</p>
        </div>
      )}
    </div>
  );
};

export default CountryList;
