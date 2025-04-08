let newTask = document.getElementById('newTask'); //gets the text input from user in div class container
let TaskList = Document.getElementById('TaskList'); //assigns the HTML task list 

// need to somehow add a task
function addTask () {
    let task = document.createElement('li')
    task.appendChild(document.createTextNode(newTask.value));
    TaskList.appendChild(li);
    newTask.value
}