const btnColor = document.getElementById('boton-color');
const cajaColor = document.getElementById('cambio-color');

btnColor.addEventListener('click', () => {
    cajaColor.style.backgroundColor = getRandomColor();
});

function getRandomColor() {
    const letras = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letras[Math.floor(Math.random() * 16)];
    }
    return color;
}
