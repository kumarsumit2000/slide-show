    let mySlides = document.querySelectorAll(".mySlides");
    let index = 0;
    // mySlides[0].style.display = "flex"; // Show 1st slide by default on page load

    function slideshow() {
        // Hide all slides
        for (let slide of mySlides) slide.style.display = "none";
        // Show the current slide
        mySlides[index].style.left = "0";

        mySlides[index].style.display = "flex";
    }
    // next slide
    function nextSlide() {
        index++;
        if (index == mySlides.length) index = 0;
        slideshow()
    }
    // Previous slide
    function prevSlide() {
        index--;
        if (index < 0) index = mySlides.length - 1;
        slideshow()

    }
    setInterval(nextSlide, 2000); // Change slide every 3 seconds


