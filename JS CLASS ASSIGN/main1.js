document.getElementById("signupForm").addEventListener("submit", function(e){
e.preventDefault();
 

 const username = document.getElementById("username").value.trim();
 const firstname = document.getElementById("firstname").value.trim();
 const lastname = document.getElementById("lastname").value.trim();
 const signupEmail = document.getElementById("signupemail").value.trim();
 const password = document.getElementById("password").value;
 const ConfirmPassword = document.getElementById("confirmpassword").value;
 const errorE1 = document.getElementById("signupError");






 if(!username  ||!firstname  || !lastname  || !signupEmail || !password || !ConfirmPassword) {
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