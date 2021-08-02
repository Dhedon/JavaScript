// //01 Array
// let fruits = ["mango", "lemon" , "blueberry"];
// console.log(fruits);
console.table(fruits);

 //02 
let ingredients = ["eggs", "milk", "butter"];
console.log(ingredients[1]);
console.log(ingredients.indexOf("butter"));

//03
let objects = ["pen", "book", "lamp"];
objects.unshift("chair");
console.log(objects);

objects.pop();
console.log(objects);

objects.push("laptop");
console.log(objects);

objects.shift();
console.log(objects);

//04
let numbers = [4, 10, 8, 12, 6]
numbers.reverse();
console.log(numbers);

numbers.sort((a, b) => a - b);
console.log(numbers);

//05
let total = 0;
let limit = 10;
for (var i = 0; i <= limit; i++) {
    total=total + i;
}
console.log(total);

//06
let sentence = "Hello Konexio !";
let reversedsentence = "";
for(let i = sentence.length - 1; i >= 0; i--) {
reversedsentence = reversedsentence + sentence[i];
} 
console.log(reversedsentence);

// bonus01
for (let i = 0; i <=100; i++) {
    if (i % 7 == 0) continue;
    else if (i % 3 == 0 && i % 5 == 0) console.log("fizzebuzz");
    else if (i % 3 == 0) console.log("fizz");
    else if (i % 5 == 0) console.log("buzz");
    else console.log(i);
}

// bonus II
let i = 0;
total = 0;
limit = 10;
while (i <= limit) {
    total += i;
    i++;
}
console.log(total);

//bonus III
let names = [
    "François",
    "Céline",
    "Muneeb",
    "Sophine",
    "Fatoumata",
    "Amir", 
    "Hasnaine",
    "Thishan",
    "Ishran",
    "Steve",
];
for (let i = 0; i <names.length - 1; i++)
console.log(names[parseInt(Math.random() * names.length)]);

// bonus IV
let array =[],
maxInt = 0;
for (let i = 0; i <= 19; i++) {
    array.push(parseInt(Math.random() * 100));
}
console.log(array);
for(let i = 0; i < array.length; i++) {
    let current = array[i];
    if (current > maxInt) maxInt = current;
}
console.log(maxInt);

