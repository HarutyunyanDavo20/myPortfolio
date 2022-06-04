import { TextField } from "@mui/material";
import React from "react";
import { useState } from "react";
import "./Form.css";

const Form = ({ title, handleClick, err }) => {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");

  return (
    <div className="form-auth">
      <TextField
        label="login"
        type="email"
        variant="outlined"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <TextField
        label="password"
        type="password"
        variant="outlined"
        value={pass}
        onChange={(e) => setPass(e.target.value)}
      />

      <button className="button-send" onClick={() => handleClick(email, pass)}>
        {title}
      </button>
    </div>
  );
};

export default Form;
