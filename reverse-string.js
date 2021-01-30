// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

In a sigle line 
function reverse(str) {
  return str.split("").reverse().join(""); 
}

//second solution without .reverse class

function reverse(str) {
  let reversed = "";
  
  //desmember the str param in characters and add it to a empty string one by one
  for (let character of str) {
    reversed = character + reversed;
  }
  return reversed;
}

module.exports = reverse;
