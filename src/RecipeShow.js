import React from "react";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";

function RecipeShow(props) {
  const { recipe } = props.location.state;
  return (
    <div>
      <Navbar style={{ textAlign: "center" }} />
      <div className="container">
        <div className="active-recipe">
          <img
            className="active-recipe__img"
            src={recipe.image_url}
            alt={recipe.title}
          />
          <h3 className="active-recipe__title">{recipe.title}</h3>
          <h4 className="active-recipe__publisher">
            Publisher:<span>{recipe.publisher}</span>
          </h4>
          <p className="active-recipe__website">
            Website:{" "}
            <span>
              <a href={recipe.publisher_url}>{recipe.publisher_url}</a>
            </span>
          </p>
          <button className="active-recipe__button">
            <Link to="/">Go Home</Link>
          </button>
        </div>
      </div>
    </div>
  );
}

export default RecipeShow;
