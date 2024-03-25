// const tinderUser = new Object()
const tinderUser = {}

tinderUser.id = "123abc"
tinderUser.name = "Sammy"
tinderUser.isLoggedIn = false
// console.log(tinderUser)

const regularUser = {
    email: "some@gmail.com",
    fullname: {
        UserFullName:{
            firstName: "Pranav",
            lastName: "Giri"
        }
    }
}

// console.log(regularUser.fullname.UserFullName.firstName)

const obj1 = {
    1: "a",
    2:"b"
}
const obj2 = {
    3: "a",
    4:"b"
}
const obj4 = {
    5: "a",
    6:"b"
}

// const obj3 = {obj1 , obj2}
// const obj3 = Object.assign({},obj1,obj2,obj4)
const obj3 = {...obj1,...obj2,...obj4}
// console.log(obj3)

const users = [
    {
    id: 1,
    email: "abc@gmail.com"
    },
    {
        id: 1,
        email: "abc@gmail.com"
    },
    {
            id: 1,
            email: "abc@gmail.com"
    },
    {
                id: 1,
                email: "abc@gmail.com"
    },
]

users[1].email
// console.log(tinderUser)
// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser))
// console.log(Object.entries(tinderUser));

// console.log(tinderUser.hasOwnProperty('isLoggedIn'))


const course = {
    courseName: "JS in Hindi",
    price: "999",
    courseInstructor: "hitesh"
}

// course.courseInstructor
const {courseInstructor: instu} = course // destructuring of an object
console.log(instu)

//JSON API Objects
// {
//     "name": "Pranav",
//     "Course": "BCA",
//     "CGPA": "9.45"
// }

//JSON API Array
// [
//     {},
//     {},
//     {}
// ]