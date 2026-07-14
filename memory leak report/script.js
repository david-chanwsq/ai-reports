document.addEventListener('DOMContentLoaded', () => {
    console.log('Memory Leak Report Loaded');
    // You can add interactive elements or dynamic content here if needed

    // Example: A simple interactive element
    const sections = document.querySelectorAll('section');
    sections.forEach(section => {
        section.addEventListener('mouseenter', () => {
            section.style.backgroundColor = '#e6e6e6';
        });
        section.addEventListener('mouseleave', () => {
            section.style.backgroundColor = '';
        });
    });
});