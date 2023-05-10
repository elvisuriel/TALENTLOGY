
const UserDetails = ({ user }) => {
    return ( <div>
        <h2>Detalles del Usuario</h2>
        <p>Id: {user.id}</p>
        <p>Nombre: {user.name}</p>
        <p>Age: {user.age}</p>
        <p>Correo Electrónico: {user.email}</p>
       
      </div>
    );
  };
export default UserDetails;
