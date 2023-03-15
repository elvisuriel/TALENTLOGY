
function convertToBinary1 (number) {
    let num = number;
    let binary = (num % 2).toString();
    for (; num > 1; ) {
        num = parseInt(num / 2);
        binary =  (num % 2) + (binary);
    }
    console.log(binary);
}

window.onload = function () {
    console.log(convertToBinary1(25));
    console.log(convertToBinary1(8));
}