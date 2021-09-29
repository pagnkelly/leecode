/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var sortColors = function(nums) {
    var len = nums.length;
    var i = 0;
    var j = len - 1;
    var cur = 0;
    
    while(cur <= j) {
      var item = nums[cur]
      if (item === 0) {
        swap(nums, i, cur)
        cur++
        i++
      } else if (item === 2) {
        swap(nums, cur, j)
        j--
      } else {
        cur++;
      }
    }

    return nums;
};

var swap = function (nums, i, j) {
  var temp = nums[i];
  nums[i] = nums[j];
  nums[j] = temp;
}
console.log(sortColors([2,0,1]));