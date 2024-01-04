window.addEventListener("click", (e) => {
  e.preventDefault();
});

const clickBtn = document.querySelector(".clickBtn");

clickBtn.addEventListener("click", () => {
  location.href = "/html/korzina.html";
});

const glav = document.querySelector(".glav");

glav.addEventListener("click", () => {
  location.href = "/index.html";
});

const kat = document.querySelector(".kat");

kat.addEventListener("click", () => {
  location.href = "/html/katalog.html";
});

const clear = document.querySelector(".clear");
const bbq = document.querySelector(".bbq");
const menu = document.querySelector(".menu");
const body = document.querySelector("body");
const korzina = document.querySelector(".korzina");
const header = document.querySelector("header");

clear.addEventListener("click", () => {
  bbq.style.display = "none";
  menu.style.backgroundColor = "#fff";
  header.style.display = "block";
  korzina.style.display = "flex";
  body.style.overflow = ''
});

menu.addEventListener("click", () => {
  bbq.style.display = "block";
  menu.style.backgroundColor = "#FEDDFF";
  body.style.overflow = 'hidden'
  header.style.display = "none";
  korzina.style.display = "none";
});