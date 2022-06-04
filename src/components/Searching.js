import { Button, TextField } from "@mui/material";
import React from "react";

const Searching = ({ handleSearch }) => {

  return (
    <div>
      <TextField
        onChange={(e) => handleSearch(e.target.value)}
        label="Search by id..."
        sx={{ minWidth: 10, margin: 3, display: "flex",  background: 'white' }}
      />
      <Button
        variant="contained"
        color="success"
        sx={{ margin: "10px auto", display: "flex" }}
      >
        Search
      </Button>
    </div>
  );
};

export default Searching;
