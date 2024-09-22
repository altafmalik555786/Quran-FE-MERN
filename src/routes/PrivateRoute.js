

import React from "react";
import { Navigate } from "react-router-dom";

const isAuthenticated = () => localStorage.getItem("token") !== null;
const getUserRole = () => localStorage.getItem("role");

const PrivateRoute = ({ element, roles = [], publicRoute = false }) => {
  if (publicRoute) {
    return element;
  }

  if (isAuthenticated()) {
    if (roles.length === 0 || roles.includes(getUserRole())) {
      return element;
    } else {
      return <Navigate to="/signup" />;
    }
  }

  return <Navigate to="/signup" />;
};

export default PrivateRoute;
