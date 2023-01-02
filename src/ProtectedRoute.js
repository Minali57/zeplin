import React from "react";
import { Outlet } from "react-router-dom";
import { Navigate } from "react-router-dom";
const ProtectedRoute = ({ isAuth, children }) => {
  if (!isAuth) {
    return <Navigate to={"/login"} />;
  }
  // return children;
  return <Outlet />;
};

export default ProtectedRoute;
