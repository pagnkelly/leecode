/**
 * @param {number[]} heights
 * @return {number}
 */
var largestRectangleArea = function(heights) {
    var len = heights.length;
    var max = 0;
    for (var i = 0; i < len; i++) {
      var min = heights[i];
      for (var j = i; j < len; j++) {
        min = Math.min(min, heights[j])
        max = Math.max(max, min * (j - i + 1))
      }
    }
    return max;
};

console.log(largestRectangleArea([2,1,5,6,2,3]));