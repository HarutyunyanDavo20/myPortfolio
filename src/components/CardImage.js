import * as React from "react";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import { useDispatch } from "react-redux";
import { openCatModal } from "../app/globalSlice";
import { Typography } from "@mui/material";
import { useState } from "react";

export default function CardImage({ img }) {
  const { url, id, width, height } = img;

  const dispach = useDispatch();

  const [currentCard, setCurrentCard] = useState(null);
  const [drag, setDrag] = useState(0);

  const handleOpenModal = () => {
    dispach(openCatModal({ name: "cat-photo", url, width, height }));
  };

  const dragStartHandler = (e, card) => {
    setCurrentCard(card);
    console.log('drag',card)
    setCurrentCard(card)
    console.log('currentCard', currentCard)
  };

  const dragEndHandler = (e) => {
    setDrag(0);
  };

  const dragOverHandler = (e) => {
    e.preventDefault();
    setDrag(0.8);
  };

  const dropHandler = (e, card) => {
    e.preventDefault();
    console.log('drop', card)
  };

  return (
    <>
      <Card
        onClick={handleOpenModal}
        sx={{
          width: 300,
          height: 300,
          backgroundSize: "cover",
          margin: 10,
          border: "1px solid black",
          transition: "0.2s",
          transform: `scale(${drag ? drag : 1})`,
        }}
      >
        <div
          className="catImages"
          onDragStart={(e) => dragStartHandler(e, img)}
          onDragLeave={(e) => dragEndHandler(e)}
          onDragEnd={(e) => dragEndHandler(e)}
          onDragOver={(e) => dragOverHandler(e)}
          onDrop={(e) => dropHandler(e, img)}
          draggable={true}
        >
          <Typography>{id}</Typography>

          <CardMedia component="img" height="300" image={url} alt="img" />
        </div>
      </Card>
    </>
  );
}
