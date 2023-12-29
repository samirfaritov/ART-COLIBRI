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