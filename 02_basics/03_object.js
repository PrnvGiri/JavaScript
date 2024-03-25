// singleton
// Object.create()

//object literals

const mySym = Symbol("myKey1")

const jsUser = {
    name: "Pranav",
    "full name": "Pranav Giri",
    age:20,
    [mySym]: "This is a Symbol",
    location: "Rajkot",
    email: "pg@gmail.com",
    isLoggedIn: false,
    lastLoginDays: ["monday", "Tuesday"]
    
}

// Two ways to access objects
// console.log(jsUser.email)
// console.log(jsUser["name"]) // more appropiate
// console.log(jsUser["full name"])
// console.log(jsUser[mySym])

jsUser["email"] = "prnv@gmail.com"
// Object.freeze(jsUser)
jsUser.email = "Hello@gmail.com" // it is not going to work as object is not freeze
// console.log(jsUser)

jsUser.greetings = function(){
    console.log("hello JS User")
}

jsUser.greetingsTwo = function(){
    console.log(`hello JS user, ${this["full name"]}`)
}
console.log(jsUser.greetings())
console.log(jsUser.greetingsTwo())