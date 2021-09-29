/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum2 = function(candidates, target) {
  candidates.sort((a, b) => a-b);
  var res = [];
  var fn = (t, nums, n) => {
    for (var i = n; i < candidates.length; i++) {
      if (candidates[i] === candidates[i-1] && i-1 >= n) continue;
      var a = t - candidates[i];
      nums.push(candidates[i]);
      if (a === 0) {
        res.push([...nums])
      } else if (a > 0) {
        fn(a, nums, i+1);
      }
      nums.pop();
    }
  }
  fn(target, [], 0)
  return res;
};


console.log(combinationSum2([10,1,2,7,6,1,5], 8));