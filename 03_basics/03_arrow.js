const user = {
    username: "pranav",
    price: 500,

    welcomeMessage: function(){
        console.log(`${this.username} ,Welcome to our website`)
    }   
}

// user.welcomeMessage()
// user.username = "Sam"
// user.welcomeMessage()

// console.log(this) we are goint to get empty scope {} bcz there are no such global variables in global scope

// function chai(){
//     let username = "Pranav"
//     console.log(this.username) this only works in object's function
// }
// chai()

// const chai = function(){
//     let username = "Pranav"
//     console.log(this.username)    
// }

// arrow function

const chai = () =>{
    let username = "Pranav"
    console.log(this)
}
// chai()

// const sum = (num1, num2) => {
//     return num1+ num2
// }

// const sum = (num1, num2) => num1+num2

// const sum = (num1, num2) => (num1+num2) //if we use this method we dont need any return

const sum = (num1, num2) => ({username: "pranav"}) // with object

console.log(sum(9,2))

const myArray = [2,4,8,6,9]

myArray.forEach()