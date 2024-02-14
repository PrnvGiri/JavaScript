// primitive Datatypes

// 7 types : String, Number, Boolean, null, undefined, symbol, BigInt

const score = 100
const scoreValue = 100.3
const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')        // Symbol S should be capital
const anotherId = Symbol('123')

// console.log(id === anotherId)

const bigNumber  = 15648646516848465165168n //bigInt



// Refrence (Non primitive)

// Array, Objects, Functions

const heros = ["shaktiman", "naagraj", "doga"]
let myObj = {
    name: "pranav",
    age: 20,
}

const myFunction = function(){
    console.log("hii")
}



// +++++++++++++++++++ Memory Types ++++++++++++++++++++++++

// Stack (primitive), Heap (Non-Primitive)

let myYoutubeName = "Atila"

let anotherName = myYoutubeName
anotherName = "PRNV"

console.log(myYoutubeName)
console.log(anotherName)

let userOne = {
    email : "abc@gmail.com",
    upi : "userOne@132",
}

let userTwo = userOne

console.log(userTwo)
console.log(userOne)

