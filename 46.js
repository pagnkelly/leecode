/**
 * @param {number[]} nums
 * @return {number[][]}
 */


var permute = function (nums) {
  var res = [];
  var dfs = function (nums, i, j) {
    if (i === j) res.push([...nums]);


    for (var x = i; x < j; x++) {
      swap(nums, i, x);
      dfs(nums, i + 1, j);
      swap(nums, i, x);
    }
  }
  dfs(nums, 0, nums.length);
  return res;
};

var swap = function (arr, i, j) {
  [arr[i], arr[j]] = [arr[j], arr[i]];
}

console.log(permute([1, 2, 3]));
