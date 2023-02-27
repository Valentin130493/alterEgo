import React from "react";
import { Outlet } from "react-router";
import { Header } from "../header";

import "./styles.css";

export const Layout = () => {
  return (
    <div className={"main"}>
      <Header />
      <Outlet />
    </div>
  );
};
