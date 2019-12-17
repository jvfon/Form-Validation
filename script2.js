// bring all the input fields

const firstName = document.getElementById('firstName');
const lastName = document.getElementById('lastName');
const password = document.getElementById('password');
const confirmPassword = document.getElementById('conformPassword');
const email = document.getElementById('email');

// form
const form = document.getElementById('myForm');


// set green and red  of the validation colors that materialize uses
// to avoid putting them each time.
const green = '#4CAF50';
const red = '#F44336';

// Security - handle form
// listening for an event type submit
// once a form is submited a function runs that takes an event
form.addEventListener('submit', function(event) {
   // prevent default behavior so password won't show on the url field
   event.preventDefault();

   if (
      validateFirstName() &&
      validateLastName() &&
      validatePassword() &&
      validateConfirmPassword() &&
      validateEmail()
   ) {

      // we need to get the user's name so we can display the name "welcome user"
      const name = firstName.value;
      // we want to get the container to show how fast the page is loading.
      const container = document.querySelector('div.container');

      // the div for the preloader animation
      const loader = document.createElement('div');
      // the preloader animation - materialize/css/components/indeterminate
      loader.className = 'progress';
      // we need the div that's inside of it
      const loadingBar = document.createElement('div');
      loadingBar.className = 'indeterminate';
      loader.appendChild(loadingBar); // created a loading bar

      // adding the loader div to the container
      container.appendChild(loader);
      // mimicking asynchronous code
      // 1 sec in milliseconds
      // we need to show the bar and then after 1 second, show the panel

      setTimeout(function(){   
         const loaderDiv = document.querySelector('div.progress'); // assuming there is only one loader in the page
         const panel = document.createElement('div');
         panel.className = 'card-panel green'; // green color
         const text = document.createElement('span');
         text.className = 'white-text'; // changed text to white to contrast better with the green background
         
         text.appendChild(document.createTextNode(`Sign up successful, welcome to socialApe ${name}`));
         
         panel.appendChild(text); // append text to the panel
         container.replaceChild(panel, loaderDiv); // takes the new one (panel) and the old one (loaderDiv)
      }, 1000) // give it one second
      // we need asynchronous code to talk to the server to log in an user - either a promise or async await
      // in this promise before you send the data to the server you send it to a loading bar
      // once the promise is fulfilled, then you change the loading bar to the welcome panel
      // during that down time it will show the loading bar
      // here there is no server so we use 'setTimeout' and we give it one second (1000)
      // loader.appendChild(loadingBar); // created a loading bar
      // container.appendChild(loader); // adding the loader div to the container
      // and after one second we show the loading bar.


   }
});


// VALIDATORS
// validate the first name
// arrow functions won't be used because they won't simply the syntax
function validateFirstName() {
   // check if the field is empty 
   // using a function that hasn't been created yet.
   // passing the whole 'firstName' field instead of only the value
   // if the field is empty, then return. Don't check for anything else.
   if (checkIfEmpty(firstName)) return;
   // check if it has only letters
   // first write the function then create the function
   // check firstName if it has no letters, if it is the case, return.
   if (!checkIfOnlyLetters(firstName)) return; 
   // if it not the case, return true.
   return true;
}

function validateLastName() {
   if (checkIfEmpty(lastName)) return;
   if (!checkIfOnlyLetters(lastName)) return; 
   return true;
}

function validatePassword() {
   // if the field is not empty 
   // if it's empty, return
   if(checkIfEmpty(password)) return;
   // check the length of the password
   // ! = not
   // if it doesn't meet the length
   // meetlegnth passes a field (password) --- created later under utility functions
   // min. legnth = 6, max. length = 100
   if (!meetLength(password, 4, 100)) return;
   
   // check password against our character set - check password against certain criteria
   // 1 - require the password to at least have some letters.
   // 2 - require the password to have at least 1 letter and 1 number.
   // 3 - require the passowrd to have one lowercase letter, one uppercase letter and one number.
   // 4 - required: uppercase, lowercase, one number, one special character.

   // it it doesn't contain the character, return - create the function at the bottom
   // if (!containsCharacters(password, 2)) return; // commment this out if you want the password to have any characters as long as it is a certain length.
   return true;
}

function validateConfirmPassword() {
   // no need to validate the same way password was validated
   // we need to check if password is valid
   // if password is invalid it will give you an error message
   if(password.className !== 'valid') { // if someone click the field and then leaves, the field is checked to
                                       // see if what's on the field is valid or not.
      setInvalid(confirmPassword, 'Password must be valid');
      return;
   }
   // check if they match
   if(password.value !== confirmPassword.value) {
      setInvalid(confirmPassword, 'Passwords must match');
      return;
   } else {
      setValid(confirmPassword);
   }
   return true;
}

function validateEmail() {
   if (checkIfEmpty(email)) return;
   if (!containsCharacters(email, 5)) return; // '5' is the case number
   return true; // return true if it passes the checks
}

