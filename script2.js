// bring all the input fields
const firstName = document.getElementById('firstName');
const lastName = document.getElementById('lastName');
const password = document.getElementById('password');
const confirmPassword = document.getElementById('confirmPassword');
const email = document.getElementById('email');

// form
const form = document.getElementById('myForm');


// set green and red  of the validation colors that materialize uses
// to avoid putting them each time.
const green = '#4CAF50';
const red = '#F44336';

// validate the first name
// arrow functions won't be used because they won't simply the syntax
function validateFirstName() {
   // check if the field is empty 
   // using a function that hasn't been created yet.
   // passing the whole 'firstName' field instead of only the value
   // if the field is empty, then return. Don't check for anything else.
   if (checkIfEmpty(firstName)) return;
   // check if it has only letters

}

// creating the checkIfEmpty function
// passing the 'field'
function checkIfEmpty(field) {
   if(checkIfEmpty(field))
}