document.getElementById('email').addEventListener('input', checkEmailVaildity)
document.getElementById('country').addEventListener('input', checkCountryVaildity)
document.getElementById('postal-code').addEventListener('input', checkPostalCodeVaildity)
document.getElementById('password').addEventListener('input', checkPasswordVaildity)
document.getElementById('confirm-password').addEventListener('input', checkConfirmPasswordVaildity)
document.getElementById('submit').addEventListener('click', checkAllVaildity)

function checkEmailVaildity() {
    var email = document.getElementById('email').value
    var emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/
    if (!email) {
        document.getElementById('email').setCustomValidity("Email is required");
    } else if (!emailRegex.test(email)) {
        document.getElementById('email').setCustomValidity("Please enter a valid email address");
    } else {
        document.getElementById('email').setCustomValidity("");
    }
    document.getElementById('email').reportValidity();
}

function checkCountryVaildity() {
    var country = document.getElementById('country').value
    if (country.length < 3) {
        document.getElementById('country').setCustomValidity('Please enter a valid country')
    } else {
        document.getElementById('country').setCustomValidity("")
    }
    document.getElementById('country').reportValidity();
}

function checkPostalCodeVaildity() {
    var postalCode = document.getElementById('postal-code').value
    if (postalCode.length < 2 || postalCode.length > 10) {
        document.getElementById('postal-code').setCustomValidity('Please enter a valid postal code');
    } else {
        document.getElementById('postal-code').setCustomValidity("")
    }
    document.getElementById('postal-code').reportValidity();
}

function checkPasswordVaildity() {
    var password = document.getElementById('password').value
    if (password.length < 8) {
        document.getElementById('password').setCustomValidity('Password must be at least 8 characters long')
    }
    else if (password.length > 30) {
        document.getElementById('password').setCustomValidity('Password must be less than 30 characters long')
    }
    else if (!/[^a-zA-Z0-9]/.test(password)) {
        document.getElementById('password').setCustomValidity('Password must contain at least one special character')
    }
    else if (!/\d/.test(password)) {
        document.getElementById('password').setCustomValidity('Password must contain at least one number')
    }
    else {
        document.getElementById('password').setCustomValidity("");
    }
    document.getElementById('password').reportValidity();
}

function checkConfirmPasswordVaildity() {
    var password = document.getElementById('password').value
    var confirmPassword = document.getElementById('confirm-password').value
    if (password !== confirmPassword) {
        document.getElementById('confirm-password').setCustomValidity('Passwords do not match');
    } else {
        document.getElementById('confirm-password').setCustomValidity("")
    }
    document.getElementById('confirm-password').reportValidity();
}

function checkAllVaildity() {
    let email = document.getElementById("email");
    let country = document.getElementById("country");
    let postalCode = document.getElementById("postal-code");
    let password = document.getElementById("password");
    let confirmPassword = document.getElementById("confirm-password");

    if (!email.checkValidity() || 
      !country.checkValidity() || 
      !postalCode.checkValidity() || 
      !password.checkValidity() ||
      !confirmPassword.checkValidity()) {  
    return; // Stop execution if any validation fails
  }
  
    email.value = "";
    country.value = "";
    postalCode.value = "";
    password.value = "";
    confirmPassword.value = "";
}

