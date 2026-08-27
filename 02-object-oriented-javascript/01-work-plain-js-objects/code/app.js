// JavaScript Objects recap

const pet = {
  species: "Cat",
  name: "Doraemon",
  age: 60,
};
console.log(pet);

// Verify primitive data type
console.log(typeof pet);

// Access a value using the dot notation
console.log(pet.name);

// Access a value using bracket notation
const key = "species";
console.log(pet[key]);
console.log(pet["species"]);

// Acessing a non-existent property ALWAYS returns "undefined"
console.log(pet.voice);
console.log(pet["voice"]);

// Keys will ALWAYS be stringified
pet[true] = "Hello!"; // Equivalent to pet["true"] = "Hello!";
console.log(pet);
console.log(pet.true);

// A function stored as a value in an object
pet.sound = function () {
  return "Meow!";
};

console.log(pet);
console.log(pet.sound());
