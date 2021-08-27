const pricesInputs = document.querySelectorAll(".costes__form__items__block__radio");
const pricesCountLessons = document.querySelector(".costes__form__prices__lessons");
const pricesTotalCost = document.querySelector(".costes__form__prices__total-cost");
const costForm = document.querySelector(".costes__form");

pricesInputs.forEach(el => {
    el.addEventListener("click", () => {
        console.log(el.value)
        pricesCountLessons.textContent = el.value
        let newPrice = +el.value * 1000
        if (isNaN(newPrice)) {
            newPrice = '1000 - 7000'
        }
        pricesTotalCost.textContent = newPrice
    })
})

costForm.addEventListener("submit", (event) => {
    event.preventDefault()
})

const header = document.querySelector(".header");

window.addEventListener("scroll", () => { 
    window.scrollY > 800 ? header.classList.add("header-active") : header.classList.remove("header-active")
})

window.addEventListener("beforeunload", () => {
    window.removeEventListener("scroll")
})

// main block info: letter, desc, text-level
const blocks = document.querySelectorAll(".levels__blocks__item")

// btn modal window
const btnCloseModal = document.querySelector(".levels__modal__content__close");

//  modal window
const modal = document.querySelector(".levels__modal");

// text in modal window
const modalLetter = modal.querySelector(".levels__modal__content__letter")
const modalLevel = modal.querySelector(".levels__modal__content__text-level")
const modalDesc = modal.querySelector(".levels__modal__content__desc")


blocks.forEach(el => { // iteration cycle
    const btnOpenModal = el.querySelector(".levels__blocks__item__btn");
    const blockLetter = el.querySelector(".levels__blocks__item__letter").textContent; // transform structure in text
    const blockLevel = el.querySelector(".levels__blocks__item__text-level").textContent; // transform structure in text
    const blockDesc = el.querySelector(".levels__blocks__item__desc").textContent; // transform structure in text

    btnOpenModal.addEventListener("click", () => { // event
        modalLetter.textContent = blockLetter;
        modalLevel.textContent = blockLevel;
        modalDesc.textContent = blockDesc;
        modal.classList.add("active");
    })
})

btnCloseModal.addEventListener("click", () => { // event
    modalLetter.textContent = '';
    modalLevel.textContent = '';
    modalDesc.textContent = '';
    modal.classList.remove("active");
})

