let taskCounter = 2;

document.getElementById('addBtn').addEventListener('click', addTask);
document.getElementById('taskInput').addEventListener('keypress', function (e) {
  if (e.key === 'Enter') {
    addTask();
  }
});

document.addEventListener('DOMContentLoaded', function () {
  const checkboxes = document.querySelectorAll('input[type="checkbox"]');
  checkboxes.forEach(checkbox => {
    if (checkbox.checked) {
      checkbox.parentElement.classList.add('completed');
    }
  });
});

function addTask() {
  const taskInput = document.getElementById('taskInput');
  const taskList = document.getElementById('taskList');
  const taskText = taskInput.value.trim();

  if (taskText === '') {
    alert('Please enter a task!');
    return;
  }

  taskCounter++;

  const li = document.createElement('li');
  li.innerHTML = `
    <input type="checkbox" id="task${taskCounter}" onchange="toggleTask(this)">
    <label for="task${taskCounter}">${taskText}</label>
    <button class="delete-btn" onclick="deleteTask(this)">×</button>
  `;

  taskList.appendChild(li);
  taskInput.value = '';
  taskInput.focus();
}

function toggleTask(checkbox) {
  const listItem = checkbox.parentElement;
  if (checkbox.checked) {
    listItem.classList.add('completed');
  } else {
    listItem.classList.remove('completed');
  }
}

function deleteTask(deleteBtn) {
  const listItem = deleteBtn.parentElement;
  listItem.remove();
}
