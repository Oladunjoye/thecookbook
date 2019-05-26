import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import App from "./App";
import RecipeShow from "./RecipeShow";
import Home from './Home/Home'
import Navbar from "./Navbar";
import RecipeApp from "./RecipeApp";

function Router() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/recipes" exact component={RecipeApp} />
        <Route path="/recipe/:recipeid" component={RecipeShow} />
      </Switch>
    </BrowserRouter>
  );
}

export default Router;
