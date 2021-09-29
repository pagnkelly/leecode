/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
  var dp = prices.map(() => 0);
  var len = prices.length;
  if (len == 0) return 0;
  for (var i = 0; i < len; i++) {
    for (var j = i ; j < len; j++) {
      const d = prices[j] - prices[i] + dp[i];
      dp[j] = Math.max(d, dp[j], dp[j-1] || 0);
    }
  }
  return dp[len - 1];
};


console.log(maxProfit([7,1,5,3,6,4]));