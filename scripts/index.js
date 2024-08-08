import RecipeApi from "./recipeApi.js";

const recipeApi = new RecipeApi("5967ec3c5472de181aa932189dc4ed43");
const recipeListElements = document.querySelector(".recipe-list");



function handleSubmit(event){
    event.preventDefault();
    const query = event.target.q.value;
    console.log(query)
    generateElement(query)
}

//Create a function to create a tag, name its class and add inner text to it
async function generateElement(query){
    console.log(query)
    const recipe = await recipeApi.getRecipe();
    console.log(recipe);
    
    recipeListElements.innerText = "";  // clear out appended html before looping

    recipe.forEach((recipes) =>{
        const recipeListItem = document.createElement("li"); // li
        recipeListItem.classList.add("recipe-list__item")

        const recipeTitle = document.createElement("h3");
        recipeListItem.classList.add("recipe-list__title")
        recipeTitle.innerText = recipes.label;
        recipeTitle.appendChild(recipeTitle);

        const recipeIngredients = document.createElement("p");
        recipeListItem.classList.add("recipe-list__ingredients")
        recipeIngredients.innerText = recipes.ingredientLines;
        recipeIngredients.appendChild(recipeIngredients);

        const recipeInstructions = document.createElement("p");
        recipeListItem.classList.add("recipe-list__intructions")
        recipeInstructions.innerText = recipes.instructions;
        recipeInstructions.appendChild(recipeInstructions);

        recipeListElements.appendChild(recipeListItem); // append to ul
    });
}

generateElement(query);

// Get user input
const formRef = document.getElementById("form_container");
formRef.addEventListener("submit", handleSubmit);






// //Chat gpt
// import RecipeApi from "./recipeApi.js";

// const recipeApi = new RecipeApi("5967ec3c5472de181aa932189dc4ed43");

// const recipeListElements = document.querySelector(".recipe-list");

// function handleSubmit(event) {
//     event.preventDefault();
//     const query = event.target.q.value;
//     generateElement(query);
// }

// // Create a function to create a tag, name its class and add inner text to it
// async function generateElement(query) {
//     console.log(query);
//     const data = await recipeApi.getRecipe(query); // pass query to the API call
//     const recipes = data.hits.map(hit => hit.recipe); // Extract the recipes array
//     console.log(recipes);

//     if (!Array.isArray(recipes)) {
//         console.error('Expected an array but got:', recipes);
//         return;
//     }

//     recipeListElements.innerText = "";  // clear out appended html before looping

//     recipes.forEach((recipe) => {
//         const recipeListItem = document.createElement("li"); // li
//         recipeListItem.classList.add("recipe-list__item");

//         const recipeTitle = document.createElement("h3");
//         recipeTitle.innerText = recipe.label;
//         recipeListItem.appendChild(recipeTitle);

//         const recipeIngredients = document.createElement("p");
//         recipeIngredients.innerText = recipe.ingredientLines.join(', '); // join ingredients array
//         recipeListItem.appendChild(recipeIngredients);

//         const recipeInstructions = document.createElement("p");
//         recipeInstructions.innerText = recipe.instructions || "Instructions not available."; // Ensure instructions are handled
//         recipeListItem.appendChild(recipeInstructions);

//         recipeListElements.appendChild(recipeListItem); // append to ul
//     });
// }

// document.querySelector("form").addEventListener("submit", handleSubmit); // Make sure you have a form element

// generateElement("italian"); // Example initial call with "italian" query

// const submitButton = document.querySelector(".submit");

// submitButton.addEventListener("submit", function(event){
//     //Prevent the web page from reloading after click on comment button
//     event.preventDefault();

  
