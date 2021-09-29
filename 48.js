/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
// var rotate = function(matrix) {
//     var n = matrix.length;
//     for (var i = 0; i < parseInt((n + 1) / 2); i++) {
//       for (var j = 0; j < parseInt(n / 2); j++) {
//         var temp = matrix[i][j];
//         matrix[i][j] = matrix[n - 1 - j][i]
//         matrix[n - 1 - j][i] = matrix[n - 1 - i][n - 1 - j]
//         matrix[n - 1 - i][n - 1 -j] = matrix[j][n - 1 - i]
//         matrix[j][n - 1 - i] = temp;
//       }
//     }

//     return matrix;
// };

var rotate = function(matrix) {
  var n = matrix.length;
  for (var i = 0; i < parseInt(n / 2); i++) {
    for (var j = i; j < n - 1 - i; j++) {
      var temp = matrix[i][j];
      matrix[i][j] = matrix[n - 1 - j][i]
      matrix[n - 1 - j][i] = matrix[n - 1 - i][n - 1 - j]
      matrix[n- 1 -i][n- 1- j] = matrix[j][n - 1 - i]
      matrix[j][n - 1 - i] = temp;
    }
  }

  return matrix;
};

var matrix = 
[
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
]

console.log(rotate(matrix));