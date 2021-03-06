// # Destructuring

// **Instructions**
// #### 1. Array Destructuring
// * Declare the variables `fruit`, `vegetable`, `food`.
// Assign the following values to the variables respectively: "banana", "cucumber", "bread", "cakes", "pizza" (assign the "bread",
// "cakes" and "pizza" to `food`).
// Use array destructuring to complete this task.

// let fruit = ["banana"];
// let vegetable = [ "cucumber" ];
// let food = ["bread", "cakes", "pizza"];
// let fruit, vegetable, food;
const [fruit, vegetable, ...food] = [
  "banana",
  "cucumber",
  "bread",
  "cakes",
  "pizza",
];
console.log(fruit, vegetable, food);

// #### 2.Object Destructuring
// * Create an object which contains a few key value pairs of human names and halloween costumes e.g. `fran: "witch"`.
// Assign each value to a variable. Print out the values.

let fran, simon, martina;
({ fran, simon, martina } = {
  fran: "Witch",
  simon: "Wizard",
  martina: "Ghost",
});
console.log(fran, simon, martina);

// #### 3. Parameters: Object Destructuring
// * Create an object with band/musician details e.g. name of the band/musician, greatest hit, nationality, genre etc.
// * Then, create a function to print all of the band/musician's data.
// * Example
// ```javascript
// `Regina Spektor is a American-Russian singer/songwriter and pianist.
// The musician sings indie-pop and their greatest hit is "Us"`.
// ```

const musicians = {
  band: "Abba",
  musician: "Bjoern",
  greatestHit: "Super Trouper",
  nationality: "Swedish",
  genre: "Pop",
};

const displayMusicInfo = ({
  band,
  musician,
  greatestHit,
  nationality,
  genre,
}) => {
  console.log(
    `${musician} is a famous ${nationality} singer of the ${genre} ${band} and his greatest hit was ${greatestHit}.`
  );
};

displayMusicInfo(musicians);
