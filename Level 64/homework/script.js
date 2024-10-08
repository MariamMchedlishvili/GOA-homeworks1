const form = document.getElementById('myform'); 
const btn = document.getElementById('btn');

function validateForm() {
    const name = form.elements.name;
    const email = form.elements.email;
    const pass = form.elements.password;

    if (name.value === '' || email.value === '' || pass.value === '') {
        alert('Please fill out all fields');
        return;
    }

    if (pass.value.length < 8) { 
        alert("Password is too short");
        return; 
    }

    console.log(name.value);
    console.log(email.value);
    console.log(pass.value);
}

btn.onclick = validateForm;