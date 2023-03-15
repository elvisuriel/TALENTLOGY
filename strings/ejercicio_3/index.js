

const regex = /^09[0-9]{7}$/gm;
/* Asigna a esta variable el valor que quieres verificar */
const str = prompt("Introduce un número de teléfono con el formato +xx-xxxxxxxxx-xx")

let m;

while ((m = regex.exec(str)) !== null) {
    // This is necessary to avoid infinite loops with zero-width matches
    if (m.index === regex.lastIndex) {
        regex.lastIndex++;
    }
    
    // The result can be accessed through the `m`-variable.
    m.forEach((match, groupIndex) => {
        console.log(`Found match, group ${groupIndex}: ${match}`);
    });
}
/*
if (/^[09][0-9]{1,7}$/.test('091234567')){
    return true;
  }else{
    return false;
  }
  */