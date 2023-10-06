const obj={
     username:{
           fullname:{
            firstname:"neha",
            lastname:"Panda"
         }
    },
    "email":"np123@gmail.com"
}

//console.log(obj.email);
//Object.freeze(obj);


obj.display= function (){
        return (`${obj.email}`);
    }

//console.log(obj.display());

// function first1(myobj){
//     console.log(`${myobj.email}`);
// }
// first1(obj);

obj.display1=()=>{
    // console.log(`${obj.username.fullname.firstname}`);
}
//obj.display1();

function calculateCartPrice(val1, val2, ...num1){
    return val1
}

//console.log(calculateCartPrice(200, 400, 500, 2000,12000))

// let today=new Date()
// console.log(today.getHours());
// console.log(today.getMinutes());
// console.log(today.getSeconds());

function something(){
let today = new Date();
let ISTOffset = 330;
let istTime = new Date(today.getTime() + (today.getTimezoneOffset() * 60000) + (ISTOffset * 60000));
console.log(istTime.getHours());
console.log(istTime.getMinutes());
console.log(istTime.getSeconds());
}
//setTimeout(something,1000);

function printISTTime() {
    let today = new Date();
    let ISTOffset = 330;
    let istTime = new Date(today.getTime() + (today.getTimezoneOffset() * 60000) + (ISTOffset * 60000));
    console.log(istTime.getHours());
    console.log(istTime.getMinutes());
    console.log(istTime.getSeconds());
}

//setInterval(printISTTime, 1000); // Print every second

