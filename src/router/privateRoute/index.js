import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import { LocalStorage } from "../../helpers/storage";
import { authKey } from "../../static/storageKey";

export const PrivateRoute = ({ children }) => {
  const isAuth = Boolean(LocalStorage.get(authKey));

  if (!isAuth) {
    return <Navigate to={"/"} />;
  }
  return children ? children : <Outlet />;
};
