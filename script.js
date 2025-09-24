document.addEventListener('DOMContentLoaded', function() {
    // Saludo dinámico
    const greetingElement = document.getElementById('greeting');
    if (greetingElement) {
        const hour = new Date().getHours();
        let greeting;
        if (hour >= 6 && hour < 12) {
            greeting = '¡Buenos días!';
        } else if (hour >= 12 && hour < 19) {
            greeting = '¡Buenas tardes!';
        } else {
            greeting = '¡Buenas noches!';
        }
        greetingElement.textContent = greeting;
    }

    // Mostrar/ocultar experiencia laboral
    const experienceBtn = document.getElementById('toggle-experience-btn');
    const experienceSection = document.getElementById('experience');
    if (experienceBtn && experienceSection) {
        experienceBtn.addEventListener('click', () => {
            if (experienceSection.style.display === 'none') {
                experienceSection.style.display = 'block';
                experienceBtn.textContent = 'Ocultar Experiencia Laboral';
            } else {
                experienceSection.style.display = 'none';
                experienceBtn.textContent = 'Mostrar Experiencia Laboral';
            }
        });
    }

    // Modo oscuro/claro
    const themeBtn = document.getElementById('toggle-theme-btn');
    const body = document.body;
    if (themeBtn && body) {
        themeBtn.addEventListener('click', () => {
            body.classList.toggle('dark-mode');
            if (body.classList.contains('dark-mode')) {
                themeBtn.textContent = 'Modo Claro';
            } else {
                themeBtn.textContent = 'Modo Oscuro';
            }
        });
    }

    // Mostrar/ocultar contacto
    const contactBtn = document.getElementById('toggle-contact-btn');
    const contactSection = document.getElementById('contact');
    if (contactBtn && contactSection) {
        contactBtn.addEventListener('click', () => {
            if (contactSection.style.display === 'none') {
                contactSection.style.display = 'block';
                contactBtn.textContent = 'Ocultar Contacto';
            } else {
                contactSection.style.display = 'none';
                contactBtn.textContent = 'Mostrar Contacto';
            }
        });
    }

    // Buscador de habilidades
    const searchInput = document.getElementById('skills-search');
    const skillLists = document.querySelectorAll('.list-group-item');
    if (searchInput) {
        searchInput.addEventListener('keyup', (event) => {
            const searchTerm = event.target.value.toLowerCase();
            skillLists.forEach(li => {
                const skillText = li.textContent.toLowerCase();
                if (skillText.includes(searchTerm)) {
                    li.style.display = 'list-item';
                } else {
                    li.style.display = 'none';
                }
            });
        });
    }
});