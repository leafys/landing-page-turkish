var pricesInputs = document.querySelectorAll(".costes__form__items__block__radio");
var pricesCountLessons = document.querySelector(".costes__form__prices__lessons");
var pricesTotalCost = document.querySelector(".costes__form__prices__total-cost");
var costForm = document.querySelector(".costes__form");
pricesInputs.forEach(function (el) {
  el.addEventListener("click", function () {
    console.log(el.value);
    pricesCountLessons.textContent = el.value;
    var newPrice = +el.value * 1000;

    if (isNaN(newPrice)) {
      newPrice = '1000 - 7000';
    }

    pricesTotalCost.textContent = newPrice;
  });
});
costForm.addEventListener("submit", function (event) {
  event.preventDefault();
});
var header = document.querySelector(".header");
window.addEventListener("scroll", function () {
  window.scrollY > 800 ? header.classList.add("header-active") : header.classList.remove("header-active");
});
window.addEventListener("beforeunload", function () {
  window.removeEventListener("scroll");
}); // main block info: letter, desc, text-level

var blocks = document.querySelectorAll(".levels__blocks__item"); // btn modal window

var btnCloseModal = document.querySelector(".levels__modal__content__close"); //  modal window

var modal = document.querySelector(".levels__modal"); // text in modal window

var modalLetter = modal.querySelector(".levels__modal__content__letter");
var modalLevel = modal.querySelector(".levels__modal__content__text-level");
var modalDesc = modal.querySelector(".levels__modal__content__desc");
blocks.forEach(function (el) {
  // iteration cycle
  var btnOpenModal = el.querySelector(".levels__blocks__item__btn");
  var blockLetter = el.querySelector(".levels__blocks__item__letter").textContent; // transform structure in text

  var blockLevel = el.querySelector(".levels__blocks__item__text-level").textContent; // transform structure in text

  var blockDesc = el.querySelector(".levels__blocks__item__desc").textContent; // transform structure in text

  btnOpenModal.addEventListener("click", function () {
    // event
    modalLetter.textContent = blockLetter;
    modalLevel.textContent = blockLevel;
    modalDesc.textContent = blockDesc;
    modal.classList.add("active");
  });
});
btnCloseModal.addEventListener("click", function () {
  // event
  modalLetter.textContent = '';
  modalLevel.textContent = '';
  modalDesc.textContent = '';
  modal.classList.remove("active");
});