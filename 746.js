/**
 * @param {number[]} cost
 * @return {number}
 */
var minCostClimbingStairs = function(cost) {
  let arr = [0, ...cost];
  let map = {};
  for (var i = 0; i < arr.length - 1; i++) {
    if (!map[i]&& map[i] !== 0 ) {
      map[i] = arr[i];
    }
    var a = map[i] + arr[i+1];
    var b = map[i] + arr[i+2];

    if ((!map[i + 1] && map[i + 1] !== 0 ) || map[i + 1] > a) {
      map[i + 1] = a;
    }
    if ((!map[i + 2] && map[i + 2] !== 0 )|| map[i + 2] > b) {
      map[i + 2] = b;
    }
    if (!b && b !== 0) {
      console.log(map);
      return Math.min(map[i + 1], map[i]);
    }
  }

};


const c = [0, 0, 1, 0];

var a = minCostClimbingStairs(c);
console.log(a);
