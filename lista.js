
function addTask() {
    let input = document.getElementById("taskInput");
    let taskText = input.value.trim(); 

    if (taskText === "") {
        alert("Por favor, insira uma tarefa.");
        return;
    }

    
    let listItem = document.createElement("li");
    listItem.classList = 'task-item';

   
    listItem.textContent = taskText;

    
    let completeButton = document.createElement("button");
    completeButton.classList = 'button-complete';
    completeButton.textContent = "Concluir";

    completeButton.onclick = function () {
        toggleTaskComplete(listItem);
    };
    listItem.appendChild(completeButton);

    
    let deleteButton = document.createElement("button");
    deleteButton.classList = 'button-delete';
    deleteButton.textContent = "Excluir";
    deleteButton.onclick = function () {
        deleteTask(listItem);
    };
    listItem.appendChild(deleteButton);

    
    document.getElementById("taskList").appendChild(listItem);

    
    input.value = "";
}

function toggleTaskComplete(task) {
    task.classList.toggle("completed");
}

function deleteTask(task) {
    task.remove();
}