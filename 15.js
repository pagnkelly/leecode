/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
    if (nums.length < 3 ) return [];
    var ling = false;
    var sets2 = new Set();
    var result = [];
    for (var i = 0; i < nums.length; i++) {
      var item = nums[i];
      for (var j = i+1; j < nums.length; j++) {
        var jtem = nums[j];
        if (item === 0 && jtem === 0) {
          if (!ling) {
            ling = true;
            result.push([0 , 0, 0]);
          }
        } else {
          var c = -(item+jtem);
          var sets = new Set(nums.slice(j+1));
          if (sets.has(c)) {

          }
        }
      }
    }
    return result;
};
var threeSum2 = function(nums) {
    nums = nums.sort((a,b) => a-b);
    var res = [];
    for(var i=0; i<nums.length;i++){
        if(i==0 || nums[i]>nums[i-1]) {
            var left = i+1;
            var right = nums.length - 1;
            while(left < right) {
                var s = nums[i]+nums[left]+nums[right];
                if(s == 0) {
                    res.push([nums[i],nums[left++],nums[right--]]);
                    while(nums[left] == nums[left-1]) {
                        left++;
                    }
                    while(nums[right] == nums[right+1]) {
                        right--;
                    }
                } else if(s > 0) {
                    right--;
                    while(nums[right] == nums[right+1]) {
                        right--;
                    }
                } else {
                    left++;
                    while(nums[left] == nums[left-1]) {
                        left++;
                    }
                }
            }
        }
    }
    return res;
}
console.log(threeSum([-1, 0, 1, 2, -1, -4]));
console.log(threeSum([-4, 2, 2]));
console.log(threeSum([1,2,-2,-1]));
console.log(threeSum([0,0,0,0]));
