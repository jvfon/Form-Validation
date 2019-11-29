// first input name
const name = document.getElementById('name')
const password = document.getElementById('password')
const form = document.getElementById('form')
// 4- we create another variable
const errorElement = document.getElementById()

// 1- in order to catch errors we need to add an event listener to the form
form.addEventListener('submit', (e) => {  // 1- adding the 'submit' event listener
   let messages = []  // 2- checking for errors
    // 2- if the value of the name.value equals an empty string
    // 2- or if the name.value equal to null 
   // 2-  that means the user did not pass in any name
   if (name.value === '' || name.value == null) {
      // 3- because of that we are going to send a message
      messsage.push('Name is required')
   }

   // 4- if the length of the message is greater than 0 
   if  (messages.legnth > 0) {
      // 4- we want to prevent the actual form from submitting
      // 4- and we want to send the errors to our error
      e.preventDefault()
   }
                        
   e.preventDefault() // 1- to prevent the page from submitting if we have errors
})