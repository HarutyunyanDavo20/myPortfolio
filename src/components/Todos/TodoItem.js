import { Button } from "@mui/material";
import React from "react";
import { useDispatch } from "react-redux";
import { setCompleted, end } from "../../app/TodosSlice";
import './TodoItem.scss'

const TodoItem = ({ todo }) => {
  const dispatch = useDispatch();
  const title = todo.title;
  const id = todo.id;

  const handleFinish = () => {
    dispatch(setCompleted({ title, id }));
  };
  const handleDelete = () => {
    dispatch(end({ title, id }));
  };

  return (
    <div
      className="todo-item"
      style={{
        background: todo.isCompleted ? "rgba(62, 203, 62, 0.200)" : "",
        color: todo.isCompleted ? "black" : "",
      }}
    >
      {todo.title}
      <div>
        {todo.isCompleted ? (
          <Button variant="contained" color="primary" onClick={handleDelete}>
            Delete
          </Button>
        ) : (
          <Button variant="contained" color="success" onClick={handleFinish}>
            done
          </Button>
        )}
      </div>
    </div>
  );
};

export default TodoItem;
