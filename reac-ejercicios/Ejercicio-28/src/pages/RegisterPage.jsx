import { useNavigate } from 'react-router-dom';
import { useForm } from '../hook/useForm';

export const RegisterPage = () => {
  const navigate = useNavigate();

  const { name, email, password, onInputChange, onResetForm } = useForm({
    name: '',
    email: '',
    password: '',
  });

  const onRegister = (e) => {
    e.preventDefault();

    // Crear un objeto con los datos del formulario
    const userData = {
      name,
      email,
      password,
    };

    // Guardar los datos en localStorage
    localStorage.setItem('userData', JSON.stringify(userData));

    navigate('/dashboard', {
      replace: true,
      state: {
        logged: true,
        name,
      },
    });

    onResetForm();
  };

  return (
    <div className="wrapper" style={{ backgroundColor: '#f8f9fa' }}>
      <form onSubmit={onRegister} className="container mt-4">
        <h1>Registrarse</h1>

        <div className="form-group">
          <input
            type="text"
            className="form-control"
            name="name"
            id="name"
            value={name}
            onChange={onInputChange}
            required
            autoComplete="off"
          />
          <label htmlFor="name">Nombre:</label>
        </div>

        <div className="form-group">
          <input
            type="email"
            className="form-control"
            name="email"
            id="email"
            value={email}
            onChange={onInputChange}
            required
            autoComplete="off"
          />
          <label htmlFor="email">Email:</label>
        </div>
        <div className="form-group">
          <input
            type="password"
            className="form-control"
            name="password"
            id="password"
            value={password}
            onChange={onInputChange}
            required
            autoComplete="off"
          />
          <label htmlFor="password">Contraseña:</label>
        </div>

        <button className="btn btn-primary">Registrarse</button>
      </form>
    </div>
  );
};

