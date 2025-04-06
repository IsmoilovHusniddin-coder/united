var menuBtn = document.querySelector(".header__btn-wrapper__btn-3");
var menu = document.querySelector(".menu");
var menuCloseBtn = document.querySelector(".menu__x");
menuBtn.addEventListener("click", function () {
  menu.classList.add("show");
});
menuCloseBtn.addEventListener("click", function () {
  menu.classList.remove("show");
});
