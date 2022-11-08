import { recipes } from "./data.js";

// Make a list of recipes from this array!
// For each recipe in the array,
// display its title as an <h2> and
// list its ingredients in a <ul>.

export default function RecipeList() {
  const recipeList = recipes.map((item) => {
    return (
      <div key={item.id}>
        <h2>{item.name}</h2>
        <ul>
          {/* List component
      <RecipeIngredients */}
          <li>list of ingredients</li>
          <li>{item.ingredients}</li>
        </ul>
      </div>
    );
  });

  return (
    <div>
      <h1>Recipes</h1>
      {recipeList}
    </div>
  );
}
