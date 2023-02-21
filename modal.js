const modal = document.querySelector("#modal");
const overlay = document.querySelector("#overlay");
const closeModalBtn = document.querySelector("button i");

let canCloseModal = [modal, overlay, closeModalBtn];

canCloseModal.forEach((element) => {
  element.addEventListener("click", () => toggleModal());
});

function toggleModal() {
 let elements = [modal, overlay]
  elements.forEach((element) => {
    element.classList.toggle("hide")
  })
}