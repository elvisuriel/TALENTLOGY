import React, { useState, useEffect } from "react";
import { noticias } from "./News";

const NewsList = () => {
  const [users, setUsers] = useState([]);
  const [search, setSearch] = useState("");
  const [filterOption, setFilterOption] = useState("category");
  const [filteredNews, setFilteredNews] = useState([]);

  useEffect(() => {
    setUsers(noticias);
  }, []);

  useEffect(() => {
    const filteredNews = users.filter((user) => {
      const value = search.toLowerCase();

      if (filterOption === "category") {
        return user.Categoria.toLowerCase().includes(value);
      } else if (filterOption === "date") {
        return user.fecha.includes(value);
      } else if (filterOption === "title") {
        return user.titulo.toLowerCase().includes(value);
      }
    });

    setFilteredNews(filteredNews);
  }, [search, filterOption, users]);

  const handleSearch = (e) => {
    setSearch(e.target.value);
  };

  const handleFilterChange = (e) => {
    setFilterOption(e.target.value);
  };

  return (
    <div>
      <h1>NOTICIAS</h1>
      <div className="search-container">
        <input
          value={search}
          onChange={handleSearch}
          type="text"
          placeholder="Search"
        />
        <select value={filterOption} onChange={handleFilterChange}>
          <option value="category">Categoría</option>
          <option value="date">Fecha</option>
          <option value="title">Título</option>
        </select>
      </div>

      <table className="my-table">
        <thead>
          <tr>
            <th>Categoría</th>
            <th>Noticia</th>
            <th>Fecha</th>
          </tr>
        </thead>
        <tbody>
          {filteredNews.map((user) => (
            <tr key={user.id}>
              <td>{user.Categoria}</td>
              <td>{user.titulo}</td>
              <td>{user.fecha}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default NewsList;
