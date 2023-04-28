// template literals.

// let fname = 'Saad'
// let lname = 'Ali'
// document.write('My first name is '+fname+' and my last name is '+lname+"<br>")

// document.write(`My first name is ${fname} and <br> my last name is ${lname}`)


// destructuring

// let arr = ['Saad','Ali','Hamza','Jalal']

// let [a,b,c,d] = arr

// a = 'Kangaro'

// document.write(a)


// document.write(c)


// let obj = {
//     name: 'Saad',
//     age: 12,
//     roll: 244
// }

// let { name, age, roll } = obj
// document.write(age)



// default parameters

// function foo(a=6,b=10){
//     return a + b
// }
// document.write(foo(2,2))

// spread operators

// let obj = {
//     name: 'Saad',
//     age: 12,
//     roll: 244
// }

// let obj1 = {
//     ...obj,
//     sec: 'A'
// }

// console.log(obj)


// arrow functions

// function foo(a){
//     return a+ b
// }
// foo()

// let foo = a => a

// alert(foo())

let a=30
let prom = new Promise((resl,reje)=>{

    if(a == 4){
        resl('Ya Allah lrki ka ghr wala Man Jay')
    }
    else{
        reje('mere  ghr wala bhi  man jay   Ameen')
    }
}).then((data)=>{
    document.write(data)
})
.catch((err)=>{
    document.write(err)
})