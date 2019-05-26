import React from "react";
import { Link } from "react-router-dom";
// import registerServiceWorker from "./registerServceWorker";

function RecipeItem(props) {
  const { recipes,  isLoading } = props;
  let displayRecipe;
if(!recipes){
  displayRecipe =  <div> No recipe found</div>
}
 else{ 
   displayRecipe = recipes.map(recipe => {
 
    return (
      <div
        key={recipe.recipe_id}
        className="col-md-4 "
        style={{ marginBottom: "2rem" }}
      >
        <div className="recipes__box">
          <img
            className="recipe__box-img"
            src={recipe.image_url}
            alt={recipe.title}
          />
          <div className="recipe__text">
            <h5 className="recipes__title">
              {recipe.title.length < 20
                ? recipe.title
                : `${recipe.title.substring(0, 25)}...`}
            </h5>
            <p className="recipes__subtitle">
              Publisher: <span>{recipe.publisher}</span>
            </p>
          </div>
          <button className="recipe_buttons">
            <Link
              to={{
                pathname: `/recipe/${recipe.recipe_id}`,
                state: { recipe: recipe }
              }}
            >
              View Recipe
            </Link>
          </button>
        </div>
      </div>
    );
    
  });

  if(!isLoading){
    displayRecipe =  displayRecipe.length > 1 ? displayRecipe : <div>  Search not found, Try another recipe</div> 
  }
  else{
   
    displayRecipe  = <p>Loading ...</p>
  }

}
  return (

    <div className="container">
      <div className="row">
        { displayRecipe}
       
      </div>
    </div>
  );
}

export default RecipeItem;
