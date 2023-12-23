import React from "react";
import { useDispatch } from "react-redux";
import { loginUser } from "../redux/slices/auth";

const Login = () => {
  const dispatch = useDispatch();

  const submitHandler = (e) => {
    e.preventDefault();
    window.localStorage.setItem("loggedIn", 1);

    dispatch(loginUser({ username: "username", password: "password" }));
  };

  return (
    <form onSubmit={submitHandler}>
      <input type="text" />
      <input type="password"></input>
      <button type="submit">submit</button>
    </form>
  );
};

export default Login;
