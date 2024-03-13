import React from 'react';
import { Route, Navigate } from 'react-router-dom';
import { useAuth } from './contexts/AuthContext'; // Adjust the import path

const ProtectedRouteadmin = ({ element, ...rest }) => {
  
  let {ioLoggedIn,currentUser } = useAuth();
  let isAuthenticated = false  ;
 if(ioLoggedIn){
  console.log(currentUser)
  isAuthenticated= currentUser.role==="admin"
 }
 // You need to implement your authentication logic here
  return isAuthenticated ? element : <Navigate to="/" />;
};
export default ProtectedRouteadmin;
