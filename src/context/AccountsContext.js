import React, { createContext, useState } from 'react';

export const AccountsContext = createContext();

export const AccountsProvider = ({ children }) => {
  const [contas, setContas] = useState([]);

  return (
    <AccountsContext.Provider value={{ contas, setContas }}>
      {children}
    </AccountsContext.Provider>
  );
};