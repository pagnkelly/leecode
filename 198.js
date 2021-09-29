/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function(nums) {
    var len = nums.length;
    if (len < 1) return 0;
    if (len == 1) return nums[0];
    if (len == 2) return Math.max(nums[0],nums[1]);
    var prev = nums[0];
    var prev2 = 0;
    for (var i = 1; i < len; i++) {
        var item = nums[i];
        var temp = prev;
        prev = Math.max(prev2 + item, prev);
        prev2 = temp;
    }
    return prev;
};

const a = [1,2,3,1];
const b = [2,7,9,3,1];
const c = [2, 1, 1, 2];
console.log(rob(a));
console.log(rob(b));
console.log(rob(c));