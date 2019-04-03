import React from "react";

function RecipeInput(props) {
  const { getRecipes } = props;
  return (
    <form
      name="recipeName"
      onSubmit={getRecipes}
      style={{ marginBottom: "2rem" }}
    >
      <input className="form__input" type="text" />
      <button className="form__button" type="submit">
        Search
      </button>
    </form>
  );
}

export default RecipeInput;
