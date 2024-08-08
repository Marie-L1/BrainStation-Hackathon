//Create a function to create a tag, name its class and add inner text to it
function generateElement (tag,  className, text){
    let element= document.createElement(tag);
    element.classList.add(className);
    element.innerText= text;
    return element;
}

let body=document.querySelector('.body');
//Create tags inside article bodt tag
// //Button
// bodyButton=generateElement('button','body__btn', 'Click me!' );
// body.appendChild(bodyButton);

//body-food
bodyFood=generateElement('section','body__food', '' );
body.appendChild(bodyFood);

//bodybody__food-recipe
bodyFoodRecipe=generateElement('div','body__food-recipe', '' );
bodyFood.appendChild(bodyFoodRecipe);

//body__food-nutrition
bodyFoodNutrition=generateElement('div','body__food-nutrition', '' );
bodyFood.appendChild(bodyFoodNutrition);

//body__food-ingredients
bodyFoodIngredients=generateElement('div','body__food-ingredients', '' );
bodyFood.appendChild(bodyFoodIngredients);



