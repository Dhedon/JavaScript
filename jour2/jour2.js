//01-Number
 var integer = 102;
 var float = 13.9;
 console.log(integer, "\n", float);

//02-Convert
 var basic = 34;
 var stringfied = basic;
 console.log(stringfied)

//03-Round
let num = 1.5;
let rounded=Math.round(num);
console.log(rounded);

//04-Arithmétique
let test = 12;
let bis = 5;
let addition = test + bis;
let soustraction = test - bis;
let multiplication = test * bis;
let division = test / bis;
let pourcentage = test % bis;
console.log(addition) // test + bis;
console.log(soustraction) // test - bis;
console.log(multiplication) //test * bis;
console.log(division) //test / bis;
console.log(pourcentage) //test % bis;

//05-comparison
let test2 = 143;
let bis2 = 219;
console.log(test2 > bis2);

//06- Condition
let limit = 50;
let score = 64;
if(score>=limit) console.log("OK good!..")
else console.log("Oh noooo...");

//07- Condition II
let password = "azerty"
if(password.length>5)
{console.log("The password is secure");}

//08- condition III
if(password.length>5 && score>=limit) 
{console.log("Everything is good") }
else if (password.length>5 || score>=limit) 
{console.log("Something is good")}
else {console.log("Nothing is good");}

//Bonus
let random = Math.floor(Math.random() * (6 - 1 + 1) +1);
if(random === 6) {console.log("Yes I win !")}
else console.log("So close");

//Bonus II
let month = "Jan";
switch(month) {
    case "Jan": 
		console.log("winter");
		break;
	case "april": 
		console.log("spring");
		break;
	case "oct": 
		console.log("Fall");
		break;
	case "mai": 
		console.log("Summer");
		break;
	default: 
		console.log("That's not a month...");
 }

//Bonus III
let number = 3.6;
if(number-Math.floor(number)>=0.5) 
console.log(Math.ceil(number))
else console.log(Math.floor(number));
console.log("la solution devrait etre", Math.round(number));









