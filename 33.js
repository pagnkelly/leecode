/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
  var start = 0;
  var end = nums.length - 1;
  if (nums.length == 0) return -1;
  return find(start, end, nums, target);

};

var find = function(start, end, nums, target) {
  if (start === end) return nums[start] === target ? start : -1;
  var mid = parseInt((start + end) / 2);
  if (nums[start] < nums[mid]) {
    if (target < nums[mid]) {
      return twoSearch(start, mid, nums, target)
    } else {
      return find(mid, end, nums, target)
    }
  } else {
    if (target > nums[mid]) {
      return twoSearch(mid, end, nums, target)
    } else {
      return find(start, mid, nums, target)
    }
  }
}

var twoSearch = function(l, r, nums, target) {

  while (l <= r) {
    var mid = parseInt((r + l) / 2);
    if (nums[mid] === target) return mid;
    if (nums[mid] < target) {
      l = mid + 1;
    } else {
      r = mid - 1;
    }
  }
  return -1;
}

console.log(search([1], 0));
