'use strict'

const model = document.querySelector(".modal")

const overlay = document.querySelector(".overlay")

const btnCloseModel = document.querySelector(".close-modal")

const btnOpenModel = document.querySelectorAll(".show-modal")
for(let i of btnOpenModel){

    i.addEventListener('click',()=>{
        console.log("Button clicked !")
        model.classList.remove('hidden')
        overlay.classList.remove('hidden')
    })
}

btnCloseModel.addEventListener('click',removeHidden)

document.addEventListener("keydown",removeHidden);

function removeHidden(e) {
    console.log(`${e.key} is pressed` )
    model.classList.add('hidden')
    overlay.classList.add('hidden')
}