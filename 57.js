/**
 * @param {number[][]} intervals
 * @param {number[]} newInterval
 * @return {number[][]}
 */
var insert = function(intervals, newInterval) {
    var len = intervals.length
    var res = [];
    var i = 0;
    while (i < len && intervals[i][1] < newInterval[0]) {
      res.push(intervals[i]);
      i++
    }
    while (i < len && intervals[i][0] <= newInterval[1]) {
      newInterval[0] = Math.min(intervals[i][0], newInterval[0]);
      newInterval[1] = Math.max(intervals[i][1], newInterval[1]);
      i++
    }
    res.push(newInterval);
    while (i < len ) {
      res.push(intervals[i]);
      i++
    }
    return res;
};

var intervals = [[1,3],[6,9]], newInterval = [0, 2];

console.log(insert(intervals, newInterval));
