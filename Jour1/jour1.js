// HelloWorld
 console.log("Hello World !");

//string
 var test = "my name is céline";
 console.log(test);

//Concatenation
 var name = "Tsering"
 console.log("Nice to meet you" +  name);

//String Length
 var testLength = "I'm very long !";
 console.log(testLength);

//Replace
 var food = "croissant is meh";
 food=food.replace("meh","so good");
 console.log(food);

//up and Down
 var basic = "This is cool";
 var basicUp=basic.toUpperCase();
 var basicDown=basic.toLowerCase();
 console.log(basicDown,basicUp,basic );

//split
 var word = "banana";
 var letters = word.split("");
 console.log(letters);

//Template
 var age = 23;
 var template = `i am ${age} years old !`;
 console.log(template);

 //Bonus
  var changed = "Bonjour";
  changed=changed.replace("Bonjour", "Banjaur");
  console.log(changed);
