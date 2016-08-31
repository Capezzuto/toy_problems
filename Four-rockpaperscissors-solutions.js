// Given a number of rounds, find every possible sequence of Rock-Paper-Scissors choices for one player.

/*****************SOLUTION 1**************************/
//Iterative approach, no recursion

  function rockPaperPermutation (roundCount) {
    var outcomes;
  	while(roundCount > 0) {
  		var temp = [];
  		outcomes = outcomes || [''];
  		outcomes.forEach(function(outcome) {
  			temp.push(outcome + 'r');
  			temp.push(outcome + 'p');
  			temp.push(outcome + 's');
  		});
  		outcomes = temp.slice();
  		roundCount--;
  	}
  	return outcomes || [];
  }

/*****************SOLUTION 2**************************/
//Bottom-up (breadth-first) Build an array starting from base of ['r', 'p', 's']
//Array contents are built three letters at a time and pushed to outcomes array, which is then passed back down the recursive call stack

// we need: handSigns, an array of ['r', 'p', 's'];
// outcomes: an empty array to collect permutations
// permutations: a temporary holder or all possibilities

//at base case, return handSigns
//for each call, for each handsign, set permutations = func(count - 1)
//for each permutation, concat a handsign and push to outcomes

var rps = function(count) {
  var handSigns = ['r', 'p', 's'];
  var outcomes = [];
  var permutations;

  if (count === 0) return [];
  if (count === 1) return handSigns;
  if (count > 1) {
    for (var h = 0; h < handSigns.length; h++) {
      permutations = rps(count - 1);
      for (var i = 0; i < permutations.length; i++) {
        outcomes.push(permutations[i] + handSigns[h]);
      }
    }
    return outcomes;
  }


};

/*****************SOLUTION 3**************************/
//Variation on solution 2 with much worse time complexity

var rpsMap = function(count) {
  var handSigns = ['r', 'p', 's'];
  var outcomes = [];
  var permutations;

  if(count === 0) {
    return [];
  }
  if (count === 1) {
    return handSigns;
  }
  if (count > 1) {
    return rpsMap(count - 1).map(function(perm) {
      var perms = [];
      handSigns.forEach(function(hand) {
        perms.push(perm + hand);
      });

      return perms;
    }).flatten();
  }
};

Array.prototype.flatten = function() {
  var results = [];
  this.forEach(function(item) {
    item.forEach(function(nestedItem) {
    	results.push(nestedItem);
    });
  });
  return results;
};

/*****************SOLUTION 4**************************/
//Depth-first--once length of string is equal to round count, push to results array.
//Array gets built one complete string at a time

function rockPaperScissor(rCount) {
  var results = [];
  var rps = 'rps';

  function permute(pstr) {
    if (pstr.length === rCount) { //base case
      results.push(pstr);
    }
    for(var i = 0; i < rps.length; i++) {
      permute(pstr + rps[i]);
    }
  }
  permute('');
  return results;
}
