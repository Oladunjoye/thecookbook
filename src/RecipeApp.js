import React, { Component } from "react";
import RecipeItem from "./RecipeItem";
import RecipeInput from "./RecipeInput";
import Navbar from "./Navbar";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
const APIKEY = "a920ed2e5972ff98c19467e64e10cab9";

class RecipeApp extends Component {
  state = {
    recipes: []
  };

  getRecipes = async e => {
    e.preventDefault();
    const recipeInput = e.target.elements[0].value;
    try {
      const api_call = await fetch(
        `https://cors-anywhere.herokuapp.com/https://www.food2fork.com/api/search?key=${APIKEY}&q=${recipeInput}&count=12`
      );
      const data = await api_call.json();
      // if (data.recipes === undefined || data.recipes.length === 0) {
      //   this.setState({ error: "Unable to find recipes" });
      // }

      this.setState({ recipes: data.recipes });
    } catch (error) {
      console.log(error);
    }
  };

  componentDidMount = () => {
    const recipeStr = localStorage.getItem("recipes");
    const recipes = JSON.parse(recipeStr);
    this.setState({ recipes });
  };

  componentDidUpdate = () => {
    const recipes = JSON.stringify(this.state.recipes);
    localStorage.setItem("recipes", recipes);
  };
  render() {
    return (
      <div className="App">
        <Navbar />

        <RecipeInput getRecipes={this.getRecipes} />
        <RecipeItem recipes={this.state.recipes} />
      </div>
    );
  }
}

export default RecipeApp;
