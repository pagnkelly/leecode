

function mn (m, n) {

  var arr = [];

  for (var j = 0; j < m; j++) {
    if (j == 0) {
      arr[j] = Array.from({length: n }, () => 1);
    } else {
      arr[j] = [1];
      for (var i = 1; i < n; i++) {
        arr[j][i] = arr[j-1][i] + arr[j][i - 1];
      }
    }
  }

  return arr[m-1][n-1];
}



console.log(mn(1, 1));
