/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var setZeroes = function(matrix) {
  var leny = matrix.length;
  var lenx = matrix[0].length;
  var isclo = false;

  for(var i = 0 ; i < leny; i++) {
    if (matrix[i][0] === 0) {
      isclo = true;
    } 

    for (var j = 1; j< lenx; j++) {
      if (matrix[i][j] === 0) {
        matrix[i][0] = 0;
        matrix[0][j] = 0;
      }
    }
  }

  for (var i = 1; i < leny; i++) {
    for (var j = 1; j < lenx; j++) {
      if (matrix[i][0] == 0 || matrix[0][j] == 0) {
        matrix[i][j] = 0;
      }
    }
  }


  if (matrix[0][0] === 0) {
    for (var i =0; i < lenx;i++) {
      matrix[0][i] = 0;
    }
  }

  if (isclo) {
    for (var i =0; i < leny;i++) {
      matrix[i][0] = 0;
    }
  }
  
  return matrix;
};

console.log(setZeroes([
  [0,1,2,0],
  [3,4,5,2],
  [1,3,1,5]
]));