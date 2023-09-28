const form = document.getElementById("form");
const email = document.getElementById("email");
const fName = document.getElementById("fName");
const lName = document.getElementById("lName");
const password = document.getElementById("password");



form.addEventListener("submit", (e)=>{

    const valid = validateInputs(email, fName, lName, password);
    e.preventDefault();

    if(!valid){

    }else{
        const user = {
            email: email.value,
            fName: fName.value,
            lName: lName.value,
            password: password.value
        }
    
        fetch("http://localhost:4020/register",{
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(user)
        })
        .then(response => response.json())
        .then(data => {
            console.log(data);
            window.location.href = "./secret.html";
        })
        .catch(error =>{
            console.log("Error", error);
        });
    }

        
});

function validateInputs(email, fName, lName, password){

    let valid = true;

    const emailError = document.getElementById("emailError");
    if(!email.value){
        emailError.textContent = "Email is required!";
        valid = false;
    }else if(!email.value.match(/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/)){
        emailError.textContent = "Invalid email address";
        valid = false;
    }else{
        emailError.textContent = "";
    }


    const fNameError = document.getElementById("fNameError");
    if (!fName.value || fName.value.trim() === "") {
        fNameError.textContent = "First name is required";
        valid = false;
    } else {
        fNameError.textContent = "";
    }


    const lNameError = document.getElementById("lNameError");
    if (!lName.value || lName.value.trim() === "") {
        lNameError.textContent = "Last name is required";
        valid = false;
    } else {
        lNameError.textContent = "";
    }


    const passwordError = document.getElementById("passwordError");
    if(!password.value){
        passwordError.textContent = "Password required";
        valid = false;
    }else if(!password.value.match(/^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/)){
        passwordError.textContent = "Too weak password";
        valid = false;
    }else{
        passwordError.textContent = "";
    }

    return valid;
    
}
