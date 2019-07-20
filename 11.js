/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
    var len = height.length;
    var max = 0;
    for (var i = 0; i< len; i++) {
      for (var j=i+1; j < len; j++) {
        var area = 0;
        if (height[i] < height[j]) {
          area = height[i] * (j-i);
        } else {
          area = height[j] * (j-i);
        }
        max = Math.max(area, max);
      }
    }
    return max;
};
var arr =  [1,8,6,2,5,4,8,3,7];

// better
var maxArea2 = function(height) {
  var len = height.length;
  var max = 0;
  var left =0 , right = len -1;
  while (left < right) {
    var area;
    if (height[left] < height[right]) {
      area = height[left] * (right-left);
      left ++;
    } else {
      area = height[right] * (right-left);
      right --;
    }
    max = Math.max(area, max);
  }
  return max;
}
console.log(maxArea2(arr));
