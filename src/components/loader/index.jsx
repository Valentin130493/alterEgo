import React from "react";
import { CircularProgress } from "@mui/material";

export const Loader = () => {
  return <CircularProgress className={"loader"} disableShrink size={100} />;
};
