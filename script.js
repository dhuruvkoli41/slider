         
const slides = document.querySelector('.slides');
const slide = document.querySelectorAll('.img');
const dots = document.querySelectorAll('.dot');
const prev = document.getElementById('prev');
const next = document.getElementById('next');
const downloadBtn = document.getElementById("downloadBtn");

let currentIndex = 0;

function updateSlider() { 
    slides.style.transform = `translateX(-${currentIndex *100}%)`;
    dots.forEach((dot, index) => {
        dot.classList.toggle('active', index === currentIndex);
    
        sliderImage.src = images[currentIndex].src;
    sliderImage.setAttribute("data-downlod",images[currentIndex].download);
    downloadBtn.href = images[currentIndex].download;
    });
}

next.addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % slide.length;
    updateSlider();
});

prev.addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + slide.length) % slide.length;
    updateSlider();
});

dots.forEach(dot => {
    dot.addEventListener('click', () => {
        currentIndex = parseInt(dot.dataset.index);
        updateSlider();
    });
});

updateSlider();