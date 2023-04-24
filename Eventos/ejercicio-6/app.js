const items = document.querySelectorAll("li");

for (let i = 0; i < items.length; i++) {
  items[i].addEventListener("click", function() {
    // Elimina la clase "activo" de todos los elementos
    for (let j = 0; j < items.length; j++) {
      items[j].classList.remove("activo");
    }
    
    // Agrega la clase "activo" solo al elemento clickeado
    this.classList.add("activo");
  });
}
