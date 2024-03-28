function sayMyName(){
    console.log("p")
    console.log("r")
    console.log("a")
    console.log("n")
    console.log("a")
    console.log("v")
}
// sayMyName();

// function addTwoNum(num1,num2){
//     console.log(num1+num2);
// }

function addTwoNum(num1,num2){
    // let result = num1 + num2
    // return result
return num1+num2
}

const result = addTwoNum(5,8)
// console.log("Result: ",result);

function loginUserMessage(username = "Sam"){
    if(!username){
        console.log("Please enter a userName");
        return
    }
    return `${username} just logged in`
}

console.log(loginUserMessage("Pranav"))

// ShoppingCart

function calculateCartPrice(val1, val2, ...num1){
    return num1
}

// console.log(calculateCartPrice(200, 400, 500, 2000))

const user = {
    username: "hitesh",
    prices: 199
}

function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
}

// handleObject(user)
handleObject({
    username: "sam",
    price: 399
})

const myNewArray = [200, 400, 100, 600]

function returnSecondValue(getArray){
    return getArray[1]
}

// console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([200, 400, 500, 1000]));