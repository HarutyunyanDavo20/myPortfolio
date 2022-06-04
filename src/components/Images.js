import { Box } from "@mui/material";
import React from "react";
import Loading from "../UI/loading";
import CardImage from "./CardImage";

const Images = ({ images }) => {
  return (
    <Box
      display="flex"
      flexWrap="wrap"
      minHeight="100vh"
      justifyContent="center"
      alignItems="center"
    >
      {images.length ? (
        images.map((img, i) => <CardImage key={i} img={img} />)
      ) : (
        <Loading />
      )}
    </Box>
  );
};

export default Images;
