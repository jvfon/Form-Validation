// first input name
const name = document.getElementById('name')
const name = document.getElementById('password')
const name = document.getElementById('form')

// 1- in order to catch errors we need to add an event listener to the form
form.addEventListener('submit', (e) => {  // 1- adding the 'submit' event listener
   let messages = []  // 2- checking for errors
   if(name.value === '' || name.value == null) // 2- if the value of the name.value equals an empty string
                          // or if the name.value equal to null 
   e.preventDefault() // 1- to prevent the page from submitting if we have errors
})