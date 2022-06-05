import React from "react";
import { Alert, TextField } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import DoneIcon from "@mui/icons-material/Done";
import { useDispatch } from "react-redux";
import { useState } from "react";

import { useEffect } from "react";
import { add } from "../../../app/TodosSlice";

const TodoForm = () => {
  const [title, setTitle] = useState("");
  const [successAdd, setSuccessAdd] = useState(0);

  const dispatch = useDispatch();

  const handleAddTodo = (e) => {
    e.preventDefault();
    if (title) {
      dispatch(add({ title }));
      setTitle("");
      setSuccessAdd(1);
    } else {
    }
  };
  const handleChange = (e) => {
    setTitle(e.target.value);
  };

  useEffect(() => {
    if (successAdd) {
      setTimeout(() => {
        setSuccessAdd(0);
      }, [5000]);
    }
  }, [successAdd]);

  return (
    <>
      <form onSubmit={handleAddTodo} className="todo-form">
        <div>
          <TextField
            value={title}
            onChange={handleChange}
            id="standard-basic"
            label="Add new Todo"
            variant="standard"
            fullWidth
            sx={{ fontSize: 50 }}
          />
        </div>
        <button type="submit" className="add-todo" onSubmit={handleAddTodo}>
          <AddIcon sx={{ width: "35px", height: "100%", fontSize: "30px" }} />
        </button>
      </form>
      <div className="message-succes">
        {successAdd ? (
          <div>
            <Alert
              className="alert-success-add"
              icon={false}
              variant="filled"
              severity="success"
            >
              <span>Todo success added </span>{" "}
              <span className="done-icon">
                <DoneIcon />
              </span>
            </Alert>
          </div>
        ) : (
          <></>
        )}
      </div>
    </>
  );
};

export default TodoForm;
