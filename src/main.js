//select the button 
const button = document.querySelector('.btn')
//select the body
const body = document.body

//add an event listener
button.addEventListener('click', e => {
  body.classList.toggle('nav-is-open')
})