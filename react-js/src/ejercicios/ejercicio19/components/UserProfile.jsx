import React, { useState } from 'react';

const UserProfile = ({ onSave }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [interests, setInterests] = useState('');
  const [isEditing, setIsEditing] = useState(false);

  const handleSave = () => {
    const profileData = {
      name,
      email,
      interests,
    };

    onSave(profileData);
    setIsEditing(false);
  };

  return (
    <div>
      <h2>User Profile</h2>
      <div>
        <label>Name:</label>
        {isEditing ? (
          <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
        ) : (
          <p>{name}</p>
        )}
      </div>

      <div>
        <label>Email:</label>
        {isEditing ? (
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
        ) : (
          <p>{email}</p>
        )}
      </div>

      <div>
        <label>Interests:</label>
        {isEditing ? (
          <input type="text" value={interests} onChange={(e) => setInterests(e.target.value)} />
        ) : (
          <p>{interests}</p>
        )}
      </div>

      {isEditing ? (
        <button onClick={handleSave}>Save</button>
      ) : (
        <button onClick={() => setIsEditing(true)}>Edit</button>
      )}
    </div>
  );
};

export default UserProfile;
