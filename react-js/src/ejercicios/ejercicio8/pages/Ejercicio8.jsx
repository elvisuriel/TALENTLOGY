import React, { useState, useEffect } from "react";


const Ejercicio8 = ({ number }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCount(count + 1);
    }, 1000);

    return () => clearInterval(interval);
  }, [count]);

  return (
    <div>
      <h2>Contador:</h2>
      <p>{count}</p>
    </div>
  );
};

export default Ejercicio8;