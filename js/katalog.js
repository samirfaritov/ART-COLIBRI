window.addEventListener('click', (e) => {
    e.preventDefault()
})

const home = document.querySelector('.home')

home.addEventListener('click', () => {
    location.href = '/index.html'
})

const shar = document.querySelector('.shar')

shar.addEventListener('click', () => {
    location.href = '/html/tovari.html  '
})

const clear = document.querySelector('.clear')
const bbq = document.querySelector('.bbq')
const menu = document.querySelector('.menu')
const body = document.querySelector('body')
const three  = document.querySelector('.three')
const header  = document.querySelector('header')
const b4  = document.querySelector('.b4')


clear.addEventListener('click', () => {
    bbq.style.display = 'none'
    three.style.display = 'flex'
    menu.style.backgroundColor = '#fff'
    header.style.display = 'block'
    b4.style.display = 'block'
    body.style.overflow = ''
})

menu.addEventListener('click', () => {
    bbq.style.display = 'block'
    three .style.display = 'none'
    menu.style.backgroundColor = '#FEDDFF'
    header.style.display = 'none'
    b4.style.display = 'none'
    body.style.overflow = 'hidden'
})