document.getElementById("SignupForm").addEventListener("submit", function(e){
e.preventDefault();
 
 const firstname = document.getElementById("firstname").value.trim();
 const lastname = document.getElementById("lastname").value.trim();
 const signupEmail = document.getElementById("signupemail").value.trim();
 const password = document.getElementById("password").value;
 const ConfirmPassword = document.getElementById("ConfirmPassword").value;
 const errorE1 = document.getElementById("signupError");






 if(!firstname  || !lastname || !signupEmail || !password || !ConfirmPassword) {
    errorE1.textContent = "All fields are required";
    return;
 }


 if(password.length < 10) {
    errorE1.textContent = "password do not match";
    return;
 }
 if(password !== ConfirmPassword){
    errorE1.textContent = "password is less than 10";
    return;

 }
 

 window.location.href="Login.html";
 
})



