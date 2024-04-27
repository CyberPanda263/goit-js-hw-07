const form = document.querySelector(".login-form");
form.addEventListener("submit", event => {
    event.preventDefault();
    const form = event.target;
    const email = form.elements.email.value;
    const password = form.elements.password.value;
    const values = {
        email: email.trim(),
        password: password.trim()
    }
    if(values.email.length > 0 && values.password.length > 0){
        console.log(values);
    }else{
        window.alert("All form fields must be filled in");
    }
    form.reset();
})

