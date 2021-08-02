// //01
// let fs = require("fs");
// fs.readFile("jour07.txt", function ( err, data) {
//     if (err) {
//         console.error(err);
//         return;
//     }
//     console.log("jour07.txt : " + data.toString());
// });

//02
// let array = [1,2,3,4,5];
// let double = array.map(function(num) {
//     return num * 2;
// })
// console.log(double);

// //03
// let longName = [
// 	{
// 		firstName: "Jane",
// 		lastName: "Doe"
// 	},
// 	{
// 		firstName: "John",
// 		lastName: "Smith"
// 	}

// ]
// let shortNames = longName.map(function (name) {
//     return {name: `${name.firstName} ${name.lastName}`};
// });
// console.log(shortNames);

// //04
// let array = [1, "toto", 34, "javascript", 8];
// let numbers = array.filter(function(element){
//     // return element > 0;
//     // return isNaN(element) === false;
//      return typeof element === "number";
//     // return parseInt(element) === element;
// });
// console.log(numbers);

//05
// let numbers = [1,2,3,4,5,6,7,8];
// let even = numbers.filter((num) => num % 2 == 0);
// console.log(even);

// //06
// let cake = [
//   {
//     name: "cake",
//     flavor: "vanilla",
//     status: "available",
//   },
//   {
//     name: "brownie",
//     flavor: "chocolate",
//     status: "available",
//   },
//   {
//     name: "pie",
//     flavor: "strawberry",
//     status: "available",
//   },
//   {
//     name: "muffin",
//     flavor: "pistachio",
//     status: "available",
//   },
//   {
//     name: "donut",
//     flavor: "chocolate",
//     status: "available",
//   },
// ];
// let cocoCake = cake.filter((arr) => arr.flavor === "chocolate");
// cocoCake = cocoCake.map((arr) => {
//   arr.status = "Sold out";
//   return arr;
// });
// console.log(cocoCake);
