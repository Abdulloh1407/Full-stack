document.getElementById("menu-icon").addEventListener("click",  ()=> {
  document.getElementById("sidebar").classList.toggle("active");
});
document.getElementById("x").addEventListener("click", function () {
  document.getElementById("sidebar").classList.remove("active");
});

document.querySelectorAll(".toggle-button").forEach((button) => {
  button.addEventListener("click", function () {
    let contents = button.parentElement.querySelectorAll(".content");
    let img = button.querySelector("svg");
    

 
    document.querySelectorAll(".content").forEach((c) => {
      if (!Array.from(contents).includes(c)) {
        c.classList.remove("show");
      }
    });

    // Barcha rasmlarni qayta o‘rniga qaytaramiz
    document.querySelectorAll(".toggle-button img").forEach((i) => {
      if (i !== img) {
        i.classList.remove("rotated");
      }
    });

    // Har bir `.content` elementini ochish yoki yopish
    contents.forEach((content) => {
    content.classList.toggle("show");
    });

    img.classList.toggle("rotated");
  });
});

// document.querySelectorAll(".toggle-button").forEach((button) => {
//   button.addEventListener("click", function () {
//     let parent = button.closest(".video_title"); // Ota elementni topish
//     let contents = parent.querySelectorAll(".content"); // Ichki kontentlar
//     let icon = button.querySelector("img");
//     icon.style.transition = "transform 0.3s ease-in-out"; // Strelka ikonka

//     // Kontentlarni ko'rsatish yoki yashirish
//     contents.forEach((content) => {
//       content.classList.toggle("hidden");
//     });

//     // Strelka aylanishi
//     if (icon.style.transform === "rotate(180deg)") {
//       icon.style.transform = "rotate(0deg)";
//     } else {
//       icon.style.transform = "rotate(180deg)";
//     }

//     // Silliq animatsiya
//     icon.style.transition = "transform 0.3s ease-in-out";
//   });
// });


const wrapper = document.getElementById("cours_wrapper");

function moveSlide() {
  if (window.innerWidth <= 1350) return; // 900px dan kichik ekranda ishlamasin

  const firstCard = wrapper.firstElementChild;
  const cardWidth = firstCard.offsetWidth + 10; // Karta kengligi + oraliq

  wrapper.style.transition = "transform 0.5s ease-in-out";
  wrapper.style.transform = `translateX(-${cardWidth}px)`; // Karta o‘lchamiga ko‘ra surish

  setTimeout(() => {
    wrapper.style.transition = "none"; // Animatsiyani o‘chirish
    wrapper.appendChild(firstCard); // 1-kartani oxiriga qo‘shish
    wrapper.style.transform = "translateX(0)"; // Boshiga qaytarish
  }, 500);
}

// **Interval va ekran o‘lchamini tekshirish**
let interval;
function checkScreenSize() {
  if (window.innerWidth > 900) {
    if (!interval) interval = setInterval(moveSlide, 3500);
  } else {
    clearInterval(interval);
    interval = null;
  }
}

// **Ekran o‘zgarganda tekshirish**
window.addEventListener("resize", checkScreenSize);

// **Dastlabki tekshiruv**
checkScreenSize();




document.addEventListener("DOMContentLoaded", function () {
  const reviewsContainer = document.querySelector(".reviews");
  const reviews = reviewsContainer.children;
  const reviewHeight = reviews[0].offsetHeight;

  function moveReview() {
    for (let i = 0; i < reviews.length; i++) {
      reviews[i].style.transition = "transform 1s ease-in-out";
      reviews[i].style.transform = `translateY(-${reviewHeight}px)`;
    }

    setTimeout(() => {
      const firstReview = reviewsContainer.firstElementChild;
      firstReview.style.transition = "none";
      firstReview.style.transform = "translateY(0)";
      reviewsContainer.appendChild(firstReview);

      for (let i = 0; i < reviews.length; i++) {
        reviews[i].style.transition = "none";
        reviews[i].style.transform = "translateY(0)";
      }
    }, 1000);
  }

  setInterval(moveReview, 3000); 
});
