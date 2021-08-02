//01
// var str = "abc";

// var arr = str.split(''); // donnera ["a", "b", "c"]
// arr.pop(); // donnera ["a", "b"]
// arr.push("d"); // donnera ["a", "b", "d"]

// console.log(arr); // retournera ['a', 'b', 'd'] 

// console.log("Hello.");

//02

// setTimeout(function() {
//   console.log("Goodbye !");
// }, 2000);
// console.log("Hello again !");

// var request = require("request");

// console.log("#1");

// //03


// request.get("https://restcountries.eu/rest/v2/name/france", function (err, res, body) {
//     console.log("#2");

//     var result = JSON.parse(body);
//     console.log("country :", result[0].country);
//     console.log("capital :", result[0].capital);
// });

// console.log("#3");

// var jsonStr = '{"foo": 1, "bar": ["buzz", "woody"]}';
// var json = JSON.parse(jsonStr);

// console.log(json.foo); // retournera 1
// console.log(json.bar); // retournera ["buzz", "woody"]

// let jsonStr = '{"num": 21, "body": ["brain","eyes"]}';
// let json = JSON.parse(jsonStr);
// console.log(json.num);
// console.log(json.body);

//exo
// let countries = "";
// function getCountries() {
//     request.get("https://restcountries.eu/rest/v2/all", function(error, response, body) {
//         console.log(response.statusCode);
//         var countries = JSON.parse(body);
// 	/*
// 	var countriesNames = [];
//         for (var i = 0; i < countries.length; i++) {
//             var country = countries[i];
//             countriesNames.push(country.name);
//         }
//         console.log(countriesNames.join("-"));
//         */
//        var pays = countries.map(function(element) {
//            return element.name;
//        })
//        console.log(pays.join("-"));
//     });

// }
