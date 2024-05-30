import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";
import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
  Grid,
  Paper,
  Box,
  Chip,
  Skeleton,
  useMediaQuery,
} from "@mui/material";
import StarRateIcon from "@mui/icons-material/StarRate";
import { createTheme, ThemeProvider } from "@mui/material/styles";
const theme = createTheme();

function Products({ loading, setLoading }) {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);
  const { categoryName } = useParams();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("md"));

  useEffect(() => {
    setLoading(true);
    axios
      .get(`https://dummyjson.com/products/category/${categoryName}`)
      .then((response) => {
        setData(response.data.products);
        setTimeout(() => {
          setLoading(false);
        }, 1000);
      })
      .catch((error) => {
        setError(error);
        setLoading(false);
      });
  }, [categoryName, setLoading]);

  return (
    <div style={{ padding: 10 }}>
      <Grid
        container
        spacing={3}
        sx={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
        }}
      >
        {data.map((item) => (
          <Grid item xs={12} sm={6} md={4} lg={3} key={item.id}>
            <Link
              to={`/Products/Single-View/${item.id}`}
              style={{ textDecoration: "none" }}
            >
              <Paper elevation={7} sx={{ height: "100%" }}>
                {loading ? (
                  <Skeleton variant="rectangular" width={"100%"} height={300} />
                ) : (
                  <CardMedia
                    component="img"
                    alt={item.title}
                    height={isSmallScreen ? 400 : "300"}
                    image={item.thumbnail}
                  />
                )}
                <CardContent>
                  {loading ? (
                    <Skeleton variant="rectangular" width={300} />
                  ) : (
                    <Typography
                      gutterBottom
                      variant="overline"
                      fontWeight="bolder"
                      component="div"
                    >
                      {item.title}
                    </Typography>
                  )}
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "space-between",
                      mt: 1,
                    }}
                  >
                    {loading ? (
                      <Skeleton variant="rectangular" width={300} />
                    ) : (
                      <Typography variant="subtitle1">{item.brand}</Typography>
                    )}

                    <Box
                      sx={{ display: "flex", justifyContent: "end", gap: 1 }}
                    >
                      {item.tags.map((i) =>
                        loading ? (
                          <Skeleton variant="rectangular" width={100} />
                        ) : (
                          <Chip
                            key={i}
                            label={i}
                            size="small"
                            sx={{ borderRadius: "10px" }}
                            variant="outlined"
                          />
                        )
                      )}
                    </Box>
                  </Box>
                </CardContent>
                <CardActions>
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "space-between",
                      width: "100%",
                    }}
                  >
                    <Box
                      sx={{
                        display: "flex",
                        justifyContent: "space-around",
                        width: "100%",
                      }}
                    >
                      {loading ? (
                        <Skeleton variant="rectangular" width={100} />
                      ) : (
                        <Typography variant="subtitle2">
                          ${item.price}
                        </Typography>
                      )}
                      {loading ? (
                        <Skeleton variant="rectangular" width={100} />
                      ) : (
                        <Typography variant="subtitle2">
                          <strike>
                            $
                            {(
                              item.price +
                              item.discountPercentage / 100
                            ).toFixed(2)}
                          </strike>
                        </Typography>
                      )}
                      {loading ? (
                        <Skeleton variant="rectangular" width={100} />
                      ) : (
                        <Typography sx={{ color: "green", fontSize: "14px" }}>
                          {item.discountPercentage}% Off
                        </Typography>
                      )}
                    </Box>
                    {loading ? (
                      <Skeleton variant="rectangular" width={100} />
                    ) : (
                      <Chip
                        label={item.rating}
                        size="small"
                        color="success"
                        sx={{ borderRadius: "10px" }}
                        icon={<StarRateIcon />}
                      />
                    )}
                  </Box>
                </CardActions>
              </Paper>
            </Link>
          </Grid>
        ))}
      </Grid>
    </div>
  );
}

export default Products;
