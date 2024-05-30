import React from "react";
import { Box, Container, Typography, Grid, Paper, Avatar } from "@mui/material";
import { styled } from "@mui/system";
import bg from "../images/c.jpg";
const TeamMember = styled(Paper)({
  padding: "20px",
  textAlign: "center",
});

const AboutPage = () => {
  return (
    <Box>
      <Box
        sx={{
          backgroundImage: `url(${bg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          color: "white",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          height: "40vh",
          textAlign: "center",
        }}
      >
        <Typography
          style={{
            fontFamily: "sans-serif",
            background: "#0000009c",
            padding: "50px",
            width: "50%",
            borderRadius: "20px",
          }}
          variant="h2"
        >
          About Us
        </Typography>
      </Box>
      <Container sx={{ my: 5 }}>
        <Typography variant="h4" sx={{ fontWeight: "bolder" }} gutterBottom>
          Our Mission
        </Typography>
        <Typography variant="body1" paragraph>
          Our mission is to provide the best products at the best prices. We are
          committed to offering high-quality goods and exceptional customer
          service. We strive to make your shopping experience as seamless and
          enjoyable as possible.
        </Typography>
      </Container>
      <Container sx={{ my: 5 }}>
        <Typography variant="h4" sx={{ fontWeight: "bolder" }} gutterBottom>
          Our Story
        </Typography>
        <Typography variant="body1" paragraph>
          Our company has grown from a small business to a leading e-commerce
          platform. Our journey began with a simple idea: to make quality
          products accessible to everyone. Over the years, we have expanded our
          product range and improved our services to meet the evolving needs of
          our customers.
        </Typography>
      </Container>
    </Box>
  );
};

export default AboutPage;
