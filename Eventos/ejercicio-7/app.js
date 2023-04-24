// Seleccione el elemento con ID menu
const menu = document.querySelector('#menu');

// Agregar un evento de desplazamiento a la ventana
window.addEventListener('scroll', function() {
  // Verifique si el usuario ha desplazado más allá de 200 píxeles
  if (window.scrollY > 200) {
    // Si es así, cambia el color de fondo del elemento con ID menu
    menu.style.backgroundColor = 'red';
  } else {
    // De lo contrario, regrese al color de fondo original
    menu.style.backgroundColor = 'black';
  }
});