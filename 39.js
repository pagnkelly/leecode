/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function(candidates, target) {
    candidates.sort((a, b) => a-b);
    var res = [];
    var fn = (t, nums, n) => {
      for (var i = n; i < candidates.length; i++) {
        var a = t - candidates[i];
        nums.push(candidates[i]);
        if (a === 0) {
          res.push([...nums])
        } else if (a > 0) {
          fn(a, nums, i);
        }
        nums.pop();
      }
    }
    fn(target, [], 0)
    return res;
};

console.log(combinationSum([2,3,6,7], 7));