document.addEventListener('DOMContentLoaded', () => {
    const accordionButtons = document.querySelectorAll('.accordion-button');

    accordionButtons.forEach(button => {
        button.addEventListener('click', () => {
            const content = button.nextElementSibling;
            const arrow = button.querySelector('.d-arrow');

            if (content.style.display === "block") {
                content.style.display = "none";
                arrow.classList.remove('d-arrow-flip');
            } else {
                document.querySelectorAll('.accordion-content').forEach(item => item.style.display = 'none');
                document.querySelectorAll('.d-arrow').forEach(arrow => arrow.classList.remove('d-arrow-flip'));
                content.style.display = "block";
                arrow.classList.add('d-arrow-flip');
            }
        });
    });
});