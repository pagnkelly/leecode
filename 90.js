/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsetsWithDup = function(nums) {
  var result = []
  nums.sort()
  var temp = []
  function back(nums, index, temp) {

    if (index === nums.length) {
      return result.push([...temp])
    }
    temp.push(nums[index])
    back(nums, index + 1, temp)
    temp.pop()
    while (index < nums.length && nums[index] === nums[index + 1]) {
      index ++ 
    }
    back(nums, index + 1, temp)
  }

  back(nums, 0, temp)

  return result
};

console.log(subsetsWithDup([1,2,2]))