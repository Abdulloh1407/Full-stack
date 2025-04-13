document.addEventListener("DOMContentLoaded", function () {
  const menuButton = document.querySelector(".check-btn");
  const closeButton = document.getElementById("x");
  const modal = document.querySelector(".modal");

  menuButton.addEventListener("click", function () {
    modal.classList.toggle("active");
  });

  closeButton.addEventListener("click", function () {
    modal.classList.remove("active");
  });
});
