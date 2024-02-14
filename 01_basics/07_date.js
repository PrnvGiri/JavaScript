// Date 

let myDate = new Date();
// console.log(myDate)
// console.log(myDate.toDateString())
// console.log(myDate.toString())
// console.log(myDate.toLocaleDateString())
// console.log(myDate.getFullYear())

let myCreatedDate = new Date(2003, 6 , 16)
// console.log(myCreatedDate.toDateString())
// console.log(myDate.toLocaleString('default',{
//     weekday: "long"
// }))

console.log(`Today's Date is ${myDate.getDate()} and Day is ${myDate.toLocaleString('default',{weekday: "long"})} 
and month is ${myDate.toLocaleString('default',{month: "long"})} and year is ${myDate.getFullYear()}`)