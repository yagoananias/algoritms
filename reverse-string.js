// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

function reverse(str) {
  let string = str.split("");
  let revString = string.reverse();
  let joinString = revString.join("");
  
  return joinString;
}

module.exports = reverse;
