function LongestWord(sen) { 

  var stringSplit = sen.split(' ')
  var longestWord = 0
  var result = ''  

  for(var i = 0; i < stringSplit.length; i++) {
    if(stringSplit[i].length > longestWord) {
      longestWord = stringSplit[i].length
      result = stringSplit[i]
    }
  }

  return result; 

}
   
// keep this function call here 
console.log(LongestWord(readline()));
