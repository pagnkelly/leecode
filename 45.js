/**
 * @param {number[]} nums
 * @return {number}
 */
var jump = function(nums) {
   var len = nums.length;
   var end = 0;
   var max = 0;
   var step = 0;
   for (var i = 0; i < len; i++) {
      max = Math.max(nums[i] + i, max);

      if (end === i) {
        end = max

        step ++;
      }
   }
   return step - 1;
};


console.log(jump([2,3,1,1,4]));