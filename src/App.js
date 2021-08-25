import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Registro from './components/Registro';
import Notes from './components/Notes';
import Error404 from './components/Error404';


function App() {
  return (
    
    <Router>
    <Switch>
          <Route exact path="/" component={Registro} />
          <Route exact path="/notes" component={Notes} />
          <Route path="*" component={Error404} />
        </Switch>
    </Router>
  );
}

export default App;
