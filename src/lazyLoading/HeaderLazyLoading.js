import { Box, Skeleton } from "@mui/material";
import React from "react";

const HeaderLazyLoading = () => {
  return (
    <Box sx={{ width: "100%" }}>
      <Skeleton />
      <Skeleton animation="wave" />
      <Skeleton animation={false} />
    </Box>
  );
};

export default HeaderLazyLoading;
