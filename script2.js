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
// checkIfEmpty will use another function, 'ifEmpty'
// we are going to pass the field.value.trim function.
// if we hit the space bar and then move to another field, 
// the field with the space should be considered empty.
// trim removes the extra white space from the field
function checkIfEmpty(field) {
   if(ifEmpty(field.value.trim())) {
      // if it's empty set field invalid and 
      // return true because it's empty
      return true;
   } else {
      // set field to valid
      return false; // return false because it's not empty.
   }    
}

// creating 'isEmpty' function
// function isEmpty takes value
function isEmpty(value) {
   // if that value is equal to an empty string then return true
   if(value === '') return true;
   return false; // equivalent to the else statment 
}

