let request = require("request");

// 01 Countries
let countriesNames = [];
request.get("https://restcountries.eu/rest/v1/all", function (err, res, body) {
  if (err) console.log(err);
  let countriesData = JSON.parse(body);
  //   console.log(countriesData.length);
  for (let i = 0; i < countriesData.length; i++)
    countriesNames.push(countriesData[i].name);
  console.log(countriesNames);
});

// 02 Chuck Norris

function getFact() {
  request.get(
    "https://api.chucknorris.io/jokes/random",
    function (err, res, body) {
      if (err) console.log(err);
      let blague = JSON.parse(body);
      console.log(blague.value);
    }
  );
}
getFact();


// 03 Pokemono

function catchPokemon(num) {
  request.get(
    `https://pokeapi.co/api/v2/pokemon/${num}`,
    function (err, res, body) {
      if (err) console.log(err);
      let data = JSON.parse(body);
      let pokemonName = data.forms[0].name;
      console.log(`My pokemon at id:${num}, name is ${pokemonName}`);
    }
  );
}
catchPokemon(1);




