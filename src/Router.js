import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import App from "./App";
import RecipeShow from "./RecipeShow";

function Router() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={App} />
        <Route path="/recipe/:recipeid" component={RecipeShow} />
      </Switch>
    </BrowserRouter>
  );
}

export default Router;
