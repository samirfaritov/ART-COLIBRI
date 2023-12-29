window.addEventListener('click', (e) => {
    e.preventDefault()
})

const clickBtn = document.querySelector('.clickBtn')

clickBtn.addEventListener('click', () => {
    location.href = '/html/korzina.html'
})