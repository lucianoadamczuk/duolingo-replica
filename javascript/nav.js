
// open and close nav menu

const nav__languageSelector = document.getElementById(`nav__languageSelector`)

const nav__menu = document.querySelector(`.nav__menu`)


nav__languageSelector.addEventListener(`click`, e => {
    nav__menu.classList.toggle(`openMenu`)
})


//////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////



const nav__buttonsContainer = document.querySelector(`.nav__buttonsContainer`)

const main = document.getElementById(`main`)

const footer = document.getElementById(`footer`)

let observeMain = main.getBoundingClientRect().top
let observeFooter = footer.getBoundingClientRect().top

window.addEventListener(`scroll`, e => {
    if(window.scrollY >= observeMain && window.scrollY <= observeFooter){
        nav__buttonsContainer.style.display = `flex`
    }
    else(
        nav__buttonsContainer.style.display = `none`
    )
})

