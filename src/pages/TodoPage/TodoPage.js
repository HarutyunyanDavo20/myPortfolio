import React from "react";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./TodoPage.scss";
import GoBack from "../../components/icons/GoBack";
import Messages from "../../components/icons/Messages";
import MessagesTodos from "./components/MessagesTodos";
import { closeMessages } from "../../app/TodosSlice";
import TodoList from "./components/TodoList";

const TodoPage = () => {
  const [open, setOpen] = useState("close");
  const [openMessages, setOpenMessages] = useState(false);

  const { messages } = useSelector((state) => state.todos);
  const dispatch = useDispatch();

  const handleOpenMessages = () => setOpenMessages(!openMessages);

  useEffect(() => {
    setTimeout(() => {
      setOpen("open");
    }, 1000);
    if (!openMessages) {
      dispatch(closeMessages());
    }
  }, [openMessages, dispatch]);

  return (
    <>
      <GoBack open={open} />
      <Messages
        count={messages.length}
        open={open}
        handleClick={handleOpenMessages}
      >
        {openMessages ? (
          messages.length ? (
            <MessagesTodos messages={messages} />
          ) : (
            <p>no Messages</p>
          )
        ) : (
          <></>
        )}
      </Messages>

      <div className={`wrapper_todos ${open}`}>
        <h1>Todos Application</h1>
        <TodoList />  
      </div>
    </>
  );
};

export default TodoPage;
