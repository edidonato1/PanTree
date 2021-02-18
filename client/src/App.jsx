import { useEffect, useState } from 'react';
import { Route, Switch } from 'react-router-dom';
import LoginContainer from './containers/LoginContainer';

function App() {


  return (
    <Switch >
      <Route path="/">
        <LoginContainer />
      </Route>
    </Switch>
  );
}

export default App;
