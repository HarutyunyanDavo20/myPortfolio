import React from "react";
import { Link, useLocation } from "react-router-dom";

const style = {
  width: "100%",
  display: "flex",
  justifyContent: "center",
  color: "red",
};

const NotFountPage = () => {
  const location = useLocation();

  return (
    <>
      <h2 style={style}>{location.pathname}</h2>
      <p style={{...style, color: 'black'}}> is Not Found </p>
       <Link style={{...style, color: 'black'}} to='/'>go Home </Link>
    </>
  );
};

export default NotFountPage;
