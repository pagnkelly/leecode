/**
 * @param {number[]} nums
 * @param {number} target
 * @return {boolean}
 */
var search = function(nums, target) {
    var len = nums.length;
    if (len == 0) return false;
    var left = 0, right = len - 1;
    var mid = 0;
    while (left <=right) {
      mid = parseInt((left + right) / 2);
      if (nums[mid] == target) {
        return true;
      }

      if (nums[left] == nums[mid]) {
        left++;
        continue;
      }

      if (nums[right] == nums[mid]) {
        right--;
        continue;
      }

      if (nums[left] < nums[mid]) {
        if (target >= nums[left] && target < nums[mid]) {
          right = mid - 1;
        } else {
          left = mid + 1;
        }
      } else {
        if (target > nums[mid] && target <= nums[right]) {
          left = mid + 1;
        } else {
          right = mid - 1;
        }
      }
    }

    return false;
};


console.log(search([2,5,6,0,0,1,2], 3));