import React from 'react';
import { Route, Navigate } from 'react-router-dom';
import { useAuth } from './contexts/AuthContext'; // Adjust the import path

const ProtectedRoute = ({ element, ...rest }) => {
  
  let {ioLoggedIn,currentUser } = useAuth();
  
  console.log(ioLoggedIn,currentUser)
const isAuthenticated = ioLoggedIn; // You need to implement your authentication logic here
  return isAuthenticated ? element : <Navigate to="/" />;
};
export default ProtectedRoute;
