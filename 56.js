/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function(intervals) {
  var res = [];
  intervals.sort( (a,b) => a[0] - b[0]);
  for (var i = 0 ; i < intervals.length; i++) {
    var item = intervals[i];
    var a = [item[0], item[1]];
    while (intervals[i + 1]) {
      if (a[1] >= intervals[i + 1][0]) {
        if (a[1] < intervals[i + 1][1]) {
          a[1] = intervals[i + 1][1]
        }
        if (a[0] > intervals[i + 1][0]) {
          a[0] = intervals[i + 1][0]
        }
        i ++;
      } else {
        break;
      }
    }
    res.push(a)
  }
  return res;
};

console.log(merge([[1,4],[0,4]]));