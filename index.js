// DOM elements:

const  aliceRecipes= document.getElementById("alice-recipes");
const ingredientsAliceLikes = document.getElementById("ingredients-Alice-likes");
const ingredientsAliceDislikes = document.getElementById("ingredients-Alice-dislikes");
const suitableRecipes = document.getElementById("suitable-recipes");
const recipesList = document.getElementById("recipes-list");

/* -----------------------------------------------------------------------------------------------------------*/

// Guest and her preferences:

const guest = {
  name: 'Alice',
  loves: ['avocado', 'quinoa', 'kale'],
  dislikes: ['pork', 'chicken', 'turkey', 'beef', 'dairy', 'butter', 'eggs', 'gluten', 'nuts', 'soy', 'flour'],
};

// List of Christmas-themed recipes with their ingredients:

const recipes = [
  {
    name: 'Honey-Glazed Ham',
    ingredients: ['pork', 'honey', 'brown sugar', 'cloves', 'butter'],
  },
  {
    name: 'Roast Turkey with Stuffing',
    ingredients: ['turkey', 'bread crumbs', 'gluten', 'celery', 'onions', 'tomatoes', 'butter'],
  },
  {
    name: 'Classic Beef Wellington',
    ingredients: ['beef', 'mushrooms', 'puff pastry', 'eggs'],
  },
  {
    name: 'Gingerbread Cookies',
    ingredients: ['flour', 'molasses', 'ginger', 'cinnamon', 'butter', 'eggs'],
  },
  {
    name: 'Vegan Stuffed Peppers',
    ingredients: ['bell peppers', 'quinoa', 'black beans', 'corn', 'tomato sauce', 'kale'],
  },
  {
    name: 'Roasted Brussels Sprouts',
    ingredients: ['brussels sprouts', 'olive oil', 'garlic'],
  },
  {
    name: 'Vegan Avocado Chocolate Mousse',
    ingredients: ['avocado', 'cocoa powder', 'maple syrup', 'flour'],
  },
  {
    name: 'Vegan Christmas Cookies',
    ingredients: ['oats', 'maple syrup', 'vanilla extract'],
  },
  {
    name: 'Quinoa Salad',
    ingredients: ['kale', 'quinoa', 'cranberries', 'lemon juice'],
  },
  {
    name: 'Vegan Lentil Loaf',
    ingredients: ['lentils', 'carrots', 'celery', 'onions', 'tomato paste'],
  },
];

/* -----------------------------------------------------------------------------------------------------------*/

const recipesForAlice = recipes.filter(recipe => {

  // Check at least one ingredient Alice likes:

  const aliceLikesIngredient = recipe.ingredients.some(ingredient => guest.loves.includes(ingredient));

  // Find and filter ingredients Alice dislikes:

  const aliceDislikesIngredient = recipe.ingredients.every(ingredient => !guest.dislikes.includes(ingredient));

  // Both conditions must be true:

  return aliceLikesIngredient && aliceDislikesIngredient; // new array just with ingredients Alice likes and not dislikes
});

/* -----------------------------------------------------------------------------------------------------------*/

// Generate the list of loved ingredients:

let lovedIngredients = guest.loves.map(ingredient => `
  <li class="loves">${ingredient}</li>
`).join('');

// Update the DOM with the generated HTML:

ingredientsAliceLikes.innerHTML = lovedIngredients;

let hatedIngredients = guest.dislikes.map(ingredient => `
  <li class="hates">${ingredient}</li>
`).join('');

// Update the DOM with the generated HTML:

ingredientsAliceDislikes.innerHTML = hatedIngredients;

let suitableRecipesForAlice = "";

/* -----------------------------------------------------------------------------------------------------------*/

// add event listener to render Alice suitable recipes:

recipesList.addEventListener("click", function() {
  for (let recipe of recipesForAlice) {
    suitableRecipesForAlice += `
    <div>
      <p class="recipes-Alice">Recipes Name: ${recipe.name}</p>
      <p class="recipes-Alice">Ingredients: ${recipe.ingredients.join(" ")}</p>;
    </div>`

  }
  suitableRecipes.innerHTML = suitableRecipesForAlice;
  recipesList.disabled="true";
})

/* -----------------------------------------------------------------------------------------------------------*/


