import React, { useState } from "react";
import UserList from '../components/UserList';
import UserDetails from '../components/UserDetails';

const users = [
  { id: 1, name: "John Doe", email: "johndoe@gmail.com", age: 32 },
  { id: 2, name: "Jane Smith", email: "janesmith@gmail.com", age: 28 },
  { id: 3, name: "Bob Johnson", email: "bobjohnson@gmail.com", age: 45 },
];

const Ejercicio11 = () => {
  const [selectedUser, setSelectedUser] = useState(null);

  const handleUserSelect = (user) => {
    setSelectedUser(user);
  };

  return (
    <div>
      <h2>User List</h2>
      <UserList users={users} handleUserSelect={handleUserSelect} />
      {selectedUser && (
        <div>
          <h2>User Details</h2>
          <UserDetails user={selectedUser} />
        </div>
      )}
    </div>
  );
};

export default Ejercicio11;

