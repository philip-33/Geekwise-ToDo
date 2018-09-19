// function for adding necessary buttons to task items
function addButtons(element) {
    element.insertAdjacentHTML('afterbegin', `<input type="checkbox" name="doneBox" value="undone">`);
    // element.insertAdjacentHTML('afterbegin', `<button type="button" class="btn btn-success btn-sm doneButton">
    //     <span class="glyphicon glyphicon-unchecked"></span></button>`);
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
    newTask.setAttribute("class", "taskItem"); //javascript way of setting li class
    newTask.setAttribute("value", "undone"); //sets special property to track doneness
    newTask.textContent = task; 
    newTask = addButtons(newTask);
    doList.appendChild(newTask);   //appends newTask li object to the ul
    taskForm.reset();   //clears out the field after submitting text
    console.log(doList);
}) 

todo.onclick = function(event) {   // "listener" (not quite) that looks for click events that happen on the button elements
    // console.log(event.target.className);
    // console.log(event.target.parentElement);  

    //unless both sets of classes are specified, it will be possible to click on the icon in the middle and not catch the click!
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

    if (event.target.className == "btn btn-success btn-sm doneButton") {
    clickedDoneButton(event.target.parentElement);
    } else if (event.target.className == "glyphicon glyphicon-unchecked" || event.target.className == "glyphicon glyphicon-ok") { //additional catch for when the check mark is done
    clickedDoneButton(event.target.parentElement.parentElement);
    }
}

todo.onchange = function(event) {
    console.log(event.target);
    console.log("got that check");
}

function clickedDeleteButton(element) {
    element.remove();
}

function clickedEditButton(element) {
    let tempElement = element;
    let newTaskText = prompt("Please enter a new task to replace this one.");
    tempElement.textContent = newTaskText;
    tempElement = addButtons(tempElement);
}

function clickedDoneButton(element) {
    let tempElement = element;
    console.log(tempElement);
}