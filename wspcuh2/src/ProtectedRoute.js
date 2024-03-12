import React from 'react';
import { Route, Navigate } from 'react-router-dom';


const ProtectedRoute = ({ element, ...rest }) => {
    
const isAuthenticated = true; // You need to implement your authentication logic here
  return isAuthenticated ? element : <Navigate to="/login" />;
};
export default ProtectedRoute;
