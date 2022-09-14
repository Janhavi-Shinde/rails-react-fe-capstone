import './App.css';
import React from 'react';
import Form from './Form';
import NavBar from './NavBar';
import Spheres from './Spheres';
import Goals from './Goals';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';


function App() {  

  return (
    <Router>
      <NavBar />
      
       
    <Switch>
      <Route exact path="/">
          <Form/>
      </Route>

      <Route path="/Spheres">
          <Spheres/>
      </Route>

      <Route path="/Goals">
          <Goals/>
      </Route>

    </Switch>

      
      
      
   </Router>
  );
}

export default App;
