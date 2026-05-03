document.addEventListener('DOMContentLoaded', function() {
    
    console.log('Panel kontrolny aktywny.');

    
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
    
    
    const btnToggle = document.getElementById('btn-toggle-projects');
    const projectsSection = document.getElementById('projects-section');
    
    btnToggle.addEventListener('click', () => {
        projectsSection.classList.toggle('hidden');
        
       
        if (projectsSection.classList.contains('hidden')) {
            btnToggle.textContent = 'POKAŻ PROJEKTY';
        } else {
            btnToggle.textContent = 'UKRYJ PROJEKTY';
        }
    });
});
const contactForm = document.getElementById('contact-form');

if (contactForm) {
    contactForm.addEventListener('submit', function(event) {
        event.preventDefault(); 
        
        let isValid = true;
        const cyfryRegex = /\d/; // Szuka cyfr
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; 

        
        document.querySelectorAll('.error-msg').forEach(el => el.textContent = '');

      
        const fname = document.getElementById('fname').value;
        if (cyfryRegex.test(fname)) {
            document.getElementById('error-fname').textContent = 'Imię nie może zawierać cyfr!';
            isValid = false;
        }

       
        const lname = document.getElementById('lname').value;
        if (cyfryRegex.test(lname)) {
            document.getElementById('error-lname').textContent = 'Nazwisko nie może zawierać cyfr!';
            isValid = false;
        }

      
        const email = document.getElementById('email').value;
        if (!emailRegex.test(email)) {
            document.getElementById('error-email').textContent = 'Podaj poprawny adres e-mail!';
            isValid = false;
        }

        if (isValid) {
            console.log('Formularz poprawny (Zadanie 5)');
            document.getElementById('form-success').style.display = 'block';
            contactForm.reset(); 
        }
    });
}
function loadDynamicData() {
    fetch('data.json')
        .then(response => {
            if (!response.ok) {
                throw new Error('Błąd ładowania pliku JSON');
            }
            return response.json();
        })
        .then(data => {
           
            const skillsList = document.getElementById('skills-list');
            if (skillsList) {
                data.skills.forEach(skill => {
                    const li = document.createElement('li');
                    li.textContent = skill;
                    skillsList.appendChild(li);
                });
            }

           
            const projectsContainer = document.getElementById('projects-container');
            if (projectsContainer) {
                data.projects.forEach(project => {
                    const projectDiv = document.createElement('div');
                    projectDiv.className = 'project-item';
                    projectDiv.innerHTML = `
                        <strong>${project.title}</strong>: ${project.desc}
                    `;
                    projectsContainer.appendChild(projectDiv);
                });
            }
            console.log('Dane z JSON załadowane pomyślnie.');
        })
        .catch(error => console.error('Błąd:', error));
}


document.addEventListener('DOMContentLoaded', loadDynamicData);