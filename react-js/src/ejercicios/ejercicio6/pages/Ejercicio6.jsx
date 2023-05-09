import React, { useState } from 'react';

const Mensaje = ({ mostrarMensaje }) => {
  return mostrarMensaje ? <p>¡ Bienvenido a Talent-logy!</p> : null;
};

const Boton = ({ handleClick }) => {
  return <button className="boton" onClick={handleClick}>Mostrar mensaje</button>;
};

const Ejercicio6 = () => {
  const [mostrarMensaje, setMostrarMensaje] = useState(false);

  const handleClick = () => {
    setMostrarMensaje(!mostrarMensaje);
  };

  return (
    <div>
      <Boton handleClick={handleClick} />
      <Mensaje mostrarMensaje={mostrarMensaje} />
    </div>
  );
};

export default Ejercicio6;