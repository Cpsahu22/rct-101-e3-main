import React, { useState, useContext, useEffect } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

const Login = () => {
  const[email, setEmail] = useState();
  const [password, setPassword] = useState();
  const {token, handleLogin} = useContext(AuthContext)
  const handleSubmit = (e) => {
    e.preventDefault();
    handleLogin(email,password);
  };

  useEffect(() =>{
    if(tokan) {
      Navigate(from, {replace: true});
    }
  }, [tokan]);

  return (
    <div>
      <input data-cy="login-email" />
      <input data-cy="login-password" />
      <button data-cy="login-submit">Login</button>
    </div>
  );
};

export default Login;
