const marvelHeros = ["thor" , "ironman", "spiderman"];
const dcHeros = ["superman" , "batman", "flash"];

// marvelHeros.push(dcHeros);
// console.log(marvelHeros);

// const allHeros = marvelHeros.concat(dcHeros);
// console.log(allHeros)

// easy method to conact

const allNewHeros = [...marvelHeros,...dcHeros] // ... called spread operator 
// console.log(allNewHeros)


const anotherArr = [1,2,[3,4],5,[6,7,[8,9]]]

const newArr = anotherArr.flat(Infinity);
console.log(newArr)

console.log(Array.isArray("Pranav"))
console.log(Array.from("Pranav"))
console.log(Array.from({name: "Pranav"})) // imp

const score1 = 500;
const score2 = 822;
const score3 = 798;

console.log(Array.of(score1,score2,score3))

