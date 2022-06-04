import { CircularProgress } from "@mui/material";
import React from "react";

const style = {
  position: "absolute",
  width: "100vw",
  height: "100vh",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
};

const Spiner = () => {
  return (
    <div style={style}>
      <CircularProgress />
    </div>
  );
};

export default Spiner;
