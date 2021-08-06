// Primitives: number, string, boolean
// More complex types: arrays, objects
// Function types, parameters

// Primitives

let age: number;

age = 12;

let userName: string;

userName = "Max";

let isInstructor: boolean;

isInstructor = true;

// More complex types

let hobbies: string[];

hobbies = ["Sports", "Cooking"];

// type alias/definition | not an obj definition
type Person = {
  name: string;
  age: number;
};

// object type
let person: Person;

person = {
  name: "Max",
  age: 32,
};

// error
// person = {
//   isEmployee: true
// };

// combining types: array of objects
let people: Person[];

// Type inference

let course: string | number = "React - The Complete Guide";

course = 12341;
