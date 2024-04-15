const regez = /^\d+$/;

const string1 = "12345";
const string2 = "abc123";
const string3 = "998754321";

// //01 - exemplo
// console.log(regex.rest(string1)); // true
// console.log(regex.rest(string2)); // false
// console.log(regex.rest(string3)); // true

const regex = /^[A-Za-z]+$/;
console.log(regex.test(" abcd")); //true
console.log(regex.test(" abc123")); //false


// 03 - Email

const regex = /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/;
console.log (regex.test("text@example.com")); // true
console.log (regex.text("invalid_email")); // false

const regex = /\d+/g

