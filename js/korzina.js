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
}

totalCalc();

window.addEventListener("click", (event) => {
  event.preventDefault();
  if (event.target.dataset.action === "plus") {
    const counterWrapper = event.target.closest(".count");
    const counter = counterWrapper.querySelector(".count1");
    counter.innerHTML++;
    totalCalc();
  }

  if (event.target.dataset.action === "minus") {
    const counterWrapper = event.target.closest(".count");
    const counter = counterWrapper.querySelector(".count1");
    counter.innerHTML--;

    totalCalc();

    if (counter.innerHTML < 1) {
      counter.innerHTML = "1";
    }
  }
});
