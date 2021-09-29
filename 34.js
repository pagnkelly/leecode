/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function(nums, target) {
  var len = nums.length;
  var left = 0;
  var right = len - 1;
  while(left <= right){
    var mid = Math.ceil((left + right) / 2)
    if (nums[mid] === target) {
      var l = mid;
      var r = mid;
      var res = [];
      while (nums[l] === target) { res[0] = l; l--; };
      while (nums[r] === target) { res[1] = r; r++; };
      return res;
    } else if (nums[mid] < target) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }

  return [-1, -1];
};


console.log(searchRange([5,7,7,8,8,10], 1));
