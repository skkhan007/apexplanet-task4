let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

function renderTasks() {
  document.getElementById("list").innerHTML = "";
  tasks.forEach((task, index) => {
    let li = document.createElement("li");
    li.innerText = task;
    li.onclick = () => {
      tasks.splice(index, 1);
      localStorage.setItem("tasks", JSON.stringify(tasks));
      renderTasks();
    };
    document.getElementById("list").appendChild(li);
  });
}

function addTask() {
  const task = document.getElementById("task").value;
  if (task) {
    tasks.push(task);
    localStorage.setItem("tasks", JSON.stringify(tasks));
    renderTasks();
    document.getElementById("task").value = "";
  }
}

renderTasks();
