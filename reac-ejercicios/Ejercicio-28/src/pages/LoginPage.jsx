import { useNavigate } from 'react-router-dom';
import { useForm } from '../hook/useForm';

export const LoginPage = () => {
  const navigate = useNavigate();

  const { email, password, onInputChange, onResetForm } = useForm({
    email: '',
    password: '',
  });

  const onLogin = (e) => {
    e.preventDefault();

    // Obtener los datos almacenados en localStorage
    const storedData = localStorage.getItem('userData');

    if (storedData) {
      // Convertir la cadena JSON en un objeto
      const userData = JSON.parse(storedData);

      // Comparar los datos ingresados en el formulario con los datos almacenados
      if (email === userData.email && password === userData.password) {
        navigate('/dashboard', {
          replace: true,
          state: {
            logged: true,
            name: userData.name,
          },
        });

        onResetForm();
        return;
      }
    }

    // Mostrar un mensaje de error si el usuario no está registrado
    alert('El usuario no está registrado. Por favor, regístrate.');

    onResetForm();
  };

  return (
    <div className="wrapper" style={{ backgroundColor: '#f8f9fa' }}>
      <form onSubmit={onLogin} className="container mt-4">
        <h1>Iniciar Sesión</h1>

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

        <button className="btn btn-primary">Entrar</button>
      </form>
    </div>
  );
};
