

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


//stop using "getElementByID" and instead use document.queryselector
//ID's are for javascript. Best Practice: DON'T USE ID'S WHEN NOT USING JAVASCRIPT

taskForm.addEventListener("submit", e => {
    e.preventDefault();
    let doList = document.getElementById("todo"); //holds <ul> element (as an object)
    let newTask = document.createElement("li"); //holds <li> element (as an object)
    let task = e.target["tsk"].value; //holds value entered into field
  //  newTask.textContent = task; //sets the text of the <li> to the user input
  // the above is no longer necessary when using bootstrap checkboxes
    newTask = setTaskClass(newTask);    //adds styling classes to the new task object
    newTask = addButtons(newTask, task);
    doList.appendChild(newTask);   //appends newTask object to the list, now with more styling!
    taskForm.reset();   //clears out the field after submitting text
    console.log(doList);
})


function setTaskClass(myNewTask) {
    myNewTask.className = "taskStyle";
    return myNewTask;
}

function addButtons(myNewTask, taskText) {
    myNewTask.insertAdjacentHTML('beforeend', `
        <div class="input-group">
            <input type="text" class="form-control" value="${taskText}">
            <div class="input-group-addon">
                    <input type="checkbox">
                    <button type="button" class="btn btn-default"><span class="glyphicon glyphicon-pencil"></span></button>
                    <button type="button" class="btn btn-default"><span class="glyphicon glyphicon-trash"></span></button>
            </div>
        </div>
    `);
    return myNewTask;
}

// <div class="input-group">
//   <input type="text" class="form-control" aria-label="...">
//   <div class="input-group-btn">
//     <!-- Buttons -->
//   </div>
// </div>