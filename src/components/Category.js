import React, { useState, useEffect } from "react";
import axios from "axios";
import { Box, Grid, Paper, Typography, useMediaQuery } from "@mui/material";
import { Link } from "react-router-dom";
import Skeleton from "@mui/material/Skeleton";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
export default function Category() {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const theme = createTheme();

  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));
  const isMediumScreen = useMediaQuery(theme.breakpoints.down("md"));

  useEffect(() => {
    axios
      .get("https://dummyjson.com/products/categories")
      .then(async (response) => {
        // console.log(response.data);
        setData(response.data);
        setTimeout(() => {
          setLoading(false);
        }, 1000);
      })
      .catch((error) => {
        setError(error);
      });
  }, []); // The empty dependency array ensures this effect runs only once after the initial render

  const getGridItemSize = () => {
    if (isSmallScreen) {
      return 12;
    } else if (isMediumScreen) {
      return 6;
    } else {
      return 3;
    }
  };

  return (
    <div style={{ marginTop: 10 }}>
      <Box sx={{ alignItems: "center", textAlign: "center" }}>
        <Typography
          variant="overline"
          align="center"
          sx={{
            fontWeight: "bolder",
            fontSize: "30px",
            alignItems: "center",
            textAlign: "center",
          }}
        >
          Categories
        </Typography>
      </Box>
      <Grid
        container
        spacing={2}
        sx={{
          display: "flex",
          justifyContent: "center",
          flexWrap: "wrap",
          padding: 3,
        }}
      >
        {data.map((item, index) => (
          <Grid item xs={getGridItemSize()} key={index}>
            <Link
              style={{ textDecoration: "none" }}
              to={`/Products/${item?.slug}`}
            >
              {loading ? (
                <Skeleton variant="rectangular" height={128} />
              ) : (
                <Paper
                  elevation={4}
                  sx={{
                    height: "100%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    height: 128,
                    backgroundImage:
                      "linear-gradient(34deg,#f6f6f6f7, #5993cc7d, #b3c9dab8)",
                  }}
                >
                  <Typography
                    variant="overline"
                    sx={{ fontWeight: "bolder", fontSize: "20px" }}
                  >
                    {item?.name}
                  </Typography>
                </Paper>
              )}
            </Link>
          </Grid>
        ))}
      </Grid>
    </div>
  );
}
