/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
  var x = 0;
  if (nums.length == 0) return 0;
  if (nums.length == 1) return 1;
  var item = nums[0];
  for (var i = 1; i < nums.length; i++) {
    if (item !== nums[i]) {
      item = nums[i];
      x++;
      if (i - x > 0) {
        nums[x] = nums[i];
      }
    }
  }
  return x + 1;
};
var a = [0,1];
console.log(removeDuplicates(a));
console.log(a);
