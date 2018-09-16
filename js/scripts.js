

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
    newTask.textContent = task; //sets the text of the <li> to the user input
    doList.appendChild(newTask);   //appends newTask object to the list!
    taskForm.reset();
    console.log(task);
})
