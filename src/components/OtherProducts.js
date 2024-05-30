import {
  Box,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Chip,
  Paper,
  Typography,
} from "@mui/material";
import React from "react";
import StarRateIcon from "@mui/icons-material/StarRate";
import { Link } from "react-router-dom";

export default function OtherProducts({ item, isSmallScreen }) {
  //   console.log(item);
  return (
    <Link
      onClick={() =>
        window.scrollTo({
          top: 0,
          behavior: "smooth",
        })
      }
      style={{ textDecoration: "none" }}
      to={`/Products/Single-View/${item.id}`}
    >
      <Card
        sx={{
          width: isSmallScreen ? "98%" : "90%",
          m: "2px",
          height: isSmallScreen ? 350 : 450,
        }}
        // elevation={1}
      >
        <CardMedia
          component="img"
          alt="green iguana"
          // height="300"
          image={item?.thumbnail}
        />
        <CardContent>
          <Typography
            gutterBottom
            variant={isSmallScreen ? "caption" : "overline"}
            fontWeight={"bolder"}
            component="div"
          >
            {item?.title?.split(" ").slice(0, 3).join(" ") + "..."}
            {/* {item?.title?.split("").slice(0, 3).join(" ") + "..."} */}
          </Typography>
          {/* <Box sx={{ display: "flex", justifyContent: "space-between" }}>
          <Typography variant="subtitle1">{item.brand}</Typography>
        </Box> */}
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
                flexDirection: isSmallScreen ? "column" : "row",

                width: "100%",
              }}
            >
              <Typography variant="subtitle2">
                ${parseInt(item.price)}
              </Typography>
              <Typography variant="subtitle2">
                <strike>
                  ${parseInt(item.price + item.discountPercentage / 100)}
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
      </Card>
    </Link>
  );
}
