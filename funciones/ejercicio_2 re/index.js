
function sum(num){
    if (num === 0) {
        return 0;
    } else {
        return num + sum(--num)
    }
}
var ressum
ressum= sum(4);     //10
document.write(ressum)