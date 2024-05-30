import * as React from "react";
import PropTypes from "prop-types";
import CircularProgress from "@mui/material/CircularProgress";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

function CircularProgressWithLabel(props) {
  return (
    <Box sx={{ position: "relative", display: "inline-flex" }}>
      <CircularProgress
        size={100}
        color={
          props.rate > 4.5 ? "success" : props.rate > 4 ? "warning" : "error"
        }
        variant="determinate"
        thickness={6}
        {...props}
      />
      <Box
        sx={{
          top: 0,
          left: 0,
          bottom: 0,
          right: 0,
          position: "absolute",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Typography
          variant="h6"
          component="div"
          color="text"
          sx={{ fontWeight: "bolder" }}
        >
          {`${props.rate}`}
        </Typography>
      </Box>
    </Box>
  );
}

export default function CircularWithValueLabel({ rate }) {
  let val = rate * 20;
  return <CircularProgressWithLabel value={val} rate={rate} />;
}
