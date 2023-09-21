//You are given an array of numbers. Your task is to use iteration methods to filter and transform this array.

const numbers = [10, 13, 20, 25, 38, 35, 40];

/*****************************************************************
Part 1: Filtering

Write code to perform the following tasks using the filter method:
Q1) Create a new array containing numbers that are greater than or equal 
to 25.
Q2) Create a new array containing numbers that are divisible by 5.
******************************************************************/
function greaterThan25(arr) {
  return arr >= 25;
}
numbers.filter(greaterThan25);
const grtThan25 = numbers.filter(greaterThan25);
console.log(grtThan25);

function divByFive(arr) {
  return arr % 5 == 0;
}
numbers.filter(divByFive);
const divByFi = numbers.filter(divByFive);
console.log(divByFi);

/*****************************************************************
Part 2: Mapping

Write code to perform the following tasks using the map method:

Q3) Create a new array that contains each number squared.
Q4) Create a new array that contains each number multiplied by 2.
******************************************************************/
// const squaredNumber = number

function squareIt(arr) {
  return arr * arr;
}
const squaredNumber = numbers.map(squareIt);
console.log(squaredNumber);

function multiplyByTwo(arr) {
  return arr * 2;
}
const multipliedNumber = numbers.map(multiplyByTwo);
console.log(multipliedNumber);

/*****************************************************************
Part 3: Combining Filtering and Mapping

Combine the filter and map methods to perform the following tasks:

Q5) Filter the numbers that are greater than or equal to 20 and then square each of them.
Q6) Filter the numbers that are divisible by 5 and then multiply each of them by 3.
******************************************************************/

//always create a function (){}
// before creating a const (){}
// .filter and .map always should have return

function greaterThan20(arr) {
  return arr >= 20;
}
const newNumber = numbers.filter(greaterThan20).map(squareIt);
console.log(newNumber);

function multiplyByThree(arr) {
  return arr * 3;
}
const newMultipliedNum = numbers.filter(divByFive).map(multiplyByThree);
console.log(newMultipliedNum);
