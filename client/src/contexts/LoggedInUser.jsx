import { useContext, createContext, useReducer, useState } from 'react';

const LoggedInUserContext = createContext();

function LoggedInUserProvider({ children }) {
  const [loggedInUser, setLoggedInUser] = useState({});

  return (
    <LoggedInUserContext.Provider value={[loggedInUser, setLoggedInUser]} >
      {children}
    </LoggedInUserContext.Provider>
  );
}

export {
  LoggedInUserContext,
  LoggedInUserProvider,
};
