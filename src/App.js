import { recipes } from "./data.js";

// Make a list of recipes from this array!
// For each recipe in the array,
// display its title as an <h2> and
// list its ingredients in a <ul>.
function RecipeComponent({ id, name, ingredients }) {
  return (
    <div>
      <h2>{name}</h2>

      <ul>
        {/* List component
<RecipeIngredients */}
        {ingredients.map((x) => (
          <li>{x}</li>
        ))}
      </ul>
    </div>
  );
}

export default function RecipeList() {
  return (
    <div>
      <h1>Recipes</h1>
      {recipes.map((item) => (
        <RecipeComponent {...item} key={item.id} />
      ))}
    </div>
  );
}
