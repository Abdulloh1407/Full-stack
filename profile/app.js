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
 const wrapper = document.getElementById("cours_wrapper");

 function moveSlide() {
   if (window.innerWidth <= 1500) return; 

   const firstCard = wrapper.firstElementChild;
   const cardWidth = firstCard.offsetWidth + 10; 

   wrapper.style.transition = "transform 0.5s ease-in-out";
   wrapper.style.transform = `translateX(-${cardWidth}px)`; 

   setTimeout(() => {
     wrapper.style.transition = "none"; 
     wrapper.appendChild(firstCard); 
     wrapper.style.transform = "translateX(0)"; 
   }, 500);
 }


 let interval;
 function checkScreenSize() {
   if (window.innerWidth > 1300) {
     if (!interval) interval = setInterval(moveSlide, 3500);
   } else {
     clearInterval(interval);
     interval = null;
   }
 }


 window.addEventListener("resize", checkScreenSize);

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
