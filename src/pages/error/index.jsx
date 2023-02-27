import React from "react";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";

export const ErrorPage = () => {
  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <Typography variant="h1">Oops!</Typography>
      <Typography variant="h4" gutterBottom>
        Something went wrong.
      </Typography>
      <Button color="primary" component={Link} to="/">
        Go back to homepage
      </Button>
    </div>
  );
};
