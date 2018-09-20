// function for adding necessary buttons to task items
function addButtons(element) {
    element.insertAdjacentHTML('afterbegin', `<input type="checkbox" name="doneBox" value="undone">`);
    element.insertAdjacentHTML('beforeend', `<button type="button" class="btn btn-danger btn-sm deleteButton">
        <span class="glyphicon glyphicon-trash"></span></button>`);
    element.insertAdjacentHTML('beforeend', `<button type="button" class="btn btn-primary btn-sm editButton">
        <span class="glyphicon glyphicon-pencil"></span></button>`);
    return element;
}

taskForm.addEventListener("submit", e => { //takes form with name="taskForm"
    e.preventDefault();
    let doList = document.getElementById("todo"); //holds <ul> element with ID "todo", used as parent for adding elements
    let newTask = document.createElement("li"); //holds newly created <li> element, to be inserted as a child in the <ul>
    let task = e.target["tsk"].value; //holds value entered into "new task" text entry field
    if (task == "") {

    } else {
        newTask.setAttribute("class", "taskItem"); //javascript way of setting li class
        newTask.setAttribute("value", "undone"); //sets special property to track doneness
        newTask.textContent = task; 
        newTask = addButtons(newTask);
        doList.appendChild(newTask);   //appends newTask li object to the ul
    }
    taskForm.reset();   //clears out the field after submitting text
    console.log(doList);
}) 

todo.onclick = function(event) {   // function that listens for click events on the to do list <ul>

    //The icon on the button is technically a child element (thanks, Bootstrap)
    //The control structure ensures the correct level element is passed to the function
    if (event.target.className == "btn btn-danger btn-sm deleteButton") { 
    clickedDeleteButton(event.target.parentElement);
    } else if (event.target.className == "glyphicon glyphicon-trash") {
    clickedDeleteButton(event.target.parentElement.parentElement);
    }

    if (event.target.className == "btn btn-primary btn-sm editButton") {
    clickedEditButton(event.target.parentElement);
    } else if (event.target.className == "glyphicon glyphicon-pencil") { 
    clickedEditButton(event.target.parentElement.parentElement);
    }
}

todo.onchange = function(event) {   //this listens for checkbox clicks and responds appropriately
    if (event.target.value == "undone") {
        event.target.value = "done";
        event.target.parentElement.classList.add("strikethrough");
    } else if (event.target.value == "done") {
        event.target.value = "undone";
        event.target.parentElement.classList.remove("strikethrough");
    }
}

function clickedDeleteButton(element) {
    element.remove();
}

function clickedEditButton(element) { //Instead of hiding the delete button while editing, a prompt() is far simpler
    let tempElement = element;          
    let newTaskText = prompt("Please enter a new task to replace this one.");
    tempElement.textContent = newTaskText;
    tempElement = addButtons(tempElement);
}