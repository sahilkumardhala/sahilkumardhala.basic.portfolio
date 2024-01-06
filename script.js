// Get the color-changing text element
const colorChangingText = document.getElementById('color-changing-text');

// Function to generate random RGB values
function generateRandomRGB() {
    const red = Math.floor(Math.random() * 256);
    const green = Math.floor(Math.random() * 256);
    const blue = Math.floor(Math.random() * 256);
    return `rgb(${red}, ${green}, ${blue})`;
}

// Function to update the text color with a random RGB value
function updateTextColor() {
    const randomRGB = generateRandomRGB();
    colorChangingText.style.color = randomRGB;
}

// Call the updateTextColor function every 5 seconds
setInterval(updateTextColor, 5000);



// it is window scrolled functions
$(document).ready(function () {
    $(window).scroll(function () {
        // checks if window is scrolled more than 500px, adds/removes solid class
        if ($(this).scrollTop() > 550) {
            $('.navbar').addClass('solid');
            $('.back-to-top').addClass('visible');
        } else {
            $('.navbar').removeClass('solid');
            $('.back-to-top').removeClass('visible');
        }

    });
});
/*
const backgroundVideo = document.getElementById('background-video');

window.addEventListener('scroll', () => {
    const scrollPosition = window.scrollY;
    backgroundVideo.style.top = -scrollPosition + 'px';
});
*/


