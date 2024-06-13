// src/Form.js
import React, { useContext } from 'react';
import { UserContext } from './UserContext';

const Form = () => {
  const { setUsername } = useContext(UserContext);

  const handleChange = (event) => {
    setUsername(event.target.value);
  };

  return (
    <input type="text" onChange={handleChange} placeholder="Ingresa tu nombre" />
  );
};

export default Form;
