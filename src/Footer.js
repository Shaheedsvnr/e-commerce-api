import * as React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { Link } from "react-router-dom";

function Copyright() {
  return (
    <Typography variant="body2" color="text.secondary">
      {"Copyright © "}
      <Link color="inherit" href="https://mui.com/">
        Your Website
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

// TODO remove, this demo shouldn't need to reset the theme.
const defaultTheme = createTheme();

export default function StickyFooter() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          minHeight: "10vh",
        }}
      >
        <Box
          component="footer"
          sx={{
            py: 3,
            px: 2,
            mt: "auto",
            backgroundColor: "#1976d2",
            display: "flex",
            backgroundColor: "primary.main",
            color: "white",
            padding: "20px 0",
            marginTop: "auto",
          }}
        >
          <Container maxWidth="lg">
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-around",
                flexWrap: "wrap",
              }}
            >
              <Box>
                <Typography variant="h6" gutterBottom>
                  E-Commerce
                </Typography>
                <Typography variant="body2">
                  © {new Date().getFullYear()} E-Commerce. All rights reserved.
                </Typography>
              </Box>
              <Box>
                <Typography variant="h6" gutterBottom>
                  Quick Links
                </Typography>
                <Box>
                  <Link
                    to="/"
                    color="inherit"
                    style={{ textDecoration: "none", color: "white" }}
                  >
                    Home
                  </Link>
                  <br />
                  <Link
                    to="/Category"
                    color="inherit"
                    style={{ textDecoration: "none", color: "white" }}
                  >
                    Shop
                  </Link>
                  <br />

                  <Link
                    to="/about"
                    color="inherit"
                    style={{ textDecoration: "none", color: "white" }}
                  >
                    About Us
                  </Link>
                </Box>
              </Box>
            </Box>
          </Container>
        </Box>
      </Box>
    </ThemeProvider>
  );
}
