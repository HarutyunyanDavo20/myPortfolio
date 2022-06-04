import React from "react";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { useNavigate } from "react-router-dom";

const GoBack = ({ fontSize = "50px", color = "blue", open }) => {

  const navigate = useNavigate()
  const goBack = () => navigate('/apps')

  return (
    <div className={`goBack ${open}`} onClick={goBack}>
      <ArrowBackIcon sx={{ fontSize, color }} />
    </div>
  );
};

export default GoBack;
