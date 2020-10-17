//variables
let addbutton = document.getElementById("addbutton");
let inputfield = document.getElementById("inputfield");
let list = document.getElementById("list");



addbutton.addEventListener("click", function () {
  let field = document.getElementById("inputfield").value;
  let task = document.createElement("li");
  if (field ==='') {
    
     alert('El formulario esta vacio')
    ;
  } else {
    task.classList.add("task");
    task.innerHTML = inputfield.value;
    inputfield.value = "";
    list.appendChild(task);
    task.addEventListener("dblclick", function () {
      list.removeChild(task);
    });
  }
});
