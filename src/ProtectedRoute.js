import React from 'react';
import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({ children }) => {
  // Check if the user is authenticated by looking for user data in localStorage
  const user = JSON.parse(localStorage.getItem('user'));

  // If user is not logged in, redirect to the login page
  if (!user) {
    return <Navigate to="/login" replace />;
  }
  console.log(children);
  

  // If user is authenticated, render the requested route
  return children;
};

export default ProtectedRoute;
