// 1. Smooth scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
            targetElement.scrollIntoView({ behavior: 'smooth' });
        }
    });
});

// 2. Team card interactions
document.querySelectorAll('.card').forEach(card => {
    card.addEventListener('click', () => {
        card.style.transform = 'scale(0.95)';
        setTimeout(() => card.style.transform = '', 150);
    });
});

// 3. Slider Logic
const slidesContainer = document.getElementById('slides');
const nextBtn = document.getElementById('next');
const prevBtn = document.getElementById('prev');

if (slidesContainer && nextBtn && prevBtn) {
    let currentSlide = 0;
    const totalSlidesCount = slidesContainer.children.length;

    const updateSlider = (index) => {
        currentSlide = index;
        slidesContainer.style.transform = `translateX(-${currentSlide * 100}%)`;
    };

    nextBtn.addEventListener('click', () => {
        currentSlide = (currentSlide + 1) % totalSlidesCount;
        updateSlider(currentSlide);
    });

    prevBtn.addEventListener('click', () => {
        currentSlide = (currentSlide - 1 + totalSlidesCount) % totalSlidesCount;
        updateSlider(currentSlide);
    });

    // Auto-slide every 5 seconds
    setInterval(() => {
        currentSlide = (currentSlide + 1) % totalSlidesCount;
        updateSlider(currentSlide);
    }, 5000);
}

// 4. Form Submission
const joinFormElement = document.getElementById('joinForm');
if (joinFormElement) {
    joinFormElement.addEventListener('submit', (e) => {
        e.preventDefault();
        alert("Thank you for joining The Matrix Club! We'll contact you soon.");
        e.target.reset();
    });
}