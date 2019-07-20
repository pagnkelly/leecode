function knapsack(weight, value, n) {
  var arr = [];

  for (var i = 0; i <= n; i++) {
    arr[i] = [];
    for (var w = 0; w < weight.length; w++) {
      if (i === 0) { arr[i][w] = 0; }
      else if (weight[w] > i) { arr[i][w] = arr[i-1][w]; }
      else {
        arr[i][w] = Math.max(arr[i-1][w], value[w] + (arr[i - weight[w]][w-1] || 0) );
        console.log('www', i - weight[w], i, w);
      }
    }
  }
  return arr;
}


function knapsack1(weight, value, n) {
  var arr = [];

  for (var i = 0; i < weight.length; i++) {
    arr[i] = [];
    for (var w = 0; w <= n; w++) {
      if (w == 0) { arr[i][w] = 0; }
      else if ( weight[i] > w) { arr[i][w] = arr[i-1] ? arr[i-1][w] : 0; }
      else {
        arr[i][w] = Math.max(arr[i - 1] ? arr[i - 1][w] : 0, arr[i - 1] ? arr[i - 1][w - weight[i]] + value[i] : value[i]);
      }
    }
  }
  return arr;
}

var w = [1, 3, 2, 5];
var v = [200, 240, 140, 150];
var n = 5;

var res = knapsack1(w, v, 8);
console.log(res);
