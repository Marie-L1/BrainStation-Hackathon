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
    
    if (recipes){
    const recipeListItem = document.createElement("li"); // li
    recipeListItem.classList.add("recipe-list__item")
    
    console.log(recipes.recipe)

    const recipeTitle = document.createElement("h3");
    recipeTitle.classList.add("recipe-list__title")
    recipeTitle.innerText = recipes.recipe.label;
    recipeListItem.appendChild(recipeTitle);

    const recipeImg = document.createElement("img");
    recipeImg.classList.add("recipe-list__img")
    recipeImg.src = recipes.recipe.image;
    recipeListItem.appendChild(recipeImg);

    const recipeIngredients = document.createElement("li");
    recipeIngredients.classList.add("recipe-list__ingredients")
    recipes.recipe.ingredientLines.forEach((ingredient) => {
        if (ingredient){
            const ingredientItem = document.createElement("li")
            ingredientItem.innerText = ingredient;
            recipeIngredients.appendChild(ingredientItem)
        }
    })
    recipeListItem.appendChild(recipeIngredients);

    const recipeInstructions = document.createElement("p");
    recipeInstructions.classList.add("recipe-list__instructions")
    recipeInstructions.innerText = recipes.recipe.instructions;
    recipeListItem.appendChild(recipeInstructions)
    
    const cautions = document.createElement("li");
    cautions.classList.add("recipe-list__cautions")
    cautions.innerText = "Cautions:\t" + recipes.recipe.cautions;
    recipeListItem.appendChild(cautions);

    const calories = document.createElement("li");
    calories.classList.add("recipe-list__calories")
    calories.innerText = "Calories:\t" + Math.ceil(recipes.recipe.calories) + " kcal";
    recipeListItem.appendChild(calories);

    const mealType = document.createElement("li");
    mealType.classList.add("recipe-list__mealType")
    mealType.innerText = "Meal Type:\t" + recipes.recipe.mealType;
    recipeListItem.appendChild(mealType);

    const cuisineType = document.createElement("li");
    cuisineType.classList.add("recipe-list__cuisineType")
    cuisineType.innerText = "Cuisine Type:\t" + recipes.recipe.cuisineType;
    recipeListItem.appendChild(cuisineType);

    console.log(recipes.recipe.image)

    recipeListElements.appendChild(recipeListItem); // append to ul
  
    }
    
}

generateElement(query);

// Get user input
const formRef = document.getElementById("form_container");
formRef.addEventListener("submit", handleSubmit);
