const home = document.querySelector(".home")

home.addEventListener('click', () => {
    location.href = '/index.html'
})

window.addEventListener('click', (e) => {
    e.preventDefault()
})


const clear = document.querySelector('.clear')
const bbq = document.querySelector('.bbq')
const menu = document.querySelector('.menu')
const body = document.querySelector('body')
const b4 = document.querySelector('.b4')


clear.addEventListener('click', () => {
    bbq.style.display = 'none'
    menu.style.backgroundColor = '#fff'
    body.style.overflow = ''
    b4.style.display = 'block'
})

menu.addEventListener('click', () => {
    bbq.style.display = 'block'
    menu.style.backgroundColor = '#FEDDFF'
    body.style.overflow = 'hidden'
    b4.style.display = 'none'
})