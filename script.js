const taskInput = document.getElementById("taskInput");
const addButton = document.getElementById("addButton");
const taskList = document.getElementById("taskList");

addButton.addEventListener("click", addTask);

taskInput.addEventListener("keydown", function (event) {
  if (event.key === "Enter") {
    addTask();
  }
});

function addTask() {
  const taskText = taskInput.value;

  if (taskText !== "") {
    const li = document.createElement("li");

    const taskTextNode = document.createTextNode(taskText);
    li.appendChild(taskTextNode);

    const deleteButton = document.createElement("span");
    deleteButton.innerHTML = "X";
    deleteButton.className = "deleteButton";
    deleteButton.addEventListener("click", deleteTask);
    li.appendChild(deleteButton);

    taskList.appendChild(li);

    taskInput.value = "";
  }
}

function deleteTask(event) {
  const listItem = event.target.parentElement;
  taskList.removeChild(listItem);
}
