import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import {
  Box,
  Chip,
  FormControl,
  InputLabel,
  Paper,
  TextField,
  colors,
} from "@mui/material";
import StarRateIcon from "@mui/icons-material/StarRate";
import InputAdornment from "@mui/material/InputAdornment";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";
import OutlinedInput from "@mui/material/OutlinedInput";

function AllProducts() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState(null);
  const [error, setError] = useState(null);
  const { categoryName } = useParams();

  useEffect(() => {
    axios
      .get(`https://dummyjson.com/products`)
      .then((response) => {
        // console.log(response.data.products);
        setData(response.data.products);
        setLoading(false);
      })
      .catch((error) => {
        setError(error);
        setLoading(false);
      });
  }, []); // The empty dependency array ensures this effect runs only once after the initial render
  //   console.log(search);
  let filtered = data.filter((dt) =>
    search ? dt?.title?.toLowerCase().includes(search.toLowerCase()) : true
  );
  return (
    <div style={{ padding: 10 }}>
      <Box
        sx={{
          //   backgroundColor: "red",
          padding: 0,
          display: "flex",
          justifyContent: "center",
          width: "100%",
          mb: 2,
        }}
      >
        {" "}
        <FormControl variant="outlined" sx={{ width: "95%" }}>
          <InputLabel htmlFor="outlined-adornment-password">
            Search products here
          </InputLabel>
          <OutlinedInput
            onChange={(e) => setSearch(e.target.value)}
            //   fullWidth
            endAdornment={
              <InputAdornment position="end">
                <IconButton aria-label="toggle password visibility" edge="end">
                  <SearchIcon />
                </IconButton>
              </InputAdornment>
            }
            label="Search products here"
          />
        </FormControl>
      </Box>
      <Grid
        container
        sx={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          gap: 3,
          "& > :not(style)": {},
        }}
      >
        {filtered.length > 0 ? (
          filtered.map((item) => (
            <Link
              key={item.id}
              to={`/Products/Single-View/${item.id}`}
              style={{ textDecoration: "none" }}
            >
              <Paper elevation={7} sx={{ maxWidth: 345 }}>
                <CardMedia
                  component="img"
                  alt="green iguana"
                  height="300"
                  image={item?.thumbnail}
                />
                <CardContent>
                  <Typography
                    gutterBottom
                    variant="overline"
                    fontWeight={"bolder"}
                    component="div"
                  >
                    {item?.title}
                  </Typography>
                  <Box
                    sx={{ display: "flex", justifyContent: "space-between" }}
                  >
                    <Typography variant="subtitle1">{item.brand}</Typography>
                    <Box
                      sx={{ display: "flex", justifyContent: "end", gap: 1 }}
                    >
                      {item?.tags.map((i, ind) => (
                        <Chip
                          key={ind}
                          label={i}
                          size="small"
                          sx={{ float: "right", borderRadius: "10px" }}
                          variant="outlined"
                        />
                      ))}
                    </Box>
                  </Box>
                  <Typography variant="caption" color="text.secondary">
                    {item?.description}
                  </Typography>
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
                      <Typography variant="subtitle2">
                        ${parseInt(item.price)}
                      </Typography>
                      <Typography variant="subtitle2">
                        <strike>
                          $
                          {parseInt(item.price + item.discountPercentage / 100)}
                        </strike>
                      </Typography>
                      <Typography sx={{ color: "green", fontSize: "14px" }}>
                        {item.discountPercentage}% Off
                      </Typography>
                    </Box>

                    <Chip
                      label={item?.rating}
                      size="small"
                      color="success"
                      sx={{ float: "right", borderRadius: "10px" }}
                      icon={<StarRateIcon />}
                      // variant="outlined"
                    />
                  </Box>
                </CardActions>
              </Paper>
            </Link>
          ))
        ) : (
          <Box
            sx={{
              width: "100%",
              height: "70vh",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Box sx={{ p: 4 }}>
              <img
                alt="green iguana"
                height="100%"
                style={{ objectFit: "contain" }}
                width={"100%"}
                src={
                  "https://static-assets-web.flixcart.com/fk-p-linchpin-web/fk-cp-zion/img/error-no-search-results_2353c5.png"
                }
              />
              <Box>
                <Typography
                  gutterBottom
                  variant="overline"
                  fontWeight={"bolder"}
                  component="div"
                >
                  Sorry, no results found!
                </Typography>
                <Typography variant="caption" color="text.secondary">
                  Please check the spelling or try searching for something else
                  ABOUT
                </Typography>
              </Box>
            </Box>
          </Box>
        )}
      </Grid>
    </div>
  );
}

export default AllProducts;
