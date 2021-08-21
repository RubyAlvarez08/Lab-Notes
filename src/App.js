import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Registro from './components/Registro';


function App() {
  return (
    <Router>
    <Switch>
          <Route path="/"> <Registro /> </Route>
          <Route path=""></Route>
          <Route path=""> </Route>
        </Switch>
    </Router>
  );
}

export default App;
