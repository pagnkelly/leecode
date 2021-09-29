/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {
    var len = nums.length;
    var left = 0;
    var right = len - 1;
    var res = 0;
    while(left <= right) {
      var mid = Math.ceil((left + right) / 2);
      console.log((left + right + 1) >>> 1, mid)

      if (nums[mid] === target) {
        return mid;
      } else if (nums[mid] < target) {
        left = mid + 1;
        res = left;
      } else {
        right = mid - 1;
      }
    }

    return res < 0 ? 0 : res;
};


console.log(searchInsert([1,3,5,6], 0));