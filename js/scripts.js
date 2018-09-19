

// This block models the logic necessary to get the text from the user:
// messageForm.addEventListener("submit", e => {
//     e.preventDefault();
//     let list = document.getElementById("list");
//     let newMessage = document.createElement("li");
//     let message = e.target["msg"].value;
//     newMessage.textContent = message;
//     list.appendChild(newMessage);
//     messageForm.reset();
//     // console.log(e.target["msg"].value);
//   })

//ID's are for javascript. Best Practice: DON'T USE ID'S WHEN NOT USING JAVASCRIPT

taskForm.addEventListener("submit", e => { //takes form with name="taskForm"
    e.preventDefault();
    let doList = document.getElementById("todo"); //holds <ul> element with ID "todo", used as parent for adding elements
    let newTask = document.createElement("li"); //holds newly created <li> element, to be inserted as a child in the <ul>
    let task = e.target["tsk"].value; //holds value entered into "new task" text entry field
    newTask.setAttribute("class", "taskItem"); //javascript way of setting li class
    newTask.textContent = task; //javascript way of setting text component of li
    // newTask = addCheckBox(newTask);
    newTask.insertAdjacentHTML('afterbegin', `<button type="button" class="btn btn-success btn-sm doneButton">
    <span class="glyphicon glyphicon-unchecked"></span></button>`);    
    // newTask.insertAdjacentHTML('afterbegin', `<input type="checkbox" class="taskItemCheckBox" value="undone">`); //adds checkbox
    newTask.insertAdjacentHTML('beforeend', `<button type="button" class="btn btn-danger btn-sm deleteButton">
        <span class="glyphicon glyphicon-trash"></span></button>`);                                              //adds a delete button
    newTask.insertAdjacentHTML('beforeend', `<button type="button" class="btn btn-primary btn-sm editButton">
        <span class="glyphicon glyphicon-pencil"></span></button>`);                                             //adds an edit button

    doList.appendChild(newTask);   //appends newTask object to the list, now with more styling!
//investigate logic here, may be easier to use adjacenthtml to insert single checkbox element, could replace "addCheckBox()"
//listeners will go below in "always on" portion of javascript
    taskForm.reset();   //clears out the field after submitting text
    console.log(doList);
}) //once this function completes, only a <li> with text will exist.


// below is the old way of building the interactive components. Moving away from this.
// function addButtons(myNewTask, taskText) {
//     myNewTask.insertAdjacentHTML('beforeend', `
//         <div class="input-group">
//             <input type="text" class="form-control" value="${taskText}">
//             <div class="input-group-addon">
//                     <input type="checkbox">
//                     <button type="button" class="btn btn-default"><span class="glyphicon glyphicon-pencil"></span></button>
//                     <button type="button" class="btn btn-default"><span class="glyphicon glyphicon-trash"></span></button>
//             </div>
//         </div>
//     `);
//     return myNewTask;
// }