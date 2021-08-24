import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Registro from './components/Registro';
import Notes from './components/Notes';


function App() {
  return (
    <Router>
    <Switch>
          <Route path="/" component={Registro} />
          <Route path="/notes" component={Notes} />
        {/*   <Route path=""> </Route> */}
        </Switch>
    </Router>
  );
}

export default App;
