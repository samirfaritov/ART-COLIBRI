const home = document.querySelector(".home")

home.addEventListener('click', () => {
    location.href = '/index.html'
})

window.addEventListener('click', (e) => {
    e.preventDefault()
})