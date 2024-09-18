function validateRegistration() {
    // Reset error messages
    document.querySelectorAll('.error').forEach(e => e.textContent = '');

    // Validate required fields
    const requiredFields = document.querySelectorAll('input[required], select[required], textarea[required]');
    let isValid = true;
    requiredFields.forEach(field => {
        if (!field.value) {
            field.nextElementSibling.textContent = `${field.name} is required`;
            isValid = false;
        }
    });

    // Validate email format
    const email = document.getElementById('email');
    if (!isValidEmail(email.value)) {
        email.nextElementSibling.textContent = 'Invalid email format';
        isValid = false;
    }

    // Validate password match
    const password = document.getElementById('password');
    const confirmPassword = document.getElementById('confirmPassword');
    if (password.value !== confirmPassword.value) {
        confirmPassword.nextElementSibling.textContent = 'Passwords do not match';
        isValid = false;
    }

    // Validate age range
    const age = document.getElementById('age');
    if (age.value < 18 || age.value > 100) {
        age.nextElementSibling.textContent = 'Age must be between 18 and 100';
        isValid = false;
    }

    // Validate terms and conditions
    const terms = document.getElementById('terms');
    if (!terms.checked) {
        terms.nextElementSibling.textContent = 'Please agree to the Terms and Conditions';
        isValid = false;
    }

    return isValid;
}

function validateLogin() {
    // Reset error messages
    document.querySelectorAll('.error').forEach(e => e.textContent = '');

    // Validate required fields
    const requiredFields = document.querySelectorAll('input[required]');
    let isValid = true;
    requiredFields.forEach(field => {
        if (!field.value) {
            field.nextElementSibling.textContent = `${field.name} is required`;
            isValid = false;
        }
    });

    // Validate email format
    const email = document.getElementById('loginEmail');
    if (!isValidEmail(email.value)) {
        email.nextElementSibling.textContent = 'Invalid email format';
        isValid = false;
    }

    return isValid;
}

function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}