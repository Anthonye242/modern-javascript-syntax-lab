//1
const nums = [13, 87, 2, 89, 12, 4, 90, 63];

const doubledNums = nums.map((currentElement) => {
  return currentElement * 2;
});

console.log(doubledNums); 

// Given the following array, use destructuring to pull out the first and second values and place them into variables. Log both variables.
//2
const pizzaTops = ['Pineapple', 'Olives', 'Anchovies'];

const [firstTopping, secondTopping] = pizzaTops;

console.log(firstTopping);  
console.log(secondTopping); 

// Given the following object, use destructuring to create variables make and model that will hold the respective values.
//3
const car = {
    make: 'Audi',
    model: 'q5',
  };
  
  const { make, model } = car;
  
  console.log(make);  
  console.log(model); 

//4
const pizzaToppings = ['Pineapple', 'Olives', 'Anchovies'];

const controversialPizzaToppings = [...pizzaToppings];

console.log(controversialPizzaToppings);

//5
const Car = {
    make: 'Audi',
    model: 'q5',
  };
  
  // Copy the properties of car:
  const myCar = { ...Car };
  
  // Update the model property of myCar:
  myCar.model = 'q7';
  
  console.log('Original: ', Car);   
  console.log('Clone: ', myCar);   

//6
// Define the userProfile object
const userProfile = {};

// Define a variable named propertyName and assign a string to it
const propertyName = 'username';

// Use propertyName as a dynamic key in userProfile, assigning a relevant value
userProfile[propertyName] = 'john_doe';

console.log(userProfile); 

//8
function describeAnimal(noun = 'cat', adjective = 'white') {
    console.log(`The ${noun} is ${adjective}.`);
  }
  
  // Testing the function with default values
  describeAnimal(); // Logs: 'The cat is white.'
  
  // Testing the function with supplied arguments
  describeAnimal('dog', 'brown'); 
  describeAnimal('bird', 'blue'); 

//9
let pizza = 'tasty';
if (pizza === 'tasty') {
  console.log('yum');
} else {
  console.log('yuck');
}

console.log(pizza === 'tasty' ? 'yum' : 'yuck');

//10
const localLangConfig = null;  // Change to 'es', 'fr', etc., or keep it null
const LANG = localLangConfig || 'en';

console.log('Language setting:', LANG);

const userSavedTheme = null; // Change to 'dark', 'contrast', etc., or keep it null

const USER_THEME = userSavedTheme || 'light';
console.log('User theme setting:', USER_THEME);

//11
const adventurer = {
    name: 'Alice',
  };
  
  // Use optional chaining to safely access cat.age
  let catAge = adventurer.cat?.age;
  
  console.log(catAge); // undefined
  