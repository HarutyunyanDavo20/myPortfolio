import React from "react";
import { Alert, TextField } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";

import { useDispatch } from "react-redux";
import { useState } from "react";
import { add } from "../../app/TodosSlice";
import { useEffect } from "react";

const TodoForm = () => {
  const [title, setTitle] = useState("");
  const [successAdd, setSuccessAdd] = useState(0);

  const dispatch = useDispatch();

  const handleAddTodo = () => {
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
      <div className="todo-form">
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
        <div className="add-todo" onClick={handleAddTodo}>
          <AddIcon sx={{ width: "35px", height: "100%", fontSize: "30px" }} />
        </div>
       
      </div>
     <div className="message-succes">
     {successAdd ? (
        <div className="alert-success-add">
          <Alert onClose={() => {}}>
            Todo success added
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
