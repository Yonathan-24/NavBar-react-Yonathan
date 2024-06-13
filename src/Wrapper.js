// src/Wrapper.js
import React from 'react';
import { UserProvider } from './UserContext';
import Navbar from './Navbar';
import FormWrapper from './FormWrapper';

const Wrapper = () => {
  return (
    <UserProvider>
      <Navbar />
      <FormWrapper />
    </UserProvider>
  );
};

export default Wrapper;
