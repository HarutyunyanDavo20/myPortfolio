import React from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from "hooks/use-auth";
import { useDispatch } from "react-redux";
import { removeUser } from "store/slices/userSlice";

const HomePage = () => {
    const dispatch = useDispatch()

    const {isAuth, email} = useAuth()

  return isAuth? (
      <div>
          <h1>Welcome</h1>

          <button onClick={() => dispatch(removeUser())}> Log out from {email}</button>
      </div>
  ) :(
    <div>
      <Navigate replace to="/login" />
    </div>
  );
};

export default HomePage;
