const newTask = document.getElementById('task'); 
const TaskList = document.getElementById('TaskList');
const addButton = document.getElementById('addButton')

addButton.addEventListener('click', function(event) {
    event.preventDefault(); 

// adding a task
    if (newTask.value !== "") { 
        let task = document.createElement('ul');
        let taskCheckbox = document.createElement('input'); 
        taskCheckbox.type = 'checkbox';

        
        let taskItem = document.createElement('div');
        let taskText = document.createTextNode(newTask.value);
        taskItem.append(taskCheckbox, taskText);
        taskItem.classList.add('task-item');
        task.appendChild(taskItem);

        TaskList.appendChild(task); 

        newTask.value = ''; 
}})

