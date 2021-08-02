//1 - Format//
function formatDate(stringDate) {
    let date = new Date(stringDate);

    return `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`;

}
console.log(formatDate("2020-12-11"));

// 02 Age
function calcAge(birth) {
    const dateOfBirth = new Date(birth).getFullYear();
    const age = new Date().getFullYear() - dateOfBirth;
    return age;
  }
  console.log(calcAge("1996-01-21"));

//03 Validator
let prompt = require("prompt");
let schema = {
    properties: {
        email: {pattern: /^[a-z]+@[a-zA-Z0-9]+.[a-z]+$/, required: true, message,},
        username: {pattern: /^\w+$/, required: true,}
    }
}

