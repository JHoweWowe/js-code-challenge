// Problem 1 C
// My solution: Use arithmetic series formula
// This works as the first positive number is 1 and last number is n
// Time complexity: O(1)

var sum_to_n = function(n) {
  var number = (n/2)*(1+n);
  return number;
}

/** Tester code
  * var z = sum_to_n(5)
  * console.log(z);
**/
