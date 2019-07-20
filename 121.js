/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
  if (prices.length < 2) return 0;
  var max = 0;
  var buy = prices[0];
  prices.reduce((prev, next) => {
    if (next - buy > 0) {
      max = max > next - buy ? max : next - buy;
    }
    
    if (next < buy) {
      buy = next;
    }
  });
  return max;
};

console.log(maxProfit([]));