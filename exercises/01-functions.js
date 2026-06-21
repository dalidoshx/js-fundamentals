// TODO: 

// 1. Write a function "add" that takes two numbers and returns their sum.
// 2. Write a function "square" that takes one number and returns it multiplied by itself.
// 3. Write a function "greet" that takes a name (string) and returns "Hello, <name>!"

// Below your three functions: call each one, store each result in a variable, and console.log each result.

function add(num1, num2) {
  return num1 + num2;
}

function square(num) {
  return num * num;
}

function greet(name) {
  return `Hello, ${name}!`;
}

const sumResult = add(5, 10);
const squareResult = square(4);
const greetResult = greet("Adrian");

console.log(sumResult);
console.log(squareResult);
console.log(greetResult);