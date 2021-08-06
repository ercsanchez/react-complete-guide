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

// Functions & types

// return value type inference
function add(a: number, b: number) {
  return a + b;
}

// explicit return type
// function add(a: number, b: number): number {
//   return a + b;
// }

function printOutput(value: any) {
  console.log(value);
}

// Generics

//helper function
function insertAtBeginning(array: any[], value: any) {
  // benefit of ts lost due to any value in array
  const newArray = [value, ...array];
  return newArray;
}

const demoArray = [1, 2, 3];

// updatedArray infers any value in array
const updatedArray = insertAtBeginning(demoArray, -1); // -> [-1, 1, 2, 3]

updatedArray[0].split(""); // ts wont show any warnings but this will produce a runtime error coz cant call split on numbers array

// generic type: T | T is a name convention and placeholder | T could be any alphabetical char
function genericInsertAtBeginning<T>(array: T[], value: T) {
  const newArray = [value, ...array];
  return newArray;
}

const updatedArray2 = genericInsertAtBeginning(demoArray, -1); // -> [-1, 1, 2, 3]

const stringArray = genericInsertAtBeginning(["a", "b", "c"], "d");

updatedArray2[0].split(""); // ts shows error
stringArray[0].split(""); // no error

// sometimes ts cant infer the type | explicit setting of type
const stringArray2 = genericInsertAtBeginning<string>(["a", "b", "c"], "d");

// these are the same
let numbers: number[] = [1, 2, 3]; // syntactic sugar
let numbers2: Array<number> = [1, 2, 3]; // Arrays are of type Array
