let yearOfBirth = prompt("Year of birth")
let firstName = prompt("Your name")
let lastName = prompt("Your last name")
const currentYear = 2022
let age = currentYear - yearOfBirth
age = Number(age)
console.log ("User Bio:", firstName, lastName, age, "years old")