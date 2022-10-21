console.log("Hello there I'm from the console")

/* Variables */
// var x = 'Hello JS'; // Loosely typed - No type
// typeof x;

/*
*
*   In Java
*   String s = ""; // Type is strong
*
*   In JS
*   var x = 10;
*   x = 'Ten';
*   x = true; // This is Dynamic Typing
*
*   There are three ways to create variables
*
*   1. var
*   2. let
*   3. const
*
*
*   Case Sensitive
*   The first letter should be a-z, A-Z, $ or _
*
* */

/* Troubles we have to face by creating variables
*
*   1
*   var myState = false;
*   var myState = true; // Legal ,Can duplicate
*
*   2
*   var myTp = 119
*   {
*       console.log(myTp) // Legal
*       var myAge = 100;
*   }
*   console.log(myAge); // This is also legal
*
*   console.log(newVar)  // No Error because the x defined bellow (Only with var keyword)
*   newVar = 10
*
*
*   // Hoisting - this is the special feature in var
*
*   console.log(x)
*   newVar = 10
*   console.log(x)  // No Error because the x defined bellow (Only with var keyword)
*
*
*
* ***************************************************** let ******************************************************
*
*   let myName = 'Dasun'
*   let myName = 'Nimal' // Error
*   console.log(myName)
*
*   {
*       let myAge = 10;
*   }
*
*   console.log(myAge) // Error  - Scope is considered
*
*   let also support for dynamic supporting
*
*   Not Supporting for Hoisting
*
*
*
* ***************************************************** const ******************************************************
*
*   const name = 'Dasun'
*   name = 'Nimal' // Error - can't change a value of a variable, if use const
*
*
* **************************************************  Data Types in JS  ********************************************
*
*  *********** Primitive Data Types **************
*
*       String
*       Number
*       Boolean
*       Undefined
*       BigInt (Newly Introduced)
*
*           --- String ---
*               var name = "Hello";
*               var address = 'Sri Lanka'; // Can use single quot or double
*
*               - String Related Methods -
*                   length
*                   toUpperCase
*                   toLowerCase
*                   trimLeft  - remove white spaces in left
*                   trimRight
*                   trim
*                   split - return an array with by separating the value that pass as the parameter
*                   charAt
*                   charCodeAt - Ascii code
*                   indexOf
*                   substring
*                   substr
*
*
*
*           --- Number ---
*               decimal
*               binary
*               octal
*               hexadecimal
*               floating point
*
*               var number = 10;
*               var number = ob1010;
*               var number = O12;
*               var number = 0xA;
*               var number = 10.5;
*
*               These numbers referred by number type
*
*
*
*           --- BigInt ---
*
*               If we use a number greater than 9007199254740991, it's better if use BigInt Type;
*
*               let bigInt = 9007199254740995n; // should add 'n' after the number
*
*
*
*           --- Boolean ---
*
*               var bool = true;
*               var bool = false;
*
*
*
*           --- Undefined ---
*
*               When there is no value for a variable, It is automatically refer the type of undefined.
*
*               var noValue;
*
*
*  *********** Structural Types ************
*
*       Object
*
*           - There are two types of objects
*               1. Literal Base Object
*               2. Function Base
*
*       Function
*
*           - Just a method
*               Here also valid hoisting
*               function () {
*
*               }
*
*               Function hoisting - If we defined a function any place in our code we can call it any place
*
*  *********** Structural Root Primitives ***********
*
*       Null
*
*       var x = null; // initialized, but no values (Use to initialize an variable with no value)
*       Null is an object
*
*
*
*
*
*
* **************************** How to create a named value container(Object) in JS *******************************
*
*       --- Literal Base Object (ROW Version of creating an Object) ---
*
*           var customer={
*               id: "C001",
*               name: "Dasun",
*               address: "Galle",
*               salary: 10000
*           }
*
*               - How to access values in an object -
*                   1. Dot notation
*                       customer.id
*
*                   2. Bracket notation
*                       customer['name']
*
*
*
* ********************************************* Arrays *****************************************************
*
*       --- There are two ways can create an array
*           1. Literal Base Arrays
*               - var names = ['Dasun','Galle'];
*
*           2. Function Base Arrays
*               - var ages = new Array(10,20,30,40); // this array has been created by using Array Function
*
*       --- How to get values?
*           myName[0];
*
*       --- Array Related Methods
*           push();       - add values the end of the array
*           pop();        - Remove the element of last index
*           shift();      - Remove the element of first index
*           unshift();    - add values to first index
*           slice();      - can copy values to another array (var array = slice(1,4);)
*           splice();     - can remove any element of the array
*           reverse();
*           sort();
*           length
*           indexOf();    - return the index of a value
*
*
*
* ********************************************* Loops and Iteration ******************************************************
*
*       For Loop
*
*       While Loop
*
*       Do While Loop
*
*       for in
*           for (let arrayKey in array) {
*              console.log(array[arrayKey])
*           }
*
*       for of
*           for (let i of array) {
*               console.log(i)
*       }
*
*
*
* ************************************************* Conditions *******************************************************
*
*   if
*   else if
*   switch
*   ternary operator
*
*
*
* **************************************************** Functions furthermore ******************************************
*
*   We can write a function in two ways
*
*
*       1. Function Declaration
*
*           function getName(){
*               console.log("Dasun");
*           }
*           getName();
*
*
*       2. Function Expression
*
*           let myAge = function(){
*               return 20;
*           }
*           myAge();
*
*
*   Function Arguments
*       function calculate(i,s){
*           return i + s;
*       }
*       calculate(10, 20);
*
*       let output = calculate(1, 1);
*
*
*       function f(){
*           return i + s;
*       }
*       f(10, 20);  // No Error
*
*
*
*
*   No support for method overloading
*
*       function method(country) {
*           console.log("first method");
*       }
*
*       function method(country, city) {
*           console.log("second method");
*       }
*
*       method("Sri Lanka");
*
*       Last method will call
*
*
*
*   How arguments work in JS functions without parameters
*
*       --- In js all arguments are stored in an array called arguments ---
*
*       function calc(){
*           console.log(arguments); // output [10, 20]
*           console.log(arguments[0]); // output 10
*       }
*       calc(10, 20);
*
*
*   Can pass a function as a argument
*       --- This is also a reason which is js is known has a first class functions
*
*       function createMessage(content1, content2){
*           return content1()+content2;
*       }
*
*       function myName(){
*           return "Dasun";
*       }
*
*       console.log(createMessage(myName,"is a student"));  // return Dasun is a student
*
*
*   Function in a Function
*
*       function getData(){
*           return function get(){
*               console.log("Hello");
*           }
*       }
*
*       getData()();  //output - Hello
*
*
*
*   **************************************  Objects Furthermore  ***************************************
*
*   var student = {
*       id : "S001",
*       name : "Dasun"
*   }
*
*   student.id;
*   student.id = "S002";
*
*  */
