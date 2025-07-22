// get the button
const submit = document.getElementById("submit")
 

submit.addEventListener("click", function(){
   const  addanewTask = document.getElementById("addanewTask")

   const taskText = addanewTask.value.trim()

   if(taskText === ""){
      alert("please enter a task")
      return;
   }

   const bookList = document.getElementById("bookList");

   const li = document.createElement("li");
   

   // Task : Create a button with javascript , add the content called "Delete" and add the tasklist with the button
       
   const deleteBtn = document.createElement("button")
   deleteBtn.textContent = "Delete";

   li.addEventListener("click", function(){
      li.style.textDecoration = "line-through";
   })

   li.addEventListener("click", function(){
        bookList.removeChild(li)
   })

   li.addEventListener("click", function(){
      li.style.textDecoration = "line-through";
   })

   li.addEventListener("click", function(){
      li.style.textDecorationcolor = "green";
   })

   li.addEventListener("click", function(){

      li.style.textTransform = "uppercase";
   })

   li.textContent = taskText;

   li.textContent = taskText;

   bookList.appendChild(li);
   li.appendChild(deleteBtn)

   // clear the input field
   addanewTask.value = "";
   

   
 
})