/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function (n) {
  var count = 0;
  if (n -1 > 0) {
    count += climbStairs(n - 1);
  } else if (n - 1 == 0) {
    count +=1;
  }
  if (n-2 > 0) {
    count += climbStairs(n - 2);
  } else if (n - 2 == 0) {
    count += 1;
  }

  return count;
};

console.log(climbStairs(4));