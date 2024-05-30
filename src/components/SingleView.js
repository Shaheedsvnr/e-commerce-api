import {
  Box,
  Button,
  Chip,
  Divider,
  Fade,
  Grid,
  Paper,
  Typography,
  useMediaQuery,
} from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import StarRateIcon from "@mui/icons-material/StarRate";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import RatingProgress from "./RatingProgress";
import Reviews from "./Reviews";
import PersonIcon from "@mui/icons-material/Person";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import Moment from "react-moment";
import OtherProduct from "./OtherProducts";
export default function SingleView() {
  let params = useParams();
  const productId = params.id;
  const theme = createTheme();

  const [selected, setSelected] = useState(null);
  const [more, setMore] = useState(false);
  const [ImageIndex, setImageIndex] = useState(0);
  const [OtherProducts, setOtherProducts] = useState([]);
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("md"));
  //   console.log(productId);
  useEffect(() => {
    axios
      .get(`https://dummyjson.com/products/${productId}`)
      .then((response) => {
        // console.log(response.data);
        setSelected(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
    axios
      .get(`https://dummyjson.com/products`)
      .then((response) => {
        // console.log(response.data.products[0].id == productId);
        let a = response.data.products.filter((it) => it.id == productId);
        // console.log(a);
        let singleCategory = a[0]?.category;
        // console.log(singleCategory);
        let other = response.data.products.filter(
          (ii) => ii.category == singleCategory && ii.id != productId
        );
        setOtherProducts(other);
        // console.log(
        //   response.data.products
        //     .filter((i) => i.id !== id)
        //     .slice(-5, -1)
        //     .reverse()
        // );
      })
      .catch((error) => {
        console.log(error);
      });
  }, [productId]);

  return (
    <Box sx={{ p: 1 }}>
      <Grid container spacing={2}>
        <Grid item xs={12} md={2}>
          <Paper
            elevation={4}
            sx={{
              height: isSmallScreen ? "auto" : "104vh",
              display: "flex",
              flexDirection: isSmallScreen ? "row" : "column",
              justifyContent: "center",
              alignItems: "center",
              //   overflowX: isSmallScreen ? "scroll" : "hidden",
              //   overflowY: isSmallScreen ? "hidden" : "scroll",
              //   padding: isSmallScreen ? "10px 0" : "0",
              gap: 1,
            }}
          >
            {selected?.images.map((image, index) => (
              <Box
                key={index}
                onMouseOver={() => setImageIndex(index)}
                sx={{
                  cursor: "pointer",
                  margin: isSmallScreen ? "0 5px" : "10px 0",
                  height: isSmallScreen ? "auto" : "100vh",
                  display: "flex",
                  flexDirection: isSmallScreen ? "row" : "column",
                  justifyContent: "center",
                  alignItems: "center",
                  gap: 1,
                }}
              >
                <img
                  src={image}
                  style={{
                    width: "60%",
                    height: "60%",
                    objectFit: "contain",
                  }}
                  alt={`Product ${index}`}
                />
              </Box>
            ))}
          </Paper>
        </Grid>
        <Grid item xs={12} md={5}>
          <Paper
            elevation={4}
            sx={{
              height: isSmallScreen ? "auto" : "100vh",
              display: "flex",
              justifyContent: "center",
              p: 2,
            }}
          >
            <img
              src={selected?.images[ImageIndex]}
              style={{
                width: "100%",
                maxHeight: isSmallScreen ? "400px" : "100%",
                objectFit: "contain",
              }}
              alt="Selected"
            />
          </Paper>
        </Grid>
        <Grid item xs={12} md={5}>
          <Paper
            elevation={4}
            sx={{ height: isSmallScreen ? "auto" : "100vh", padding: 2 }}
          >
            <Box>
              <Typography
                variant="button"
                color="text.secondary"
                sx={{ fontSize: "14px", fontWeight: "bolder" }}
              >
                {selected?.brand}
              </Typography>
            </Box>
            <Box>
              <Typography
                variant="button"
                color="text.secondary"
                sx={{ fontSize: "24px", fontWeight: "bolder" }}
              >
                {selected?.title}
              </Typography>
            </Box>
            <Box sx={{ display: "flex", justifyContent: "flex-start", gap: 2 }}>
              <Chip
                size="small"
                label={selected?.rating}
                color={
                  selected?.rating > 4.5
                    ? "success"
                    : selected?.rating > 4
                    ? "warning"
                    : "error"
                }
                icon={<StarRateIcon sx={{ fontSize: "16px" }} />}
                sx={{ borderRadius: "10px" }}
              />
              <Typography variant="body" color="text.secondary">
                {selected?.reviews.length} reviews
              </Typography>
            </Box>
            <Box sx={{ display: "flex", justifyContent: "flex-start", gap: 2 }}>
              <Typography
                variant="h6"
                mt={1}
                fontWeight={"bolder"}
                color="green"
              >
                Extra {selected?.discountPercentage}% Off
              </Typography>
            </Box>
            <Box sx={{ display: "flex", justifyContent: "flex-start", gap: 2 }}>
              <Typography variant="h4" mt={1} color="text.secondary">
                $ {selected?.price}
              </Typography>
              <Typography variant="h6" mt={1} color="text.secondary">
                <strike>
                  $
                  {parseInt(
                    selected?.price + selected?.discountPercentage / 100
                  )}
                </strike>
              </Typography>
            </Box>
            <Box sx={{ display: "flex", justifyContent: "flex-start", gap: 2 }}>
              <Typography variant="caption" mb={1} color="text.secondary">
                {selected?.shippingInformation}
              </Typography>
            </Box>
            <Divider />
            <TableContainer>
              <Table>
                <TableHead>
                  <TableRow>
                    <TableCell>Description</TableCell>
                    <TableCell>
                      <Typography variant="caption" color="text.secondary">
                        {selected?.description}
                      </Typography>
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>Warranty information</TableCell>
                    <TableCell>
                      <Typography variant="caption" color="text.secondary">
                        {selected?.warrantyInformation}
                      </Typography>
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>Return policy</TableCell>
                    <TableCell>
                      <Typography variant="caption" color="text.secondary">
                        {selected?.returnPolicy}
                      </Typography>
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>Status</TableCell>
                    <TableCell>
                      <Typography variant="caption" color="text.secondary">
                        {selected?.availabilityStatus}
                      </Typography>
                    </TableCell>
                  </TableRow>
                </TableHead>
                <TableBody></TableBody>
              </Table>
            </TableContainer>
          </Paper>
        </Grid>
        <Grid item xs={12} md={12}>
          <Paper
            elevation={5}
            sx={{
              display: "flex",
              justifyContent: "center",
              flexDirection: isSmallScreen ? "column" : "row",
            }}
          >
            <Grid item xs={12} md={6} p={3}>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  width: "100%",
                  borderRight: isSmallScreen ? "none" : "2px solid #00000021",
                  borderBottom: isSmallScreen ? "2px solid #00000021" : "none",
                }}
              >
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "row",
                    gap: 2,
                    width: "100%",
                  }}
                >
                  <Box sx={{ m: 2 }}>
                    <Box>
                      <Typography variant="h6" color="text.secondary">
                        Ratings
                      </Typography>
                    </Box>
                    <Box>
                      <Typography sx={{ mt: 2 }} variant="h4" color="text">
                        {selected?.rating} <StarRateIcon />
                      </Typography>
                      <Typography variant="body" color="text.secondary">
                        {selected?.reviews.length} reviews
                      </Typography>
                    </Box>
                  </Box>
                </Box>
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                    gap: 2,
                    width: "100%",
                  }}
                >
                  <Box
                    sx={{
                      p: 2,
                      display: "flex",
                    }}
                  >
                    <RatingProgress rate={selected?.rating} />
                  </Box>
                </Box>
              </Box>
            </Grid>
            <Grid item xs={12} md={6}>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  gap: 2,
                  width: "100%",
                }}
              >
                <Box sx={{ m: 2 }}>
                  <Box>
                    <Typography variant="h6" color="text.secondary">
                      Reviews
                    </Typography>
                  </Box>
                  <Box>
                    <Paper
                      elevation={1}
                      sx={{
                        p: 2,
                        // border: "1px solid black",
                        borderRadius: "10px",
                      }}
                    >
                      <Box
                        sx={{
                          display: "flex",
                          justifyContent: "flex-start",
                          gap: 3,
                        }}
                      >
                        <Box>
                          <Chip
                            size="small"
                            label={selected?.reviews[0]?.rating}
                            color={
                              selected?.reviews[0]?.rating >= 5
                                ? "success"
                                : selected?.reviews[0]?.rating >= 4
                                ? "warning"
                                : "error"
                            }
                            icon={<StarRateIcon sx={{ fontSize: "16px" }} />}
                            sx={{ borderRadius: "5px" }}
                          />
                        </Box>
                        <Box>
                          <Typography
                            variant="overline"
                            sx={{ fontWeight: "bolder" }}
                          >
                            {selected?.reviews[0]?.rating >= 5
                              ? "Excellent"
                              : selected?.reviews[0]?.rating >= 4
                              ? "Good"
                              : "Bad"}
                          </Typography>
                        </Box>
                      </Box>
                      <Box>
                        <Box>
                          <Typography variant="caption">
                            {selected?.reviews[0]?.comment}
                          </Typography>
                          <Typography variant="caption" sx={{ float: "right" }}>
                            <Moment format="YYYY-MM-DD">
                              {selected?.reviews[0]?.date}
                            </Moment>
                          </Typography>
                        </Box>
                      </Box>
                      <Box
                        mt={1}
                        sx={{
                          display: "flex",
                          justifyContent: "space-between",
                        }}
                      >
                        <Box
                          sx={{
                            display: "flex",
                            justifyContent: "flex-start",
                            alignItems: "center",
                          }}
                        >
                          <PersonIcon sx={{ fontSize: "18px" }} color="dark" />
                          <Typography variant="caption" color="text">
                            {selected?.reviews[0]?.reviewerName}
                          </Typography>
                        </Box>
                        <Box
                          onClick={() => setMore(!more)}
                          sx={{
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                          }}
                        >
                          {selected?.reviews.length - 1} more reviews{" "}
                          {more ? (
                            <ExpandLessIcon
                              sx={{ cursor: "pointer" }}
                              //   onClick={() => setMore(!more)}
                            />
                          ) : (
                            <ExpandMoreIcon
                              sx={{ cursor: "pointer" }}
                              //   onClick={() => setMore(!more)}
                            />
                          )}
                        </Box>
                      </Box>
                      {/* <Reviews reviews={selected?.reviews} /> */}
                    </Paper>
                  </Box>
                </Box>
              </Box>
            </Grid>
          </Paper>
        </Grid>
        {more && (
          <Fade in={true}>
            <Grid points="0,100 50,00, 100,100" item xs={12} md={12}>
              <Paper
                elevation={5}
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  flexDirection: "column",
                }}
              >
                {selected?.reviews.slice(1, 3)?.map((review, index) => (
                  <Reviews reviews={review} key={index} />
                ))}
              </Paper>
            </Grid>
          </Fade>
        )}
        {OtherProducts.length > 0 && (
          <Grid item xs={12} md={12}>
            <Paper elevation={7}>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  width: "100%",
                  justifyContent: "flex-start",
                  // backgroundColor: "red",
                }}
              >
                <Typography sx={{ m: 2 }} variant="overline" color="GrayText">
                  Related products
                </Typography>
              </Box>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-evenly",
                  p: 1,
                  flexWrap: "wrap",
                  //   backgroundColor: "red",
                  //   flexDirection: isSmallScreen,
                }}
              >
                {OtherProducts?.map((other, index) => (
                  <Grid item xs={6} md={3}>
                    <Box
                      sx={{
                        //   display: "flex",
                        //   justifyContent: "center",
                        flexWrap: "wrap",
                        //   flexDirection: isSmallScreen,
                        //   backgroundColor: "red",
                      }}
                    >
                      <OtherProduct
                        isSmallScreen={isSmallScreen}
                        item={other}
                        key={index}
                      />
                    </Box>
                  </Grid>
                ))}
              </Box>
            </Paper>
          </Grid>
        )}
      </Grid>
    </Box>
  );
}
