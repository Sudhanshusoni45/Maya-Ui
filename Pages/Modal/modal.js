const modal = document.querySelector(".modal");
const showModalBtn = document.querySelector(".modal-btn");
const closeModalBtn = document.querySelector(".modal-cross");
const modalBackdrop = document.querySelector(".modal-backdrop-hide");

showModalBtn.addEventListener("click", showModal);
closeModalBtn.addEventListener("click", closeModal);

function showModal() {
  modal.classList.toggle("modal-hide");
  modalBackdrop.classList.toggle("modal-backdrop-hide");
  console.log("modalBackdrop:", modalBackdrop);
}
function closeModal() {
  modalBackdrop.classList.toggle("modal-backdrop-hide");
  modal.classList.toggle("modal-hide");
}
