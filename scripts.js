document.addEventListener("DOMContentLoaded", function () {
    const links = document.querySelectorAll('.menu-link');
    const sections = document.querySelectorAll('.content-section');

    links.forEach(link => {
        link.addEventListener('click', function(event) {
            event.preventDefault();

            // Oculta todas as seções
            sections.forEach(section => {
                section.style.display = 'none';
            });

            // Mostra a seção correspondente ao link clicado
            const target = document.getElementById(this.getAttribute('data-target'));
            target.style.display = 'block';
        });
    });
});
