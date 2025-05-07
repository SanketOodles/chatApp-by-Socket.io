import React, { createContext, useContext, useState } from 'react';
import Cookies from 'js-cookie';

const AppContext = createContext();

export const AuthProvider = ({ children }) => {
  const initialState = Cookies.get("jwt") || localStorage.getItem("messanger");
  
  let parsedUser;
  try {
    parsedUser = initialState ? JSON.parse(initialState) : undefined;
  } catch {
    parsedUser = undefined;
  }

  const [authUser, setAuthUser] = useState(parsedUser);

  return (
    <AppContext.Provider value={[ authUser, setAuthUser ]}>
      {children}
    </AppContext.Provider>
  );
};

// Custom hook to access context
export const useAuth = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};
