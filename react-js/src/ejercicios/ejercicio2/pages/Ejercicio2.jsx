
import User from '../components/User';

const Ejercicio2 = () => {
  const userInfo = {
    name: 'Juan',
    age: 30,
    city: 'Madrid'
  };

  return (
      <div>
        <User userInfo={userInfo} />
      </div>
  );
};

export default Ejercicio2;