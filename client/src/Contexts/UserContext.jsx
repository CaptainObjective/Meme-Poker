import React, { useState, useContext } from 'react';

const UserContext = React.createContext();

const UserContextProvider = ({ children }) => {
  const defaultName = window.localStorage.getItem('USERNAME') ?? '';
  const [name, setName] = useState(defaultName);

  const [isOpen, setCartOpen] = useState(true);

  const handleCartOpen = () => {
    setCartOpen(true);
  };
  const handleCartClose = () => {
    setCartOpen(false);
  };

  const changeName = (newName = '') => {
    window.localStorage.setItem('USERNAME', newName);
    setName(newName);
  };

  return (
    <UserContext.Provider value={{ name, changeName, handleCartOpen, handleCartClose, isOpen }}>
      {children}
    </UserContext.Provider>
  );
};

const useUserContext = () => {
  const userContext = useContext(UserContext);
  return userContext;
};

export { useUserContext, UserContextProvider, UserContext };
