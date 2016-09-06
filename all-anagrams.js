// For any input string, write a function that will output all possible anagrams of the input string as an array of strings, allowing duplicates

function allAnagrams (string) {
  var baseArray = string.split('');
  var allStrings = [];
  function getPermutations(arr, remaining) {
    if (arr.length === string.length) {
      var anagram = arr.join('');
      if(allStrings.indexOf(anagram) === -1) {
        allStrings.push(anagram);
      }
      return;
    }
    for (var i = 0; i < remaining.length; i++) {
      var workingArr = remaining.slice();
      var letter = workingArr.splice(i, 1);
      getPermutations(arr.concat(letter), workingArr);
    }
  }
  getPermutations([], baseArray);
  return allStrings;
}
