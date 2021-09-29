/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function(nums) {
    var end = 0;
    var max = 0;
    for (var i = 0; i < nums.length - 1; i++) {
      max = Math.max(max, nums[i] + i);
      if (i == end) {
        if (nums[i] == 0 && end == max) {
          return false;
        }
        end = max;
      }
    }
    return true;
};

console.log(canJump([2,5,0,0,4]));