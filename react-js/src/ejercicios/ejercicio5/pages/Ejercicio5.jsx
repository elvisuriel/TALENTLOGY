import ProductosTabla from '../components/ProductosTabla';

const Ejercicio5 = () => {
    const productos = [
      { nombre: 'Arroz ', precio: 5000 },
      { nombre: 'Leche ', precio: 4500 },
      { nombre: 'Huevos', precio: 18000 },
      { nombre: 'Harina', precio: 4800 },
      { nombre: 'Pollo', precio: 35000 },
    ];
  
    return (
      <div>
        <ProductosTabla productos={productos} />
      </div>
    );
  };
  
  export default Ejercicio5;