document.addEventListener('DOMContentLoaded', function() {
    
    console.log('Panel kontrolny aktywny.');

    // 1. Zmiana motywu
    const themeLink = document.getElementById('theme-link');
    const btnGreen = document.getElementById('btn-green');
    const btnRed = document.getElementById('btn-red');
    
    btnGreen.addEventListener('click', () => {
        themeLink.href = 'green.css';
        console.log('Zmieniono na zielony');
    });
    
    btnRed.addEventListener('click', () => {
        themeLink.href = 'red.css';
        console.log('Zmieniono na czerwony');
    });
    
    // 2. Ukrywanie projektów
    const btnToggle = document.getElementById('btn-toggle-projects');
    const projectsSection = document.getElementById('projects-section');
    
    btnToggle.addEventListener('click', () => {
        projectsSection.classList.toggle('hidden');
        
        // Zmiana tekstu na dużym przycisku
        if (projectsSection.classList.contains('hidden')) {
            btnToggle.textContent = 'POKAŻ PROJEKTY';
        } else {
            btnToggle.textContent = 'UKRYJ PROJEKTY';
        }
    });
});