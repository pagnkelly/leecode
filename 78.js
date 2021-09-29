/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function(nums) {
    var res = []
    for (var i = 0; i< (1 << nums.length); i ++) {
      var sub = []
      for ( var j = 0; j < nums.length; j++) {
        if (((i >> j) & 1) == 1) sub.push(nums[j]);
      }
      res.push(sub);
    }
    return res
};
console.log(subsets([1, 2, 3]));


//  0 [] [] 
//  1 [1] [[1]]                                  []                                                      2 [2]  [[1], [1, 2], [1, 2, 3], [1 , 3] [2]]    3 [3]
//  2 [1, 2] [[1], [1, 2]]                        [1]      3 [1 , 3] [[1], [1, 2], [1, 2, 3], [1 , 3]]   3 [2, 3] ...                                    4 
//  3  [1, 2, 3] [[1], [1, 2], [1, 2, 3]]       [1, 2]     4                                             4
//  4  


var backtrack  = function (nums, i, sub, res) {
  for (var j = i; j< nums.length; j++) {
    if (j > i && nums[j] == nums[j - 1]) continue;
    sub.push(nums[j]);
    res.push([...sub]);
    backtrack(nums, j + 1, sub, res);
    sub.pop();
}
  return res;
}

console.log(backtrack([1, 2, 3], 0, [], []));