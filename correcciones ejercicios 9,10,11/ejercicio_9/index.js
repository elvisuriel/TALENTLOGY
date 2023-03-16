const alumnos = [];

while (true) {
  const nombre = prompt('Introduce el nombre del alumno (o * para terminar)');
   if (nombre === '*') {
    break;
  }

  const edad = parseInt(prompt('Introduce la edad del alumno'));

  alumnos.push({ nombre, edad });
}

const mayoresDeEdad = alumnos.filter(alumno => alumno.edad >= 18);

console.log('Alumnos mayores de edad:');
mayoresDeEdad.forEach(alumno => console.log(`- ${alumno.nombre} (${alumno.edad} años)`));

let edadMayor = 0;
alumnos.forEach(alumno => {
  if (alumno.edad > edadMayor) {
    edadMayor = alumno.edad;
  }
});

const alumnosConEdadMayor = alumnos.filter(alumno => alumno.edad === edadMayor);

console.log("Alumno con mayor edad " + edadMayor +" años:");
alumnosConEdadMayor.forEach(alumno => console.log("- " + alumno.nombre));
