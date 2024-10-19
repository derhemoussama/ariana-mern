import React from 'react';
import { Route, Routes } from 'react-router-dom';
// import Layout from '../layout/Layout';
import LoginForm from '../components/Authentification/LoginForm';
import RegisterForm from '../components/Authentification/Register';
import ForgotPassword from '../components/Authentification/ForgotPassword';
import UpdatePassword from '../components/Authentification/UpdatePassword';

const Auth = () => {
  return (
 
      <Routes>
        <Route path="login" element={<LoginForm />} />
        <Route path="register" element={<RegisterForm/>} />
        <Route path="forgot-password" element={<ForgotPassword />} />
        <Route path="update-password" element={<UpdatePassword />} />
      </Routes>
   
  );
};

export default Auth;