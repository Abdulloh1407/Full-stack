document.addEventListener("DOMContentLoaded", function () {
  let openModal = document.querySelector(".check-btn");
  let closeModal = document.getElementById("x");
  let modal = document.querySelector(".modal");

  if (openModal && closeModal && modal) {
    openModal.addEventListener("click", function () {
      modal.classList.add("active");
    });

    closeModal.addEventListener("click", function () {
      modal.classList.remove("active");
    });
  }
});
