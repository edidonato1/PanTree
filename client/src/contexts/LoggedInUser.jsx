import { useState, createContext } from 'react';

const LoggedInUserContext = createContext();

function LoggedInUserProvider(props) {
  const [loggedInUser, setLoggedInUser] = useState({});

  return (
    <LoggedInUserContext.Provider value={[loggedInUser, setLoggedInUser]} >
      {props.children}
    </LoggedInUserContext.Provider>
  )
}

export {
  LoggedInUserContext,
  LoggedInUserProvider
}
