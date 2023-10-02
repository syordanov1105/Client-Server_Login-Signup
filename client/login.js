const form = document.getElementById("form");
const email = document.getElementById("email");
const password = document.getElementById("password");

form.addEventListener("submit", (e)=>{
    e.preventDefault();

    fetch("http://localhost:4020/")
        .then(res=>res.json())
        .then(data=>{
            let match = false;
            for( var i=0; i<data.length; i++){
                if(data[i].email === email.value && data[i].password === password.value){
                    console.log("Login successfully!");
                    match = true;
                    window.location.href = "./secret.html";
                }
            }
            if(!match){
                alert("Wrong email or password");
                window.location.href = "./login.html";
            }

        });
});