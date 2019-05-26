import React, { Component } from "react";
import RecipeItem from "./RecipeItem";
import RecipeInput from "./RecipeInput";

import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
const APIKEY = "a920ed2e5972ff98c19467e64e10cab9";

class RecipeApp extends Component {
  state = {
    isLoading: true,
    recipes: []
  };

  getRecipes = async e => {
    e.preventDefault();
    const recipeInput = (e.target.elements[0].value).trim().split(' ').join('');
   
    try {
      const api_call = await fetch(
        `https://cors-anywhere.herokuapp.com/https://www.food2fork.com/api/search?key=${APIKEY}&q=${recipeInput}&count=12`
      );
      const data = await api_call.json();
      

      this.setState({ 
        recipes: data.recipes,
        isLoading: false
       });
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
      

        <RecipeInput getRecipes={this.getRecipes} />
        <RecipeItem recipes={this.state.recipes} isLoading = {this.state.isLoading}/>
      </div>
    );
  }
}

export default RecipeApp;
