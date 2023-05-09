import { useState } from "react";

const Ejercicio9 = () => {
  const nombres = ["Juan", "Pedro", "María", "Sofía", "Lucas", "Ana", "Marta"];
  const [filtro, setFiltro] = useState("");

  const handleInputChange = (e) => {
    setFiltro(e.target.value);
  };

  const nombresFiltrados = nombres.filter(
    (nombre) => nombre.toLowerCase().includes(filtro.toLowerCase())
  );

  return (
    <div>
      <h2>Ejercicio 9</h2>
      <input type="text" onChange={handleInputChange} />
      <ul>
        {nombresFiltrados.map((nombre) => (
          <li key={nombre}>{nombre}</li>
        ))}
      </ul>
    </div>
  );
};

export default Ejercicio9;
