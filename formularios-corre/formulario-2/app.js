// Seleccionar los elementos necesarios del DOM
const taskLists = document.querySelectorAll('.task-list');
const addTaskForm = document.querySelector('.add-task form');

// Crear una lista de tareas vacía
let tasks = [];

// Función para renderizar la lista de tareas
function renderTaskList() {
  taskLists.forEach(list => {
    list.innerHTML = '';
    const status = list.parentElement.classList[0];
    const filteredTasks = tasks.filter(task => task.status === status);
    filteredTasks.forEach(task => {
      const li = document.createElement('li');
      li.textContent = task.title;
      li.dataset.id = task.id;
      li.setAttribute('draggable', true);
      list.appendChild(li);
    });
  });
}

// Función para agregar una tarea
function addTask(event) {
  event.preventDefault();
  const title = document.getElementById('title').value;
  const description = document.getElementById('description').value;
  const dueDate = document.getElementById('due-date').value;
  const id = Date.now().toString();
  const task = { id, title, description, dueDate, status: 'pending' };
  tasks.push(task);
  renderTaskList();
  addTaskForm.reset();
}

// Función para editar una tarea
function editTask(event) {
  const li = event.target.closest('li');
  const taskId = li.dataset.id;
  const task = tasks.find(task => task.id === taskId);
  const newTitle = prompt('Ingrese el nuevo título:', task.title);
  if (newTitle !== null) {
    task.title = newTitle;
    renderTaskList();
  }
}
function handleDrop(event) {
    event.preventDefault();
    const taskId = event.dataTransfer.getData('text/plain');
    const newStatus = event.target.parentElement.classList[0];
    const task = tasks.find((task) => task.id === taskId);
    if (task) {
      task.status = newStatus;
      const targetList = event.target.closest('.task-list');
      const taskElements = targetList.querySelectorAll('li');
      let insertBeforeElement = null;
      taskElements.forEach((element) => {
        const elementId = element.getAttribute('data-id');
        if (insertBeforeElement === null && elementId !== taskId) {
          const elementStatus = element.closest('.task-list-wrapper').classList[0];
          if (elementStatus === newStatus) {
            insertBeforeElement = element;
          }
        }
      });
      targetList.insertBefore(createTaskElement(task), insertBeforeElement);
      removeTaskElement(taskId);
    }
  }
  


 //Función para manejar el inicio del arrastre de una tarea
function handleDragStart(event) {
 event.dataTransfer.setData('text/plain', event.target.dataset.id);
}

//Función para manejar el arrastre de una tarea sobre una lista
function handleDragOver(event) {
 event.preventDefault();
}


// Renderizar la lista de tareas
renderTaskList();

// Agregar un evento de escucha para el envío del formulario de agregar tarea
addTaskForm.addEventListener('submit', addTask);

// Agregar un evento de escucha para la edición de una tarea
document.addEventListener('click', event => {
  if (event.target.matches('li')) {
    editTask(event);
  }
});

// Agregar eventos de escucha para el arrastre de tareas
document.addEventListener('dragstart', handleDragStart);
document.addEventListener('dragover', handleDragOver);
document.addEventListener('drop', handleDrop);
