// Primitive data types

// 7 types : String, Number, Boolean, null, undefined, Symbol, BigInt

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null  //object
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log( id === anotherId )
// console.log(id)
// console.log(anotherId)

const bigNumber = 5296874596255669n  //bigint

// Reference (Non primitive)

// Array, Objects, Functions

const fruits = ["watermelon", "pineapple", "custard apple"]
let myObj = {
    name: "Ananya",
    age: 22
}

const myFunc = function(){
    console.log("Hello world")
}

console.log (typeof bigNumber)
console.log (typeof outsideTemp)