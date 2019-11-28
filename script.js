// first input name
const name = document.getElementById('name')
const name = document.getElementById('password')
const name = document.getElementById('form')

// 1- in order to catch errors we need to add an event listener to the form
form.addEventListener('submit', (e) => {  // 1- adding the 'submit' event listener
   let messages = []  // 2- checking for errors
    // 2- if the value of the name.value equals an empty string
    // 2- or if the name.value equal to null 
   // 2-  that means the user did not pass in any name
   if (name.value === '' || name.value == null) {
      // 3- because of that we are going to send a message
   }
                        
   e.preventDefault() // 1- to prevent the page from submitting if we have errors
})