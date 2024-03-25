// array

const myArr = [0,1,2,3,4,5]
// console.log(myArr)
// myArr.push(6) add to end
// myArr.pop()  remove from end
// myArr.unshift(7) add to front
// myArr.shift() remove from front
// console.log(myArr.include(4))
// console.log(myArr.indexOf(4))
const newArr = myArr.join()
// console.log(newArr)
// console.log(myArr)
console.log("A " ,myArr)
const myNewArr1 = myArr.slice(1,3)

console.log("Slice ",myNewArr1)
console.log("B " ,myArr)


const myNewArr2 = myArr.splice(1,3)
console.log("C" ,myArr)
console.log("Splice" ,myNewArr2)