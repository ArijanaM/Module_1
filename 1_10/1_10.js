const diceNr = parseInt(prompt('How many numbers of dice: '));
const diceNrDesire = parseInt(prompt('What sum do you want:'));
let odd = 0;

for (let i = 0; i <= 10000; i++) {
  let roll = 0;
  for (let d = 1; d <= diceNr; d++) {
    roll += Math.floor(Math.random() * 6) + 1;
    if (roll == diceNrDesire) {
      odd++;
    }
  }
}
probability = (odd / 10000) * 100;
document.querySelector(
    '#target').innerHTML = `Probability is ${probability}`;