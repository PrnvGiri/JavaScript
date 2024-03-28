// var c = 300
let a = 300
if(true){
    let a = 10;
    const b = 50;
    // console.log("inner: ", a);
    // console.log(b);
}  

// console.log(a)
// console.log(b);  cant access

function one(){
    const username = "Pranav"
    function two(){
        const website = "Youtube"
        console.log(username)
    }
    // console.log(website)
    two();
}
// one()

if(true){
    const username = "Pranav"
    if(username === "Pranav"){
        const website = " Youtube"
        console.log(username+website)
    }
    // console.log(website);
}
// console.log(username)

console.log(addone(5))

function addone(num){
    return num+1
}

const addtwo = function(num){
    return num + 2
}

console.log(addtwo(5)) // if we this type of func we need to call the function after the declaration only