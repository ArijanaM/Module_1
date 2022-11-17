'use strict';

const choice = confirm('Should I calculate the square root?');
const target = document.querySelector('#target');
if (choice) {
  const num = prompt('Enter a number:');
  if (num >= 0) {
    target.innerHTML = `Square root of ${num} is ${Math.sqrt(+num)}`;
  } else {
    target.innerHTML = `Square root of neg number is ${num} is non-defined`;
  }
} else {
  target.innerHTML = `The square root will not be calculated`;
}