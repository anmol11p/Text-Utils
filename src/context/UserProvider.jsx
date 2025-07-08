import React, { createContext, useEffect, useState } from "react";

export const UserContext = createContext();

const UserProvider = ({ children }) => {
  const [mode, setMode] = useState(() => localStorage.getItem("mode"));

  useEffect(() => {
    const stored = localStorage.getItem("mode");
    if (stored) {
      setMode(stored);
    }
  }, []);

  return (
    <UserContext.Provider value={{ mode, setMode }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserProvider;
