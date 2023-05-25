import React, { useEffect, useState } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { useContext } from "react";

const UserContext = React.createContext();

export const UserProvider = ({ children }) => {
  const { loginWithRedirect, logout, user, isAuthenticated, isLoading } =
    useAuth0();
  const [myUser, setMyUser] = useState(null);

  useEffect(() => {
    setMyUser(user);
    // console.log(user);
  }, [user]);

  return (
    <UserContext.Provider
      value={{ loginWithRedirect, logout, myUser, isAuthenticated, isLoading }}
    >
      {children}
    </UserContext.Provider>
  );
};

export const useUserContext = () => {
  return useContext(UserContext);
};
