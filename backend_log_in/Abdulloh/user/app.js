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
 const img_content = document.querySelector(".img_content");
 const img_file = document.querySelector(".img_file");
 const img_label = document.querySelector(".img_label");

 img_file.addEventListener("change", async (e) => {
   img_content.src = URL.createObjectURL(e.target.files[0]);
 });
