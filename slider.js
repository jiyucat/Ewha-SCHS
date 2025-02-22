document.addEventListener("DOMContentLoaded", function () {
    const sessionSlider = document.querySelectorAll("#session-slider img");
    const workshopSlider = document.querySelectorAll("#workshop-slider img");

    let sessionIndex = 0;
    let workshopIndex = 0;

    function updateSlider(sliderImages, index) {
        sliderImages.forEach((img, i) => {
            img.classList.remove("active");
            if (i === index) img.classList.add("active");
        });
    }

    function slideShow() {
        // Update Session Slider
        sessionIndex = (sessionIndex + 1) % sessionSlider.length;
        updateSlider(sessionSlider, sessionIndex);

        // Update Workshop Slider
        workshopIndex = (workshopIndex + 1) % workshopSlider.length;
        updateSlider(workshopSlider, workshopIndex);
    }

    // Initialize Sliders
    updateSlider(sessionSlider, sessionIndex);
    updateSlider(workshopSlider, workshopIndex);

    // Slide every 3 seconds
    setInterval(slideShow, 3000);
});
