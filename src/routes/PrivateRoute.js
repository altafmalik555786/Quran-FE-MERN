
import React from "react";
import { Route, Navigate } from "react-router-dom";

const isAuthenticated = () => {
  return localStorage.getItem("token") !== null;
};

const getUserRole = () => {
  return localStorage.getItem("role");
};

const PrivateRoute = ({
  component: Component,
  roles = [],
  publicRoute = false,
  ...rest
}) => (
  <Route
    {...rest}
    render={(props) => {
      if (publicRoute) {
        return <Component {...props} />;
      }
      
      if (isAuthenticated()) {
        if (roles.length === 0 || roles.includes(getUserRole())) {
          return <Component {...props} />;
        } else {
          return <Navigate to="/signup" />;
        }
      }

      return <Navigate to="/signup" />;
    }}
  />
);

export default PrivateRoute;