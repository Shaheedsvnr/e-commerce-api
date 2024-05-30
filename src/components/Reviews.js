import { Box, Chip, Paper, Typography } from "@mui/material";
import React from "react";
import StarRateIcon from "@mui/icons-material/StarRate";
import PersonIcon from "@mui/icons-material/Person";
import Moment from "react-moment";
export default function Reviews({ reviews }) {
  //   console.log(reviews);
  return (
    <Box sx={{ borderBottom: "1px solid #00000021" }}>
      {/* {reviews?.slice(1, 3)?.map((review) => ( */}
      <Box
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
              label={reviews?.rating}
              color={
                reviews?.rating >= 5
                  ? "success"
                  : reviews?.rating >= 4
                  ? "warning"
                  : "error"
              }
              icon={<StarRateIcon sx={{ fontSize: "16px" }} />}
              sx={{ borderRadius: "5px" }}
            />
          </Box>
          <Box>
            <Typography variant="overline" sx={{ fontWeight: "bolder" }}>
              {reviews?.rating >= 5
                ? "Excellent"
                : reviews?.rating >= 4
                ? "Good"
                : "Bad"}
            </Typography>
          </Box>
        </Box>
        <Box>
          <Box>
            <Typography variant="caption">{reviews?.comment}</Typography>
            <Typography variant="caption" sx={{ float: "right" }}>
              <Moment format="YYYY-MM-DD">{reviews?.date}</Moment>
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
              {reviews?.reviewerName}
            </Typography>
          </Box>
        </Box>
      </Box>
      {/* ))} */}
    </Box>
  );
}
