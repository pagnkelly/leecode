/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var threeSumClosest = function(nums, target) {
    var res;
    var len = nums.length;
    for (var i = 0; i < len; i++) {
      var itemI = nums[i];
      for(var j = i+1; j < len; j++) {
        var itemJ = nums[j];
        for (var z = j+1; z < len; z++) {
          var itemZ = nums[z];
          if (res === undefined || Math.abs(res) > Math.abs(itemI + itemJ + itemZ - target)) {
            res = itemI + itemJ + itemZ - target;
          }
        }
      }
    }
    return res + target;
};

var nums = [-1, 2, 1, -4];

console.log(threeSumClosest(nums, 1));