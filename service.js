const elements = document.querySelectorAll('.service1, .service2, .service3, .service4, .service5, .service6');

elements.forEach(element => {
    element.addEventListener('mouseenter', () => {
        element.style.transform = 'scale(1.1)'; // Optional: Scale up the element on hover
        element.style.boxShadow = '4px 4px 20px rgba(0, 0, 0, 0.3)'; // Add box-shadow on hover
    });
    
    element.addEventListener('mouseleave', () => {
        element.style.transform = 'scale(1)'; // Reset scale
        element.style.boxShadow = 'none'; // Remove box-shadow when not hovering
    });
});
