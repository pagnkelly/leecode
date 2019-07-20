/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

// time: n2 space: 1
var twoSum = function(nums, target) {
    var len = nums.length;
    if (len < 2 ) return;

    for (var i = 0; i < len; i++) {
      for (var j = i+1; j < len; j++) {
        if(nums[i] + nums[j] === target) return [i, j];
      }
    }
};




// time: n space: n
var twoSum2 = function(nums, target) {
    var len = nums.length;
    if (len < 2 ) return;
    var hash = {};
    for (var i = 0; i < nums.length; i++) {
      hash[nums[i]] = i;
    }
    for (var i = 0; i < nums.length; i++) {
      var item = nums[i];
      var m = target - item;
      if (hash[m] && hash[m] !== i) {
        return [i, hash[m]];
      }
    }
};

// time: n, space: n
var twoSum3 = function(nums, target) {
    var len = nums.length;
    if (len < 2 ) return;
    var hash = {};
    for (var i = 0; i < nums.length; i++) {
      var item = nums[i];
      var m = target - item;
      if (hash[m] !== undefined && hash[m] !== i) {
        return [i, hash[m]];
      }
      hash[item] = i;
    }
};

var res = twoSum3([2,7,11,15], 9);
console.log(res);
