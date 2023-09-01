//  Primitive

//  7 types : String, Number, Boolean, null, undefined, Symbol, BigInt

let name1 = "Rohan"; // String Literal

let p = Number(name1);

// console.log(p);
// console.log(Number(typeof p));

let myname= "Rohan";
let age = 21;

let x=myname;
x="Rohan Gope";


const id = Symbol(123)
const anotherId = Symbol(123)

console.log(id === anotherId);

// console.log(myname); //Rohan because x is a copy of myname because its store in stack memory


let obj = {
    name:"Rohan",
    age:21
}

let arr = [1,2,3,4,5]

let gist = arr;

gist.push(6);

// console.log(arr)

let user = obj;
user.name = "Rohan Gope"
// console.log(obj) // Rohan Gope because obj and user are pointing to same memory location or generally heap memory location 

let bigNum = 123456789123456789123456789123456789123456789123456789123456789123456789123456789123456789n;

// console.log(typeof bigNum);