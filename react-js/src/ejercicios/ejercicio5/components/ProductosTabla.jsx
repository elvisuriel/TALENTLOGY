
const ProductosTabla = ({ productos }) => {
    return (
      <table className="tabla-productos">
        <thead>
          <tr border>
            <th>Nombre</th>
            <th>Precio</th>
          </tr>
        </thead>
        <tbody>
          {productos.map((producto, index) => (
            <tr key={index}>
              <td>{producto.nombre}</td>
              <td>{producto.precio}</td>
            </tr>
          ))}
        </tbody>
      </table>
    );
  };
  export default ProductosTabla;