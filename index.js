const newTask = document.getElementById('task'); 
const TaskList = document.getElementById('TaskList');
const addButton = document.getElementById('addButton')

addButton.addEventListener('click', function(event) {
    event.preventDefault(); 
    
    if (newTask.value !== "") { 
        let task = document.createElement('ul');
        let taskCheckbox = document.createElement('input'); 
        taskCheckbox.type = 'checkbox';
        
        task.append(taskCheckbox, document.createTextNode(newTask.value));

        TaskList.appendChild(task); 

        newTask.value = ''; 
}})
