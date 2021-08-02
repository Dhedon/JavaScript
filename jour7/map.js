var numbers = [1, 2, 3, 4, 5];

var doubles = numbers.map(function(num) {
  return num * 6;
});

console.log(doubles); // retournera [2, 4, 6, 8, 10]
let numbers = [1, 2, 3, 4, 5];
let triples = numbers.map((num) => num * 3);
console.log(triples);

let numbers = [1,2,3,4,5];
let big = numbers.filter(function(num) {
    return num >= 3;
});
console.log(big);

var people = [
    {name: "Claire", age: 45},
    {name: "Joachim", age: 19},
    {name: "Bob", age: null},
    {name: "Kira", age: undefined},
    {name: "James", age: 22},
    {name: undefined, age: 30}
  ];
  let adults = people.filter(function(person) {
      return (person.name && person.age > 18)
  });
  console.log(adults);
  

