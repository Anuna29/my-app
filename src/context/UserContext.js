import { createContext, useContext, useState } from "react";

export const userContext = createContext();

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState({
    name: "John Smith",
    email: "john.smith@gmail.com"
  });
  
  return (
    <userContext.Provider value={{ user, setUser }}>
      {children}
    </userContext.Provider>);
}

export const useUserContext = () => {
  return (useContext(userContext))
}