const aboutImage = document.querySelector('.about-image');

const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target); 
        }
    });
}, {
    threshold: 0.5 
});
observer.observe(aboutImage);

document.addEventListener("DOMContentLoaded", function() {
    const productCards = document.querySelectorAll('.product-card');

    function animateOnScroll() {
        productCards.forEach(card => {
            const cardPosition = card.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;
            if (cardPosition < windowHeight - 50) {
                card.classList.add('animate');
            }
        });
    }

    window.addEventListener('scroll', animateOnScroll);
    animateOnScroll(); 
});

document.addEventListener("DOMContentLoaded", function() {
    const reviewCards = document.querySelectorAll('.review-card');

    function animateOnScroll() {
        reviewCards.forEach(card => {
            const cardPosition = card.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;
            if (cardPosition < windowHeight - 50) {
                card.classList.add('animate');
            }
        });
    }

    window.addEventListener('scroll', animateOnScroll);
    animateOnScroll();
});
    
