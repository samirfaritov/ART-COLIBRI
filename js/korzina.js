let korzina;

const glav = document.querySelector(".glav");

glav.addEventListener("click", () => {
  location.href = "/index.html";
});

const ver = document.querySelector(".pp");

ver.addEventListener("click", () => {
  location.href = "/html/tovari.html";
});

function totalCalc() {
  const cartItem = document.querySelectorAll(".item");
  const totalPrice = document.querySelector(".total");

  let total = 0;
  cartItem.forEach((item) => {
    let count = item.querySelector(".count1").innerText;
    let price = item.querySelector(".price").innerText;
    let totalP = parseInt(count) * parseInt(price);
    total += totalP;
  });
  totalPrice.innerHTML = total;

  const clear = document.querySelector(".x");

  const item = document.querySelector(".item");
  const sht = document.querySelector(".sht");

  clear.addEventListener("click", () => {
    item.style.display = "none";
    totalPrice.innerHTML = "0";
    sht.innerHTML = "0";
  });
}

totalCalc();

window.addEventListener("click", (event) => {
  event.preventDefault();
  // const left = document.querySelector('.left')

  // korzina = JSON.parse(localStorage.getItem('korzina') || '[]')

  // for (let i = 0; i < korzina.length; i++) {
  //   let itemHtml = `
  //   <div class="item">
  //   <div class="img">
  //     <img
  //       src="${korzina[i].img}"
  //       alt=""
  //     />
  //   </div>
  //   <b class="komp"
  //   ${korzina.title}
  // </b
  //   >
  //   <div class="count">
  //     <p>
  //       <button  data-action="minus">-</button> <span class="count1" data-counter>1</span>
  //       <button  data-action="plus">+</button>
  //     </p>
  //   </div>
  //   <b
  //     style="
  //       color: #000;
  //       font-family: Montserrat;
  //       font-size: 40px;
  //       font-style: normal;
  //       font-weight: 600;
  //       line-height: 130%; /* 52px */
  //       letter-spacing: 1.2px;
  //     "
  //     class="b"
  //     ><span class="price">${korzina.price}</span></b
  //   >
  //   <b
  //     style="
  //       color: #8b8b8b;
  //       font-family: Montserrat;
  //       font-size: 20px;
  //       font-style: normal;
  //       font-weight: 500;
  //       line-height: 130%; /* 26px */
  //       letter-spacing: 0.6px;
  //       text-decoration-line: strikethrough;
  //     "
  //     class="bb"
  //     >${korzina.weight}</b
  //   >
  //   <svg
  //     xmlns="http://www.w3.org/2000/svg"
  //     width="30"
  //     height="30"
  //     viewBox="0 0 30 30"
  //     fill="none"
  //     class="x"
  //   >
  //     <path
  //       d="M8.64355 7.8L7.7998 8.64375L14.1748 15L7.7998 21.3563L8.64355 22.2L15.0373 15.8438L21.4123 22.2L22.2561 21.3563L15.8811 15L22.2561 8.64375L21.4123 7.8L15.0373 14.1563L8.64355 7.8Z"
  //       fill="black"
  //     />
  //   </svg>
  // </div>
  //   `

  //   left.insertAdjacentHTML('beforeend', itemHtml)
  // }
  if (event.target.dataset.action === "plus") {
    const counterWrapper = event.target.closest(".count");
    const counter = counterWrapper.querySelector(".count1");
    counter.innerHTML++;
    const sht = document.querySelector(".sht");
    sht.innerHTML++;

    totalCalc();
  }

  if (event.target.dataset.action === "minus") {
    const counterWrapper = event.target.closest(".count");
    const counter = counterWrapper.querySelector(".count1");
    const sht = document.querySelector(".sht");
    counter.innerHTML--;
    sht.innerHTML--;
    totalCalc();

    if (counter.innerHTML < 1) {
      counter.innerHTML = "0";
    }

    if (sht.innerHTML < 1) {
      sht.innerHTML = "0";
    }

    const item = document.querySelector(".item");

    if (counter.innerHTML == 0) {
      item.style.display = "none";
    }
  }
});

const clear = document.querySelector(".clear");
const bbq = document.querySelector(".bbq");
const menu = document.querySelector(".menu");
const body = document.querySelector("body");
const pop = document.querySelector(".pop");
const content11 = document.querySelector(".content1");
const header1 = document.querySelector("header");
const b4 = document.querySelector(".b4");
const pp = document.querySelector(".pp");

clear.addEventListener("click", () => {
  bbq.style.display = "none";
  menu.style.backgroundColor = "#fff";
  body.style.overflow = "";
  pop.style.display = "block";
  content11.style.display = "block";
  header1.style.display = "block";
  b4.style.display = "block";
  pp.style.display = "block";
});

menu.addEventListener("click", () => {
  bbq.style.display = "block";
  menu.style.backgroundColor = "#FEDDFF";
  body.style.overflow = "hidden";
  pop.style.display = "none";
  content11.style.display = "none";
  header1.style.display = "none";
  b4.style.display = "none";
  pp.style.display = "none";
});
