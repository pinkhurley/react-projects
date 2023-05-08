import React, { useState, useEffect, createContext } from "react";


export const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
  const userInfo = localStorage.getItem("user");
  const [currentUser, setCurrentUser] = useState(JSON.parse(userInfo) || null);

  const login = (inputs) =>{
    setCurrentUser(inputs)
  }

  const logout = () =>{
    setCurrentUser(null)
  }

  useEffect(() => {
    localStorage.setItem("user", JSON.stringify(currentUser));
  }, [currentUser]);

  return (
    <AuthContext.Provider value={{ currentUser, login, logout}}>
      {children}
    </AuthContext.Provider>
  );
};
