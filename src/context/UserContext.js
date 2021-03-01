import React, { createContext } from "react";
import useLocalStorage from "../hooks/useLocalStorage";

const UserContext = createContext();

export default UserContext;

export function UserProvider({ children }) {
  const [user, setUser] = useLocalStorage("user", null);

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
}
