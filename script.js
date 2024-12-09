
const addButton = document.getElementById("add");
const todoInput = document.getElementById("input");
const todoList = document.getElementById("list");

addButton.addEventListener("click", () => {
  const taskText = todoInput.value;

  if (taskText === "") {
    alert("Please enter a task!");
    return;
  }
  const li = document.createElement("li");
  li.textContent = taskText;
  todoList.appendChild(li);
todoInput.value = "";
});
