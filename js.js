document.addEventListener("DOMContentLoaded", function() {
    const slides = document.querySelectorAll(".slide");
    const navPrev = document.querySelector(".prev-btn");
    const navNext = document.querySelector(".next-btn");
    let currentSlide = 0;
  
    function showSlide(n) {
        slides[currentSlide].classList.remove("active");
        currentSlide = (n + slides.length) % slides.length;
        slides[currentSlide].classList.add("active");
    }
  
    function nextSlide() {
        showSlide(currentSlide + 1);
    }
  
    function prevSlide() {
        showSlide(currentSlide - 1);
    }
  
    navNext.addEventListener("click", nextSlide);
    navPrev.addEventListener("click", prevSlide);
  
    // Auto change slides every 5 seconds
    setInterval(nextSlide, 5000);
});
