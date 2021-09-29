/**
 * @param {number[][]} triangle
 * @return {number}
 */
var minimumTotal = function(triangle) {
    const len = triangle.length;

    var line = triangle.slice(-1)[0];
    for (var i = len - 2; i >= 0; i--) {
        for (var j =0 ; j<=i; j++) {
            line[j] = triangle[i][j] + Math.min(line[j], line[j+1])
        }
    }

    return line[0];
};

const a = [
    [2],
   [3,4],
  [6,5,7],
 [4,1,8,3]
];
console.log(minimumTotal(a));