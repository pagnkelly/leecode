/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function(height) {
    var sum = 0;
    var len = height.length;
    var left = 0;
    var right = len - 1;

    var leftMax = 0;
    var rightMax = 0;

    while (left < right) {
      if (height[left] < height[right]) {
        if (height[left] > leftMax) {
          leftMax = height[left]
        } else {
          sum += leftMax - height[left]
        }
        left++
      } else {
        if (height[right] > rightMax) {
          rightMax = height[right]
        } else {
          sum += rightMax - height[right]
        }
        right--
      }
    }

    return sum;
};


console.log(trap([5, 2, 1, 2, 1, 5]));