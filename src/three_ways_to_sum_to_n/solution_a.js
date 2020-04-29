// Problem 1 A
// My solution: Use for loops to find summation to n
// Time complexity: O(n)
// Function will be called n times so not efficent solution

var sum_to_n = function(n) {
  var number = 0;
  for (var i = 0; i <= n; i++) {
    number += i;
  }
  return number;
}

/** Tester code
  * var x = sum_to_n(5)
  * console.log(x);
**/
