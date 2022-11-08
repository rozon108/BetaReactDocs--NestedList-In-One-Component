import { recipes } from "./data.js";

// Make a list of recipes from this array!
// For each recipe in the array,
// display its title as an <h2> and
// list its ingredients in a <ul>.

export default function RecipeList() {
  return (
    <div>
      <h1>Recipes</h1>
      {recipes.map((item) => (
        <div key={item.id}>
          <h2>{item.name}</h2>

          <ul>
            {/* List component
      <RecipeIngredients */}
            {item.ingredients.map((x) => (
              <li>{x}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}
