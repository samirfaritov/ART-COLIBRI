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


  const clear = document.querySelector('.x')
  
  const item = document.querySelector('.item')
  const sht = document.querySelector('.sht')
  
  clear.addEventListener('click', () => {
    item.style.display = 'none'
    totalPrice.innerHTML = '0'
    sht.innerHTML = '0'
  })
  
}

totalCalc();

window.addEventListener("click", (event) => {
  event.preventDefault();
  if (event.target.dataset.action === "plus") {
    const counterWrapper = event.target.closest(".count");
    const counter = counterWrapper.querySelector(".count1");
    counter.innerHTML++;
    const sht = document.querySelector('.sht')
    sht.innerHTML++;
    
    totalCalc();
  }
  
  if (event.target.dataset.action === "minus") {
    const counterWrapper = event.target.closest(".count");
    const counter = counterWrapper.querySelector(".count1");
    const sht = document.querySelector('.sht')
    counter.innerHTML--;
    sht.innerHTML--;
    totalCalc();
    
    if (counter.innerHTML < 1) {
      counter.innerHTML = "0";
    }

    if (sht.innerHTML < 1) {
      sht.innerHTML = "0";
    }

    const item = document.querySelector('.item')
    
    
    if (counter.innerHTML == 0) {
      item.style.display = 'none'
    }
  }
});
