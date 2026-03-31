document.addEventListener("DOMContentLoaded", () => {
    const slider = document.querySelector(".slider");
    const slides = document.querySelectorAll(".slide");
    const prevSlide = document.querySelector(".slider-button-prev");
    const nextSlide = document.querySelector(".slider-button-next");
    const dotsContainer = document.querySelector(".dots-container");

    let currentSlide =0;
    const slideCount = slides.length; //3

    slides.forEach((_, index) => {
        const dot = document.createElement("div");
        dot.classList.add("dots");
        if(index === 0) dot.classList.add("active");
        dot.addEventListener("click", () => goToSlide(index));
        dotsContainer.appendChild(dot);
    });

    const dots = document.querySelectorAll(".dots");

    function updateDots() {
        dots.forEach((dot, index) => {
            dot.classList.toggle("active", index === currentSlide);
        });
    }

    function goToSlide(index) {
        currentSlide = index;
        slider.style.transform = `translateX(-${currentSlide * (100 / slideCount)}%)`;
        updateDots();
    }
    
    nextSlide.addEventListener("click", () => {
        currentSlide = (currentSlide + 1) % slideCount;
        goToSlide(currentSlide);
    });

    prevSlide.addEventListener("click", () => {
        currentSlide = (currentSlide - 1 + slideCount) % slideCount;
        goToSlide(currentSlide);
    });

    setInterval(() => {
        currentSlide = (currentSlide + 1) % slideCount;
        goToSlide(currentSlide);
    }, 5000);

});