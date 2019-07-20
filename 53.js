/**
 * @param {number[]} nums
 * @return {number}
 */

var maxSubArray = function (nums) {
  var max = nums[0];
  nums.reduce((prev, next) => {
     if (prev <= 0) {
       prev = next;
     } else {
       prev += next;
     }
     max = max < prev ? prev : max;
     return prev;
  });
  return max;
};
// const a = [-2, 1, -3, 4, -1, 2, 1, -5, 4];
// const a = [-2, -1];
// const a = [-1, 0]
const a = [-1, 1, 2, 1];
console.log(maxSubArray(a));