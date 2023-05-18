
import UserProfile from '../components/UserProfile';
import React, { useState } from 'react';

const Ejercicio19 = () => {
  const handleSaveProfile = (profileData) => {
    // Lógica para guardar el perfil en la base de datos o realizar otras acciones
    console.log(profileData);
  };

  return (
    <div>
      <UserProfile onSave={handleSaveProfile} />
    </div>
  );
};

export default Ejercicio19;
