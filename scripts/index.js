import RecipeApi from "./recipeApi.js";

const recipeApi = new RecipeApi("5967ec3c5472de181aa932189dc4ed43");
const recipeListElements = document.querySelector(".recipe-list");

let query = ""


function handleSubmit(event){
    event.preventDefault();
    const query = event.target.q.value;
    generateElement(query)
}

//Create a function to create a tag, name its class and add inner text to it
async function generateElement(query){
    console.log(query)
    const recipe = await recipeApi.getRecipe(query);
    const recipeArray = recipe.hits

    recipeListElements.innerText = "";  // clear out appended html before looping

    const recipes = recipeArray[Math.floor(Math.random() * recipeArray.length)];
    
    console.log(recipes.recipe.label)
    const recipeListItem = document.createElement("li"); // li
    recipeListItem.classList.add("recipe-list__item")
    

    const recipeTitle = document.createElement("h3");
    recipeTitle.classList.add("recipe-list__title")
    recipeTitle.innerText = recipes.recipe.label;
    recipeListItem.appendChild(recipeTitle);

    const recipeIngredients = document.createElement("p");
    recipeIngredients.classList.add("recipe-list__ingredients")
    recipeIngredients.innerText = recipes.recipe.ingredientLines;
    recipeListItem.appendChild(recipeIngredients);

    const recipeInstructions = document.createElement("p");
    recipeInstructions.classList.add("recipe-list__intructions")
    recipeInstructions.innerText = recipes.instructions;
    recipeListItem.appendChild(recipeInstructions);

    recipeListElements.appendChild(recipeListItem); // append to ul
  
}

generateElement(query);

// Get user input
const formRef = document.getElementById("form_container");
formRef.addEventListener("submit", handleSubmit);



  
