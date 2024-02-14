const name = "Pranav"
const repoCount = 50

// console.log(name + repoCount + "value")
// console.log(`Hello My name is ${name} and my repo count is ${repoCount}`)

const gameName = new String('Pranav-giri')
// console.log(gameName)

// console.log(gameName[2])
// console.log(gameName.__proto__)
// console.log(gameName.length)
// console.log(gameName.toUpperCase()) 
// console.log(gameName.charAt(5))
// console.log(gameName.indexOf('v'))

const newString = gameName.substring(0,5)
console.log(newString)

const anotherString = gameName.slice(-11,8) // in slice we can use negative value
console.log(anotherString)

const newStringOne = "   Pranav    "
console.log(newStringOne)
console.log(newStringOne.trim())

const url = "https://pranav.com/pranav%20giri"

console.log(url.replace('%20','-'))

console.log(url.includes('pranav'))

console.log(gameName.split('-'))