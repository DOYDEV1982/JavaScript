document.getElementById("SignUpForm").addEventListener("submit", function(e){
e.preventDefault();
 
 const  username = document.getElementById("userName").value.trim();
 const firstname = document.getElementById("firstName").value.trim();
 const lastname = document.getElementById("lastName").value.trim();
 const email = document.getElementById("signUpEmail").value.trim();
 const password = document.getElementById("password").value;
 const ConfirmPassword = document.getElementById("confirmPassword").value;
 const errorE1 = document.getElementById("signUpError");


if(username.length > 10) {
    errorE1.textContent = "length must be less than 10";
    return;
 }

 if(firstname == ("")) {
    errorE1.textContent = "space must be filled";
    return;
 }

 if(firstname.length < 4) {
    errorE1.textContent = "length must be more than 4";
    return;
 }

 if(lastname == ("")) {
    errorE1.textContent = "space must be filled";
    return;
 }

 if(lastname.length < 4) {
    errorE1.textContent = "lastname length must be more than 4";
    return;
 }

 if(email.length < 6) {
    errorE1.textContent = "email length must be more than 6";
    return;
 }

 if(!email.include ("@")) {
    errorE1.textContent = "email length must includ @";
    return;
 }

 if(password.length < 10) {
    errorE1.textContent = "password length must be more than 10";
    return;
 }

 if(ConfirmPassword.length < 10) {
    errorE1.textContent = "ConfirmPassword length must be more than 10";
    return;
 }


 
 window.location.href="Login.html";
 
})



