/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function (matrix) {
  var m = matrix.length;
  if (m == 0) return [];
  var n = matrix[0].length;
  var mn = m * n;

  var x = y = 0;
  var result = [];
  var turn = 0; // 0 left 1 down 2 right 3 up
  var circle = 1;
  while (mn > 0) {
    result.push(matrix[y][x]);
    switch (turn % 4) {
      case 0:
        x++;
        if (x > n - circle) {
          x--;
          y++;
          turn++;
        }
        break;
      case 1:
        y++;
        if (y > m - circle) {
          y--;
          x--;
          turn++;
        }
        break;
      case 2:
        x--;
        if (x < -1 + circle) {
          x++;
          y--;
          turn++;
          circle++;
        }
        break;
      case 3:
        y--;
        if (y < -1 + circle) {
          y++;
          x++;
          turn++;
        }
        break;
    }
    mn--;
  }

  return result;
};

var res = spiralOrder([
  [1, 2, 3, 4],
  [5, 6, 7, 8],
  [9, 10, 11, 12]
]);
console.log(res);