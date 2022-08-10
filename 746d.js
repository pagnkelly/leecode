/**
 * @param {number[]} cost
 * @return {number}
 */
var minCostClimbingStairs = function(cost) {
  const len = cost.length
  let q = 0, p = 0, r = 0
  for (var i = 0; i < len; i++) {
    r = Math.min(q + cost[i], p + cost[i])
    console.log(r, i)
    q = p
    p = r
  }

  return Math.min(p, q) 
};
console.log(minCostClimbingStairs([1 , 1, 0, 1]))

