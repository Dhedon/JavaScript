//01 objects
let cat = {
    name :"Garfield",
    age : 3,
    isCute : true,

};
console.log(cat);
console.log(cat.age);
if(cat.isCute=== true) console.log("So cute!");

//02 Combine
let cat2 = {
    name :"Brownie",
    age : 4,
    isCute : false,
};
console.log(cat2);
let cats = [cat,cat2];
console.log(cat.age, cat2.isCute); //ou//
console.log(cat.age, cat[0].age);
console.log(cat.iscute, cat[1].iscute);

//03 EVEN
function checkIfEven (num) {
    if(num%2==0) {console.log("even")}
    else {console.log("odd")};
};
checkIfEven(215);
checkIfEven(58);
checkIfEven(26789);


//04 compare
function compare (num1, num2) {
if(num1 > num2)console.log(`${num1} is bigger`);
else if(num1 < num2) console.log(`${num2} is bigger`);
else console.log("both are the same");
};
compare(25646356,1545123);
compare(5,9);
compare(10,10);


//05 add up
function addUp (num) {
    let sum = 0
    for (let i = 0; i <=num; i++) sum += i;
    return sum;
}

console.log(addUp(12));

//06 Time
function format (num) {
let hours = Math.floor(num / 3600);
let restSecondes = num % 3600;
let minutes = Math.floor(restSecondes / 60);
let secondes = restSecondes % 60;
console.log(`${hours} : ${minutes} : ${secondes}`); 
}
format(3700);

//bonus
function generatePassword(num) {
    let max = 122;
    let min = 48;
    let password = "";
    if (num >= 6 && num <= 15) {
        console.log("Error!!");
    }
    else{
        for (let i = 0; i < num; i++) {
            let randomIndex = Math.floor(Math.random() * (max - min + 1) + min);
            while (randomIndex >= 58 && randomIndex <= 64) {
                randomIndex = Math.floor(Math.random() * (max - min + 1) + min);
            }
            let letter = String.fromCharCode(randomIndex);
            password += letter;
        }
        console.log(password);
    }
    }

generatePassword(20);

//Bonus2//
function launchDice (numberOfDice) {
    let min = 1;
    let max = 6;
    let sum = 0;
    for (let i = 0; i < numberOfDice; i++) {
        let dice = Math.floor(Math.random() * (max - min + 1) + min);
        sum += dice;
    }
    return sum;
}
var joueur1 = launchDice(5);
var joueur2 = launchDice(5);
if (joueur1 > joueur2) {
    console.log("Joueur 1 a gagné")
} else if (joueur1 < joueur2) {
    console.log("Joueur 2 a gagné")
} else {
    console.log("Egalité");
}













