const nr1 = parseInt(prompt('Type in a number: '));
const nr2 = parseInt(prompt('Type in a number: '));
const nr3 = parseInt(prompt('Type in a number: '));

const sum = parseInt(nr1 + nr2 + nr3);
const prod = nr1 * nr2 * nr3;
const avg = sum / 3;

document.querySelector('#target').innerHTML = 'Sum is: ' + sum +
    ' Product is: ' + prod + ' Average is: ' + avg;



