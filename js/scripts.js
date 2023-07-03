const openModalButton = document.querySelector("#open-modal")
const closeModalButton = document.querySelector("#close-modal")
const modal = document.querySelector("#modal")
const fade = document.querySelector("#fade")

let array = [openModalButton, closeModalButton, fade]
let toggleModal = () => {
    modal.classList.toggle("hide")
    fade.classList.toggle("hide")

}

array.forEach((el) => {
    el.addEventListener("click", () => toggleModal())
})
