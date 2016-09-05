// PHONE KEYPAD - Each phone has a set of letters mapped to certain numbers.
// Write a function that takes up to four digits of a phone number, and returns a list of all of the words that can be written on the phone with that number. (You should return all permutations, not only English words.)


function telephoneWords (digitString) {
  var allKeys = ['0', '1', 'ABC', 'DEF', 'GHI', 'JKL', 'MNO', 'PQRS', 'TUV', 'WXYZ'];
  var allPermutes = [];

  function getKeyCombinations(currentPermutation) {
    var n = currentPermutation.length;
    if(n === digitString.length) {
      allPermutes.push(currentPermutation);
    } else {
      //currentKey will be the string from the allKeys array corresponding to the specified digit in the digitString
      var currentKey = allKeys[Number(digitString[n])];
      for(var i = 0; i < currentKey.length; i++){
        getKeyCombinations((currentPermutation + currentKey[i]));
      }
    }
  }

  getKeyCombinations('');
  return allPermutes;
}

function telephoneWordsNoRecursionVersion (digitString) {
var allKeys = ['0', '1', 'ABC', 'DEF', 'GHI', 'JKL', 'MNO', 'PQRS', 'TUV', 'WXYZ'];
var allPermutes = [''];
var currentKey;
var tempArray = [];

for(var i = 0; i < digitString.length; i++) {
  tempArray = [];
  currentKey = allKeys[Number(digitString[i])];
    for(var k = 0; k < currentKey.length; k++) {
      for(var j = 0; j < allPermutes.length; j++) {
        tempArray.push(allPermutes[j] + currentKey[k]);
      }
    }
    allPermutes = tempArray.slice();
}
return allPermutes;
}
