window.addEventListener('click', (e) => {
    e.preventDefault()
})

const katalog = document.querySelector('.svg2')

katalog.addEventListener('click', () => {
    location.href = '/html/tovari.html'
})

const svg = document.querySelector('.svg')

svg.addEventListener('click', () => {
    location.href = '/html/katalog.html'
})

const gal = document.querySelector('.gal')

gal.addEventListener('click', () => {
    console.log('click');
    location.href = '/html/galareya.html'
})

const clear = document.querySelector('.clear')
const bbq = document.querySelector('.bbq')
const menu = document.querySelector('.menu')
const left = document.querySelector('.left')
const right = document.querySelector('.right')
const pop = document.querySelector('.pop')
const logoBtn = document.querySelector('.logoBtn')


clear.addEventListener('click', () => {
    bbq.style.display = 'none'
    menu.style.backgroundColor = '#fff'
    right.style.display = 'block'
    left.style.display = 'block'
    logoBtn.style.display = 'block'
    pop.style.color = '#000'
})

menu.addEventListener('click', () => {
    bbq.style.display = 'block'
    menu.style.backgroundColor = '#FEDDFF'
    right.style.display = 'none'
    left.style.display = 'none'
    logoBtn.style.display = 'none'
    pop.style.color = 'transparent'
})