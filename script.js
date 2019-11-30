// first input name

const name = document.getElementById('name');
const password = document.getElementById('password');
const form = document.getElementById('form');
// 5- we create another variable and passing the 'error' id
const errorElement = document.getElementById('error');

// 1- in order to catch errors we need to add an event listener to the form
form.addEventListener('submit', (e) => {  // 1- adding the 'submit' event listener
   let messages = []  // 2- checking for errors
   // 2- if the value of the name.value equals an empty string
   // 2- or if the name.value equal to null 
   // 2-  that means the user did not pass in any name
   if (name.value === '' || name.value == null) {
      
      // 3- because of that we are going to send a message
      messages.push('Name is required');
      
   }

   // 6- if the password have other requirements
   // 6- if the password is less or equal to 6 characters we can say that 
   // 6- the password needs to be longer
   if (password.value.length <= 6) {
      messages.push('Password must be longer than 6 characters.');
   }

   if (password.value.length >= 20) {
      messages.push('Password must be less than 20 characters.');
   }

   if (password.value === 'password') {
      messages.push('Password cannot be password');
   }

   // 4- if the length of the message is greater than 0 
   if  (messages.length > 0) {
      // 4- we want to prevent the actual form from submitting
      // 4- and we want to send the errors to our error (id)
      e.preventDefault(); // 1- to prevent the page from submitting if we have errors
      // 5- taking our error, setting the innerText and joining each one by a comma
      // 5- so they are all separated from each other.
      errorElement.innerText = messages.join(', ');
   }
                        
})

