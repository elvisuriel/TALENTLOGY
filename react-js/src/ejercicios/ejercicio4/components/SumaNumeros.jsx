const SumaNumeros = ({ numeros }) => {
    const suma = numeros.reduce((acc, curr) => acc + curr, 0);
  
    return (
      <div>
        La suma de los números [{numeros.join(', ')}] es:  {suma}
      </div>
    );
  };
  export default SumaNumeros;