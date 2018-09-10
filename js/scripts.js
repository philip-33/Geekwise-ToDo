

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

taskForm.addEventListener("submit", e => {
    e.preventDefault();
    let toDoList = document.getElementById("todo");
    let doneList = document.getElementById("done");
    let newTask = document.createElement("li");
    let task = e.target["tsk"].value;
    newTask.textContent = message;
    list.appendChild(newTask);
    tastForm.reset();
    console.log(e.target["tsk"].value);
})