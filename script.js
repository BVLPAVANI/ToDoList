const addButton = document.querySelector("#add");
const taskInput = document.querySelector("#input");
const taskList = document.querySelector("#list");
addButton.addEventListener("click", addTask);
function addTask() {
  const taskText = taskInput.value;
function isInputEmpty(input) {
  return input.trim() === ""; 
}
if (isInputEmpty(taskText)) {
  alert("Please enter a task!");
  return;
}
  const taskItem = createTaskElement(taskText);
  taskList.appendChild(taskItem);
  taskInput.value = "";
}
function createTaskElement(taskText) {
  const li = document.createElement("li");
  li.textContent = taskText;
  const deleteButton = document.createElement("button");
  deleteButton.textContent = "Delete";
  deleteButton.className = "delete";
  deleteButton.addEventListener("click", () => li.remove());

  li.appendChild(deleteButton);

  return li;
}
