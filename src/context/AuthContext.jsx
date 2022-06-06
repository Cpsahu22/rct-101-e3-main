import React, { createContext, useState } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [token, setToken] = useState();

  const handleLogin =  (email, password) => {
    setToken();
  };

  const handleLogout = () => {
    setToken();
  };


  const value = {handleLogin, token, handleLogout};

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
