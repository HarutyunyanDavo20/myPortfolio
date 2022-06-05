import Menu from "./Menu";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const apps = [
  { name: "Todos", id: 1 },
  { name: "Cats", id: 2 },
  {name: 'Store', id: 3}
];

const Applist = () => {
  const [path, setPath] = useState("");
  const [close, setClose] = useState("");

  const navigate = useNavigate();

  useEffect(() => {
    if (path) {
      setClose("close");
      setTimeout(() => {
        navigate(`${path.toLowerCase()}`);
      }, 300);
      setPath("");
    }
  }, [path, navigate]);

  const handleClick = (title) => {
    setPath(title)
  }

  return (
    <div className={`app-list-wrapper ${close ? null : "open-Animation"}  `}>
      <div className={`todo_page ${close}`}>
        {apps.map(link =>  <Menu key={link.id} title={link.name} onClick={handleClick}/>)}
      </div>
      <style></style>
    </div>
  );
};

export default Applist;
