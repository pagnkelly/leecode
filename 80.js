/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    var len = nums.length;
    if (len == 0) return 0;
    var count = 0;
    var index = 0;
    for (var i = 0; i < len; i++) {
      var item = nums[i];
      if (nums[i+1] !== undefined) {

        if (item === nums[i+1]) {
          count++;
          if (count < 2) {
            index++
          }
        } else {
          index++
          count = 0;
        }
        nums[index] = nums[i+1]
      }
    }
    console.log(nums)
    return index + 1;
};



console.log(removeDuplicates([0,0,1,1,1,1,2,3,3]));