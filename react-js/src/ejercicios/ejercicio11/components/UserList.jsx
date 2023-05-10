import React, { useState } from "react";
import UserDetails from "../components/UserDetails";

const UserList = ({ users }) => {
  const [selectedUser, setSelectedUser] = useState(null);

  const handleUserClick = (user) => {
    setSelectedUser(user);
  };

  return (
    <div>
      <ul>
        {users.map((user) => (
          <li key={user.id} onClick={() => handleUserClick(user)}>
            {user.name} - {user.email}
          </li>
        ))}
      </ul>

      {selectedUser && <UserDetails user={selectedUser} />}
    </div>
  );
};

export default UserList;

