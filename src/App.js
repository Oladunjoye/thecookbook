import React from "react";
import RecipeApp from "./RecipeApp";
import "./styles.css";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom"
import Home from './Home/Home'
import Navbar from "./Navbar"


function App() {
  return (
    <Router>
    <div className="App">
    <Navbar/>
    <Switch>
    <Route exact path = '/' component ={Home}/>
    <Route exact path = '/recipes' component ={RecipeApp} />
    </Switch>
   
    </div>
    </Router>
  );
}

export default App;
