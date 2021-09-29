/**
 * @param {character[][]} matrix
 * @return {number}
 */
var maximalRectangle = function(matrix) {
  var len = matrix.length;
  if (len == 0) return 0;
  var lenx = matrix[0].length;
  var arr = Array.from({length: len}, () => new Array(lenx));


  for (var i = 0; i < len; i++) {
    arr[i][0] = parseInt(matrix[i][0]);
    for (var j = 1; j < lenx; j++) {
      if (matrix[i][j] == '0') {
        arr[i][j] = 0;
      } else {
        arr[i][j] = parseInt(matrix[i][j]) + parseInt(arr[i][j - 1]);
      }
    }
  }

  var max = 0;
  for (var j = 0; j < lenx; j++) {
    var count = 0;
    for (var i = 0; i < len; i++) {
      if (arr[i][j] != 0) {
        count ++
      } else {
        count = 0
      }
      
      if (count > 0) {
        var n = 0;
        var min = Number.MAX_VALUE 
        while (n < count) {
          min = Math.min(min, arr[i - n][j])
          max = Math.max(max, (n + 1) * min)
          n++
        }
      }
    }
  }
  console.log(arr);
  return max;
};
var a = [
  ["1","0","1","0","0"],
  ["1","0","1","1","1"],
  ["1","1","1","1","1"],
  ["1","0","0","1","0"]
];
// var a = [
//   ["0","1","1","0","1"],
//   ["1","1","0","1","0"],
//   ["0","1","1","1","0"],
//   ["1","1","1","1","0"],
//   ["1","1","1","1","1"],
//   ["0","0","0","0","0"]
// ]
console.log(maximalRectangle(a))

