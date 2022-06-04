import React from "react";
import { useDispatch } from "react-redux";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import Form from "./Form";
import { useNavigate } from "react-router-dom";
import { setUser } from "app/userSlice";
import { useState } from "react";
import { Snackbar } from "@mui/material";

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();


  const [alertMsg, setAlertMsg] = useState({
    open: false,
    vertical: "top",
    horizontal: "center",
  });

  const push = () => {
    navigate("/");
  };

  const showError = () => {
    setAlertMsg({ ...alertMsg, open: true });
    setTimeout(() => {
      setAlertMsg({ ...alertMsg, open: false });
    }, 2000);
  };

  const auth = getAuth();
  

  const handleLogin = (email, password) => {
    signInWithEmailAndPassword(auth, email, password)
      .then(({ user }) => {
        console.log(user);
        localStorage.setItem('token', user.accessToken)
        dispatch(
          setUser({
            email: user.email,
            id: user.uid,
            token: user.accessToken,
          })
        );
        push();
      })
      .catch(showError);
  };

  return (
    <>
      <Snackbar
        anchorOrigin={{
          vertical: alertMsg.vertical,
          horizontal: alertMsg.horizontal,
        }}
        open={alertMsg.open}
        message="Incorrect login and password"
        key={alertMsg.vertical + alertMsg.horizontal}
      />
      <Form title="sign" handleClick={handleLogin} />
    </>
  );
};

export default Login;
