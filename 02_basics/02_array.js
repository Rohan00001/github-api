let arr1 = [1,2,3,4,5,6,7]
arr1.push(8)
//console.log(arr1);

//arr1=[11,22,33,44,55,66,77,"neha","rohan"]
//console.log(arr1);
//console.log(typeof arr1);
//console.log(arr1.shift());
//console.log(arr1);
//console.log(arr1.unshift(99));
//console.log(arr1);
//console.log(arr1.indexOf("neha"));

let arr2=[11,22,33,44,55]
// console.log(typeof (arr1.join()));
// console.log(typeof arr1);

// console.log(arr2.includes(99));
// console.log("A ", arr1);
// console.log(arr1.slice(1,3));
// console.log("B",arr1);
// console.log(arr1.splice(1,3));
// console.log("C",arr1);

let arr3=[...arr1,...arr2];
//console.log(arr3);

arr4=[1,2,3,[4,5,6,[7,8,9]]]
//console.log(arr4.flat(Infinity));
let n="neha"
//console.log(Array.isArray("n"));
//console.log(Array.from({name: "Rohan"}));
console.log(Array.of(1,2,3,4));

const arr6=new Array(1,2,3);
console.log(typeof arr6);
console.log(arr6.length);