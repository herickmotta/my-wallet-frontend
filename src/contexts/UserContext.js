import React, { useContext, createContext } from 'react';
import useLocalStorage from '../hooks/useLocalStorage';
const UserContext = createContext();

export default UserContext;

export function UserProvider(props) {
  const [user, setUser] = useLocalStorage('user', null);

  return (
    <UserContext.Provider {...props} value={{ user, setUser }}>
      {props.children}
    </UserContext.Provider>
  );
}

export function useUserContext() {
  const context = useContext(UserContext);

  if (!context) {
    throw new Error('useUserContext must be used within a UserProvider');
  }

  return context;
}
