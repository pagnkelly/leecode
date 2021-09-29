/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function(matrix, target) {
    var x = matrix.length;
    if (x == 0) return false;
    var y = matrix[0].length;
    if (y == 0) return false;
    var left = 0;
    var right = x -1;
    var mid = 0;

    while(left <= right) {
      mid = parseInt((left + right) / 2);
      if (matrix[mid][0] === target) { return true }
      else if (matrix[mid][0] > target) {
        right = mid - 1;
      } else {
        left = mid + 1;
      }
    }
    var item = matrix[parseInt((left + right) / 2)];
    left = 0; right = y-1
    while(left <= right) {
      mid = parseInt((left + right) / 2);
      if (item[mid] === target) { return true }
      else if (item[mid] > target) {
        right = mid - 1;
      } else {
        left = mid + 1;
      }
    }
    return false;
};

console.log(searchMatrix([[1,3,5,7],[10,11,16,20],[23,30,34,50]], 11));