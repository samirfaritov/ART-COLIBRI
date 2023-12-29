window.addEventListener('click', (e) => {
    e.preventDefault()
})

const clickBtn = document.querySelector('.clickBtn')

clickBtn.addEventListener('click', () => {
    location.href = '/html/korzina.html'
})

const glav = document.querySelector('.glav')

glav.addEventListener('click', () => {
    location.href = '/index.html'
})

const kat = document.querySelector('.kat')

kat.addEventListener('click', () => {
    location.href = '/html/katalog.html'
})
