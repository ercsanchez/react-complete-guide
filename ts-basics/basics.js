// Primitives: number, string, boolean
// More complex types: arrays, objects
// Function types, parameters
var __spreadArray = (this && this.__spreadArray) || function (to, from) {
    for (var i = 0, il = from.length, j = to.length; i < il; i++, j++)
        to[j] = from[i];
    return to;
};
// Primitives
var age;
age = 12;
var userName;
userName = "Max";
var isInstructor;
isInstructor = true;
// More complex types
var hobbies;
hobbies = ["Sports", "Cooking"];
// object type
var person;
person = {
    name: "Max",
    age: 32
};
// error
// person = {
//   isEmployee: true
// };
// combining types: array of objects
var people;
// Type inference
var course = "React - The Complete Guide";
course = 12341;
// Functions & types
// return value type inference
function add(a, b) {
    return a + b;
}
// explicit return type
// function add(a: number, b: number): number {
//   return a + b;
// }
function printOutput(value) {
    console.log(value);
}
// Generics
//helper function
function insertAtBeginning(array, value) {
    // benefit of ts lost due to any value in array
    var newArray = __spreadArray([value], array);
    return newArray;
}
var demoArray = [1, 2, 3];
// updatedArray infers any value in array
var updatedArray = insertAtBeginning(demoArray, -1); // -> [-1, 1, 2, 3]
// updatedArray[0].split(""); // ts wont show any warnings but this will produce a runtime error coz cant call split on numbers array
// generic type: T | T is a name convention and placeholder | T could be any alphabetical char
function genericInsertAtBeginning(array, value) {
    var newArray = __spreadArray([value], array);
    return newArray;
}
var updatedArray2 = genericInsertAtBeginning(demoArray, -1); // -> [-1, 1, 2, 3]
var stringArray = genericInsertAtBeginning(["a", "b", "c"], "d");
// updatedArray2[0].split(""); // ts shows error
stringArray[0].split(""); // no error
// sometimes ts cant infer the type
var stringArray2 = genericInsertAtBeginning(["a", "b", "c"], "d");
console.log(stringArray2);
