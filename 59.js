/**
 * @param {number} n
 * @return {number[][]}
 */
var generateMatrix = function(n) {
    const res = [];
    for (var i = 0; i < n; i++) {
      let line = [];
      line.length = n;
      res.push(line);
    }
    
    var a = Math.ceil(n/2);
    var start = 0;
    for (var j = 0; j < a; j++) {
      for (var i = j; i < n - 1 - j || i == j; i++) {
        start += 1;
        res[j][i] = start
        res[i][n-1-j] = res[j][i] + n - 1 - 2 * j
        res[n-1-j][n-1-i] = res[i][n-1-j] + n - 1 - 2 * j
        res[n-1-i][j] = res[n-1-j][n-1-i] + n - 1 - 2 * j
      }
      start = res[n-i][j];
    }
    
    return res;
};


  console.log(generateMatrix(4));