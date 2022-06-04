import React from "react";
import { NavLink } from "react-router-dom";

const LinkAppBar = ({ list }) => {
  const { id, name } = list;

  return (
    <NavLink className="links" to={`category/${id}`}>
      {name}
    </NavLink>
  );
};

export default LinkAppBar;
