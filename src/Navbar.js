// src/Navbar.js
import React, { useContext } from 'react';
import { UserContext } from './UserContext';

const Navbar = () => {
  const { username } = useContext(UserContext);

  return (
    <nav>
      <h1>¡Hola, {username}!</h1>
    </nav>
  );
};

export default Navbar;
