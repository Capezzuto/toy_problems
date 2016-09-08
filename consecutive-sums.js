// Consecutive Sums
// Given an array of numbers, calculate the greatest sum of consecutive numbers in it. A single array item will count as a consecutive sum.

function sumArray (array) {
  var greatestSum = -Infinity;
  var n = 0;
  var permutationLength = array.length;
  var testSum;
  while(permutationLength > 0) {
  	for (var i = 0; i <= n; i++) {
  		testSum = sumStartEnd(array, i, i + permutationLength);
  		greatestSum = greatestSum > testSum ? greatestSum : testSum;
  	}
  	n++;
  	permutationLength--;
  }
  return greatestSum;
}

function sumStartEnd(array, start, end) {
	var sum = 0;
	for (var j = start; j < end; j++) {
		sum += array[j];
	}
	return sum;
}

/************Better Solution*******************/

function sumArrayN2 (array) {
  var greatestSum = array[0];
  var currentSum = 0;
  //iterate through array for start Number
  for(var i = 0; i < array.length; i++) {
    currentSum = array[i];
    greatestSum = Math.max(currentSum, greatestSum);
    for(var j = i + 1; j < array.length; j++) {
      currentSum += array[j];
      greatestSum = Math.max(currentSum, greatestSum);
    }
  }
  return greatestSum;
}

/************Linear (Best) Solution (credit to Kan Adachi)***********/

function sumArray(arr) {
  var greatestSum = arr[0];
  var greatestSumRunning = arr[0];

  for (var i = 0; i < arr.length; i++) {
    greatestSumRunning = Math.max(arr[i], greatestSumRunning + arr[i]);
    greatestSum = Math.max(greatestSumRunning, greatestSum);
  }
  return greatestSum;
}
