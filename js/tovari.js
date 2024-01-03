const shop = document.querySelector('.item')


let korzina = {
    colibri: [],
  }

const home = document.querySelector('.home')

home.addEventListener('click', () => {
    location.href = '/index.html'
})

const kat = document.querySelector('.kat')

kat.addEventListener('click', () => {
    location.href = '/html/katalog.html'
})

const item = document.querySelectorAll('.item')

for (let i = 0; i < item.length; i++) {
    item[i].style.cursor = 'pointer'
    
}
window.addEventListener('click', (e) => {
    e.preventDefault()
    let item = e.target.closest('.item')
    if (item) {
        location.href = '/html/birthday.html'
    }

    let cardItem = {
        id: item.dataset.id,
        title: item.querySelector('.title').innerHTML,
        foiz: item.querySelector('.foiz').innerHTML,
        weight: item.querySelector('.weight').innerHTML,
        price: item.querySelector('.price').innerHTML,
        img: item.querySelector('img').getAttribute('src'),
      }

      
      
      const itemCart = shop.querySelector(`[data-id="${cardItem.id}"]`)
      if (itemCart) {
      } else {
        let itemHtml = `
        <div class="item" data-id="01">
        <img
        src="${cardItem.img}"
        alt=""
        class="img1"
      />
      <div class="b">
        <b
          class="price"
          style="
            color: #000;
            font-family: Montserrat;
            font-size: 30px;
            font-style: normal;
            font-weight: 600;
            line-height: 130%; /* 39px */
            letter-spacing: 0.9px;
          "
        >
          ${cardItem.price}<span
            style="
              color: #000;
              font-family: Montserrat;
              font-size: 20px;
              font-style: normal;
              font-weight: 600;
              line-height: 130%;
              letter-spacing: 0.6px;
            "
            >p</span
          >
        </b>
        <b
          style="
            color: #8b8b8b;
            font-family: Montserrat;
            font-size: 20px;
            font-style: normal;
            font-weight: 500;
            line-height: 130%; /* 26px */
            letter-spacing: 0.6px;
            text-decoration-line: strikethrough;
          "
          class="weight"
          >${cardItem.weight}р</b
        >
        <b
          style="
            color: #ff32a1;
            font-family: Montserrat;
            font-size: 20px;
            font-style: normal;
            font-weight: 600;
            line-height: 130%; /* 26px */
            letter-spacing: 0.6px;
          "
          class="foiz"
          >${cardItem.foiz}%</b
        >
      </div>
      <p
      class="title"
        style="
          color: #3a3a3a;
          font-family: Montserrat;
          font-size: 16px;
          font-style: normal;
          font-weight: 500;
          line-height: 130%; /* 20.8px */
          letter-spacing: 0.48px;
        "
      >
        ${cardItem.title}
      </p>
      </div>
        `

        shop.insertAdjacentHTML('beforeend', itemHtml)
        korzina.colibri.push(cardItem)

      }

      localStorage.setItem('korzina', JSON.stringify(korzina.colibri))
})


const clear = document.querySelector('.clear')
const bbq = document.querySelector('.bbq')
const menu = document.querySelector('.menu')
const body = document.querySelector('body')
const form  = document.querySelector('.form')
const item2  = document.querySelector('.item')


clear.addEventListener('click', () => {
    bbq.style.display = 'none'
    form .style.display = 'block'
    menu.style.backgroundColor = '#fff'
    item2.style.display = 'block'
    body.style.overflow = ''
  })
  
  menu.addEventListener('click', () => {
    bbq.style.display = 'block'
    form.style.display = 'none'
    menu.style.backgroundColor = '#FEDDFF'
    item2.style.display = 'none'
    body.style.overflow = 'hidden'
})