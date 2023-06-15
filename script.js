// Get necessary elements from the DOM
const taskInput = document.getElementById('taskInput');
const addButton = document.getElementById('addButton');
const taskList = document.getElementById('taskList');
const completedTaskList = document.getElementById('completedTaskList');

// Function to create a new task
function createTask(task) {
  const li = document.createElement('li');
  const taskText = document.createElement('span');
  taskText.textContent = task;
  li.appendChild(taskText);

  const editIcon = document.createElement('i');
  editIcon.className = 'fas fa-pencil-alt icon';
  li.appendChild(editIcon);

  const deleteIcon = document.createElement('i');
  deleteIcon.className = 'fas fa-trash-alt icon';
  li.appendChild(deleteIcon);

  const checkbox = document.createElement('input');
  checkbox.type = 'checkbox';
  li.appendChild(checkbox);

  // Event listener for editing a task
  editIcon.addEventListener('click', function () {
    const newTask = prompt('Enter the updated task:');
    if (newTask) {
      taskText.textContent = newTask;
    }
  });

  // Event listener for deleting a task
  deleteIcon.addEventListener('click', function () {
    li.remove();
  });

  // Event listener for completing a task
  checkbox.addEventListener('change', function () {
    if (checkbox.checked) {
      taskText.classList.add('completed');
      completedTaskList.appendChild(li);
    } else {
      taskText.classList.remove('completed');
      taskList.appendChild(li);
    }
  });

  taskList.appendChild(li);
}

// Event listener for adding a new task
addButton.addEventListener('click', function () {
  const task = taskInput.value;
  if (task) {
    createTask(task);
    taskInput.value = '';
  }
});
