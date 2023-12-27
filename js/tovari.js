const home = document.querySelector('.home')

home.addEventListener('click', () => {
    location.href = '/index.html'
})

const kat = document.querySelector('.kat')

kat.addEventListener('click', () => {
    location.href = '/html/katalog.html'
})

const item = document.querySelectorAll('[data-item]')

for (let i = 0; i < item.length; i++) {
    item[i].style.cursor = 'pointer'
    item[i].addEventListener('click', () => {
        location.href = '/html/birthday.html'
    })
}