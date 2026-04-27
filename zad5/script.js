document.getElementById('contactForm').addEventListener('submit', function(e) {
    
    e.preventDefault();

    
    const errorElements = document.querySelectorAll('.error-msg');
    errorElements.forEach(el => el.textContent = '');
    document.getElementById('successMessage').textContent = '';

   
    const firstName = document.getElementById('firstName').value.trim();
    const lastName = document.getElementById('lastName').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();

    let isValid = true;

   

    
    if (firstName === "") {
        document.getElementById('firstNameError').textContent = "Imię jest wymagane.";
        isValid = false;
    } else if (/\d/.test(firstName)) {
        document.getElementById('firstNameError').textContent = "Imię nie może zawierać cyfr.";
        isValid = false;
    }

   
    if (lastName === "") {
        document.getElementById('lastNameError').textContent = "Nazwisko jest wymagane.";
        isValid = false;
    } else if (/\d/.test(lastName)) {
        document.getElementById('lastNameError').textContent = "Nazwisko nie może zawierać cyfr.";
        isValid = false;
    }

    
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (email === "") {
        document.getElementById('emailError').textContent = "E-mail jest wymagany.";
        isValid = false;
    } else if (!emailRegex.test(email)) {
        document.getElementById('emailError').textContent = "Wprowadź poprawny adres e-mail.";
        isValid = false;
    }

   
    if (message === "") {
        document.getElementById('messageError').textContent = "Wiadomość nie może być pusta.";
        isValid = false;
    }

    
    if (isValid) {
        document.getElementById('successMessage').textContent = "Formularz wysłany pomyślnie!";
        this.reset(); // Очистить форму после успеха
    }
});