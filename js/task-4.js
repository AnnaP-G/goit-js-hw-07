const form = document.querySelector('.login-form');

const onFormSubmit = (event) => {
    event.preventDefault();
    const email = event.target.elements.email.value.trim();
    const password = event.target.elements.password.value.trim();
    const userData = {
        email,
        password,
    }
    if (email && password) {
        userData.email === email;
        userData.password === password;
        console.log(userData);
        event.target.reset();
    } else {
        alert('All form fields must be filled in')
    }   
}

form.addEventListener('submit', onFormSubmit);

