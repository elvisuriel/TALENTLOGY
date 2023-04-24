const botonLi = document.getElementById("boton-li");
const listaTareas = document.getElementById("lista-tareas");

botonLi.addEventListener("click", () => {
  const nuevaTarea = document.createElement("li");
  nuevaTarea.textContent = "Nueva tarea";
  listaTareas.appendChild(nuevaTarea);
});
