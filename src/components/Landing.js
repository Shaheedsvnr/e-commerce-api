import React from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Container,
  Box,
  Grid,
  Paper,
} from "@mui/material";
import { styled } from "@mui/system";
import { Link } from "react-router-dom";
import bg from "../images/m.jpg";
const HeroSection = styled(Box)({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  height: "80vh",
  backgroundImage: 'url("https://via.placeholder.com/1920x1080")',
  backgroundSize: "cover",
  backgroundPosition: "center",
  color: "white",
  textAlign: "center",
});

const FeaturedProduct = styled(Paper)({
  padding: "20px",
  textAlign: "center",
});

const LandingPage = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Box sx={{ display: "flex" }}>
        <Box
          sx={{
            backgroundColor: "#ffffff63",
            width: "100%",
            alignItems: "center",
            display: "flex",
            padding: "50px",
            borderRadius: "20px",
            color: "black",
          }}
        >
          <Box>
            <Typography
              sx={{ fontWeight: "bolder", fontFamily: "Poppins" }}
              variant="h2"
              gutterBottom
            >
              Welcome to Our Store
            </Typography>
            <Typography
              sx={{ fontWeight: "bolder", fontFamily: "Poppins" }}
              variant="h5"
              gutterBottom
            >
              Discover the best products at unbeatable prices
            </Typography>
            <Link to={"/Category"}>
              <Button variant="text" color="primary" size="large">
                Shop Now
              </Button>
            </Link>
          </Box>
        </Box>
        <Box
          sx={{
            backgroundColor: "#ffffff63",
            width: "100%",
            alignItems: "center",
            display: "flex",
            padding: "50px",
            borderRadius: "20px",
            color: "black",
          }}
        >
          <img src={bg} style={{ width: "100%" }} />
        </Box>
      </Box>
    </Box>
  );
};

export default LandingPage;
