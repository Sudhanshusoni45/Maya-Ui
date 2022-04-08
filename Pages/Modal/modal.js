const modal = document.querySelector(".modal");
const showModalBtn = document.querySelector(".modal-btn");
const closeModalBtn = document.querySelector(".modal-cross");
const modalBackdrop = document.querySelector(".modal-backdrop-hide");
const modalContainer = document.querySelector(".modal-container");

showModalBtn.addEventListener("click", toggleModal);
closeModalBtn.addEventListener("click", closeModal);

function toggleModal() {
  modal.classList.toggle("modal-hide");
  modalBackdrop.classList.toggle("modal-backdrop-hide");
  modalContainer.classList.toggle("modal-container-hide");
}
function closeModal() {
  modalBackdrop.classList.toggle("modal-backdrop-hide");
  modalContainer.classList.toggle("modal-container-hide");
  modal.classList.toggle("modal-hide");
}