// Utility functions
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
      // takes the whole field, `` (back ticks) so it can take a template string
      // $ sign to pass a variable 'field.name'
      // 'must not be empty' because this checks if the field is empty.
      setInvalid(field, `${field.name} must not be empty`);
      return true;
   } else {
      // set field to valid
      setValid(field); // doesn't have an error message because there no error.
      return false; // return false because it's not empty.
   }    
}
// emplanation:
// we get the field, 'First Name', 'Last Nmae', etc.
// and if it's empty we say the name of the field which is why we
// added the attribute of name  
// ex: <input type="text" name="First Name" id="firstName"/>
// the field of 'First Name' must not be empty or it will show an error.

// UTILITY FUNCTIONS
// Functions section
// Creating 'isEmpty' function
// function isEmpty takes value
// first create this function then set up the logic, setting the field invalid
function isEmpty(value) {
   // if that value is equal to an empty string then return true
   if(value === '') return true;
   return false; // equivalent to the else statment 
}

// creating valid and invalid functions
// takes a fiedl and a message 
function setInvalid(field, message) { // 'message' refers to the error message
   // takes the field and gives it a class name of invalid
   field.cLassName = 'invalid'; // materialize makes it red
   // we need to access <span> and put text into it, 
   // the error and make it red as well
   // manipulating the DOM
   field.nextElementSibling.innerHTML = message;
   field.nextElementSibling.style.color = red;
}

function setValid(field) {
   field.className = 'valid';
   // set to empty because it might have already a message.
   field.nextElementSibling.innerHTML = '';
   // field.nextElementSibling.style.color = green;
}


function checkIfONlyLetters(field) {
   // using a regular expression and test field.value
   if (/^[a-zA-Z]+$/.test(field.value)) {
      // if it returns true, a-z and A-Z are in the field.
      // if the field has anything different, it will return false.
      // if it returns true,  set it to valid.
      setValid(field);
      return true;
   } else {
      setInvalid(field, `${field.name} must contain only letters`);
      return false;
   }
}

function meetLength(field, minLength, maxLength) {
   if (field.value.length >= minLength && field.value.length < maxLength) {
     setValid(field);
     return true;
   } else if (field.value.length < minLength) {
     setInvalid(
       field,
       `${field.name} must be at least ${minLength} characters long`
     );
     return false;
   } else {
     setInvalid(
       field,
       `${field.name} must be shorter than ${maxLength} characters`
     );
     return false;
   }
 }

function meetLength(field, minLength, maxLength) {
   // "value", the value the user types is
   // larger or equal to the minLength
   if (field.value.length >= minLength && field.value.length < maxLength) {
      // if true then:
      setValid(field);
      return true;
   } else if (field.value.length < minLength) {
      setInvalid(field, `${field.name} must be at least ${minLength} characters long`);
      return false;
   } else {
      setInvalid(field, `${field.name} must be shorter than ${maxLength} character`);
      return false;
   }
}

function containsCharacters(field, code) {
   let regEx; // regEx = regular expression
   switch(code) { // switch   --> fin out about it
      case 1:  
         // check if the field contains letters
         // check https://pastebin.com/RS5ubqvv for regEx
         // test regEx here: https://regex101.com/
         regEx = /(?=.*[a-zA-Z])/; // only tests for letters
            
         // using the function matchWithRegEx
         //we create an error message and we give it to this fucntion
            return matchWithRegEx(regEx, field, 'Must contain at least one letter');  // 'field' the field that we passed this funciton 
            // if we call the function (w/o return)
            // below 'function matchWithRegEx() is going to set it to invalid'
            // we want 'function validatePassword() { if(!containsCharacters(password, 1)) return; to
            // return a value
            // since this function: 
               // function matchWithRegEx(regEx, field, message) {
               // if(field.value.match(regEx)) { 
               // setValid(field);           
               // return true; 
            // has return true (at the bottom)
            // we can return the function above 'return matchWithRegEx(regEx, field, 'Must contain at least one letter');'

      case 2:    
         // letters and numbers
         regEx = /(?=.*\d)(?=.*[a-zA-Z])/;
         return matchWithRegEx(regEx, field, 'Must contain at least one letter and one number');

      case 3:
         // uppercase, lowercase and number
         regEx = /(?=.*\d)(?=.*[a-z])(?=.*[A-Z])/;
         return matchWithRegEx(regEx, field, 'Must contain at least one uppercase letter, one lowercase letter and one number');

      case 4:
         // uppercase, lowercase, number and special character
         regEx = /(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*\W)/;
         return matchWithRegEx(regEx, field, 'Must contain at least one uppercase letter, one lowercase letter, one number and one special character');

      case 5:
         //  email pattern
         regEx = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
         return matchWithRegEx(regEx, field, 'Must contain a valid email address');


      default: // default case
         return false;
   }
} 

// testing against regular expressions
// takes the regular expression itself and the field, the message
function matchWithRegEx(regEx, field, message) {
   if(field.value.match(regEx)) { // if it matches the regEx, the field is valide
      setValid(field);            //  we set the field to valid and
      return true;               // we return true.
   } else {
      setInvalid(field, message);
         return false; // after this we go up to the function containsCharacters
                      // and create an error message
   }
}



