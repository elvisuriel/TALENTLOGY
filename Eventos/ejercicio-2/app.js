const form = document.querySelector('form');
const nombreInput = document.querySelector('#nombre');
const mensajeDiv = document.querySelector('#mensaje');

form.addEventListener('submit', (event) => {
  event.preventDefault();
  const nombre = nombreInput.value;
  mensajeDiv.textContent = `Nombre: ${nombre}`;
  alert(`Nombre: ${nombre}`);
});
