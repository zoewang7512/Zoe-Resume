import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
const Footer = () => {
  return (
    <Box
      bgcolor={"background.paper"}
      color={"text.secondary"}
      display="flex"
      alignItems="center"
      justifyContent="center"
      sx={{ height: "100px" }}
    >
      <Typography gutterBottom mr={2}>
        © Copyright 2024 Zoe Wang.
      </Typography>

      <Typography gutterBottom>
        Icons by
        <a target="_blank" rel="noreferrer" href="https://icons8.com">
          <span> Icons8</span>
        </a>
      </Typography>
    </Box>
  );
};

export default Footer;
