import React from "react";
import { Box, Grid } from "@mui/material";
import Typography from "@mui/material/Typography";

export const HomePage = () => {
  return (
    <Box
      style={{
        margin: "20px 0",
        backgroundImage: "linear-gradient(to right, #3F2B96, #A8C0FF)",
      }}
    >
      <Grid container justify="center" alignItems="center" spacing={3}>
        <Grid item>
          <Box
            style={{
              backgroundColor: "rgba(255, 255, 255, 0.7)",
              padding: "32px",
              borderRadius: "4px",
              maxWidth: "500px",
            }}
          >
            <Typography
              variant="h3"
              gutterBottom
              style={{ marginBottom: "16px" }}
            >
              Welcome to Our Website!
            </Typography>
            <Typography variant="body1" gutterBottom>
              We offer the latest news and updates from around the world.
            </Typography>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};
