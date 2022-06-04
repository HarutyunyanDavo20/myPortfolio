import React from "react";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./HomePage.scss";

const HomePage = () => {
  const navigate = useNavigate();
  const [open, setOpen] = useState("close");

  useEffect(() => {
    setTimeout(() => {
      setOpen("open");
      setTimeout(() => {
        setOpen("close");
        setTimeout(() => {
          navigate("/apps");
        }, 500);
      }, 3000);
    }, 1000);
  }, [navigate]);

  return (
    <div className={`wrapper_header ${open}`}>
      <h1>Welcome to My Portfolio</h1>
    </div>
  );
};

export default HomePage;
